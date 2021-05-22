// O12N - Alphascape 4.0
Options.Triggers.push({
  zoneId: ZoneId.AlphascapeV40,
  timelineFile: 'o12n.txt',
  timelineTriggers: [
    {
      id: 'O12N Knockback',
      regex: /Discharger/,
      beforeSeconds: 5,
      response: Responses.knockback(),
    },
  ],
  triggers: [
    {
      id: 'O12N Solar Ray',
      netRegex: NetRegexes.startsUsing({ id: ['330F', '3310'], source: ['Omega', 'Omega-M'] }),
      netRegexDe: NetRegexes.startsUsing({ id: ['330F', '3310'], source: ['Omega', 'Omega-M'] }),
      netRegexFr: NetRegexes.startsUsing({ id: ['330F', '3310'], source: ['Oméga', 'Oméga-M'] }),
      netRegexJa: NetRegexes.startsUsing({ id: ['330F', '3310'], source: ['オメガ', 'オメガM'] }),
      netRegexCn: NetRegexes.startsUsing({ id: ['330F', '3310'], source: ['欧米茄', '欧米茄M'] }),
      netRegexKo: NetRegexes.startsUsing({ id: ['330F', '3310'], source: ['오메가', '오메가 M'] }),
      condition: function(data, matches) {
        return data.me === matches.target || data.role === 'healer';
      },
      suppressSeconds: 1,
      response: Responses.tankBuster(),
    },
    {
      id: 'O12N Optimized Blade Dance',
      netRegex: NetRegexes.startsUsing({ id: ['3321', '3322'], source: ['Omega', 'Omega-M'] }),
      netRegexDe: NetRegexes.startsUsing({ id: ['3321', '3322'], source: ['Omega', 'Omega-M'] }),
      netRegexFr: NetRegexes.startsUsing({ id: ['3321', '3322'], source: ['Oméga', 'Oméga-M'] }),
      netRegexJa: NetRegexes.startsUsing({ id: ['3321', '3322'], source: ['オメガ', 'オメガM'] }),
      netRegexCn: NetRegexes.startsUsing({ id: ['3321', '3322'], source: ['欧米茄', '欧米茄M'] }),
      netRegexKo: NetRegexes.startsUsing({ id: ['3321', '3322'], source: ['오메가', '오메가 M'] }),
      condition: function(data, matches) {
        return data.me === matches.target || data.role === 'healer';
      },
      suppressSeconds: 1,
      response: Responses.tankBuster(),
    },
    {
      id: 'O12N Local Resonance',
      netRegex: NetRegexes.gainsEffect({ target: 'Omega', effectId: '67E', capture: false }),
      netRegexDe: NetRegexes.gainsEffect({ target: 'Omega', effectId: '67E', capture: false }),
      netRegexFr: NetRegexes.gainsEffect({ target: 'Oméga', effectId: '67E', capture: false }),
      netRegexJa: NetRegexes.gainsEffect({ target: 'オメガ', effectId: '67E', capture: false }),
      netRegexCn: NetRegexes.gainsEffect({ target: '欧米茄', effectId: '67E', capture: false }),
      netRegexKo: NetRegexes.gainsEffect({ target: '오메가', effectId: '67E', capture: false }),
      condition: function(data) {
        return data.role === 'tank';
      },
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Move bosses apart',
          de: 'Bosse auseinander ziehen',
          fr: 'Ecartez les boss',
          ja: 'ボスを引き離す',
          cn: '拉开boss',
          ko: '보스 서로 떨어뜨리기',
        },
      },
    },
    {
      id: 'O12N Optimized Meteor',
      netRegex: NetRegexes.headMarker({ id: '0057' }),
      condition: Conditions.targetIsYou(),
      response: Responses.meteorOnYou(),
    },
    {
      id: 'O12N Stack Spread Markers',
      netRegex: NetRegexes.headMarker({ id: '008B' }),
      alertText: function(data, matches, output) {
        if (data.me !== matches.target)
          return;
        return output.getOut();
      },
      infoText: function(data, matches, output) {
        if (data.me === matches.target)
          return;
        return output.stack();
      },
      outputStrings: {
        stack: {
          en: 'Stack',
          de: 'Stacken',
          fr: 'Packez vous',
          ja: '頭割り',
          cn: '集合',
          ko: '쉐어징 대상자',
        },
        getOut: {
          en: 'Get Out',
          de: 'Raus da',
          fr: 'Sortez',
          ja: '外へ',
          cn: '远离',
          ko: '파티에서 멀어지기',
        },
      },
    },
    {
      id: 'O12N Packet Filter F',
      netRegex: NetRegexes.gainsEffect({ effectId: '67D' }),
      condition: Conditions.targetIsYou(),
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Attack Omega-M',
          de: 'Omega-M angreifen',
          fr: 'Attaquez Oméga-M',
          ja: 'オメガMに攻撃',
          cn: '攻击男性',
          ko: '오메가 M 공격',
        },
      },
    },
    {
      id: 'O12N Packet Filter M',
      netRegex: NetRegexes.gainsEffect({ effectId: '67C' }),
      condition: Conditions.targetIsYou(),
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Attack Omega-F',
          de: 'Omega-W angreifen',
          fr: 'Attaquez Oméga-F',
          ja: 'オメガFに攻撃',
          cn: '攻击女性',
          ko: '오메가 F 공격',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Calculations indicate increased probability of defeat': 'Warnung. Erhöhte Wahrscheinlichkeit einer Niederlage',
        'Omega(?!-)': 'Omega',
        'Omega-M': 'Omega-M',
        'Optical Unit': 'Optikmodul',
        'Progress to party combat': 'Initiiere Gruppenkampf',
      },
      'replaceText': {
        'Beyond Strength': 'Schildkombo G',
        'Cosmo Memory': 'Kosmospeicher',
        'Discharger': 'Entlader',
        'Efficient Bladework': 'Effiziente Klingenführung',
        'Electric Slide': 'Elektrosturz',
        'Firewall': 'Sicherungssystem',
        'Floodlight': 'Flutlicht',
        'Ground Zero': 'Explosionszentrum',
        'Laser Shower': 'Laserschauer',
        'Optical Laser': 'Optischer Laser F',
        'Optimized Blade Dance': 'Omega-Schwertertanz',
        'Optimized Blizzard III': 'Omega-Eisga',
        'Optimized Fire III': 'Omega-Feuga',
        'Optimized Meteor': 'Omega-Meteor',
        'Optimized Passage of Arms': 'Optimierter Waffengang',
        'Optimized Sagittarius Arrow': 'Omega-Choral der Pfeile',
        'Program Alpha': 'Alpha-Programm',
        'Resonance': 'Resonanz',
        'Solar Ray': 'Sonnenstrahl',
        'Spotlight': 'Scheinwerfer',
        'Subject Simulation F': 'Transformation W',
        'Subject Simulation M': 'Transformation M',
        'Superliminal Steel': 'Klingenkombo B',
        'Suppression': 'Hilfsprogramm F',
        'Synthetic Blades': 'Synthetische Klinge',
        'Synthetic Shield': 'Synthetischer Schild',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Omega(?!-)': 'Oméga',
        'Omega-M': 'Oméga-M',
        'Optical Unit': 'unité optique',
        'Progress to party combat': 'Limites du combat en solitaire atteintes',
      },
      'replaceText': {
        'Beyond Strength': 'Combo bouclier G',
        'Cosmo Memory': 'Cosmomémoire',
        'Discharger': 'Déchargeur',
        'Efficient Bladework': 'Lame active',
        'Electric Slide': 'Glissement Oméga',
        'Firewall': 'Programme protecteur',
        'Floodlight': 'Projecteur',
        'Ground Zero': 'Ruée féroce',
        'Laser Shower': 'Pluie de lasers',
        'Optical Laser': 'Laser optique F',
        'Optimized Blade Dance': 'Danse de la lame Oméga',
        'Optimized Blizzard III': 'Méga Glace Oméga',
        'Optimized Fire III': 'Méga Feu Oméga',
        'Optimized Meteor': 'Météore Oméga',
        'Optimized Passage of Arms': 'Passe d\'armes Oméga',
        'Optimized Sagittarius Arrow': 'Flèche du sagittaire Oméga',
        'Program Alpha': 'Programme Alpha',
        'Resonance': 'Résonance',
        'Solar Ray': 'Rayon solaire',
        'Spotlight': 'Phare',
        'Subject Simulation F': 'Transformation F',
        'Subject Simulation M': 'Simulation de sujet M',
        'Superliminal Steel': 'Combo lame B',
        'Suppression': 'Programme d\'assistance F',
        'Synthetic Blades': 'Lame optionnelle',
        'Synthetic Shield': 'Bouclier optionnel',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Calculations indicate increased probability of defeat': '警告……警告……敗北の危険性が上昇……',
        'Omega(?!-)': 'オメガ',
        'Omega-M': 'オメガM',
        'Optical Unit': 'オプチカルユニット',
        'Progress to party combat': '単独戦闘による限界を確認',
      },
      'replaceText': {
        'Beyond Strength': 'シールドコンボG',
        'Cosmo Memory': 'コスモメモリー',
        'Discharger': 'ディスチャージャー',
        'Efficient Bladework': 'ソードアクション',
        'Electric Slide': 'オメガスライド',
        'Firewall': 'ガードプログラム',
        'Floodlight': 'フラッドライト',
        'Ground Zero': '急襲',
        'Laser Shower': 'レーザーシャワー',
        'Optical Laser': 'オプチカルレーザーF',
        'Optimized Blade Dance': 'ブレードダンス・オメガ',
        'Optimized Blizzard III': 'ブリザガ・オメガ',
        'Optimized Fire III': 'ファイラ・オメガ',
        'Optimized Meteor': 'メテオ・オメガ',
        'Optimized Passage of Arms': 'パッセージ・オブ・オメガ',
        'Optimized Sagittarius Arrow': 'サジタリウスアロー・オメガ',
        'Program Alpha': 'プログラム・アルファ',
        'Resonance': 'レゾナンス',
        'Solar Ray': 'ソーラレイ',
        'Spotlight': 'スポットライト',
        'Subject Simulation F': 'トランスフォームF',
        'Subject Simulation M': 'トランスフォームM',
        'Superliminal Steel': 'ブレードコンボB',
        'Suppression': '援護プログラムF',
        'Synthetic Blades': 'ブレードオプション',
        'Synthetic Shield': 'シールドオプション',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Calculations indicate increased probability of defeat': '警告……警告……失败的危险性上升……',
        'Omega(?!-)': '欧米茄',
        'Omega-M': '欧米茄M',
        'Optical Unit': '视觉组',
        'Progress to party combat': '确认到单独战斗的极限',
      },
      'replaceText': {
        'Beyond Strength': '盾连击G',
        'Cosmo Memory': '宇宙记忆',
        'Discharger': '能量放出',
        'Efficient Bladework': '剑击',
        'Electric Slide': '欧米茄滑跃',
        'Firewall': '防御程序',
        'Floodlight': '泛光灯',
        'Ground Zero': '急袭',
        'Laser Shower': '激光骤雨',
        'Optical Laser': '光学射线F',
        'Optimized Blade Dance': '欧米茄刀光剑舞',
        'Optimized Blizzard III': '欧米茄冰封',
        'Optimized Fire III': '欧米茄烈炎',
        'Optimized Meteor': '欧米茄陨石流星',
        'Optimized Passage of Arms': '欧米茄通道',
        'Optimized Sagittarius Arrow': '欧米茄射手天箭',
        'Program Alpha': '程序·阿尔法',
        'Resonance': '共鸣',
        'Solar Ray': '太阳射线',
        'Spotlight': '聚光灯',
        'Subject Simulation F': '变形F',
        'Subject Simulation M': '变形M',
        'Superliminal Steel': '剑连击B',
        'Suppression': '援护程序F',
        'Synthetic Blades': '合成剑',
        'Synthetic Shield': '合成盾',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Omega(?!-)': '오메가',
        'Omega-M': '오메가 M',
        'Optical Unit': '광학 유닛',
        'Progress to party combat': '단독 전투 한계 확인',
        'Calculations indicate increased probability of defeat': '패배 위험성 상승',
      },
      'replaceText': {
        'Beyond Strength': '방패 연격 G',
        'Cosmo Memory': '세계의 기억',
        'Discharger': '방출',
        'Efficient Bladework': '검격',
        'Electric Slide': '오메가 슬라이드',
        'Firewall': '방어 프로그램',
        'Floodlight': '투광 조명',
        'Ground Zero': '급습',
        'Laser Shower': '레이저 세례',
        'Optical Laser': '광학 레이저 F',
        'Optimized Blade Dance': '쾌검난무: 오메가',
        'Optimized Blizzard III': '블리자가: 오메가',
        'Optimized Fire III': '파이라: 오메가',
        'Optimized Meteor': '메테오: 오메가',
        'Optimized Passage of Arms': '오메가의 결의',
        'Optimized Sagittarius Arrow': '궁수자리 화살: 오메가',
        'Program Alpha': '프로그램 알파',
        'Resonance': '공명',
        'Solar Ray': '태양 광선',
        'Spotlight': '집중 조명',
        'Subject Simulation F': '형태 변경 F',
        'Subject Simulation M': '형태 변경 M',
        'Superliminal Steel': '칼날 연격 B',
        'Suppression': '지원 프로그램 F',
        'Synthetic Blades': '칼날 장착',
        'Synthetic Shield': '방패 장착',
      },
    },
  ],
});

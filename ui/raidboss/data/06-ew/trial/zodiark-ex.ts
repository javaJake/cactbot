import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.TheMinstrelsBalladZodiarksFall,
  timelineFile: 'zodiark-ex.txt',
  triggers: [
    {
      id: 'ZodiarkEx Ania',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '67EF', source: 'Zodiark' }),
      netRegexDe: NetRegexes.startsUsing({ id: '67EF', source: 'Zodiark' }),
      netRegexFr: NetRegexes.startsUsing({ id: '67EF', source: 'Zordiarche' }),
      netRegexJa: NetRegexes.startsUsing({ id: '67EF', source: 'ゾディアーク' }),
      netRegexCn: NetRegexes.startsUsing({ id: '67EF', source: '佐迪亚克' }),
      response: Responses.tankBuster(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Esoteric Dyad/Esoteric Sect': 'Esoteric Dyad/Sect',
      },
    },
    {
      'locale': 'de',
      'replaceSync': {
        'Arcane Sigil': 'Geheimzeichen',
        'Behemoth': 'Behemoth',
        'Quetzalcoatl': 'Quetzalcoatl',
        'Roiling Darkness': 'Strom der Dunkelheit',
        'Zodiark': 'Zodiark',
        'python': 'Python',
      },
      'replaceText': {
        'Adikia': 'Adikia',
        'Algedon': 'Algedon',
        'Ania': 'Ania',
        'Apomnemoneumata': 'Apomnemoneumata',
        'Astral Eclipse': 'Astraleklipse',
        'Astral Flow': 'Lichtstrom',
        'Esoteric Dyad': 'Esoterische Dyade',
        'Esoteric Pattern': 'Esoteric Muster',
        '(?<!Triple )Esoteric Ray': 'Esoterischer Strahl',
        'Esoteric Sect': 'Esoterische Sekte',
        'Esoterikos': 'Esoterikos',
        '(?<!Trimorphos )Exoterikos': 'Exoterikos',
        'Explosion': 'Explosion',
        'Infernal Stream': 'Infernostrom',
        'Infernal Torrent': 'Infernaler Strom',
        'Keraunos Eidolon': 'Keraunos',
        'Kokytos': 'Kokytos',
        'Meteoros Eidolon': 'Meteoros',
        'Opheos Eidolon': 'Opheos',
        'Paradeigma': 'Paradeigma',
        'Phlegethon': 'Phlegethon',
        'Phobos': 'Phobos',
        'Styx': 'Styx',
        'Trimorphos Exoterikos': 'Trimorphos Exoterikos',
        'Triple Esoteric Ray': 'Esoterischer Dreierstrahl',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Arcane Sigil': 'emblème secret',
        'Behemoth': 'béhémoth',
        'Quetzalcoatl': 'Quetzalcóatl',
        'Roiling Darkness': 'orbe des Ténèbres',
        'Zodiark': 'Zordiarche',
        'python': 'Python',
      },
      'replaceText': {
        'Adikia': 'Adikia',
        'Algedon': 'Algedon',
        'Ania': 'Ania',
        'Apomnemoneumata': 'Apomnemoneumata',
        'Astral Eclipse': 'Éclipse astrale',
        'Astral Flow': 'Flux astral',
        'Esoteric Dyad(?!/)': 'Dyade ésotérique',
        'Esoteric Dyad/Esoteric Sect': 'Dyade/Cabale ésotérique',
        '(?<!Triple )Esoteric Ray': 'Rayon ésotérique',
        '(?<!/)Esoteric Sect': 'Cabale ésotérique',
        'Esoteric Pattern': 'Schéma ésotérique',
        'Esoterikos': 'Esoterikos',
        '(?<!Trimorphos )Exoterikos': 'Exoterikos',
        'Explosion': 'Explosion',
        'Infernal Stream': 'Courant infernal',
        'Infernal Torrent': 'Torrent infernal',
        'Keraunos Eidolon': 'Keraunos',
        'Kokytos': 'Kokytos',
        'Meteoros Eidolon': 'Meteoros',
        'Opheos Eidolon': 'Opheos',
        'Paradeigma': 'Paradeigma',
        'Phlegethon': 'Phlégéthon',
        'Phobos': 'Phobos',
        'Styx': 'Styx',
        'Trimorphos Exoterikos': 'Trimorphos Exoterikos',
        'Triple Esoteric Ray': 'Rayon ésotérique triple',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Arcane Sigil': '秘紋',
        'Behemoth': 'ベヒーモス',
        'Quetzalcoatl': 'ケツァクウァトル',
        'Roiling Darkness': '闇の奔流',
        'Zodiark': 'ゾディアーク',
        'python': 'ピュトン',
      },
      'replaceText': {
        'Adikia': 'アディキア',
        'Algedon': 'アルゲドン',
        'Ania': 'アニア',
        'Apomnemoneumata': 'アポムネーモネウマタ',
        'Astral Eclipse': 'アストラルエクリプス',
        'Astral Flow': 'アストラルフロウ',
        'Esoteric Dyad': 'エソテリックダイアド',
        'Esoteric Pattern': '秘紋図形',
        '(?<!Triple )Esoteric Ray': 'エソテリックレイ',
        'Esoteric Sect': 'エソテリックセクト',
        'Esoterikos': 'エソーテリコス',
        '(?<!Trimorphos )Exoterikos': 'エクソーテリコス',
        'Explosion': '爆発',
        'Infernal Stream': 'インフェルノストリーム',
        'Infernal Torrent': 'インフェルノトレント',
        'Keraunos Eidolon': 'ケラノウス・エイドロン',
        'Kokytos': 'コキュートス',
        'Meteoros Eidolon': 'メテオロス・エイドロン',
        'Opheos Eidolon': 'オフェオス・エイドロン',
        'Paradeigma': 'パラデイグマ',
        'Phlegethon': 'プレゲトン',
        'Phobos': 'フォボス',
        'Styx': 'ステュクス',
        'Trimorphos Exoterikos': 'トライ・エクソーテリコス',
        'Triple Esoteric Ray': 'トライ・エソテリックレイ',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Arcane Sigil': '秘纹',
        'Behemoth': '贝希摩斯',
        'Quetzalcoatl': '克察尔科亚特尔',
        'Roiling Darkness': '黑暗奔流',
        'Zodiark': '佐迪亚克',
        'python': '大蟒',
      },
      'replaceText': {
        'Adikia': '不义',
        'Algedon': '痛苦',
        'Ania': '悲伤',
        'Apomnemoneumata': '悼念',
        'Astral Eclipse': '星蚀',
        'Astral Flow': '星极超流',
        'Esoteric Dyad': '神秘二分',
        'Esoteric Pattern': '秘纹图案',
        '(?<!Triple )Esoteric Ray': '神秘光线',
        'Esoteric Sect': '神秘切割',
        'Esoterikos': '内纹',
        '(?<!Trimorphos )Exoterikos': '外纹',
        'Explosion': '爆炸',
        'Infernal Stream': '狱火奔流',
        'Infernal Torrent': '狱火洪流',
        'Keraunos Eidolon': '雷霆幻影',
        'Kokytos': '悲痛',
        'Meteoros Eidolon': '陨石幻影',
        'Opheos Eidolon': '巨蛇幻影',
        'Paradeigma': '范式',
        'Phlegethon': '冥火',
        'Phobos': '恐惧',
        'Styx': '仇恨',
        'Trimorphos Exoterikos': '三重外纹',
        'Triple Esoteric Ray': '三重神秘光线',
      },
    },
  ],
};

export default triggerSet;

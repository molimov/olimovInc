export type Lang = 'ja' | 'en' | 'ru';
export const LANGS: Lang[] = ['ja', 'en', 'ru'];
export const LANG_SHORT: Record<Lang, string> = { ja: 'JA', en: 'EN', ru: 'RU' };
export const LANG_NAMES: Record<Lang, string> = { ja: '日本語', en: 'English', ru: 'Русский' };

const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + '/';
export const href = (lang: Lang): string => (lang === 'ja' ? BASE : `${BASE}${lang}/`);
export const asset = (path: string): string => BASE + path.replace(/^\//, '');

/* ------------------------------------------------------------------
   Company facts. The single source is OlimovInc/company-brief.md.
   Client names are never published. Prices are never published.
   Register: formal (です・ます／謙譲語). Headings are plain section
   names, not slogans.
   ------------------------------------------------------------------ */
export const company = {
  email: 'Olimov.jp@outlook.com',
  founded: { ja: '2025年12月1日', en: '1 December 2025', ru: '1 декабря 2025 г.' },
};

const coords = {
  tokyo: '35.68°N 139.69°E',
  tashkent: '41.31°N 69.28°E',
};

/* Section eyebrows deliberately cross languages: English on the Japanese
   page, Japanese on the English and Russian pages. */
const JA_EYEBROWS = {
  directions: 'ご相談',
  services: '事業内容',
  process: 'ご依頼の流れ',
  work: '取引実績',
  founder: '代表挨拶',
  company: '会社概要',
  contact: 'お問い合わせ',
};

export const content = {
  ja: {
    meta: {
      title: 'OLIMOV株式会社 — 日本とウズベキスタンの取引をつなぐ',
      description:
        'ウズベキスタンへの輸出、ウズベキスタンからの輸入、現地企業との提携。日本語・ウズベク語・ロシア語・英語を話す代表が、契約から輸送の手配まで担当いたします。東京都港区。',
    },
    skip: 'メインコンテンツへ移動',
    companyName: 'OLIMOV株式会社',
    nav: { directions: 'ご相談', services: '事業内容', process: 'ご依頼の流れ', work: '取引実績', founder: '代表挨拶', company: '会社概要' },
    menu: 'メニュー',
    navCta: '相談する',

    hero: {
      eyebrow: 'OLIMOV株式会社 — 東京・タシケント',
      title: ['日本の企業に、ウズベキスタンの市場を。', 'ウズベキスタンの企業に、日本の窓口を。'],
      lead:
        'ウズベキスタンへの輸出、ウズベキスタンからの輸入、そして現地企業との提携。言葉と商習慣の違いで止まりがちな取引を、日本語・ウズベク語・ロシア語・英語を話す代表が、最初から最後まで担当いたします。',
      cta: 'メールで相談する',
      ctaNote: '3営業日以内にご返信いたします',
      ends: [
        { city: '東京', coord: coords.tokyo },
        { city: 'タシケント', coord: coords.tashkent },
      ],
    },

    directions: {
      label: 'Who we serve',
      title: '日本と中央アジア、双方の企業からのご相談を承ります',
      items: [
        {
          route: 'TOKYO → TASHKENT',
          for: '日本の企業の皆さまへ',
          head: 'ウズベキスタンでの販売・調達',
          points: [
            '売上の拡大に向けて、新たな顧客や市場としてウズベキスタン・中央アジアを検討したい',
            '現地の原料や製品を、日本へ輸入したい',
            '取引先の実態を、現地の言葉で確かめたうえで判断したい',
          ],
        },
        {
          route: 'TASHKENT → TOKYO',
          for: 'ウズベキスタン・中央アジアの企業の皆さまへ',
          head: '日本からの調達・日本での販売',
          points: [
            '日本製の設備や部品を、補修部品も含めて調達したい',
            '自社の製品や原料を、日本の企業へ紹介したい',
            '日本側との契約や連絡を、一括して任せたい',
          ],
        },
      ],
      note: '主な対象国はウズベキスタンですが、中央アジア諸国との取引についてもご相談を承ります。',
    },

    services: {
      label: 'Services',
      title: '事業内容',
      items: [
        {
          name: '輸出入の手配',
          desc: '建値の設計、輸出書類や原産地証明の作成、航空・海上輸送の手配を行います。貨物がタシケントの空港で引き渡されるまで、責任を持って管理いたします。',
          terms: ['Incoterms 2020', 'CIP', '原産地証明'],
        },
        {
          name: '契約書の作成と商談通訳',
          desc: 'ウズベキスタン側の取引先との売買契約書を作成し、建値・支払条件・保証の範囲を、取引に先立って書面で取り決めます。商談の場では通訳を務めます。',
          terms: ['売買契約書', '逐次通訳', 'T/T · L/C'],
        },
        {
          name: '市場調査と提携先の選定',
          desc: '現地企業の実態を調べ、日本語と英語の報告書にまとめます。ご要望に応じて現地を訪問いたします。提携先候補の選定から面談の設定、議事録の作成まで承ります。',
          terms: ['実態調査', '報告書（日・英）', '面談の設定'],
        },
        {
          name: 'IT開発の仲介',
          desc: 'システムやサービスの導入・開発を検討するウズベキスタンの企業と、日本のエンジニアや開発会社をおつなぎします。要件の整理から開発の進行まで、両者の間に立って調整いたします。',
          terms: ['開発会社のご紹介', '要件の整理', '進行管理'],
        },
      ],
    },

    process: {
      label: 'Process',
      title: 'ご依頼の流れ',
      steps: [
        { name: 'お問い合わせ', desc: '取り扱う品目や数量、調査をご希望の企業など、現時点でお分かりの範囲でお知らせください。' },
        { name: 'ご回答', desc: '3営業日以内に、お引き受けの可否をご連絡いたします。' },
        { name: 'お見積り', desc: '料金は案件ごとに、個別にお見積りいたします。' },
        { name: 'ご契約・手配', desc: '契約書の作成から、輸送の手配や現地との調整までを進めます。' },
        { name: 'お引き渡し', desc: '現地での受け取りまで、責任を持って見届けます。' },
      ],
    },

    work: {
      label: 'Track record',
      title: '取引実績',
      lead: '取引先の名称は公表しておりません。',
      items: [
        {
          kind: '輸出',
          status: '完了・複数件',
          done: true,
          title: '日本製産業機器のウズベキスタン向け輸出',
          desc: '現地の製造業者向けに、日本製のポンプをはじめとする産業機器を、補修部品とあわせて輸出いたしました。契約から輸出手続き、空港での引き渡しまでを一貫して担当しております。',
        },
        {
          kind: '調査・提携仲介',
          status: '完了',
          done: true,
          title: '日本と現地の製造業者間の提携仲介',
          desc: '同一の鉱物を扱う日本と現地の企業の間に立ち、現地企業の実態調査、日英の報告書作成、面談の設定および議事録の作成を行いました。',
        },
        {
          kind: 'IT開発の仲介',
          status: '進行中',
          done: false,
          title: '現地配送事業者のシステム開発支援',
          desc: '現地の配送事業者が利用するシステムについて、日本のエンジニアとともに構想の策定を進めております。',
        },
      ],
    },

    founder: {
      label: 'Message',
      title: '代表挨拶',
      // 仮置き：代表ご本人の言葉に差し替える
      message: [
        '日本には、ウズベキスタンで必要とされている製品や技術が数多くあります。一方で、日本の設備や部品を求めながら、日本企業との窓口を持たない現地の企業も少なくありません。',
        '私はタシケントに生まれ、幼少期より日本で育ちました。両国の言葉と商習慣を理解する者として、二つの市場を確かにつなぐこと。それが当社の使命です。',
      ],
      name: 'オリモブ ムハマドオリム',
      nameAlt: 'Olimov Mukhammadolim',
      role: '代表取締役',
      photoAlt: '代表取締役 オリモブ ムハマドオリムの写真',
      bioLabel: '経歴',
      bio: [
        { year: '2003', text: 'ウズベキスタン・タシケント生まれ' },
        { year: '2010', text: '来日' },
        { year: '2023', text: '法テラス 登録通訳（日本語・ウズベク語・ロシア語・英語）' },
        { year: '2025', text: 'WBS ビジネスプランコンテスト2025 審査員特別賞' },
        { year: '2025', text: 'TMU ビジネスアイディアコンテスト2025 MTG-Ventures賞' },
        { year: '2025', text: 'OLIMOV株式会社を設立、代表取締役に就任' },
        { year: '2026', text: '東京都立大学 システムデザイン学部 情報科学科 卒業' },
        { year: '2026', text: '東京科学大学 環境・社会理工学院 技術経営専門職学位課程 在籍' },
      ],
      langsLabel: '対応言語',
      langs: ['日本語', 'ウズベク語', 'ロシア語', '英語'],
    },

    company: {
      label: 'Company',
      title: '会社概要',
      rows: [
        { k: '商号', v: 'OLIMOV株式会社' },
        { k: '設立', v: company.founded.ja },
        { k: '資本金', v: '100万円' },
        { k: '代表者', v: '代表取締役 オリモブ ムハマドオリム' },
        { k: '所在地', v: '〒106-0032 東京都港区六本木3-16-12 六本木KSビル5F' },
        { k: '事業内容', v: '輸出入の手配／契約書の作成と商談通訳／市場調査と提携先の選定／IT開発の仲介' },
        { k: '対応言語', v: '日本語・ウズベク語・ロシア語・英語' },
        { k: '連絡先', v: company.email, mail: true },
      ],
    },

    contact: {
      label: 'Contact',
      title: 'お問い合わせ',
      lead: 'ご相談はメールにて承っております。取り扱う品目や数量、調査をご希望の企業など、現時点でお分かりの範囲でお知らせください。お引き受けが難しいご依頼につきましても、その理由を添えてご回答いたします。',
      reply: '3営業日以内にご返信いたします',
      clocksLabel: '現地時刻',
      clocks: [
        { city: '東京', tz: 'Asia/Tokyo', utc: 'UTC+9' },
        { city: 'タシケント', tz: 'Asia/Tashkent', utc: 'UTC+5' },
      ],
      clockNote: '両都市の時差は4時間です。',
    },

    footer: {
      tagline: '日本とウズベキスタンの架け橋',
      rights: '© 2026 OLIMOV株式会社',
      top: 'ページの先頭へ',
    },
  },

  en: {
    meta: {
      title: 'OLIMOV CO., LTD. — Trade between Japan and Uzbekistan',
      description:
        'Exports to Uzbekistan, imports from Uzbekistan, and partnerships with local companies. Our representative speaks Japanese, Uzbek, Russian and English and handles each deal from contract to delivery. Minato, Tokyo.',
    },
    skip: 'Skip to main content',
    companyName: 'OLIMOV CO., LTD.',
    nav: { directions: 'Enquiries', services: 'Services', process: 'How we work', work: 'Track record', founder: 'Message', company: 'Company' },
    menu: 'Menu',
    navCta: 'Contact us',

    hero: {
      eyebrow: 'OLIMOV CO., LTD. — Tokyo · Tashkent',
      title: ['Uzbekistan’s market, for Japanese companies.', 'A desk in Japan, for Uzbek companies.'],
      lead:
        'Exports to Uzbekistan, imports from Uzbekistan, and partnerships with local companies. Deals like these often stall on language and business custom. Our representative speaks Japanese, Uzbek, Russian and English, and handles your deal from the first email to delivery.',
      cta: 'Email us',
      ctaNote: 'We will reply within 3 business days',
      ends: [
        { city: 'Tokyo', coord: coords.tokyo },
        { city: 'Tashkent', coord: coords.tashkent },
      ],
    },

    directions: {
      label: JA_EYEBROWS.directions,
      title: 'We take enquiries from companies on both sides',
      items: [
        {
          route: 'TOKYO → TASHKENT',
          for: 'For companies in Japan',
          head: 'Selling to and sourcing from Uzbekistan',
          points: [
            'You are looking for new customers and markets to grow sales, and are considering Uzbekistan or wider Central Asia',
            'You want to import raw materials or products from Uzbekistan',
            'You want a counterparty verified on the ground, in its own language, before you decide',
          ],
        },
        {
          route: 'TASHKENT → TOKYO',
          for: 'For companies in Uzbekistan and Central Asia',
          head: 'Sourcing from and selling to Japan',
          points: [
            'You need Japanese equipment and parts, spare parts included',
            'You want to introduce your products or raw materials to Japanese companies',
            'You want contracts and correspondence with the Japanese side handled in one place',
          ],
        },
      ],
      note: 'Our principal market is Uzbekistan; we also handle trade with other Central Asian countries.',
    },

    services: {
      label: JA_EYEBROWS.services,
      title: 'Services',
      items: [
        {
          name: 'Export and import',
          desc: 'Pricing terms, export documents and certificates of origin, and air or sea freight. We remain responsible for the cargo until it is handed over at Tashkent airport.',
          terms: ['Incoterms 2020', 'CIP', 'Certificate of origin'],
        },
        {
          name: 'Contracts and interpreting',
          desc: 'We draft sales agreements with counterparties in Uzbekistan, setting out delivery terms, payment and warranty in writing before the deal proceeds. At meetings, we act as interpreter.',
          terms: ['Sales agreements', 'Consecutive interpreting', 'T/T · L/C'],
        },
        {
          name: 'Market research and partner selection',
          desc: 'We examine local companies and report in Japanese and English, visiting on site where you require it. From shortlisting candidates to arranging meetings and taking minutes.',
          terms: ['Company research', 'Reports JA · EN', 'Meetings'],
        },
        {
          name: 'IT development matching',
          desc: 'We connect Uzbek companies that wish to adopt or build a system or service with engineers and developers in Japan, and coordinate between both sides from defining requirements to running the project.',
          terms: ['Developer introductions', 'Requirements', 'Project coordination'],
        },
      ],
    },

    process: {
      label: JA_EYEBROWS.process,
      title: 'How we work',
      steps: [
        { name: 'Enquiry', desc: 'Tell us what you know at this stage: the goods and quantities, or the company you would like investigated.' },
        { name: 'Reply', desc: 'Within 3 business days, we let you know whether we can take the work on.' },
        { name: 'Quotation', desc: 'Each engagement is quoted individually.' },
        { name: 'Contract and logistics', desc: 'We draft the contract and arrange shipping and local coordination.' },
        { name: 'Handover', desc: 'We see the work through until the goods are received on site.' },
      ],
    },

    work: {
      label: JA_EYEBROWS.work,
      title: 'Track record',
      lead: 'We do not disclose the names of our clients.',
      items: [
        {
          kind: 'Export',
          status: 'Completed · several deals',
          done: true,
          title: 'Export of Japanese industrial equipment to Uzbekistan',
          desc: 'Pumps and other Japanese industrial equipment, together with spare parts, exported to local manufacturers. We handled the work end to end, from the contract and export procedures to handover at the airport.',
        },
        {
          kind: 'Research · partnership',
          status: 'Completed',
          done: true,
          title: 'Partnership between Japanese and Uzbek manufacturers',
          desc: 'Acting between two companies working with the same mineral, we researched the Uzbek company, reported in Japanese and English, arranged the meeting and kept the minutes.',
        },
        {
          kind: 'IT development matching',
          status: 'In progress',
          done: false,
          title: 'System development for a local delivery company',
          desc: 'Together with engineers in Japan, we are shaping the concept for a system to be used by a delivery company in Uzbekistan.',
        },
      ],
    },

    founder: {
      label: JA_EYEBROWS.founder,
      title: 'A message from our founder',
      // placeholder: to be replaced with the founder's own words
      message: [
        'Japan has many products and technologies that are needed in Uzbekistan. At the same time, many Uzbek companies seek Japanese equipment and parts but have no point of contact with Japanese firms.',
        'I was born in Tashkent and raised in Japan. As someone who understands the languages and business customs of both countries, our mission is to connect these two markets with care.',
      ],
      name: 'Olimov Mukhammadolim',
      nameAlt: '',
      role: 'Representative Director',
      photoAlt: 'Olimov Mukhammadolim, Representative Director',
      bioLabel: 'Background',
      bio: [
        { year: '2003', text: 'Born in Tashkent, Uzbekistan' },
        { year: '2010', text: 'Moved to Japan' },
        { year: '2023', text: 'Registered interpreter with Houterasu, the Japan Legal Support Center (Japanese, Uzbek, Russian, English)' },
        { year: '2025', text: 'WBS Business Plan Contest 2025, Judges’ Special Award' },
        { year: '2025', text: 'TMU Business Idea Contest 2025, MTG-Ventures Award' },
        { year: '2025', text: 'Founded OLIMOV CO., LTD. as Representative Director' },
        { year: '2026', text: 'Graduated from Tokyo Metropolitan University, Faculty of Systems Design, Department of Computer Science' },
        { year: '2026', text: 'Master’s student, Technology and Innovation Management (professional degree program), School of Environment and Society, Institute of Science Tokyo' },
      ],
      langsLabel: 'Languages',
      langs: ['Japanese', 'Uzbek', 'Russian', 'English'],
    },

    company: {
      label: JA_EYEBROWS.company,
      title: 'Company profile',
      rows: [
        { k: 'Name', v: 'OLIMOV CO., LTD.' },
        { k: 'Founded', v: company.founded.en },
        { k: 'Capital', v: 'JPY 1,000,000' },
        { k: 'Representative', v: 'Olimov Mukhammadolim, Representative Director' },
        { k: 'Address', v: '5F Roppongi KS Bldg., 3-16-12 Roppongi, Minato-ku, Tokyo 106-0032, Japan' },
        { k: 'Business', v: 'Export and import / Contracts and interpreting / Market research and partner selection / IT development matching' },
        { k: 'Languages', v: 'Japanese, Uzbek, Russian, English' },
        { k: 'Contact', v: company.email, mail: true },
      ],
    },

    contact: {
      label: JA_EYEBROWS.contact,
      title: 'Contact',
      lead: 'We accept enquiries by email. Please tell us what you know at this stage: the goods and quantities, or the company you would like investigated. Should we be unable to take on a request, we will reply with our reasons.',
      reply: 'We will reply within 3 business days',
      clocksLabel: 'Local time',
      clocks: [
        { city: 'Tokyo', tz: 'Asia/Tokyo', utc: 'UTC+9' },
        { city: 'Tashkent', tz: 'Asia/Tashkent', utc: 'UTC+5' },
      ],
      clockNote: 'The two cities are four hours apart.',
    },

    footer: {
      tagline: 'A bridge between Japan and Uzbekistan',
      rights: '© 2026 OLIMOV CO., LTD.',
      top: 'Back to top',
    },
  },

  ru: {
    meta: {
      title: 'OLIMOV CO., LTD. — торговля между Японией и Узбекистаном',
      description:
        'Экспорт в Узбекистан, импорт из Узбекистана и партнёрства с местными компаниями. Руководитель, говорящий на японском, узбекском, русском и английском, ведёт сделку от договора до поставки. Токио, Минато.',
    },
    skip: 'Перейти к основному содержанию',
    companyName: 'OLIMOV CO., LTD.',
    nav: { directions: 'Обращения', services: 'Услуги', process: 'Порядок работы', work: 'Опыт', founder: 'Обращение', company: 'О компании' },
    menu: 'Меню',
    navCta: 'Связаться',

    hero: {
      eyebrow: 'OLIMOV CO., LTD. — Токио · Ташкент',
      title: ['Японским компаниям — рынок Узбекистана.', 'Узбекским компаниям — представитель в Японии.'],
      lead:
        'Экспорт в Узбекистан, импорт из Узбекистана и партнёрства с местными компаниями. Такие сделки часто останавливаются из‑за языка и разных деловых обычаев. Наш руководитель говорит на японском, узбекском, русском и английском и ведёт вашу сделку от первого письма до поставки.',
      cta: 'Написать нам',
      ctaNote: 'Ответим в течение 3 рабочих дней',
      ends: [
        { city: 'Токио', coord: coords.tokyo },
        { city: 'Ташкент', coord: coords.tashkent },
      ],
    },

    directions: {
      label: JA_EYEBROWS.directions,
      title: 'Мы принимаем обращения от компаний обеих стран',
      items: [
        {
          route: 'TOKYO → TASHKENT',
          for: 'Компаниям в Японии',
          head: 'Продажи и закупки в Узбекистане',
          points: [
            'Вы ищете новых клиентов и рынки для роста продаж и рассматриваете Узбекистан или Центральную Азию',
            'Вы хотите импортировать сырьё или продукцию из Узбекистана',
            'Вы хотите проверить партнёра на месте и на его языке, прежде чем принять решение',
          ],
        },
        {
          route: 'TASHKENT → TOKYO',
          for: 'Компаниям Узбекистана и Центральной Азии',
          head: 'Закупки в Японии и продажи в Японию',
          points: [
            'Вам нужно японское оборудование и комплектующие, включая запасные части',
            'Вы хотите представить свою продукцию или сырьё японским компаниям',
            'Вы хотите поручить договоры и переписку с японской стороной одному исполнителю',
          ],
        },
      ],
      note: 'Наш основной рынок — Узбекистан; мы также работаем со сделками с другими странами Центральной Азии.',
    },

    services: {
      label: JA_EYEBROWS.services,
      title: 'Услуги',
      items: [
        {
          name: 'Экспорт и импорт',
          desc: 'Базис поставки, экспортные документы и сертификаты происхождения, авиа- и морская доставка. Мы отвечаем за груз до его передачи в аэропорту Ташкента.',
          terms: ['Incoterms 2020', 'CIP', 'Сертификат происхождения'],
        },
        {
          name: 'Договоры и устный перевод',
          desc: 'Составляем договоры купли-продажи с контрагентами в Узбекистане и заранее закрепляем в письменном виде базис поставки, условия оплаты и гарантию. На переговорах выступаем переводчиком.',
          terms: ['Договор купли-продажи', 'Последовательный перевод', 'T/T · L/C'],
        },
        {
          name: 'Исследование рынка и подбор партнёров',
          desc: 'Изучаем местные компании и готовим отчёт на японском и английском, при необходимости — с выездом на место. От подбора кандидатов до организации встреч и протоколов.',
          terms: ['Проверка компаний', 'Отчёт JA · EN', 'Встречи'],
        },
        {
          name: 'Посредничество в ИТ-разработке',
          desc: 'Связываем узбекские компании, которые хотят внедрить или создать систему или сервис, с инженерами и разработчиками в Японии и координируем работу сторон — от формулировки требований до ведения проекта.',
          terms: ['Подбор разработчиков', 'Требования', 'Координация проекта'],
        },
      ],
    },

    process: {
      label: JA_EYEBROWS.process,
      title: 'Порядок работы',
      steps: [
        { name: 'Обращение', desc: 'Сообщите, что известно на данный момент: товары и объёмы или компанию, которую нужно проверить.' },
        { name: 'Ответ', desc: 'В течение 3 рабочих дней сообщим, сможем ли взяться за работу.' },
        { name: 'Расчёт', desc: 'Стоимость рассчитывается для каждого проекта отдельно.' },
        { name: 'Договор и логистика', desc: 'Составляем договор, организуем доставку и согласование на месте.' },
        { name: 'Передача', desc: 'Сопровождаем до получения груза на месте.' },
      ],
    },

    work: {
      label: JA_EYEBROWS.work,
      title: 'Опыт',
      lead: 'Мы не раскрываем названия наших клиентов.',
      items: [
        {
          kind: 'Экспорт',
          status: 'Завершено · несколько сделок',
          done: true,
          title: 'Экспорт японского промышленного оборудования в Узбекистан',
          desc: 'Насосы и другое японское промышленное оборудование вместе с запасными частями для местных производителей. Мы вели работу целиком: договор, экспортное оформление и передачу в аэропорту.',
        },
        {
          kind: 'Исследование · партнёрство',
          status: 'Завершено',
          done: true,
          title: 'Партнёрство японского и узбекского производителей',
          desc: 'Выступая между двумя компаниями, работающими с одним минералом, мы изучили узбекскую компанию, подготовили отчёт на японском и английском, организовали встречу и вели протокол.',
        },
        {
          kind: 'Посредничество в ИТ-разработке',
          status: 'В работе',
          done: false,
          title: 'Разработка системы для местной службы доставки',
          desc: 'Вместе с инженерами в Японии мы формируем концепцию системы для службы доставки в Узбекистане.',
        },
      ],
    },

    founder: {
      label: JA_EYEBROWS.founder,
      title: 'Обращение руководителя',
      // placeholder: to be replaced with the founder's own words
      message: [
        'В Японии много продукции и технологий, которые востребованы в Узбекистане. В то же время многим узбекским компаниям нужны японское оборудование и комплектующие, но у них нет контакта с японскими фирмами.',
        'Я родился в Ташкенте и вырос в Японии. Понимая языки и деловые обычаи обеих стран, мы видим свою задачу в том, чтобы надёжно соединить эти два рынка.',
      ],
      name: 'Олимов Мухаммадолим',
      nameAlt: 'Olimov Mukhammadolim',
      role: 'Генеральный директор',
      photoAlt: 'Олимов Мухаммадолим, генеральный директор',
      bioLabel: 'Биография',
      bio: [
        { year: '2003', text: 'Родился в Ташкенте, Узбекистан' },
        { year: '2010', text: 'Переехал в Японию' },
        { year: '2023', text: 'Зарегистрированный переводчик Houterasu — Японского центра правовой поддержки (японский, узбекский, русский, английский)' },
        { year: '2025', text: 'WBS Business Plan Contest 2025 — специальный приз жюри' },
        { year: '2025', text: 'TMU Business Idea Contest 2025 — премия MTG-Ventures' },
        { year: '2025', text: 'Основал OLIMOV CO., LTD. и стал её генеральным директором' },
        { year: '2026', text: 'Окончил Токийский столичный университет, факультет системного дизайна, кафедра информатики' },
        { year: '2026', text: 'Магистрант профессиональной программы «Управление технологиями и инновациями», Школа окружающей среды и общества, Institute of Science Tokyo' },
      ],
      langsLabel: 'Языки',
      langs: ['Японский', 'Узбекский', 'Русский', 'Английский'],
    },

    company: {
      label: JA_EYEBROWS.company,
      title: 'О компании',
      rows: [
        { k: 'Название', v: 'OLIMOV CO., LTD.' },
        { k: 'Дата основания', v: company.founded.ru },
        { k: 'Уставный капитал', v: '1 000 000 иен' },
        { k: 'Руководитель', v: 'Олимов Мухаммадолим, генеральный директор' },
        { k: 'Адрес', v: 'Япония, Токио, Минато-ку, Роппонги 3-16-12, Roppongi KS Bldg. 5F, 106-0032' },
        { k: 'Деятельность', v: 'Экспорт и импорт / Договоры и устный перевод / Исследование рынка и подбор партнёров / Посредничество в ИТ-разработке' },
        { k: 'Языки', v: 'Японский, узбекский, русский, английский' },
        { k: 'Контакт', v: company.email, mail: true },
      ],
    },

    contact: {
      label: JA_EYEBROWS.contact,
      title: 'Контакты',
      lead: 'Мы принимаем обращения по электронной почте. Сообщите, что известно на данный момент: товары и объёмы или компанию, которую нужно проверить. Если мы не сможем взяться за задачу, мы ответим с объяснением причин.',
      reply: 'Ответим в течение 3 рабочих дней',
      clocksLabel: 'Местное время',
      clocks: [
        { city: 'Токио', tz: 'Asia/Tokyo', utc: 'UTC+9' },
        { city: 'Ташкент', tz: 'Asia/Tashkent', utc: 'UTC+5' },
      ],
      clockNote: 'Разница во времени — четыре часа.',
    },

    footer: {
      tagline: 'Мост между Японией и Узбекистаном',
      rights: '© 2026 OLIMOV CO., LTD.',
      top: 'Наверх',
    },
  },
} as const;

export type Dict = (typeof content)['ja'];
export const t = (lang: Lang): Dict => content[lang] as unknown as Dict;

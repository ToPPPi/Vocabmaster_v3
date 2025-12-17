
import { ProficiencyLevel, Word, SecondaryMeaning } from '../../types';

// Helper to create rich words (duplicated here to avoid circular dependency or complex shared utils for data files)
const createRichWord = (
  id: string,
  term: string,
  transcription: string,
  ruTranslit: string,
  translation: string,
  level: ProficiencyLevel,
  pos: string,
  freq: 'High' | 'Medium' | 'Low',
  reg: 'Formal' | 'Informal' | 'Neutral' | 'Slang' | 'Literary',
  def: string,
  usageCtx: string,
  examples: { en: string; ru: string }[],
  secondaryMeanings?: SecondaryMeaning[] // <--- ДОБАВЛЕН 13-й АРГУМЕНТ
): Word => ({
  id,
  term,
  transcription,
  russianTransliteration: ruTranslit,
  translation,
  level,
  partOfSpeech: pos,
  frequency: freq,
  register: reg,
  definition: def,
  usageContext: usageCtx,
  examples,
  secondaryMeanings // <--- ДОБАВЛЕНО В ОБЪЕКТ
});

export const WORDS_C1: Word[] = [
createRichWord('c1_beneath', 'Beneath', '/bɪˈniːθ/', 'бинис', 'Под / Ниже', ProficiencyLevel.C1, 'prep', 'Low', 'Formal',
    'Формальный или литературный синоним слова "under". Указывает на положение строго под чем-то или на недостойность.',
    '- Положение: "Beneath the surface" (Под поверхностью)\n- Достоинство: "Beneath him" (Ниже его достоинства)\n- Скрытое: "Beneath the mask" (Под маской)',
    [
      { en: 'They found an ancient city buried deep beneath the desert sand.', ru: 'Они нашли древний город, погребенный глубоко под песком пустыни.' },
      { en: 'He felt that doing such menial work was beneath his dignity.', ru: 'Он чувствовал, что выполнение такой черной работы ниже его достоинства.' },
      { en: 'Beneath her cheerful smile, she was hiding a deep sadness and pain.', ru: 'Под своей жизнерадостной улыбкой она скрывала глубокую печаль и боль.' },
      { en: 'The boat slowly sank beneath the waves and disappeared from sight.', ru: 'Лодка медленно погрузилась под волны и исчезла из виду.' }
    ]
  ),
createRichWord('c1_ace', 'Ace', '/eɪs/', 'эйс', 'Туз / Ас (Эксперт)', ProficiencyLevel.C1, 'noun', 'Low', 'Informal',
    'Игральная карта высшего достоинства; в переносном смысле — эксперт в чем-либо.',
    '- Карты: "Ace of spades" (Туз пик)\n- Мастерство: "Tennis ace" (Теннисный ас / подача навылет)\n- Сленг: "Ace at something" (Ас в чем-то)',
    [
      { en: 'He holds the ace of hearts in his hand.', ru: 'Он держит червового туза в руке.' },
      { en: 'She is an absolute ace at fixing computers.', ru: 'Она абсолютный ас в починке компьютеров.' },
      { en: 'If you want to win, you need an ace up your sleeve.', ru: 'Если хочешь выиграть, тебе нужен туз в рукаве (козырь).' },
      { en: 'The tennis player served an ace to win the match.', ru: 'Теннисист выполнил эйс (подачу навылет), чтобы выиграть матч.' }
    ]
),

createRichWord('c1_appoint', 'Appoint', '/əˈpɔɪnt/', 'эпойнт', 'Назначать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Официально выбрать кого-то для работы или установить время для встречи.',
    '- Работа: "Appoint a director" (Назначить директора)\n- Время: "Appointed time" (Назначенное время)\n- Власть: "Appoint a committee" (Назначить комитет)',
    [
      { en: 'The board decided to appoint a new CEO next month.', ru: 'Совет решил назначить нового генерального директора в следующем месяце.' },
      { en: 'They appointed a committee to investigate the problem.', ru: 'Они назначили комитет для расследования проблемы.' },
      { en: 'Please arrive at the appointed time for the meeting.', ru: 'Пожалуйста, прибудьте на встречу в назначенное время.' },
      { en: 'She was appointed as the head of the department.', ru: 'Она была назначена главой отдела.' }
    ]
  ),
 createRichWord('c1_bare', 'Bare', '/beə/', 'бээ', 'Голый / Скудный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Не покрытый одеждой или поверхностью; или "всего лишь" (минимальный).',
    '- Тело: "Bare feet" (Босые ноги)\n- Минимум: "Bare minimum" (Самый минимум)\n- Природа: "Bare trees" (Голые деревья)',
    [
      { en: 'He walked across the sand with bare feet.', ru: 'Он шел по песку босыми ногами.' },
      { en: 'The room was furnished with only the bare essentials.', ru: 'Комната была обставлена только самым необходимым.' },
      { en: 'In winter, the trees stand bare against the grey sky.', ru: 'Зимой деревья стоят голыми на фоне серого неба.' },
      { en: 'She told him the bare facts without any emotion.', ru: 'Она изложила ему голые факты без каких-либо эмоций.' }
    ]
),

createRichWord('c1_bind', 'Bind', '/baɪnd/', 'байнд', 'Связывать / Обязывать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Скреплять что-то веревкой; или налагать юридические обязательства.',
    '- Юридически: "Legally binding" (Юридически обязательный)\n- Физически: "Bind hands" (Связать руки)\n- Книги: "Bind a book" (Переплетать книгу)',
    [
      { en: 'The contract binds both parties to the agreement for five years.', ru: 'Контракт связывает обязательствами обе стороны соглашения на пять лет.' },
      { en: 'They used a strong rope to bind the logs together.', ru: 'Они использовали крепкую веревку, чтобы связать бревна вместе.' },
      { en: 'Shared experiences tend to bind people together closely.', ru: 'Общий опыт имеет тенденцию тесно связывать людей.' },
      { en: 'The court ruled that the promise was binding by law.', ru: 'Суд постановил, что обещание было обязательным по закону.' }
    ]
  ),
createRichWord('c1_breed', 'Breed', '/briːd/', 'брид', 'Порода / Разводить', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Держать животных для получения потомства (глагол); или особый вид животного (существительное).',
    '- Животные: "Dog breed" (Порода собаки)\n- Действие: "Breed horses" (Разводить лошадей)\n- Результат: "Breed success" (Порождать успех)',
    [
      { en: 'The farmer breeds sheep for their high-quality wool.', ru: 'Фермер разводит овец ради их высококачественной шерсти.' },
      { en: 'What breed is your dog, is it a Labrador or a Retriever?', ru: 'Какой породы твоя собака: лабрадор или ретривер?' },
      { en: 'Poverty and lack of education often breed crime in society.', ru: 'Бедность и недостаток образования часто порождают преступность в обществе.' },
      { en: 'This rare breed of cattle is found only in the mountains.', ru: 'Эта редкая порода крупного рогатого скота встречается только в горах.' }
    ]
  ),
createRichWord('c1_abort', 'Abort', '/əˈbɔːt/', 'эборт', 'Прервать / Отменить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Остановить процесс, план или миссию до их завершения, часто из-за проблем.',
    '- Миссия: "Abort mission" (Прервать миссию)\n- Взлет: "Abort takeoff" (Прервать взлет)\n- Процесс: "Abort operation" (Отменить операцию)',
    [
      { en: 'The pilot had to abort the landing due to strong winds.', ru: 'Пилоту пришлось прервать посадку из-за сильного ветра.' },
      { en: 'They decided to abort the project because of lack of funds.', ru: 'Они решили прервать проект из-за нехватки средств.' },
      { en: 'The mission was aborted at the last minute for safety reasons.', ru: 'Миссия была отменена в последнюю минуту по соображениям безопасности.' },
      { en: 'Computer systems allow you to abort the installation if needed.', ru: 'Компьютерные системы позволяют прервать установку при необходимости.' }
    ]
),

createRichWord('c1_accelerate', 'Accelerate', '/əkˈseləreɪt/', 'экселэрейт', 'Ускорять(ся)', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Начинать двигаться быстрее или заставлять что-то происходить раньше/быстрее.',
    '- Машина: "Car accelerates" (Машина ускоряется)\n- Процесс: "Accelerate growth" (Ускорить рост)\n- Темп: "Accelerate the pace" (Ускорить темп)',
    [
      { en: 'The car can accelerate from zero to sixty in five seconds.', ru: 'Машина может разогнаться (ускориться) от нуля до шестидесяти за пять секунд.' },
      { en: 'The government plans to accelerate the economic reforms.', ru: 'Правительство планирует ускорить экономические реформы.' },
      { en: 'Inflation started to accelerate towards the end of the year.', ru: 'Инфляция начала ускоряться к концу года.' },
      { en: 'Exposure to the sun can accelerate the aging of skin.', ru: 'Воздействие солнца может ускорить старение кожи.' }
    ]
),

createRichWord('c1_accommodate', 'Accommodate', '/əˈkɒmədeɪt/', 'экóмэдейт', 'Вмещать / Размещать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Предоставлять место для кого-то; или удовлетворять чьи-то нужды.',
    '- Люди: "Accommodate guests" (Разместить гостей)\n- Потребности: "Accommodate needs" (Удовлетворить потребности)\n- Вместимость: "Hall accommodates" (Зал вмещает)',
    [
      { en: 'The new hotel can accommodate up to five hundred guests.', ru: 'Новый отель может разместить до пятисот гостей.' },
      { en: 'We tried to accommodate his request for a vegetarian meal.', ru: 'Мы постарались удовлетворить его просьбу о вегетарианском блюде.' },
      { en: 'The table is too small to accommodate everyone comfortably.', ru: 'Стол слишком мал, чтобы с комфортом разместить всех.' },
      { en: 'The software can be modified to accommodate special requirements.', ru: 'Программное обеспечение может быть изменено для удовлетворения особых требований.' }
    ]
),

createRichWord('c1_accountable', 'Accountable', '/əˈkaʊntəb(ə)l/', 'экаунтэбл', 'Подотчетный / Ответственный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Несущий ответственность за свои действия и обязанный объяснять их.',
    '- Власть: "Hold accountable" (Привлекать к ответственности)\n- Работа: "Accountable to" (Подотчетный кому-то)\n- Действия: "Accountable for actions" (Ответственный за действия)',
    [
      { en: 'Politicians should be held accountable for their promises.', ru: 'Политики должны нести ответственность за свои обещания.' },
      { en: 'The manager is accountable to the board of directors.', ru: 'Менеджер подотчетен совету директоров.' },
      { en: 'We are all accountable for our own decisions in life.', ru: 'Мы все несем ответственность за свои собственные решения в жизни.' },
      { en: 'A system was set up to keep the officials accountable.', ru: 'Была создана система, чтобы чиновники оставались подотчетными.' }
    ]
),

createRichWord('c1_accumulate', 'Accumulate', '/əˈkjuːmjəleɪt/', 'экьюмюлейт', 'Накапливать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Собирать или увеличивать количество чего-либо с течением времени.',
    '- Богатство: "Accumulate wealth" (Накапливать богатство)\n- Вещи: "Dust accumulates" (Пыль скапливается)\n- Знания: "Accumulate experience" (Накапливать опыт)',
    [
      { en: 'Over the years, he managed to accumulate a large fortune.', ru: 'За эти годы ему удалось накопить большое состояние.' },
      { en: 'Dirt and dust tend to accumulate under the bed.', ru: 'Грязь и пыль имеют тенденцию скапливаться под кроватью.' },
      { en: 'Evidence against the suspect began to accumulate.', ru: 'Улики против подозреваемого начали накапливаться.' },
      { en: 'Fat tends to accumulate around the waist if you don\'t exercise.', ru: 'Жир имеет тенденцию скапливаться вокруг талии, если не заниматься спортом.' }
    ]
),

createRichWord('c1_acquisition', 'Acquisition', '/ˌækwɪˈzɪʃn/', 'эквизишн', 'Приобретение / Поглощение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Процесс получения чего-либо; или компания, купленная другой компанией.',
    '- Бизнес: "Mergers and acquisitions" (Слияния и поглощения)\n- Язык: "Language acquisition" (Овладение языком)\n- Вещь: "Recent acquisition" (Недавнее приобретение)',
    [
      { en: 'The museum\'s latest acquisition is a rare Picasso painting.', ru: 'Последнее приобретение музея — редкая картина Пикассо.' },
      { en: 'Language acquisition is easier for young children than adults.', ru: 'Овладение языком дается маленьким детям легче, чем взрослым.' },
      { en: 'The company announced the acquisition of a smaller rival firm.', ru: 'Компания объявила о поглощении (приобретении) меньшей фирмы-конкурента.' },
      { en: 'He showed off his new car, his latest expensive acquisition.', ru: 'Он похвастался своей новой машиной, своим последним дорогим приобретением.' }
    ]
),

createRichWord('c1_acre', 'Acre', '/ˈeɪkə/', 'эйкэ', 'Акр', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Единица измерения площади земли (около 4047 кв. м), используемая в Великобритании и США.',
    '- Земля: "Acres of land" (Акры земли)\n- Размер: "50-acre farm" (Ферма в 50 акров)\n- Переносно: "Acres of space" (Куча места)',
    [
      { en: 'The house sits on five acres of beautiful woodland.', ru: 'Дом расположен на пяти акрах красивого лесного массива.' },
      { en: 'The fire destroyed thousands of acres of forest.', ru: 'Пожар уничтожил тысячи акров леса.' },
      { en: 'He bought an acre of land to build his dream home.', ru: 'Он купил акр земли, чтобы построить дом своей мечты.' },
      { en: 'The park covers over a hundred acres in the city center.', ru: 'Парк занимает более ста акров в центре города.' }
    ]
),

createRichWord('c1_administrative', 'Administrative', '/ədˈmɪnɪstrətɪv/', 'эдминистрэтив', 'Административный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Относящийся к управлению организацией или ведению дел.',
    '- Работа: "Administrative staff" (Административный персонал)\n- Обязанности: "Administrative tasks" (Административные задачи)\n- Ошибка: "Administrative error" (Административная ошибка)',
    [
      { en: 'The job involves mainly administrative duties like filing.', ru: 'Работа включает в себя в основном административные обязанности, такие как работа с документами.' },
      { en: 'We need to cut administrative costs to save money.', ru: 'Нам нужно сократить административные расходы, чтобы сэкономить деньги.' },
      { en: 'She is an administrative assistant to the CEO.', ru: 'Она административный помощник генерального директора.' },
      { en: 'The delay was caused by a simple administrative error.', ru: 'Задержка была вызвана простой административной ошибкой.' }
    ]
),

createRichWord('c1_administrator', 'Administrator', '/ədˈmɪnɪstreɪtə/', 'эдминистрейтэ', 'Администратор / Управляющий', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Человек, чья работа заключается в управлении организацией, бизнесом или системой.',
    '- IT: "System administrator" (Системный администратор)\n- Школа: "School administrator" (Администратор школы)\n- Право: "Hospital administrator" (Управляющий больницей)',
    [
      { en: 'Please contact the system administrator if you forget your password.', ru: 'Пожалуйста, свяжитесь с системным администратором, если забудете пароль.' },
      { en: 'She works as a hospital administrator managing staff schedules.', ru: 'Она работает администратором больницы, управляя графиками персонала.' },
      { en: 'The administrator is responsible for the daily operations.', ru: 'Администратор несет ответственность за повседневные операции.' },
      { en: 'Experienced administrators are needed to run large departments.', ru: 'Для управления крупными отделами требуются опытные администраторы.' }
    ]
),

createRichWord('c1_adolescent', 'Adolescent', '/ˌædəˈlesnt/', 'эдэлесент', 'Подросток / Подростковый', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Молодой человек, который развивается из ребенка во взрослого (формальный синоним teenager).',
    '- Возраст: "Adolescent years" (Подростковые годы)\n- Проблемы: "Adolescent behavior" (Подростковое поведение)\n- Психология: "Adolescent psychology" (Подростковая психология)',
    [
      { en: 'Adolescents often experience mood swings due to hormones.', ru: 'Подростки часто испытывают перепады настроения из-за гормонов.' },
      { en: 'The clinic specializes in mental health for adolescents.', ru: 'Клиника специализируется на психическом здоровье подростков.' },
      { en: 'During his adolescent years, he was very rebellious.', ru: 'В свои подростковые годы он был очень бунтарским.' },
      { en: 'Parents need patience when dealing with adolescent children.', ru: 'Родителям нужно терпение при общении с детьми-подростками.' }
    ]
),

createRichWord('c1_advocate', 'Advocate', '/ˈædvəkeɪt/', 'эдвэкейт', 'Адвокат / Защитник (идеи)', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Человек, который публично поддерживает идею, план или другого человека (также глагол "отстаивать").',
    '- Права: "Advocate for rights" (Защитник прав)\n- Идея: "Strong advocate" (Ярый сторонник)\n- Действие (глаг.): "Advocate change" (Выступать за перемены)',
    [
      { en: 'She is a strong advocate for women\'s rights worldwide.', ru: 'Она является ярым защитником прав женщин во всем мире.' },
      { en: 'The doctor advocates a healthy diet and regular exercise.', ru: 'Врач выступает за (пропагандирует) здоровую диету и регулярные упражнения.' },
      { en: 'He has always been an advocate of peace and non-violence.', ru: 'Он всегда был сторонником мира и ненасилия.' },
      { en: 'The group advocates for better protection of the environment.', ru: 'Группа выступает за лучшую защиту окружающей среды.' }
    ]
),

createRichWord('c1_affection', 'Affection', '/əˈfekʃn/', 'эфéкшн', 'Привязанность / Любовь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Чувство любви или сильной симпатии к кому-то.',
    '- Чувство: "Deep affection" (Глубокая привязанность)\n- Действие: "Show affection" (Проявлять любовь/нежность)\n- Отношения: "Win affection" (Завоевать симпатию)',
    [
      { en: 'She felt a deep affection for her younger brother.', ru: 'Она чувствовала глубокую привязанность к своему младшему брату.' },
      { en: 'He found it difficult to show affection in public.', ru: 'Ему было трудно проявлять нежность на публике.' },
      { en: 'The dog looked at its owner with great affection.', ru: 'Собака смотрела на своего хозяина с большой любовью.' },
      { en: 'Their affection for each other grew stronger over the years.', ru: 'Их привязанность друг к другу с годами становилась сильнее.' }
    ]
),

createRichWord('c1_affirm', 'Affirm', '/əˈfɜːm/', 'эфём', 'Утверждать / Подтверждать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заявлять что-то как истину, публично подтверждать или поддерживать.',
    '- Заявление: "Affirm faith" (Подтвердить веру)\n- Суд: "Affirm the decision" (Оставить решение в силе)\n- Позиция: "Affirm commitment" (Подтвердить приверженность)',
    [
      { en: 'The witness affirmed that she had seen the defendant.', ru: 'Свидетель подтвердила, что видела подсудимого.' },
      { en: 'The government affirmed its commitment to peace talks.', ru: 'Правительство подтвердило свою приверженность мирным переговорам.' },
      { en: 'He affirmed his loyalty to the company during the meeting.', ru: 'Он подтвердил свою лояльность компании во время встречи.' },
      { en: 'Scholars affirm that this text is authentic.', ru: 'Ученые утверждают, что этот текст является подлинным.' }
    ]
),

createRichWord('c1_alert', 'Alert', '/əˈlɜːt/', 'элёт', 'Бдительный / Тревога', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Быстро замечающий любую опасность или изменение (прил.); или предупреждение об опасности (сущ.).',
    '- Состояние: "Stay alert" (Оставаться бдительным)\n- Ум: "Mentally alert" (Умственно бодрый/активный)\n- Сущ.: "Red alert" (Красный уровень тревоги)',
    [
      { en: 'Security guards must stay alert at all times.', ru: 'Охранники должны оставаться бдительными все время.' },
      { en: 'Despite his age, he is still very mentally alert.', ru: 'Несмотря на возраст, он все еще очень умственно бодр.' },
      { en: 'The army was put on high alert due to the threat.', ru: 'Армия была приведена в состояние повышенной боевой готовности из-за угрозы.' },
      { en: 'Drivers need to be alert to sudden changes in traffic.', ru: 'Водителям нужно быть внимательными к внезапным изменениям в движении.' }
    ]
),

createRichWord('c1_alien', 'Alien', '/ˈeɪliən/', 'эйлиэн', 'Чужой / Инопланетянин', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Принадлежащий к другой стране, расе или миру; странный и незнакомый.',
    '- Космос: "Alien life" (Инопланетная жизнь)\n- Чувство: "Alien concept" (Чуждое понятие)\n- Закон: "Illegal alien" (Нелегальный иностранец - юр.)',
    [
      { en: 'The idea of resting is completely alien to him; he works constantly.', ru: 'Идея отдыха ему совершенно чужда; он работает постоянно.' },
      { en: 'Scientists are searching for signals from alien civilizations.', ru: 'Ученые ищут сигналы от инопланетных цивилизаций.' },
      { en: 'When I first moved here, the culture felt very alien to me.', ru: 'Когда я впервые переехал сюда, культура казалась мне очень чужой.' },
      { en: 'In the movie, aliens invade Earth to steal its water.', ru: 'В фильме пришельцы вторгаются на Землю, чтобы украсть ее воду.' }
    ]
),

createRichWord('c1_allege', 'Allege', '/əˈledʒ/', 'элéдж', 'Утверждать (голословно)', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заявлять, что кто-то сделал что-то незаконное или неправильное, без доказательств.',
    '- Суд: "Allege fraud" (Утверждать о мошенничестве)\n- Преступление: "Alleged crime" (Предполагаемое преступление)\n- Фраза: "It is alleged that" (Утверждается, что)',
    [
      { en: 'The prosecution alleges that he was at the scene of the crime.', ru: 'Обвинение утверждает, что он был на месте преступления.' },
      { en: 'It is alleged that the company avoided paying taxes.', ru: 'Утверждается, что компания уклонялась от уплаты налогов.' },
      { en: 'She is alleged to have stolen the jewellery.', ru: 'Утверждают (предполагается), что она украла драгоценности.' },
      { en: 'The newspaper alleges police corruption in the city.', ru: 'Газета заявляет о коррупции в полиции города.' }
    ]
),

createRichWord('c1_alliance', 'Alliance', '/əˈlaɪəns/', 'элáйэнс', 'Альянс / Союз', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Союз между странами, политическими партиями или людьми для достижения общей цели.',
    '- Политика: "Form an alliance" (Сформировать альянс)\n- Война: "Military alliance" (Военный союз)\n- Бизнес: "Strategic alliance" (Стратегический альянс)',
    [
      { en: 'The two countries formed a military alliance against the enemy.', ru: 'Две страны сформировали военный союз против врага.' },
      { en: 'NATO is a powerful international alliance.', ru: 'НАТО — это мощный международный альянс.' },
      { en: 'The parties entered into an uneasy alliance to win the election.', ru: 'Партии вступили в непростой союз, чтобы выиграть выборы.' },
      { en: 'They broke the alliance when their interests clashed.', ru: 'Они разорвали альянс, когда их интересы столкнулись.' }
    ]
),

createRichWord('c1_allocate', 'Allocate', '/ˈæləkeɪt/', 'элэкейт', 'Распределять / Выделять', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Официально выделять (деньги, время, ресурсы) для определенной цели.',
    '- Ресурсы: "Allocate funds" (Выделять средства)\n- Время: "Allocate time" (Выделять время)\n- Место: "Allocate space" (Выделять место)',
    [
      { en: 'The government allocated millions for the new hospital.', ru: 'Правительство выделило миллионы на новую больницу.' },
      { en: 'You should allocate at least two hours for this task.', ru: 'Вам следует выделить по крайней мере два часа на эту задачу.' },
      { en: 'Tickets are allocated on a first-come, first-served basis.', ru: 'Билеты распределяются в порядке живой очереди.' },
      { en: 'We need to allocate more resources to the marketing department.', ru: 'Нам нужно выделить больше ресурсов отделу маркетинга.' }
    ]
),

createRichWord('c1_ally', 'Ally', '/ˈælaɪ/', 'элай', 'Союзник', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Страна или человек, которые помогают и поддерживают другого, особенно во время войны.',
    '- Война: "Close ally" (Близкий союзник)\n- Политика: "Political ally" (Политический союзник)\n- Глагол: "Ally with" (Объединяться с)',
    [
      { en: 'Great Britain was a key ally of the United States in the war.', ru: 'Великобритания была ключевым союзником США в войне.' },
      { en: 'He is looking for allies to support his proposal.', ru: 'Он ищет союзников, чтобы поддержать свое предложение.' },
      { en: 'Treat your employees as allies, not enemies.', ru: 'Относитесь к своим сотрудникам как к союзникам, а не врагам.' },
      { en: 'The two companies became allies to fight off the takeover.', ru: 'Две компании стали союзниками, чтобы отбить поглощение.' }
    ]
),

createRichWord('c1_amend', 'Amend', '/əˈmend/', 'эмéнд', 'Вносить поправки', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Изменять слова в тексте, особенно в законе или юридическом документе, чтобы улучшить его.',
    '- Закон: "Amend the constitution" (Внести поправки в конституцию)\n- Документ: "Amend the report" (Исправить отчет)\n- Ошибка: "Amend a mistake" (Исправить ошибку)',
    [
      { en: 'Congress voted to amend the existing tax law.', ru: 'Конгресс проголосовал за внесение поправок в существующий налоговый закон.' },
      { en: 'The contract was amended to include the new salary.', ru: 'В контракт были внесены изменения, чтобы включить новую зарплату.' },
      { en: 'Please amend your details if they have changed.', ru: 'Пожалуйста, исправьте свои данные, если они изменились.' },
      { en: 'He took the opportunity to amend his earlier statement.', ru: 'Он воспользовался возможностью, чтобы поправить свое раннее заявление.' }
    ]
),

createRichWord('c1_anticipate', 'Anticipate', '/ænˈtɪsɪpeɪt/', 'энтисипейт', 'Предвидеть / Ожидать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Представлять или ожидать, что что-то случится, и готовиться к этому.',
    '- Будущее: "Anticipate problems" (Предвидеть проблемы)\n- Ожидание: "Eagerly anticipate" (С нетерпением ожидать)\n- Реакция: "Anticipate needs" (Предвосхищать потребности)',
    [
      { en: 'We do not anticipate any major problems with the new system.', ru: 'Мы не предвидим никаких серьезных проблем с новой системой.' },
      { en: 'It is important to anticipate what your opponent will do.', ru: 'Важно предугадать (предвидеть), что сделает твой противник.' },
      { en: 'The organizers anticipated a large crowd and hired security.', ru: 'Организаторы ожидали большую толпу и наняли охрану.' },
      { en: 'Good waiters anticipate the needs of their customers.', ru: 'Хорошие официанты предвосхищают потребности своих клиентов.' }
    ]
  ),
createRichWord('c1_arise', 'Arise', '/əˈraɪz/', 'эрайз', 'Возникать / Появляться', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Случаться или появляться (о проблемах или ситуациях); формальный синоним happen/occur.',
    '- Проблема: "Problems arise" (Проблемы возникают)\n- Вопрос: "Questions arise" (Вопросы возникают)\n- Необходимость: "Should the need arise" (Если возникнет необходимость)',
    [
      { en: 'Serious problems may arise if we do not act quickly.', ru: 'Серьезные проблемы могут возникнуть, если мы не будем действовать быстро.' },
      { en: 'Several questions arose during the meeting regarding the budget.', ru: 'Во время встречи возникло несколько вопросов касательно бюджета.' },
      { en: 'I will contact you should the need arise.', ru: 'Я свяжусь с вами, если возникнет необходимость.' },
      { en: 'A conflict arose between the two departments over resources.', ru: 'Между двумя отделами возник конфликт из-за ресурсов.' }
    ]
),

createRichWord('c1_assault', 'Assault', '/əˈsɔːlt/', 'эсолт', 'Нападение / Штурм', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Физическая атака на кого-то; или военная атака.',
    '- Преступление: "Sexual assault" (Сексуальное насилие)\n- Закон: "Charged with assault" (Обвинен в нападении)\n- Война: "Assault on the city" (Штурм города)',
    [
      { en: 'He was arrested and charged with assault after the fight.', ru: 'Он был арестован и обвинен в нападении после драки.' },
      { en: 'The soldiers launched an assault on the enemy base at dawn.', ru: 'Солдаты начали штурм вражеской базы на рассвете.' },
      { en: 'Verbal assault can be just as damaging as physical violence.', ru: 'Словесное нападение может быть таким же разрушительным, как и физическое насилие.' },
      { en: 'The victim of the assault was taken to the hospital.', ru: 'Жертва нападения была доставлена в больницу.' }
    ]
),

createRichWord('c1_assemble', 'Assemble', '/əˈsemb(ə)l/', 'эсэмбл', 'Собирать(ся) / Монтировать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Собираться вместе в группу; или соединять части чего-то.',
    '- Люди: "Crowd assembled" (Толпа собралась)\n- Производство: "Assemble a car" (Собрать машину)\n- Мебель: "Easy to assemble" (Легко собрать)',
    [
      { en: 'All the students assembled in the main hall for the announcement.', ru: 'Все студенты собрались в главном зале для объявления.' },
      { en: 'It took him three hours to assemble the new bookshelf.', ru: 'У него ушло три часа, чтобы собрать новую книжную полку.' },
      { en: 'Parts of the aircraft are assembled in different countries.', ru: 'Части самолета собираются в разных странах.' },
      { en: 'The manager assembled a team of experts to solve the problem.', ru: 'Менеджер собрал команду экспертов для решения проблемы.' }
    ]
),

createRichWord('c1_assembly', 'Assembly', '/əˈsembli/', 'эсэмбли', 'Собрание / Сборка', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Группа людей, собравшихся для определенной цели (например, законодательная); или процесс сборки.',
    '- Политика: "National Assembly" (Национальное собрание)\n- Школа: "Morning assembly" (Утренняя линейка)\n- Завод: "Assembly line" (Сборочный конвейер)',
    [
      { en: 'The National Assembly voted to change the law yesterday.', ru: 'Национальное собрание проголосовало за изменение закона вчера.' },
      { en: 'Car production on the assembly line is very efficient.', ru: 'Производство автомобилей на сборочном конвейере очень эффективно.' },
      { en: 'Freedom of assembly is a fundamental human right.', ru: 'Свобода собраний — это фундаментальное право человека.' },
      { en: 'The headmaster spoke to the students during the morning assembly.', ru: 'Директор говорил со студентами во время утренней линейки.' }
    ]
),

createRichWord('c1_assert', 'Assert', '/əˈsɜːt/', 'эсёт', 'Утверждать / Отстаивать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Говорить что-то уверенно; или вести себя уверенно, чтобы вас заметили.',
    '- Мнение: "Assert authority" (Утвердить власть)\n- Права: "Assert rights" (Отстаивать права)\n- Факт: "Assert innocence" (Настаивать на невиновности)',
    [
      { en: 'She had to assert her authority to control the noisy class.', ru: 'Ей пришлось утвердить свою власть, чтобы контролировать шумный класс.' },
      { en: 'The lawyer continued to assert his client\'s innocence.', ru: 'Адвокат продолжал настаивать на невиновности своего клиента.' },
      { en: 'You need to assert yourself more if you want a promotion.', ru: 'Тебе нужно проявлять больше настойчивости, если хочешь повышения.' },
      { en: 'He asserted that the company had done nothing wrong.', ru: 'Он утверждал, что компания не сделала ничего плохого.' }
    ]
),

createRichWord('c1_asset', 'Asset', '/ˈæset/', 'эсэт', 'Актив / Ценное качество', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Что-то ценное, чем владеет человек или компания; или полезное качество.',
    '- Финансы: "Company assets" (Активы компании)\n- Качество: "Valuable asset" (Ценный актив/качество)\n- Люди: "Asset to the team" (Ценный сотрудник команды)',
    [
      { en: 'Her ability to speak three languages is a great asset.', ru: 'Ее способность говорить на трех языках — это большое преимущество (актив).' },
      { en: 'The company has assets worth over one million dollars.', ru: 'У компании есть активы на сумму более одного миллиона долларов.' },
      { en: 'Good health is your most important asset in life.', ru: 'Хорошее здоровье — ваш самый важный актив в жизни.' },
      { en: 'He is a huge asset to our team because of his experience.', ru: 'Он — огромная ценность для нашей команды благодаря своему опыту.' }
    ]
),

createRichWord('c1_assumption', 'Assumption', '/əˈsʌmpʃ(ə)n/', 'эсáмпшн', 'Предположение', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Вещь, которую вы считаете правдой без доказательств.',
    '- Мысль: "Make an assumption" (Сделать предположение)\n- Ошибка: "Wrong assumption" (Ошибочное предположение)\n- База: "Based on the assumption" (Основано на предположении)',
    [
      { en: 'People tend to make assumptions about others based on appearance.', ru: 'Люди склонны делать предположения о других, основываясь на внешности.' },
      { en: 'Your argument is based on a false assumption.', ru: 'Ваш аргумент основан на ложном предположении.' },
      { en: 'We are working on the assumption that the market will improve.', ru: 'Мы работаем исходя из предположения, что рынок улучшится.' },
      { en: 'It was a mistake to proceed on the assumption that he knew the plan.', ru: 'Было ошибкой действовать в предположении, что он знал план.' }
    ]
),

createRichWord('c1_attribute', 'Attribute', '/ˈætrɪbjuːt/', 'этрибьют', 'Атрибут / Приписывать', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Качество или характеристика (сущ); или считать что-то причиной чего-то (глагол, ударение на второй слог: /əˈtrɪbjuːt/).',
    '- Качество: "Key attribute" (Ключевой атрибут/качество)\n- Причина: "Attribute success to" (Приписывать успех чему-то)\n- Характер: "Personal attribute" (Личное качество)',
    [
      { en: 'Patience is one of the most important attributes of a teacher.', ru: 'Терпение — одно из самых важных качеств учителя.' },
      { en: 'He attributes his success to hard work and good luck.', ru: 'Он приписывает свой успех тяжелой работе и удаче.' },
      { en: 'The painting is attributed to Leonardo da Vinci.', ru: 'Эту картину приписывают Леонардо да Винчи.' },
      { en: 'Organizational skills are a necessary attribute for this job.', ru: 'Организаторские навыки — необходимый атрибут для этой работы.' }
    ]
),

createRichWord('c1_audit', 'Audit', '/ˈɔːdɪt/', 'одит', 'Аудит / Проверка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Официальная проверка финансовых счетов компании.',
    '- Финансы: "Annual audit" (Ежегодный аудит)\n- Действие: "Carry out an audit" (Проводить аудит)\n- Люди: "External audit" (Внешний аудит)',
    [
      { en: 'The company faces an annual audit of its accounts.', ru: 'Компания проходит ежегодный аудит своих счетов.' },
      { en: 'An independent firm was hired to conduct the audit.', ru: 'Для проведения аудита была нанята независимая фирма.' },
      { en: 'The audit revealed several errors in the financial records.', ru: 'Аудит выявил несколько ошибок в финансовых записях.' },
      { en: 'They are preparing for a tax audit next month.', ru: 'Они готовятся к налоговой проверке в следующем месяце.' }
    ]
),

createRichWord('c1_authorise', 'Authorise', '/ˈɔːθəraɪz/', 'осэрайз', 'Уполномочивать / Разрешать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Дать официальное разрешение на что-то (AmE: Authorize).',
    '- Разрешение: "Authorise a payment" (Разрешить платеж)\n- Власть: "Fully authorised" (Полностью уполномочен)\n- Доступ: "Authorised personnel only" (Только для уполномоченного персонала)',
    [
      { en: 'I authorized the bank to transfer the money to your account.', ru: 'Я уполномочил банк перевести деньги на ваш счет.' },
      { en: 'Only the manager can authorize refunds for customers.', ru: 'Только менеджер может разрешать возвраты средств клиентам.' },
      { en: 'The committee authorized the construction of the new bridge.', ru: 'Комитет разрешил (санкционировал) строительство нового моста.' },
      { en: 'Access is restricted to authorized personnel only.', ru: 'Доступ разрешен только уполномоченному персоналу.' }
    ]
),

createRichWord('c1_bacterium', 'Bacterium', '/bækˈtɪəriəm/', 'бэктириэм', 'Бактерия', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Одна мельчайшая живая клетка (ед. число от bacteria), вызывающая болезни или помогающая пищеварению.',
    '- Наука: "Single bacterium" (Одна бактерия)\n- Болезнь: "Caused by a bacterium" (Вызвано бактерией)\n- Тип: "Resistant bacterium" (Устойчивая бактерия)',
    [
      { en: 'This specific bacterium can cause food poisoning.', ru: 'Эта конкретная бактерия может вызвать пищевое отравление.' },
      { en: 'Under the microscope, the bacterium looked like a small rod.', ru: 'Под микроскопом бактерия выглядела как маленькая палочка.' },
      { en: 'Antibiotics are used to kill the harmful bacterium.', ru: 'Антибиотики используются для уничтожения вредной бактерии.' },
      { en: 'Not every bacterium is bad; some help us digest food.', ru: 'Не каждая бактерия плоха; некоторые помогают нам переваривать пищу.' }
    ]
),

createRichWord('c1_bias', 'Bias', '/ˈbaɪəs/', 'байэс', 'Предвзятость', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Склонность поддерживать или выступать против одной группы/человека несправедливым образом.',
    '- Мнение: "Political bias" (Политическая предвзятость)\n- Чувство: "Unconscious bias" (Неосознанная предвзятость)\n- Действие: "Show bias" (Проявлять предвзятость)',
    [
      { en: 'The news report showed a clear bias against the government.', ru: 'Новостной репортаж демонстрировал явную предвзятость против правительства.' },
      { en: 'Teachers should avoid showing bias towards any student.', ru: 'Учителя должны избегать проявления предвзятости к любому ученику.' },
      { en: 'Companies are trying to eliminate gender bias in hiring.', ru: 'Компании пытаются устранить гендерную предвзятость при найме.' },
      { en: 'His judgment was affected by his personal bias.', ru: 'На его суждение повлияла его личная предвзятость.' }
    ]
),

createRichWord('c1_bid', 'Bid', '/bɪd/', 'бид', 'Ставка / Заявка', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Предложение заплатить определенную цену (на аукционе) или попытка достичь чего-то.',
    '- Аукцион: "Make a bid" (Сделать ставку)\n- Попытка: "Bid for power" (Борьба за власть)\n- Бизнес: "Takeover bid" (Предложение о поглощении)',
    [
      { en: 'She made the highest bid for the painting at the auction.', ru: 'Она сделала самую высокую ставку на картину на аукционе.' },
      { en: 'The company put in a bid to build the new stadium.', ru: 'Компания подала заявку на строительство нового стадиона.' },
      { en: 'His bid to become the team captain was successful.', ru: 'Его попытка стать капитаном команды увенчалась успехом.' },
      { en: 'They lost the contract because their bid was too high.', ru: 'Они потеряли контракт, потому что их заявка (цена) была слишком высокой.' }
    ]
),

createRichWord('c1_bishop', 'Bishop', '/ˈbɪʃəp/', 'бишэп', 'Епископ / Слон (шахматы)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Священник высокого ранга в некоторых христианских церквях; или шахматная фигура.',
    '- Религия: "Catholic bishop" (Католический епископ)\n- Шахматы: "Move the bishop" (Сделать ход слоном)\n- Титул: "Bishop of London" (Епископ Лондона)',
    [
      { en: 'The bishop led the special service in the cathedral.', ru: 'Епископ провел специальную службу в соборе.' },
      { en: 'In chess, a bishop can only move diagonally.', ru: 'В шахматах слон может ходить только по диагонали.' },
      { en: 'He was appointed as the new bishop of the diocese.', ru: 'Он был назначен новым епископом епархии.' },
      { en: 'Bishops wear distinctive purple robes during ceremonies.', ru: 'Епископы носят отличительные фиолетовые мантии во время церемоний.' }
    ]
),

createRichWord('c1_blast', 'Blast', '/blɑːst/', 'бласт', 'Взрыв / Порыв', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Взрыв бомбы; громкий звук; или сильный порыв ветра.',
    '- Взрыв: "Bomb blast" (Взрыв бомбы)\n- Ветер: "Blast of wind" (Порыв ветра)\n- Сленг: "Have a blast" (Отлично провести время)',
    [
      { en: 'The blast from the explosion shattered windows nearby.', ru: 'Ударная волна от взрыва разбила окна поблизости.' },
      { en: 'A sudden blast of cold air came through the open door.', ru: 'Внезапный порыв холодного воздуха проник через открытую дверь.' },
      { en: 'We had a blast at the party last night.', ru: 'Мы отлично провели время на вечеринке вчера вечером.' },
      { en: 'The trumpet let out a loud blast of music.', ru: 'Труба издала громкий звук музыки.' }
    ]
),

createRichWord('c1_blend', 'Blend', '/blend/', 'блэнд', 'Смесь / Смешивать', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Смесь разных вещей или стилей; или действие смешивания.',
    '- Кофе: "Blend of coffee" (Смесь кофе / Купаж)\n- Стиль: "Perfect blend" (Идеальное сочетание)\n- Глагол: "Blend in" (Сливаться с толпой)',
    [
      { en: 'This tea is a blend of herbs and spices.', ru: 'Этот чай представляет собой смесь трав и специй.' },
      { en: 'The building is a nice blend of old and new styles.', ru: 'Здание представляет собой приятное сочетание старого и нового стилей.' },
      { en: 'Blend the ingredients together until they are smooth.', ru: 'Смешайте ингредиенты вместе до получения однородной массы.' },
      { en: 'The spy tried to blend in with the crowd.', ru: 'Шпион пытался слиться с толпой.' }
    ]
),

createRichWord('c1_boundary', 'Boundary', '/ˈbaʊndri/', 'баундри', 'Граница / Предел', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Линия, отмечающая предел области; или предел допустимого поведения (личные границы).',
    '- Линия: "National boundary" (Государственная граница)\n- Психология: "Personal boundaries" (Личные границы)\n- Спорт: "Hit a boundary" (Удар за границу поля)',
    [
      { en: 'The river marks the boundary between the two properties.', ru: 'Река отмечает границу между двумя владениями.' },
      { en: 'It is important to set healthy boundaries in relationships.', ru: 'Важно устанавливать здоровые границы в отношениях.' },
      { en: 'Scientists are pushing the boundaries of human knowledge.', ru: 'Ученые раздвигают границы человеческих знаний.' },
      { en: 'The ball crossed the boundary line for a goal.', ru: 'Мяч пересек линию границы, и был засчитан гол.' }
    ]
),

createRichWord('c1_burden', 'Burden', '/ˈbɜːdn/', 'бёдн', 'Бремя / Ноша', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Тяжелая ноша; или обязанность, которая вызывает беспокойство или трудности.',
    '- Ответственность: "Heavy burden" (Тяжкое бремя)\n- Финансы: "Financial burden" (Финансовое бремя)\n- Чувство: "Be a burden" (Быть обузой)',
    [
      { en: 'I do not want to be a burden to my children when I am old.', ru: 'Я не хочу быть обузой для своих детей, когда состарюсь.' },
      { en: 'The burden of proof lies with the prosecution.', ru: 'Бремя доказывания лежит на обвинении.' },
      { en: 'Paying off the debt was a huge financial burden for him.', ru: 'Выплата долга была для него огромным финансовым бременем.' },
      { en: 'She carries the burden of looking after her sick mother.', ru: 'Она несет бремя ухода за своей больной матерью.' }
    ]
),

createRichWord('c1_bureau', 'Bureau', '/ˈbjʊərəʊ/', 'бьюэроу', 'Бюро / Отдел', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Офис или отдел для ведения конкретного бизнеса; или предмет мебели (письменный стол).',
    '- Организация: "Investigation bureau" (Бюро расследований)\n- Информация: "Information bureau" (Справочное бюро)\n- Мебель: "Writing bureau" (Письменный стол-бюро)',
    [
      { en: 'The Federal Bureau of Investigation is famous worldwide.', ru: 'Федеральное бюро расследований известно во всем мире.' },
      { en: 'We went to the citizens advice bureau for help.', ru: 'Мы обратились в бюро консультаций граждан за помощью.' },
      { en: 'He keeps his important papers in the old oak bureau.', ru: 'Он хранит свои важные бумаги в старом дубовом бюро.' },
      { en: 'A bureau de change is where you can exchange money.', ru: 'Обменный пункт (бюро обмена) — это место, где можно обменять деньги.' }
    ]
),

createRichWord('c1_cabinet', 'Cabinet', '/ˈkæbɪnət/', 'кэбинэт', 'Кабинет министров / Шкаф', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Группа старших министров в правительстве; или шкаф с полками/ящиками.',
    '- Политика: "Cabinet meeting" (Заседание кабинета министров)\n- Мебель: "Kitchen cabinet" (Кухонный шкаф)\n- Хранение: "Filing cabinet" (Шкаф для документов)',
    [
      { en: 'The Prime Minister held a meeting with his Cabinet today.', ru: 'Премьер-министр провел встречу со своим кабинетом министров сегодня.' },
      { en: 'We need to buy a new cabinet for the bathroom.', ru: 'Нам нужно купить новый шкафчик для ванной.' },
      { en: 'Important files are locked in the metal filing cabinet.', ru: 'Важные файлы заперты в металлическом шкафу для документов.' },
      { en: 'Several Cabinet members resigned over the scandal.', ru: 'Несколько членов кабинета министров ушли в отставку из-за скандала.' }
    ]
),

createRichWord('c1_carve', 'Carve', '/kɑːv/', 'кав', 'Вырезать / Резать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Вырезать объект из дерева или камня; или нарезать приготовленное мясо.',
    '- Искусство: "Carve wood" (Вырезать по дереву)\n- Еда: "Carve the turkey" (Разрезать индейку)\n- Карьера: "Carve a career" (Сделать карьеру / Проложить путь)',
    [
      { en: 'He used a knife to carve a toy out of wood.', ru: 'Он использовал нож, чтобы вырезать игрушку из дерева.' },
      { en: 'The statue was carved from a single block of marble.', ru: 'Статуя была высечена из цельного блока мрамора.' },
      { en: 'Father always carves the turkey at Christmas dinner.', ru: 'Отец всегда нарезает индейку на рождественском ужине.' },
      { en: 'She managed to carve out a successful career in banking.', ru: 'Ей удалось построить (вырезать) успешную карьеру в банковской сфере.' }
    ]
),

createRichWord('c1_catalogue', 'Catalogue', '/ˈkætəlɒɡ/', 'кэтэлог', 'Каталог', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Полный список предметов, обычно в алфавитном порядке (книги в библиотеке, товары).',
    '- Магазин: "Product catalogue" (Каталог товаров)\n- Библиотека: "Library catalogue" (Библиотечный каталог)\n- Глагол: "To catalogue" (Каталогизировать)',
    [
      { en: 'I looked through the catalogue to find a new sofa.', ru: 'Я просмотрел каталог, чтобы найти новый диван.' },
      { en: 'The library catalogue is now available online.', ru: 'Библиотечный каталог теперь доступен онлайн.' },
      { en: 'They are trying to catalogue every species of bird.', ru: 'Они пытаются каталогизировать каждый вид птиц.' },
      { en: 'The exhibition catalogue contains pictures of all the paintings.', ru: 'Каталог выставки содержит фотографии всех картин.' }
    ]
),

createRichWord('c1_cattle', 'Cattle', '/ˈkæt(ə)l/', 'кэтл', 'Крупный рогатый скот', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Коровы и быки, которых держат на ферме ради молока или мяса.',
    '- Ферма: "Dairy cattle" (Молочный скот)\n- Количество: "Herd of cattle" (Стадо скота)\n- Разведение: "Raise cattle" (Разводить скот)',
    [
      { en: 'The farmer owns a large herd of dairy cattle.', ru: 'Фермер владеет большим стадом молочного скота.' },
      { en: 'Cattle were grazing peacefully in the green field.', ru: 'Скот мирно пасся на зеленом поле.' },
      { en: 'They raise cattle for both beef and milk production.', ru: 'Они разводят скот как для производства говядины, так и молока.' },
      { en: 'Texas is famous for its vast cattle ranches.', ru: 'Техас известен своими огромными ранчо крупного рогатого скота.' }
    ]
),

createRichWord('c1_cease', 'Cease', '/siːs/', 'сис', 'Прекращать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Остановиться; перестать что-то делать (формальный синоним stop).',
    '- Действие: "Cease fire" (Прекратить огонь)\n- Существование: "Cease to exist" (Прекратить существование)\n- Время: "Never cease" (Никогда не переставать)',
    [
      { en: 'The company ceased operations last month due to bankruptcy.', ru: 'Компания прекратила операции в прошлом месяце из-за банкротства.' },
      { en: 'You never cease to amaze me with your skills.', ru: 'Ты никогда не перестаешь (не прекращаешь) удивлять меня своими навыками.' },
      { en: 'The rain finally ceased, and the sun came out.', ru: 'Дождь наконец прекратился, и выглянуло солнце.' },
      { en: 'They signed an agreement to cease hostilities immediately.', ru: 'Они подписали соглашение о немедленном прекращении военных действий.' }
    ]
  ),
createRichWord('c1_aboard', 'Aboard', '/əˈbɔːd/', 'эбод', 'На борту', ProficiencyLevel.C1, 'adv', 'Medium', 'Formal',
    'На корабле, в самолете, поезде или автобусе.',
    '- Приветствие: "Welcome aboard" (Добро пожаловать на борт)\n- Действие: "Climb aboard" (Подняться на борт)\n- Транспорт: "All aboard!" (Все на борт!)',
    [
      { en: 'The captain welcomed the passengers aboard the flight.', ru: 'Капитан поприветствовал пассажиров на борту рейса.' },
      { en: 'We went aboard the ship an hour before departure.', ru: 'Мы поднялись на борт корабля за час до отправления.' },
      { en: 'Is everyone aboard the bus? We are leaving now.', ru: 'Все в автобусе (на борту)? Мы отправляемся.' },
      { en: 'He was already aboard when I arrived at the station.', ru: 'Он был уже в поезде (на борту), когда я прибыл на станцию.' }
    ]
),

createRichWord('c1_abrupt', 'Abrupt', '/əˈbrʌpt/', 'эбрапт', 'Резкий / Внезапный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Внезапный и неожиданный; или грубый и краткий в общении.',
    '- Изменение: "Abrupt change" (Резкое изменение)\n- Окончание: "Abrupt end" (Внезапный конец)\n- Манера: "Abrupt manner" (Резкая манера)',
    [
      { en: 'The meeting came to an abrupt end when the fire alarm rang.', ru: 'Встреча внезапно закончилась, когда зазвенела пожарная сигнализация.' },
      { en: 'He has an abrupt manner that some people find rude.', ru: 'У него резкая манера поведения, которую некоторые находят грубой.' },
      { en: 'The road makes an abrupt turn to the left here.', ru: 'Дорога здесь делает резкий поворот налево.' },
      { en: 'Sorry for the abrupt departure, I had an emergency.', ru: 'Извините за внезапный уход, у меня возникла чрезвычайная ситуация.' }
    ]
),

createRichWord('c1_abundant', 'Abundant', '/əˈbʌndənt/', 'эбандэнт', 'Обильный / Изобилующий', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Имеющийся в большом количестве; более чем достаточный.',
    '- Природа: "Abundant wildlife" (Богатая дикая природа)\n- Ресурсы: "Abundant supply" (Обильный запас)\n- Доказательства: "Abundant evidence" (Множество доказательств)',
    [
      { en: 'Fish are abundant in this part of the ocean.', ru: 'Рыба водится в изобилии в этой части океана.' },
      { en: 'We have abundant proof of his innocence.', ru: 'У нас есть множество доказательств его невиновности.' },
      { en: 'Rainfall is more abundant in the tropical regions.', ru: 'Осадки более обильны в тропических регионах.' },
      { en: 'The garden was filled with abundant flowers.', ru: 'Сад был наполнен множеством цветов.' }
    ]
),

createRichWord('c1_accustom', 'Accustom', '/əˈkʌstəm/', 'экáстэм', 'Приучать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставить кого-то привыкнуть к чему-то (обычно используется в пассиве или с oneself).',
    '- Привычка: "Accustom yourself to" (Приучить себя к)\n- Состояние: "Become accustomed to" (Привыкнуть к)\n- Глаза: "Accustom eyes" (Приучить глаза)',
    [
      { en: 'It took me a while to accustom myself to the cold climate.', ru: 'Мне потребовалось время, чтобы приучить себя к холодному климату.' },
      { en: 'He quickly became accustomed to the new working hours.', ru: 'Он быстро привык к новым рабочим часам.' },
      { en: 'You must accustom your eyes to the darkness.', ru: 'Вы должны приучить глаза к темноте.' },
      { en: 'She is not accustomed to being treated so rudely.', ru: 'Она не привыкла, чтобы с ней обращались так грубо.' }
    ]
),

createRichWord('c1_acquaint', 'Acquaint', '/əˈkweɪnt/', 'эквейнт', 'Знакомить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Познакомить кого-то с чем-то или сообщить факты (обычно "acquaint with").',
    '- Знакомство: "Acquaint with facts" (Ознакомить с фактами)\n- Люди: "Get acquainted" (Познакомиться)\n- Знание: "Be acquainted with" (Быть знакомым с)',
    [
      { en: 'Please acquaint yourself with the safety rules.', ru: 'Пожалуйста, ознакомьтесь с правилами безопасности.' },
      { en: 'I need to acquaint the new employee with his duties.', ru: 'Мне нужно ознакомить нового сотрудника с его обязанностями.' },
      { en: 'Are you acquainted with the works of Shakespeare?', ru: 'Знакомы ли вы с произведениями Шекспира?' },
      { en: 'We got acquainted at the conference last year.', ru: 'Мы познакомились на конференции в прошлом году.' }
    ]
),

createRichWord('c1_acute', 'Acute', '/əˈkjuːt/', 'экьют', 'Острый / Серьезный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Очень серьезный (о проблеме) или сильный (о боли); или проницательный (об уме).',
    '- Боль: "Acute pain" (Острая боль)\n- Проблема: "Acute shortage" (Острая нехватка)\n- Ум: "Acute mind" (Острый ум)',
    [
      { en: 'He was taken to the hospital with acute appendicitis.', ru: 'Его доставили в больницу с острым аппендицитом.' },
      { en: 'There is an acute shortage of water in the desert.', ru: 'В пустыне наблюдается острая нехватка воды.' },
      { en: 'Dogs have an acute sense of smell.', ru: 'У собак острое обоняние.' },
      { en: 'The problem is particularly acute in developing countries.', ru: 'Проблема особенно остра в развивающихся странах.' }
    ]
),

createRichWord('c1_aesthetic', 'Aesthetic', '/iːsˈθetɪk/', 'иссетик', 'Эстетический', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Связанный с красотой или оценкой красоты; приятный для глаз.',
    '- Красота: "Aesthetic appeal" (Эстетическая привлекательность)\n- Ценность: "Aesthetic value" (Эстетическая ценность)\n- Чувство: "Purely aesthetic" (Чисто эстетический)',
    [
      { en: 'The building has little aesthetic value, but it is functional.', ru: 'Здание имеет малую эстетическую ценность, но оно функционально.' },
      { en: 'She chose the furniture for its aesthetic appeal.', ru: 'Она выбрала мебель из-за ее эстетической привлекательности.' },
      { en: 'Their decision was based on aesthetic grounds.', ru: 'Их решение было основано на эстетических соображениях.' },
      { en: 'I appreciate the aesthetic beauty of Japanese gardens.', ru: 'Я ценю эстетическую красоту японских садов.' }
    ]
),

createRichWord('c1_agony', 'Agony', '/ˈæɡəni/', 'эгэни', 'Агония / Мучение', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Экстремальная физическая или душевная боль.',
    '- Боль: "In agony" (В агонии/мучениях)\n- Ожидание: "Wait in agony" (Ждать в муках)\n- Чувство: "Mental agony" (Душевные муки)',
    [
      { en: 'He lay on the floor in agony after breaking his leg.', ru: 'Он лежал на полу в мучениях, сломав ногу.' },
      { en: 'It was agony waiting for the news of the survivors.', ru: 'Было мучительно (агония) ждать новостей о выживших.' },
      { en: 'She described the agony of losing her child.', ru: 'Она описала муки потери своего ребенка.' },
      { en: 'The wounded soldier was in terrible agony.', ru: 'Раненый солдат испытывал ужасные мучения.' }
    ]
),

createRichWord('c1_alley', 'Alley', '/ˈæli/', 'эли', 'Переулок / Аллея', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Узкий проход между зданиями или дорожка в парке.',
    '- Город: "Dark alley" (Темный переулок)\n- Спорт: "Bowling alley" (Боулинг-клуб)\n- Тупик: "Blind alley" (Тупик)',
    [
      { en: 'The thief ran down a dark alley to escape.', ru: 'Вор побежал в темный переулок, чтобы скрыться.' },
      { en: 'They live in a small house at the end of the alley.', ru: 'Они живут в маленьком доме в конце переулка.' },
      { en: 'We went to the bowling alley on Friday night.', ru: 'Мы пошли в боулинг в пятницу вечером.' },
      { en: 'Avoid walking in narrow alleys late at night.', ru: 'Избегайте прогулок по узким переулкам поздно ночью.' }
    ]
),

createRichWord('c1_alternate', 'Alternate', '/ˈɒltəneɪt/', 'олтэнейт', 'Чередовать(ся)', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Происходить по очереди (одно за другим) или менять местами.',
    '- Дни: "Alternate days" (Через день - прил.)\n- Действие: "Alternate between" (Чередовать между)\n- Слои: "Alternate layers" (Чередовать слои)',
    [
      { en: 'Her mood alternates between happiness and sadness.', ru: 'Ее настроение чередуется между счастьем и грустью.' },
      { en: 'We meet on alternate Tuesdays.', ru: 'Мы встречаемся каждый второй вторник (через вторник).' },
      { en: 'You should alternate running with walking.', ru: 'Вам следует чередовать бег с ходьбой.' },
      { en: 'The cake has alternate layers of chocolate and cream.', ru: 'В торте чередуются слои шоколада и крема.' }
    ]
),

createRichWord('c1_amid', 'Amid', '/əˈmɪd/', 'эмид', 'Среди / Посреди', ProficiencyLevel.C1, 'prep', 'Low', 'Formal',
    'В середине или в окружении чего-либо (часто о шуме, событиях).',
    '- События: "Amid the chaos" (Посреди хаоса)\n- Место: "Amid the trees" (Среди деревьев)\n- Чувства: "Amid fears" (На фоне страхов)',
    [
      { en: 'The house stood amid tall trees and green fields.', ru: 'Дом стоял среди высоких деревьев и зеленых полей.' },
      { en: 'He finished his speech amid loud applause.', ru: 'Он закончил свою речь под громкие аплодисменты.' },
      { en: 'The decision was made amid growing criticism.', ru: 'Решение было принято на фоне растущей критики.' },
      { en: 'They found peace amid the noise of the city.', ru: 'Они нашли покой посреди городского шума.' }
    ]
),

createRichWord('c1_anchor', 'Anchor', '/ˈæŋkə/', 'энкэ', 'Якорь / Ведущий', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Тяжелый объект для удержания корабля; или главный телеведущий новостей.',
    '- Корабль: "Drop anchor" (Бросить якорь)\n- ТВ: "News anchor" (Ведущий новостей)\n- Стабильность: "Main anchor" (Главная опора)',
    [
      { en: 'The ship dropped anchor in the quiet bay.', ru: 'Корабль бросил якорь в тихой бухте.' },
      { en: 'She works as a news anchor for a major channel.', ru: 'Она работает ведущей новостей на крупном канале.' },
      { en: 'His faith was an anchor during the difficult times.', ru: 'Его вера была опорой (якорем) в трудные времена.' },
      { en: 'Make sure the anchor is secure before leaving the boat.', ru: 'Убедитесь, что якорь надежно закреплен, прежде чем покинуть лодку.' }
    ]
),

createRichWord('c1_anonymous', 'Anonymous', '/əˈnɒnɪməs/', 'энонимэс', 'Анонимный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Сделанный кем-то, чье имя неизвестно или не разглашается.',
    '- Письмо: "Anonymous letter" (Анонимное письмо)\n- Автор: "Remain anonymous" (Оставаться анонимным)\n- Благотворительность: "Anonymous donor" (Анонимный донор)',
    [
      { en: 'The police received an anonymous phone call about the crime.', ru: 'Полиция получила анонимный звонок о преступлении.' },
      { en: 'The donor wishes to remain anonymous.', ru: 'Донор желает остаться анонимным.' },
      { en: 'He wrote an anonymous letter to the editor.', ru: 'Он написал анонимное письмо редактору.' },
      { en: 'Internet users often prefer to be anonymous.', ru: 'Пользователи интернета часто предпочитают быть анонимными.' }
    ]
),

createRichWord('c1_anthropology', 'Anthropology', '/ˌænθrəˈpɒlədʒi/', 'энсрэполэджи', 'Антропология', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Научное изучение людей, человеческого поведения и обществ.',
    '- Наука: "Social anthropology" (Социальная антропология)\n- Учеба: "Study anthropology" (Изучать антропологию)\n- Эксперт: "Professor of anthropology" (Профессор антропологии)',
    [
      { en: 'She is studying anthropology to understand ancient cultures.', ru: 'Она изучает антропологию, чтобы понять древние культуры.' },
      { en: 'Anthropology helps us understand the origins of humanity.', ru: 'Антропология помогает нам понять происхождение человечества.' },
      { en: 'His field is cultural anthropology.', ru: 'Его область — культурная антропология.' },
      { en: 'The anthropology museum has artifacts from all over the world.', ru: 'В музее антропологии есть артефакты со всего мира.' }
    ]
),

createRichWord('c1_antique', 'Antique', '/ænˈtiːk/', 'энтик', 'Антиквариат / Старинный', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Старая и ценная вещь (сущ.); или относящийся к древности (прил.).',
    '- Мебель: "Antique furniture" (Антикварная мебель)\n- Магазин: "Antique shop" (Антикварный магазин)\n- Ценность: "Valuable antique" (Ценный антиквариат)',
    [
      { en: 'This table is a valuable antique from the 18th century.', ru: 'Этот стол — ценный антиквариат 18-го века.' },
      { en: 'She loves collecting antique jewellery.', ru: 'Она любит коллекционировать старинные украшения.' },
      { en: 'We bought this clock at an antique shop in London.', ru: 'Мы купили эти часы в антикварном магазине в Лондоне.' },
      { en: 'Antique cars are often very expensive to maintain.', ru: 'Старинные автомобили часто очень дороги в обслуживании.' }
    ]
),

createRichWord('c1_applicable', 'Applicable', '/əˈplɪkəb(ə)l/', 'эпликэбл', 'Применимый / Подходящий', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Актуальный или подходящий для конкретного случая.',
    '- Закон: "Applicable law" (Применимый закон)\n- Ситуация: "Not applicable" (Неприменимо)\n- Правило: "Applicable to all" (Применимо ко всем)',
    [
      { en: 'This rule is not applicable to new students.', ru: 'Это правило не применимо к новым студентам.' },
      { en: 'Please answer all questions that are applicable to you.', ru: 'Пожалуйста, ответьте на все вопросы, которые к вам относятся (применимы).' },
      { en: 'The tax is applicable only to luxury goods.', ru: 'Налог применим только к предметам роскоши.' },
      { en: 'Fill in the section if applicable.', ru: 'Заполните этот раздел, если это применимо.' }
    ]
),

createRichWord('c1_arch', 'Arch', '/ɑːtʃ/', 'ач', 'Арка / Дуга', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Изогнутая структура, перекрывающая отверстие; или часть стопы.',
    '- Здание: "Stone arch" (Каменная арка)\n- Тело: "Arch of the foot" (Свод стопы)\n- Форма: "Arch shape" (Форма арки)',
    [
      { en: 'We walked through the stone arch into the garden.', ru: 'Мы прошли через каменную арку в сад.' },
      { en: 'The bridge has three large arches.', ru: 'У моста есть три большие арки.' },
      { en: 'The cat arched its back when it saw the dog.', ru: 'Кошка выгнула спину дугой, когда увидела собаку.' },
      { en: 'He has a high arch in his foot.', ru: 'У него высокий свод стопы.' }
    ]
),

createRichWord('c1_archive', 'Archive', '/ˈɑːkaɪv/', 'акайв', 'Архив', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Коллекция исторических документов или записей.',
    '- Документы: "National archive" (Национальный архив)\n- Интернет: "Online archive" (Онлайн-архив)\n- Глагол: "To archive" (Архивировать)',
    [
      { en: 'The historian spent weeks studying documents in the archive.', ru: 'Историк провел недели, изучая документы в архиве.' },
      { en: 'You can find old newspapers in the digital archive.', ru: 'Вы можете найти старые газеты в цифровом архиве.' },
      { en: 'We need to archive these emails for future reference.', ru: 'Нам нужно заархивировать эти письма для использования в будущем.' },
      { en: 'The museum archive contains thousands of photographs.', ru: 'Архив музея содержит тысячи фотографий.' }
    ]
),

createRichWord('c1_armour', 'Armour', '/ˈɑːmə/', 'амэ', 'Броня / Доспехи', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Металлическая одежда для защиты в бою (исторически); или защита техники.',
    '- История: "Knight in armour" (Рыцарь в доспехах)\n- Тело: "Body armour" (Бронежилет)\n- Машина: "Tank armour" (Броня танка)',
    [
      { en: 'The knight wore heavy steel armour into battle.', ru: 'Рыцарь надел тяжелые стальные доспехи для битвы.' },
      { en: 'Police officers wear body armour for protection.', ru: 'Полицейские носят бронежилеты для защиты.' },
      { en: 'The tank has thick armour to resist bullets.', ru: 'У танка толстая броня, чтобы противостоять пулям.' },
      { en: 'He built a suit of armour for the movie.', ru: 'Он создал комплект доспехов для фильма.' }
    ]
),

createRichWord('c1_array', 'Array', '/əˈreɪ/', 'эрей', 'Массив / Множество', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Впечатляющая коллекция или ряд вещей.',
    '- Выбор: "Vast array" (Огромное множество)\n- Техника: "Solar array" (Солнечная батарея/массив)\n- Дисплей: "Array of colors" (Палитра цветов)',
    [
      { en: 'The store offers a vast array of products.', ru: 'Магазин предлагает огромный ассортимент продуктов.' },
      { en: 'He faced a bewildering array of choices.', ru: 'Он столкнулся с ошеломляющим множеством вариантов.' },
      { en: 'The solar array provides power for the station.', ru: 'Солнечная батарея обеспечивает станцию энергией.' },
      { en: 'There was an impressive array of dishes at the buffet.', ru: 'На шведском столе было впечатляющее разнообразие блюд.' }
    ]
),

createRichWord('c1_astonish', 'Astonish', '/əˈstɒnɪʃ/', 'эстониш', 'Изумлять', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Очень сильно удивить кого-то (сильнее, чем surprise).',
    '- Чувство: "Be astonished" (Быть изумленным)\n- Результат: "Astonish the world" (Изумить мир)\n- Фраза: "To my astonishment" (К моему изумлению)',
    [
      { en: 'Her talent for singing astonished everyone.', ru: 'Ее талант пения изумил всех.' },
      { en: 'I was astonished by the beauty of the landscape.', ru: 'Я был изумлен красотой пейзажа.' },
      { en: 'It astonishes me that he is still working there.', ru: 'Меня изумляет, что он все еще там работает.' },
      { en: 'The magician\'s tricks never fail to astonish the audience.', ru: 'Трюки фокусника никогда не перестают изумлять публику.' }
    ]
),

createRichWord('c1_astronomy', 'Astronomy', '/əˈstrɒnəmi/', 'эстронэми', 'Астрономия', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Научное изучение звезд, планет и вселенной.',
    '- Наука: "Study astronomy" (Изучать астрономию)\n- Хобби: "Amateur astronomy" (Любительская астрономия)\n- Инструмент: "Telescope for astronomy" (Телескоп для астрономии)',
    [
      { en: 'Astronomy helps us understand our place in the universe.', ru: 'Астрономия помогает нам понять наше место во вселенной.' },
      { en: 'He bought a telescope because he is interested in astronomy.', ru: 'Он купил телескоп, потому что интересуется астрономией.' },
      { en: 'Modern astronomy uses powerful computers.', ru: 'Современная астрономия использует мощные компьютеры.' },
      { en: 'She wants to study physics and astronomy at university.', ru: 'Она хочет изучать физику и астрономию в университете.' }
    ]
  ),
createRichWord('c1_attain', 'Attain', '/əˈteɪn/', 'этэйн', 'Достигать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Добиться успеха в достижении чего-либо (цели, уровня) после усилий.',
    '- Цель: "Attain a goal" (Достичь цели)\n- Уровень: "Attain a standard" (Достичь стандарта)\n- Возраст: "Attain the age" (Достичь возраста)',
    [
      { en: 'She worked hard to attain the position of director.', ru: 'Она усердно работала, чтобы достичь должности директора.' },
      { en: 'We need to clarify the objectives we wish to attain.', ru: 'Нам нужно прояснить цели, которых мы хотим достичь.' },
      { en: 'The car can attain a speed of 200 kilometers per hour.', ru: 'Машина может развивать (достигать) скорость 200 километров в час.' },
      { en: 'Only a few students attain the highest grades in this exam.', ru: 'Лишь немногие студенты достигают высших оценок на этом экзамене.' }
    ]
),

createRichWord('c1_attorney', 'Attorney', '/əˈtɜːni/', 'этёни', 'Адвокат / Юрист', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Юрист, который может представлять клиентов в суде (особенно в США).',
    '- Закон: "Defense attorney" (Адвокат защиты)\n- Власть: "Power of attorney" (Доверенность)\n- Должность: "District attorney" (Окружной прокурор)',
    [
      { en: 'You should consult an attorney before signing the contract.', ru: 'Вам следует проконсультироваться с юристом перед подписанием контракта.' },
      { en: 'The defense attorney argued that his client was innocent.', ru: 'Адвокат защиты утверждал, что его клиент невиновен.' },
      { en: 'She gave her son power of attorney to manage her finances.', ru: 'Она дала сыну доверенность на управление своими финансами.' },
      { en: 'He is a successful attorney working in New York City.', ru: 'Он успешный адвокат, работающий в Нью-Йорке.' }
    ]
),

createRichWord('c1_auction', 'Auction', '/ˈɔːkʃ(ə)n/', 'окшн', 'Аукцион', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Публичная распродажа, где товары продаются тому, кто предложит самую высокую цену.',
    '- Продажа: "Sell at auction" (Продать на аукционе)\n- Интернет: "Online auction" (Онлайн-аукцион)\n- Дом: "House auction" (Аукцион по продаже дома)',
    [
      { en: 'The painting was sold at auction for a million dollars.', ru: 'Картина была продана на аукционе за миллион долларов.' },
      { en: 'They bought the antique furniture at a local auction.', ru: 'Они купили антикварную мебель на местном аукционе.' },
      { en: 'The auction will take place next Saturday morning.', ru: 'Аукцион состоится в следующую субботу утром.' },
      { en: 'Many foreclosed houses are put up for auction by the bank.', ru: 'Многие изъятые дома выставляются банком на аукцион.' }
    ]
),

createRichWord('c1_authentic', 'Authentic', '/ɔːˈθentɪk/', 'осэнтик', 'Подлинный / Аутентичный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Настоящий, не поддельный; верный оригиналу.',
    '- Еда: "Authentic Italian food" (Настоящая итальянская еда)\n- Документ: "Authentic signature" (Подлинная подпись)\n- Вещь: "Authentic leather" (Натуральная кожа)',
    [
      { en: 'The restaurant serves authentic Japanese cuisine.', ru: 'Ресторан подает аутентичную японскую кухню.' },
      { en: 'Experts confirmed that the painting is authentic.', ru: 'Эксперты подтвердили, что картина подлинная.' },
      { en: 'We want to have an authentic experience while traveling.', ru: 'Мы хотим получить настоящий (аутентичный) опыт во время путешествия.' },
      { en: 'This is an authentic copy of the original declaration.', ru: 'Это подлинная копия оригинальной декларации.' }
    ]
),

createRichWord('c1_automobile', 'Automobile', '/ˈɔːtəməbiːl/', 'отэмэбил', 'Автомобиль', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Машина; формальное слово для обозначения "car" (особенно в США).',
    '- Индустрия: "Automobile industry" (Автомобильная промышленность)\n- Ремонт: "Automobile repair" (Ремонт автомобилей)\n- Клуб: "Automobile club" (Автомобильный клуб)',
    [
      { en: 'The automobile industry is facing a major crisis.', ru: 'Автомобильная промышленность сталкивается с серьезным кризисом.' },
      { en: 'He works as an engineer for a large automobile manufacturer.', ru: 'Он работает инженером у крупного производителя автомобилей.' },
      { en: 'The museum has a collection of vintage automobiles.', ru: 'В музее есть коллекция винтажных автомобилей.' },
      { en: 'Automobile accidents are a leading cause of injury.', ru: 'Автомобильные аварии являются ведущей причиной травматизма.' }
    ]
),

createRichWord('c1_await', 'Await', '/əˈweɪt/', 'эвэйт', 'Ожидать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Ждать чего-то (формальный синоним wait for).',
    '- Решение: "Await a decision" (Ожидать решения)\n- Прибытие: "Await arrival" (Ожидать прибытия)\n- Результат: "Await results" (Ожидать результатов)',
    [
      { en: 'We await your response to our proposal with interest.', ru: 'Мы с интересом ожидаем вашего ответа на наше предложение.' },
      { en: 'A warm welcome awaits you at our hotel.', ru: 'Теплый прием ожидает вас в нашем отеле.' },
      { en: 'The prisoner awaits trial in the county jail.', ru: 'Заключенный ожидает суда в окружной тюрьме.' },
      { en: 'Changes are awaiting approval from the board.', ru: 'Изменения ожидают одобрения от совета директоров.' }
    ]
),

createRichWord('c1_axe', 'Axe', '/æks/', 'экс', 'Топор / Сокращать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Инструмент для рубки дерева; или (как глагол/метафора) резкое сокращение (бюджета, рабочих мест).',
    '- Инструмент: "Chop with an axe" (Рубить топором)\n- Работа: "Get the axe" (Быть уволенным)\n- Бюджет: "Face the axe" (Столкнуться с сокращением)',
    [
      { en: 'He used a sharp axe to chop firewood for the winter.', ru: 'Он использовал острый топор, чтобы нарубить дров на зиму.' },
      { en: 'The company decided to axe five hundred jobs.', ru: 'Компания решила сократить пятьсот рабочих мест.' },
      { en: 'Many TV shows face the axe if ratings drop.', ru: 'Многие телешоу сталкиваются с закрытием (топором), если рейтинги падают.' },
      { en: 'She buried the hatchet, but kept the axe handy.', ru: 'Она зарыла топор войны, но держала топор под рукой (идиома/шутка).' }
    ]
),

createRichWord('c1_ballot', 'Ballot', '/ˈbælət/', 'бэлэт', 'Бюллетень / Голосование', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Лист бумаги для голосования; или сам процесс тайного голосования.',
    '- Выборы: "Cast a ballot" (Опустить бюллетень / проголосовать)\n- Бумага: "Ballot paper" (Избирательный бюллетень)\n- Ящик: "Ballot box" (Урна для голосования)',
    [
      { en: 'The union held a secret ballot to decide on the strike.', ru: 'Профсоюз провел тайное голосование, чтобы принять решение о забастовке.' },
      { en: 'Please mark your choice clearly on the ballot paper.', ru: 'Пожалуйста, четко отметьте свой выбор в избирательном бюллетене.' },
      { en: 'The ballot boxes were sealed and taken to the counting center.', ru: 'Урны для голосования были опечатаны и доставлены в центр подсчета.' },
      { en: 'He won the election after the second ballot.', ru: 'Он выиграл выборы после второго тура голосования.' }
    ]
),

createRichWord('c1_bankrupt', 'Bankrupt', '/ˈbæŋkrʌpt/', 'бэнкрапт', 'Банкрот', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Неспособный платить долги; разорившийся.',
    '- Финансы: "Go bankrupt" (Обанкротиться)\n- Закон: "Declare bankrupt" (Объявить банкротом)\n- Мораль: "Morally bankrupt" (Морально опустившийся)',
    [
      { en: 'The company went bankrupt during the economic crisis.', ru: 'Компания обанкротилась во время экономического кризиса.' },
      { en: 'He was declared bankrupt after losing all his money.', ru: 'Его объявили банкротом после потери всех денег.' },
      { en: 'The government rescued the banks to stop them going bankrupt.', ru: 'Правительство спасло банки, чтобы не дать им обанкротиться.' },
      { en: 'Critics described the policy as morally bankrupt.', ru: 'Критики назвали эту политику морально несостоятельной.' }
    ]
),

createRichWord('c1_barn', 'Barn', '/bɑːn/', 'бан', 'Амбар / Сарай', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большое сельскохозяйственное здание для хранения зерна или содержания животных.',
    '- Ферма: "Red barn" (Красный амбар)\n- Животные: "Dairy barn" (Коровник)\n- Преобразование: "Barn conversion" (Амбар, переделанный в жилье)',
    [
      { en: 'The farmer stores hay for the winter in the large barn.', ru: 'Фермер хранит сено на зиму в большом амбаре.' },
      { en: 'The owls nest in the roof of the old barn.', ru: 'Совы гнездятся под крышей старого сарая.' },
      { en: 'They converted the barn into a beautiful family home.', ru: 'Они перестроили амбар в красивый семейный дом.' },
      { en: 'The cows are kept in the barn during the cold nights.', ru: 'Коров держат в хлеву (амбаре) в холодные ночи.' }
    ]
),

createRichWord('c1_barrel', 'Barrel', '/ˈbærəl/', 'бэрэл', 'Бочка / Ствол', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Круглый контейнер с выпуклыми боками; или металлическая трубка оружия.',
    '- Емкость: "Oak barrel" (Дубовая бочка)\n- Нефть: "Barrel of oil" (Баррель нефти)\n- Оружие: "Gun barrel" (Ствол пистолета)',
    [
      { en: 'The wine is aged in oak barrels for several years.', ru: 'Вино выдерживается в дубовых бочках несколько лет.' },
      { en: 'The price of a barrel of oil has risen sharply.', ru: 'Цена барреля нефти резко выросла.' },
      { en: 'He looked down the barrel of the gun.', ru: 'Он посмотрел в ствол пистолета.' },
      { en: 'They rolled the heavy barrels onto the truck.', ru: 'Они закатили тяжелые бочки на грузовик.' }
    ]
),

createRichWord('c1_basin', 'Basin', '/ˈbeɪs(ə)n/', 'бэйсн', 'Раковина / Бассейн (реки)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Миска для умывания; или область земли, с которой вода стекает в реку.',
    '- Ванная: "Wash basin" (Умывальник)\n- География: "River basin" (Бассейн реки)\n- Посуда: "Plastic basin" (Пластиковый таз)',
    [
      { en: 'She filled the basin with warm water to wash her face.', ru: 'Она наполнила раковину теплой водой, чтобы умыть лицо.' },
      { en: 'The Amazon basin contains the world\'s largest rainforest.', ru: 'Бассейн Амазонки содержит самый большой в мире тропический лес.' },
      { en: 'Place the mixture in a basin and cover it with a cloth.', ru: 'Поместите смесь в миску и накройте тканью.' },
      { en: 'The boat was docked in the yacht basin.', ru: 'Лодка была пришвартована в гавани для яхт.' }
    ]
),

createRichWord('c1_bass', 'Bass', '/beɪs/', 'бэйс', 'Бас / Низкий тон', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Самый низкий мужской голос; или низкочастотный звук (в музыке).',
    '- Музыка: "Bass guitar" (Бас-гитара)\n- Звук: "Deep bass" (Глубокий бас)\n- Рыба: "Sea bass" (Морской окунь - произносится /bæs/)',
    [
      { en: 'He plays the bass guitar in a rock band.', ru: 'Он играет на бас-гитаре в рок-группе.' },
      { en: 'Turn up the bass on the stereo, I like the beat.', ru: 'Прибавь басы на стереосистеме, мне нравится ритм.' },
      { en: 'He sings in a deep bass voice in the choir.', ru: 'Он поет глубоким басом в хоре.' },
      { en: 'The song has a very catchy bass line.', ru: 'У песни очень запоминающаяся басовая партия.' }
    ]
),

createRichWord('c1_beast', 'Beast', '/biːst/', 'бист', 'Зверь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Крупное или опасное животное; или жестокий человек.',
    '- Сказка: "Beauty and the Beast" (Красавица и Чудовище)\n- Природа: "Wild beast" (Дикий зверь)\n- Характер: "You beast!" (Ах ты чудовище!)',
    [
      { en: 'A wild beast was heard roaming in the forest at night.', ru: 'Ночью в лесу слышали бродящего дикого зверя.' },
      { en: 'He acted like a beast when he was angry.', ru: 'Он вел себя как зверь, когда злился.' },
      { en: 'It is a beast of a car, very powerful and fast.', ru: 'Это зверь-машина, очень мощная и быстрая.' },
      { en: 'Mythological stories are full of strange beasts and monsters.', ru: 'Мифологические истории полны странных зверей и монстров.' }
    ]
),

createRichWord('c1_behalf', 'Behalf', '/bɪˈhɑːf/', 'бихаф', 'От имени', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'В интересах кого-то или как представитель кого-то (обычно "on behalf of").',
    '- Представление: "On my behalf" (От моего имени)\n- Выступление: "Speak on behalf" (Говорить от имени)\n- Работа: "Act on behalf" (Действовать от имени)',
    [
      { en: 'I am writing on behalf of my mother who is ill.', ru: 'Я пишу от имени моей матери, которая больна.' },
      { en: 'He accepted the award on behalf of the whole team.', ru: 'Он принял награду от имени всей команды.' },
      { en: 'The lawyer acted on behalf of the client.', ru: 'Адвокат действовал от имени клиента.' },
      { en: 'Don\'t worry on my behalf, I will be fine.', ru: 'Не волнуйся за меня (ради меня), я буду в порядке.' }
    ]
),

createRichWord('c1_belly', 'Belly', '/ˈbeli/', 'бэли', 'Живот', ProficiencyLevel.C1, 'noun', 'Low', 'Informal',
    'Желудок или область живота (более разговорное, чем stomach).',
    '- Тело: "Full belly" (Полный живот)\n- Танец: "Belly dance" (Танец живота)\n- Глагол: "Go belly up" (Обанкротиться/провалиться)',
    [
      { en: 'The baby was sleeping on its belly.', ru: 'Ребенок спал на животе.' },
      { en: 'He patted his belly after the large meal.', ru: 'Он похлопал себя по животу после плотной еды.' },
      { en: 'Belly dancing is popular in Middle Eastern culture.', ru: 'Танец живота популярен в ближневосточной культуре.' },
      { en: 'The company went belly up after just one year.', ru: 'Компания обанкротилась (пошла кверху брюхом) всего через год.' }
    ]
),

createRichWord('c1_bizarre', 'Bizarre', '/bɪˈzɑː/', 'биза', 'Причудливый / Странный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Очень странный или необычный.',
    '- Ситуация: "Bizarre situation" (Странная ситуация)\n- Поведение: "Bizarre behavior" (Причудливое поведение)\n- Совпадение: "Bizarre coincidence" (Странное совпадение)',
    [
      { en: 'She wore a bizarre outfit to the formal party.', ru: 'Она надела причудливый наряд на официальную вечеринку.' },
      { en: 'It was a bizarre coincidence that we met there.', ru: 'Это было странное совпадение, что мы встретились там.' },
      { en: 'The story had a very bizarre ending.', ru: 'У истории был очень странный конец.' },
      { en: 'He exhibited some bizarre behavior before he left.', ru: 'Он демонстрировал странное поведение перед уходом.' }
    ]
),

createRichWord('c1_blade', 'Blade', '/bleɪd/', 'блэйд', 'Лезвие', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Плоская режущая часть ножа, инструмента или оружия; или травинка.',
    '- Нож: "Sharp blade" (Острое лезвие)\n- Бритва: "Razor blade" (Лезвие бритвы)\n- Трава: "Blade of grass" (Травинка)',
    [
      { en: 'The blade of the knife was very sharp and shiny.', ru: 'Лезвие ножа было очень острым и блестящим.' },
      { en: 'He replaced the old razor blade with a new one.', ru: 'Он заменил старое лезвие бритвы на новое.' },
      { en: 'The helicopter blades spun faster and faster.', ru: 'Лопасти (лезвия) вертолета вращались все быстрее и быстрее.' },
      { en: 'She examined a single blade of grass under the microscope.', ru: 'Она рассматривала одну травинку под микроскопом.' }
    ]
),

createRichWord('c1_boast', 'Boast', '/bəʊst/', 'боуст', 'Хвастаться', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Говорить с чрезмерной гордостью о своих достижениях или владениях.',
    '- Разговор: "Boast about" (Хвастаться чем-то)\n- Обладание: "Boast a feature" (Гордиться особенностью/иметь)\n- Характер: "Don\'t mean to boast" (Не хочу хвастаться)',
    [
      { en: 'He likes to boast about how much money he makes.', ru: 'Он любит хвастаться тем, сколько денег он зарабатывает.' },
      { en: 'The hotel boasts a swimming pool and a spa.', ru: 'Отель гордится наличием бассейна и спа.' },
      { en: 'I don\'t want to boast, but I got the highest score.', ru: 'Не хочу хвастаться, но я получил высший балл.' },
      { en: 'Stop boasting and show us what you can actually do.', ru: 'Перестань хвастаться и покажи нам, что ты на самом деле умеешь.' }
    ]
),

createRichWord('c1_bolt', 'Bolt', '/bəʊlt/', 'боулт', 'Болт / Засов / Убегать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Металлический стержень для крепления; дверной засов; или резкое убегание.',
    '- Крепление: "Nuts and bolts" (Гайки и болты / основы)\n- Дверь: "Lock the bolt" (Запереть засов)\n- Погода: "Bolt of lightning" (Удар молнии)',
    [
      { en: 'He tightened the bolt with a wrench to fix the wheel.', ru: 'Он затянул болт гаечным ключом, чтобы починить колесо.' },
      { en: 'Make sure you slide the bolt across the door at night.', ru: 'Убедитесь, что вы задвинули засов на двери на ночь.' },
      { en: 'The horse bolted when it heard the loud noise.', ru: 'Лошадь понесла (резко убежала), когда услышала громкий шум.' },
      { en: 'A sudden bolt of lightning struck the tree.', ru: 'Внезапный удар молнии поразил дерево.' }
    ]
),

createRichWord('c1_bounds', 'Bounds', '/baʊndz/', 'баундз', 'Границы / Пределы', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Ограничения или пределы территории/поведения.',
    '- Зона: "Out of bounds" (Закрытая зона / Вне границ)\n- Предел: "Know no bounds" (Не знать границ)\n- Спорт: "Within bounds" (В пределах поля)',
    [
      { en: 'His enthusiasm for the project knows no bounds.', ru: 'Его энтузиазм по поводу проекта не знает границ.' },
      { en: 'The military base is out of bounds to civilians.', ru: 'Военная база закрыта для гражданских лиц (вне пределов доступа).' },
      { en: 'Please keep your comments within the bounds of politeness.', ru: 'Пожалуйста, держите свои комментарии в рамках приличия.' },
      { en: 'The ball went out of bounds, so the game stopped.', ru: 'Мяч ушел за пределы поля, поэтому игра остановилась.' }
    ]
),

createRichWord('c1_brass', 'Brass', '/brɑːs/', 'брас', 'Латунь / Духовые инструменты', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Желтый металл (сплав меди и цинка); или музыкальные инструменты из металла.',
    '- Материал: "Solid brass" (Цельная латунь)\n- Музыка: "Brass band" (Духовой оркестр)\n- Деталь: "Brass handle" (Латунная ручка)',
    [
      { en: 'The door handle is made of solid brass.', ru: 'Дверная ручка сделана из цельной латуни.' },
      { en: 'He plays the trumpet in a local brass band.', ru: 'Он играет на трубе в местном духовом оркестре.' },
      { en: 'Polishing the brass ornaments takes a long time.', ru: 'Полировка латунных украшений занимает много времени.' },
      { en: 'The military officers wore uniforms with brass buttons.', ru: 'Военные офицеры носили форму с латунными пуговицами.' }
    ]
),

createRichWord('c1_breeze', 'Breeze', '/briːz/', 'бриз', 'Бриз / Легкая задача', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Легкий ветерок; или что-то очень легкое для выполнения (идиома).',
    '- Погода: "Gentle breeze" (Легкий ветерок)\n- Легкость: "It was a breeze" (Это было проще простого)\n- Море: "Sea breeze" (Морской бриз)',
    [
      { en: 'A gentle breeze blew through the open window.', ru: 'Легкий ветерок дул в открытое окно.' },
      { en: 'The exam was a breeze; I finished it in hour.', ru: 'Экзамен был проще простого; я закончил его за час.' },
      { en: 'We enjoyed the cool sea breeze on the beach.', ru: 'Мы наслаждались прохладным морским бризом на пляже.' },
      { en: 'The leaves rustled in the evening breeze.', ru: 'Листья шелестели на вечернем ветру.' }
    ]
),

createRichWord('c1_briefed', 'Briefed', '/briːft/', 'брифт', 'Проинструктированный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Получивший информацию или инструкции (обычно Participle от глагола to brief).',
    '- Инструктаж: "Fully briefed" (Полностью проинструктирован)\n- Работа: "Briefed on the situation" (Введен в курс дела)\n- Команда: "Briefed the team" (Проинструктировал команду)',
    [
      { en: 'The president was fully briefed on the crisis this morning.', ru: 'Президент был полностью проинструктирован о кризисе сегодня утром.' },
      { en: 'Have you been briefed about your new duties yet?', ru: 'Вас уже ввели в курс ваших новых обязанностей?' },
      { en: 'The soldiers were briefed before the mission started.', ru: 'Солдаты были проинструктированы перед началом миссии.' },
      { en: 'I have briefed the manager on the project\'s progress.', ru: 'Я проинформировал менеджера о ходе выполнения проекта.' }
    ]
),

createRichWord('c1_broker', 'Broker', '/ˈbrəʊkə/', 'броукэ', 'Брокер / Маклер', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, который покупает и продает вещи (акции, страховки) для других.',
    '- Финансы: "Stock broker" (Биржевой брокер)\n- Недвижимость: "Real estate broker" (Агент по недвижимости - брокер)\n- Страхование: "Insurance broker" (Страховой брокер)',
    [
      { en: 'You need a broker to buy shares on the stock exchange.', ru: 'Вам нужен брокер, чтобы покупать акции на фондовой бирже.' },
      { en: 'The peace treaty was brokered by the United Nations.', ru: 'Мирный договор был заключен при посредничестве ООН (глагол).' },
      { en: 'He works as an insurance broker in the city.', ru: 'Он работает страховым брокером в городе.' },
      { en: 'The broker charges a commission for every transaction.', ru: 'Брокер взимает комиссию за каждую транзакцию.' }
    ]
),

createRichWord('c1_bruise', 'Bruise', '/bruːz/', 'бруз', 'Синяк / Ушиб', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Синяя или фиолетовая отметка на коже после удара; повреждение фрукта.',
    '- Травма: "Bad bruise" (Сильный ушиб)\n- Фрукт: "Bruised apple" (Побитое яблоко)\n- Чувства: "Bruised ego" (Задетое самолюбие)',
    [
      { en: 'He had a large purple bruise on his leg after the fall.', ru: 'У него был большой фиолетовый синяк на ноге после падения.' },
      { en: 'Don\'t eat that apple, it has a big bruise on it.', ru: 'Не ешь это яблоко, на нем большая вмятина (порча).' },
      { en: 'It is just a bruise, nothing is broken.', ru: 'Это просто ушиб, ничего не сломано.' },
      { en: 'His ego was bruised when she rejected his offer.', ru: 'Его самолюбие было задето, когда она отвергла его предложение.' }
    ]
),

createRichWord('c1_bulk', 'Bulk', '/bʌlk/', 'балк', 'Основная масса / Опт', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Большая часть чего-либо; большой размер или количество.',
    '- Количество: "In bulk" (Оптом / В большом количестве)\n- Часть: "The bulk of" (Основная часть)\n- Размер: "Great bulk" (Огромная масса)',
    [
      { en: 'We buy rice and pasta in bulk to save money.', ru: 'Мы покупаем рис и макароны оптом, чтобы сэкономить деньги.' },
      { en: 'The bulk of the work has already been completed.', ru: 'Основная часть работы уже выполнена.' },
      { en: 'Despite his bulk, he moved remarkably quickly.', ru: 'Несмотря на свою массивность, он двигался удивительно быстро.' },
      { en: 'It is cheaper to ship goods in bulk containers.', ru: 'Дешевле перевозить товары в навалочных контейнерах.' }
    ]
  ),
createRichWord('c1_abbey', 'Abbey', '/ˈæbi/', 'эби', 'Аббатство', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большая церковь или группа зданий, где живут монахи или монахини.',
    '- Религия: "Westminster Abbey" (Вестминстерское аббатство)\n- История: "Ruined abbey" (Разрушенное аббатство)\n- Место: "Visit the abbey" (Посетить аббатство)',
    [
      { en: 'The monks have lived in this abbey for centuries.', ru: 'Монахи живут в этом аббатстве веками.' },
      { en: 'Westminster Abbey is one of London\'s most famous landmarks.', ru: 'Вестминстерское аббатство — одна из самых известных достопримечательностей Лондона.' },
      { en: 'We visited the ruins of a medieval abbey on the hill.', ru: 'Мы посетили руины средневекового аббатства на холме.' },
      { en: 'The abbey was destroyed by fire in the sixteenth century.', ru: 'Аббатство было уничтожено пожаром в шестнадцатом веке.' }
    ]
),

createRichWord('c1_abdomen', 'Abdomen', '/ˈæbdəmən/', 'эбдэмэн', 'Брюшная полость / Живот', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Нижняя часть тела человека или животного, содержащая желудок и другие органы.',
    '- Медицина: "Pain in the abdomen" (Боль в животе)\n- Тело: "Lower abdomen" (Нижняя часть живота)\n- Упражнения: "Abdominal muscles" (Мышцы пресса)',
    [
      { en: 'He complained of a sharp pain in his lower abdomen.', ru: 'Он жаловался на острую боль в нижней части живота.' },
      { en: 'The doctor examined the patient\'s abdomen carefully.', ru: 'Врач внимательно осмотрел живот пациента.' },
      { en: 'In insects, the abdomen is the rear part of the body.', ru: 'У насекомых брюшко — это задняя часть тела.' },
      { en: 'Surgery was required to repair the injury to his abdomen.', ru: 'Потребовалась операция, чтобы вылечить травму его брюшной полости.' }
    ]
),

createRichWord('c1_accessory', 'Accessory', '/əkˈsesəri/', 'эксесэри', 'Аксессуар', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Вещь, которую можно добавить к чему-то другому (одежде, машине), чтобы сделать это полезнее или красивее.',
    '- Мода: "Fashion accessory" (Модный аксессуар)\n- Машина: "Car accessories" (Автомобильные аксессуары)\n- Право: "Accessory to a crime" (Соучастник преступления)',
    [
      { en: 'She wore a scarf as a colorful accessory to her outfit.', ru: 'Она носила шарф как красочный аксессуар к своему наряду.' },
      { en: 'The store sells bags, belts, and other fashion accessories.', ru: 'Магазин продает сумки, ремни и другие модные аксессуары.' },
      { en: 'You can buy various accessories for your camera online.', ru: 'Вы можете купить различные аксессуары для вашей камеры онлайн.' },
      { en: 'He was charged as an accessory to the robbery.', ru: 'Ему было предъявлено обвинение как соучастнику ограбления.' }
    ]
),

createRichWord('c1_aerial', 'Aerial', '/ˈeəriəl/', 'ээриэл', 'Воздушный / Антенна', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Происходящий в воздухе (прил.); также "антенна" (сущ.).',
    '- Вид: "Aerial view" (Вид с воздуха)\n- Фото: "Aerial photography" (Аэрофотосъемка)\n- Атака: "Aerial attack" (Воздушная атака)',
    [
      { en: 'We took some amazing aerial photos from the helicopter.', ru: 'Мы сделали несколько потрясающих аэрофотоснимков с вертолета.' },
      { en: 'The aerial view of the city shows how large it really is.', ru: 'Вид на город с воздуха показывает, насколько он на самом деле велик.' },
      { en: 'Birds are masters of aerial acrobatics.', ru: 'Птицы — мастера воздушной акробатики.' },
      { en: 'The roof was damaged during the aerial bombardment.', ru: 'Крыша была повреждена во время воздушной бомбардировки.' }
    ]
),

createRichWord('c1_aggravate', 'Aggravate', '/ˈæɡrəveɪt/', 'эгрэвейт', 'Усугублять / Раздражать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сделать плохую ситуацию или болезнь хуже; или (разг.) злить кого-то.',
    '- Проблема: "Aggravate the situation" (Усугубить ситуацию)\n- Боль: "Aggravate an injury" (Усугубить травму)\n- Человек: "Don\'t aggravate him" (Не зли его)',
    [
      { en: 'Running on a sore leg will only aggravate the injury.', ru: 'Бег на больной ноге только усугубит травму.' },
      { en: 'His rude comments aggravated the tense situation.', ru: 'Его грубые комментарии усугубили напряженную ситуацию.' },
      { en: 'Pollution can aggravate asthma symptoms.', ru: 'Загрязнение может усугубить симптомы астмы.' },
      { en: 'Stop aggravating your brother while he is studying.', ru: 'Перестань злить брата, пока он учится.' }
    ]
),

createRichWord('c1_aggregate', 'Aggregate', '/ˈæɡrɪɡət/', 'эгригэт', 'Совокупный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Сформированный путем сложения отдельных частей; общий.',
    '- Статистика: "Aggregate demand" (Совокупный спрос)\n- Счет: "Aggregate score" (Общий счет)\n- Сумма: "In the aggregate" (В совокупности)',
    [
      { en: 'The aggregate value of the company\'s assets is huge.', ru: 'Совокупная стоимость активов компании огромна.' },
      { en: 'They won the match with an aggregate score of 4-2.', ru: 'Они выиграли матч с общим счетом 4-2.' },
      { en: 'We need to analyze the aggregate data from all regions.', ru: 'Нам нужно проанализировать совокупные данные из всех регионов.' },
      { en: 'The team performed well in the aggregate.', ru: 'Команда выступила хорошо в целом (в совокупности).' }
    ]
),

createRichWord('c1_aide', 'Aide', '/eɪd/', 'эйд', 'Помощник', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, чья работа заключается в помощи важному лицу, особенно в политике.',
    '- Политика: "Presidential aide" (Помощник президента)\n- Работа: "Senior aide" (Старший помощник)\n- Отношения: "Close aide" (Близкий помощник)',
    [
      { en: 'A close aide to the Prime Minister resigned yesterday.', ru: 'Близкий помощник премьер-министра ушел в отставку вчера.' },
      { en: 'The senator discussed the speech with his top aides.', ru: 'Сенатор обсудил речь со своими главными помощниками.' },
      { en: 'She works as a legal aide in a law firm.', ru: 'Она работает помощником юриста в юридической фирме.' },
      { en: 'He sent an aide to deliver the confidential message.', ru: 'Он послал помощника доставить конфиденциальное сообщение.' }
    ]
),

createRichWord('c1_airways', 'Airways', '/ˈeəweɪz/', 'ээвейз', 'Дыхательные пути', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Проходы в горле и легких, через которые вы дышите.',
    '- Медицина: "Blocked airways" (Заблокированные дыхательные пути)\n- Здоровье: "Clear airways" (Чистые дыхательные пути)\n- Воспаление: "Inflamed airways" (Воспаленные дыхательные пути)',
    [
      { en: 'Smoke can irritate your airways and cause coughing.', ru: 'Дым может раздражать дыхательные пути и вызывать кашель.' },
      { en: 'The doctor checked if the patient\'s airways were clear.', ru: 'Врач проверил, чисты ли дыхательные пути пациента.' },
      { en: 'Asthma causes the airways to narrow and swell.', ru: 'Астма вызывает сужение и отек дыхательных путей.' },
      { en: 'In an emergency, ensure the victim\'s airways are open.', ru: 'В экстренной ситуации убедитесь, что дыхательные пути пострадавшего открыты.' }
    ]
),

createRichWord('c1_altar', 'Altar', '/ˈɔːltə/', 'олтэ', 'Алтарь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Святой стол в церкви или храме, используемый для религиозных церемоний.',
    '- Церковь: "High altar" (Главный алтарь)\n- Свадьба: "Lead to the altar" (Вести к алтарю)\n- Жертва: "Sacrifice on the altar" (Жертвоприношение на алтаре)',
    [
      { en: 'The couple stood before the altar to exchange vows.', ru: 'Пара стояла перед алтарем, чтобы обменяться клятвами.' },
      { en: 'Candles and flowers were placed on the altar.', ru: 'На алтарь были помещены свечи и цветы.' },
      { en: 'The priest bowed in front of the altar.', ru: 'Священник поклонился перед алтарем.' },
      { en: 'They built a small stone altar in the woods.', ru: 'Они построили маленький каменный алтарь в лесу.' }
    ]
),

createRichWord('c1_altitude', 'Altitude', '/ˈæltɪtjuːd/', 'элтитьюд', 'Высота', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Высота объекта над уровнем моря или землей.',
    '- Полет: "Cruising altitude" (Крейсерская высота)\n- Горы: "High altitude" (Большая высота)\n- Измерение: "Lose altitude" (Терять высоту)',
    [
      { en: 'The plane is flying at an altitude of 30,000 feet.', ru: 'Самолет летит на высоте 30 000 футов.' },
      { en: 'Breathing can be difficult at high altitudes due to thin air.', ru: 'На больших высотах дыхание может быть затруднено из-за разреженного воздуха.' },
      { en: 'We need to gain altitude to fly over the mountains.', ru: 'Нам нужно набрать высоту, чтобы перелететь через горы.' },
      { en: 'The pilot announced our current altitude and speed.', ru: 'Пилот объявил нашу текущую высоту и скорость.' }
    ]
),

createRichWord('c1_ample', 'Ample', '/ˈæmp(ə)l/', 'эмпл', 'Обильный / Достаточный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Более чем достаточный; много места или времени.',
    '- Время: "Ample time" (Достаточно времени)\n- Место: "Ample room" (Много места)\n- Доказательства: "Ample evidence" (Обильные доказательства)',
    [
      { en: 'There is ample space in the car for all your luggage.', ru: 'В машине достаточно места для всего вашего багажа.' },
      { en: 'You will have ample time to finish the exam.', ru: 'У вас будет предостаточно времени, чтобы закончить экзамен.' },
      { en: 'We have ample evidence to prove his innocence.', ru: 'У нас есть исчерпывающие доказательства его невиновности.' },
      { en: 'The garden provides ample opportunity for relaxation.', ru: 'Сад предоставляет широкие возможности для отдыха.' }
    ]
),

createRichWord('c1_amplify', 'Amplify', '/ˈæmplɪfaɪ/', 'эмплифай', 'Усиливать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Сделать звук громче; или добавить деталей в историю.',
    '- Звук: "Amplify sound" (Усилить звук)\n- Сигнал: "Amplify signal" (Усилить сигнал)\n- Эффект: "Amplify the effect" (Усилить эффект)',
    [
      { en: 'Microphones are used to amplify the singer\'s voice.', ru: 'Микрофоны используются для усиления голоса певца.' },
      { en: 'Social media can amplify fake news very quickly.', ru: 'Социальные сети могут очень быстро распространять (усиливать) фейковые новости.' },
      { en: 'Please amplify on your earlier statement.', ru: 'Пожалуйста, поясните (дополните) ваше предыдущее заявление.' },
      { en: 'The music was amplified by huge speakers.', ru: 'Музыка усиливалась огромными динамиками.' }
    ]
),

createRichWord('c1_analogy', 'Analogy', '/əˈnælədʒi/', 'энэлэджи', 'Аналогия', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Сравнение двух вещей, показывающее их сходство.',
    '- Сравнение: "Draw an analogy" (Провести аналогию)\n- Пример: "By analogy" (По аналогии)\n- Объяснение: "Use an analogy" (Использовать аналогию)',
    [
      { en: 'The teacher used an analogy to explain the complex concept.', ru: 'Учитель использовал аналогию, чтобы объяснить сложную концепцию.' },
      { en: 'He drew an analogy between the human heart and a pump.', ru: 'Он провел аналогию между человеческим сердцем и насосом.' },
      { en: 'By analogy, if one team can do it, so can we.', ru: 'По аналогии, если одна команда может это сделать, то и мы сможем.' },
      { en: 'It is often helpful to explain computers using analogies.', ru: 'Часто полезно объяснять компьютеры, используя аналогии.' }
    ]
),

createRichWord('c1_analytic', 'Analytic', '/ˌænəˈlɪtɪk/', 'энэлитик', 'Аналитический', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Использующий логический анализ или разделение на части.',
    '- Ум: "Analytic mind" (Аналитический ум)\n- Подход: "Analytic approach" (Аналитический подход)\n- Навыки: "Analytic skills" (Аналитические навыки)',
    [
      { en: 'She has a very analytic mind and solves problems easily.', ru: 'У нее очень аналитический склад ума, и она легко решает проблемы.' },
      { en: 'We need to take a more analytic approach to this data.', ru: 'Нам нужно применить более аналитический подход к этим данным.' },
      { en: 'Analytic geometry connects algebra with geometry.', ru: 'Аналитическая геометрия связывает алгебру с геометрией.' },
      { en: 'He prefers analytic philosophy to continental philosophy.', ru: 'Он предпочитает аналитическую философию континентальной.' }
    ]
),

createRichWord('c1_anatomy', 'Anatomy', '/əˈnætəmi/', 'энэтэми', 'Анатомия', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Наука о строении тела; или само строение.',
    '- Наука: "Human anatomy" (Анатомия человека)\n- Учеба: "Study anatomy" (Изучать анатомию)\n- Части: "Anatomy of the eye" (Анатомия глаза)',
    [
      { en: 'Medical students must study human anatomy in detail.', ru: 'Студенты-медики должны детально изучать анатомию человека.' },
      { en: 'We learned about the anatomy of a frog in biology class.', ru: 'Мы узнали об анатомии лягушки на уроке биологии.' },
      { en: 'Leonardo da Vinci drew detailed sketches of anatomy.', ru: 'Леонардо да Винчи делал детальные наброски анатомии.' },
      { en: 'Understanding anatomy is crucial for a surgeon.', ru: 'Понимание анатомии имеет решающее значение для хирурга.' }
    ]
),

createRichWord('c1_antibiotic', 'Antibiotic', '/ˌæntibaɪˈɒtɪk/', 'энтибайотэк', 'Антибиотик', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Лекарство, которое убивает бактерии и лечит инфекции.',
    '- Медицина: "Take antibiotics" (Принимать антибиотики)\n- Назначение: "Prescribe antibiotics" (Выписать антибиотики)\n- Эффект: "Antibiotic resistance" (Устойчивость к антибиотикам)',
    [
      { en: 'The doctor prescribed antibiotics for my throat infection.', ru: 'Врач прописал антибиотики от моей инфекции горла.' },
      { en: 'You must finish the full course of antibiotics.', ru: 'Вы должны пропить полный курс антибиотиков.' },
      { en: 'Overuse of antibiotics makes bacteria stronger.', ru: 'Чрезмерное использование антибиотиков делает бактерии сильнее.' },
      { en: 'Antibiotics are ineffective against viral infections like flu.', ru: 'Антибиотики неэффективны против вирусных инфекций, таких как грипп.' }
    ]
),

createRichWord('c1_apparatus', 'Apparatus', '/ˌæpəˈreɪtəs/', 'эпэрейтэс', 'Аппарат / Оборудование', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Комплект оборудования или инструментов для определенной цели; или сложная структура организации.',
    '- Наука: "Lab apparatus" (Лабораторное оборудование)\n- Спорт: "Gymnastics apparatus" (Гимнастический снаряд)\n- Система: "State apparatus" (Государственный аппарат)',
    [
      { en: 'The divers checked their breathing apparatus before diving.', ru: 'Дайверы проверили свои дыхательные аппараты перед погружением.' },
      { en: 'The laboratory is filled with complex scientific apparatus.', ru: 'Лаборатория заполнена сложным научным оборудованием.' },
      { en: 'Gymnasts perform on various pieces of apparatus.', ru: 'Гимнасты выступают на различных снарядах.' },
      { en: 'The state security apparatus is very powerful.', ru: 'Аппарат государственной безопасности очень мощен.' }
    ]
),

createRichWord('c1_applaud', 'Applaud', '/əˈplɔːd/', 'эплод', 'Аплодировать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Хлопать в ладоши в знак одобрения; или хвалить решение.',
    '- Концерт: "Applaud the performance" (Аплодировать выступлению)\n- Мнение: "Applaud the decision" (Приветствовать решение)\n- Люди: "Audience applauded" (Зрители аплодировали)',
    [
      { en: 'The audience stood up to applaud the amazing singer.', ru: 'Зрители встали, чтобы поаплодировать потрясающему певцу.' },
      { en: 'I applaud your courage in speaking out against injustice.', ru: 'Я приветствую вашу смелость высказаться против несправедливости.' },
      { en: 'Everyone applauded when the winner was announced.', ru: 'Все зааплодировали, когда объявили победителя.' },
      { en: 'We should applaud their efforts to improve the school.', ru: 'Мы должны похвалить их усилия по улучшению школы.' }
    ]
),

createRichWord('c1_apprentice', 'Apprentice', '/əˈprentɪs/', 'эпрентис', 'Ученик (подмастерье)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Молодой человек, который работает на мастера, чтобы научиться профессии.',
    '- Работа: "Electrician apprentice" (Ученик электрика)\n- Статус: "Become an apprentice" (Стать подмастерьем)\n- Обучение: "Apprentice training" (Обучение учеников)',
    [
      { en: 'He started working as an apprentice carpenter at age sixteen.', ru: 'Он начал работать учеником плотника в шестнадцать лет.' },
      { en: 'The apprentice learns valuable skills from the master.', ru: 'Ученик перенимает ценные навыки у мастера.' },
      { en: 'It takes years to move from apprentice to expert.', ru: 'Требуются годы, чтобы пройти путь от ученика до эксперта.' },
      { en: 'Donald Trump hosted a show called "The Apprentice".', ru: 'Дональд Трамп вел шоу под названием "Ученик".' }
    ]
),

createRichWord('c1_artery', 'Artery', '/ˈɑːtəri/', 'атэри', 'Артерия', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Кровеносный сосуд, несущий кровь от сердца; или главная дорога.',
    '- Тело: "Main artery" (Главная артерия)\n- Болезнь: "Blocked artery" (Закупоренная артерия)\n- Дорога: "Traffic artery" (Транспортная магистраль)',
    [
      { en: 'The blocked artery caused him to have a heart attack.', ru: 'Закупоренная артерия стала причиной сердечного приступа.' },
      { en: 'Arteries carry oxygen-rich blood to the body\'s tissues.', ru: 'Артерии несут обогащенную кислородом кровь к тканям тела.' },
      { en: 'This road is a major artery connecting the two cities.', ru: 'Эта дорога — главная артерия, соединяющая два города.' },
      { en: 'High cholesterol can damage your arteries over time.', ru: 'Высокий холестерин может со временем повредить ваши артерии.' }
    ]
),

createRichWord('c1_ascend', 'Ascend', '/əˈsend/', 'эсэнд', 'Подниматься / Восходить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Двигаться вверх; или подниматься на трон/в должности.',
    '- Движение: "Ascend the stairs" (Подниматься по лестнице)\n- Власть: "Ascend the throne" (Взойти на трон)\n- Гора: "Ascend a mountain" (Восходить на гору)',
    [
      { en: 'They slowly ascended the steep mountain path.', ru: 'Они медленно поднимались по крутой горной тропе.' },
      { en: 'The queen ascended the throne in 1952.', ru: 'Королева взошла на престол в 1952 году.' },
      { en: 'Smoke ascended from the chimney into the sky.', ru: 'Дым поднимался из трубы в небо.' },
      { en: 'He ascended to the position of CEO after many years.', ru: 'Он поднялся до должности генерального директора спустя много лет.' }
    ]
),

createRichWord('c1_ass', 'Ass', '/æs/', 'эс', 'Осел / Глупец', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Животное, похожее на лошадь (осел); или (разг.) глупый человек.',
    '- Животное: "Stubborn as an ass" (Упрямый как осел)\n- Оскорбление: "Don\'t be an ass" (Не будь ослом/дураком)\n- Идиома: "Make an ass of yourself" (Выставить себя дураком)',
    [
      { en: 'The farmer used an ass to carry heavy loads.', ru: 'Фермер использовал осла для перевозки тяжелых грузов.' },
      { en: 'Don\'t be such an ass, listen to reason.', ru: 'Не будь таким ослом (дураком), прислушайся к разуму.' },
      { en: 'He made a complete ass of himself at the party.', ru: 'Он выставил себя полным идиотом на вечеринке.' },
      { en: 'In stories, the ass is often portrayed as stubborn.', ru: 'В рассказах осел часто изображается упрямым.' }
    ]
),

createRichWord('c1_audible', 'Audible', '/ˈɔːdəb(ə)l/', 'одэбл', 'Слышимый', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Достаточно громкий, чтобы его можно было услышать.',
    '- Звук: "Barely audible" (Едва слышимый)\n- Речь: "Clearly audible" (Четко слышимый)\n- Сигнал: "Audible signal" (Звуковой сигнал)',
    [
      { en: 'Her voice was barely audible above the noise.', ru: 'Ее голос был едва слышен из-за шума.' },
      { en: 'The sound of the explosion was audible miles away.', ru: 'Звук взрыва был слышен за мили отсюда.' },
      { en: 'He let out an audible sigh of relief.', ru: 'Он издал слышимый вздох облегчения.' },
      { en: 'Make sure the alarm is audible in all rooms.', ru: 'Убедитесь, что сигнализация слышна во всех комнатах.' }
    ]
  ),
createRichWord('c1_authoritarian', 'Authoritarian', '/ɔːˌθɒrɪˈteəriən/', 'осоритээриэн', 'Авторитарный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Требующий полного послушания; ограничивающий свободу.',
    '- Власть: "Authoritarian regime" (Авторитарный режим)\n- Стиль: "Authoritarian parenting" (Авторитарное воспитание)\n- Лидер: "Authoritarian leader" (Авторитарный лидер)',
    [
      { en: 'The country suffered under an authoritarian regime for decades.', ru: 'Страна десятилетиями страдала от авторитарного режима.' },
      { en: 'His father was very authoritarian and strict.', ru: 'Его отец был очень авторитарным и строгим.' },
      { en: 'Authoritarian governments do not allow free speech.', ru: 'Авторитарные правительства не допускают свободы слова.' },
      { en: 'They rebelled against the authoritarian rule.', ru: 'Они восстали против авторитарного правления.' }
    ]
),

createRichWord('c1_autonomous', 'Autonomous', '/ɔːˈtɒnəməs/', 'отонэмэс', 'Автономный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Независимый и имеющий право управлять собой.',
    '- Регион: "Autonomous region" (Автономный регион)\n- Техника: "Autonomous vehicle" (Беспилотный автомобиль)\n- Личность: "Autonomous individual" (Независимая личность)',
    [
      { en: 'Catalonia is an autonomous region within Spain.', ru: 'Каталония — это автономный регион в составе Испании.' },
      { en: 'Autonomous vehicles will change the future of transport.', ru: 'Автономные (беспилотные) автомобили изменят будущее транспорта.' },
      { en: 'The university is an autonomous institution.', ru: 'Университет является автономным учреждением.' },
      { en: 'They want to make the department more autonomous.', ru: 'Они хотят сделать отдел более автономным.' }
    ]
),

createRichWord('c1_awe', 'Awe', '/ɔː/', 'о', 'Трепет / Благоговение', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Чувство большого уважения, смешанного со страхом или удивлением.',
    '- Чувство: "In awe" (В трепете/восторге)\n- Взгляд: "Gaze in awe" (Смотреть с благоговением)\n- Событие: "Inspire awe" (Внушать трепет)',
    [
      { en: 'We stood in awe of the magnificent cathedral.', ru: 'Мы стояли в благоговении перед великолепным собором.' },
      { en: 'The sheer size of the mountain filled me with awe.', ru: 'Огромный размер горы наполнил меня трепетом.' },
      { en: 'He watched in awe as the spaceship launched.', ru: 'Он с трепетом наблюдал, как взлетает космический корабль.' },
      { en: 'Her performance left the audience in awe.', ru: 'Ее выступление оставило публику в восторге (трепете).' }
    ]
),

createRichWord('c1_axis', 'Axis', '/ˈæksɪs/', 'эксис', 'Ось', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Воображаемая линия, вокруг которой вращается тело.',
    '- Земля: "Earth\'s axis" (Ось Земли)\n- График: "X axis" (Ось X)\n- Вращение: "Spin on axis" (Вращаться вокруг оси)',
    [
      { en: 'The Earth rotates on its axis once every 24 hours.', ru: 'Земля вращается вокруг своей оси каждые 24 часа.' },
      { en: 'The political axis has shifted in recent years.', ru: 'Политическая ось сместилась в последние годы.' },
      { en: 'Please plot the time on the horizontal axis.', ru: 'Пожалуйста, отметьте время на горизонтальной оси.' },
      { en: 'The wheel turns around a central axis.', ru: 'Колесо вращается вокруг центральной оси.' }
    ]
),

createRichWord('c1_bail', 'Bail', '/beɪl/', 'бэйл', 'Залог', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Деньги, заплаченные суду, чтобы обвиняемый мог оставаться на свободе до суда.',
    '- Суд: "Release on bail" (Освободить под залог)\n- Действие: "Grant bail" (Предоставить залог)\n- Человек: "Jump bail" (Скрыться от суда, нарушив залог)',
    [
      { en: 'He was released on bail pending his trial.', ru: 'Он был освобожден под залог в ожидании суда.' },
      { en: 'The judge set bail at one million dollars.', ru: 'Судья установил залог в один миллион долларов.' },
      { en: 'She couldn\'t afford to pay the bail.', ru: 'Она не могла позволить себе заплатить залог.' },
      { en: 'His father posted bail for him.', ru: 'Его отец внес за него залог.' }
    ]
),

createRichWord('c1_battalion', 'Battalion', '/bəˈtæljən/', 'бэтэлиэн', 'Батальон', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Крупное подразделение армии, состоящее из нескольких рот.',
    '- Армия: "Infantry battalion" (Пехотный батальон)\n- Размер: "Whole battalion" (Целый батальон)\n- Действие: "Join a battalion" (Вступить в батальон)',
    [
      { en: 'The entire battalion was sent to the front line.', ru: 'Весь батальон был отправлен на передовую.' },
      { en: 'He commands a battalion of five hundred soldiers.', ru: 'Он командует батальоном из пятисот солдат.' },
      { en: 'Reinforcements arrived from another battalion.', ru: 'Прибыло подкрепление из другого батальона.' },
      { en: 'The battalion marched through the city streets.', ru: 'Батальон прошел маршем по улицам города.' }
    ]
),

createRichWord('c1_beneficiary', 'Beneficiary', '/benɪˈfɪʃəri/', 'бенифишэри', 'Бенефициар / Получатель', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек или группа, которые получают выгоду от чего-то (например, наследство).',
    '- Наследство: "Main beneficiary" (Главный наследник/бенефициар)\n- Помощь: "Beneficiary of aid" (Получатель помощи)\n- Завещание: "Named as beneficiary" (Назван бенефициаром)',
    [
      { en: 'She is the sole beneficiary of her father\'s will.', ru: 'Она является единственным бенефициаром завещания своего отца.' },
      { en: 'The poor are the main beneficiaries of this charity.', ru: 'Бедные являются основными получателями помощи этой благотворительной организации.' },
      { en: 'Who will be the beneficiary of the insurance policy?', ru: 'Кто будет бенефициаром страхового полиса?' },
      { en: 'The new law makes small businesses the primary beneficiaries.', ru: 'Новый закон делает малый бизнес основным выгодополучателем.' }
    ]
),

createRichWord('c1_bewilder', 'Bewilder', '/bɪˈwɪldə/', 'бивиледэ', 'Сбивать с толку', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Полностью запутать кого-то.',
    '- Состояние: "Totally bewildered" (Полностью сбитый с толку)\n- Взгляд: "Bewildered look" (Растерянный взгляд)\n- Действие: "Bewilder the public" (Запутать общественность)',
    [
      { en: 'The complex instructions completely bewildered me.', ru: 'Сложные инструкции полностью сбили меня с толку.' },
      { en: 'She looked bewildered by the strange question.', ru: 'Она выглядела сбитой с толку странным вопросом.' },
      { en: 'The sudden change in plans bewildered everyone.', ru: 'Внезапное изменение планов всех озадачило.' },
      { en: 'He stood there, bewildered and unsure what to do.', ru: 'Он стоял там, растерянный и неуверенный, что делать.' }
    ]
),

createRichWord('c1_bilateral', 'Bilateral', '/baɪˈlæt(ə)rəl/', 'байлэтэрэл', 'Двусторонний', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Затрагивающий две стороны или страны.',
    '- Политика: "Bilateral agreement" (Двустороннее соглашение)\n- Отношения: "Bilateral relations" (Двусторонние отношения)\n- Переговоры: "Bilateral talks" (Двусторонние переговоры)',
    [
      { en: 'The two countries signed a bilateral trade agreement.', ru: 'Две страны подписали двустороннее торговое соглашение.' },
      { en: 'Bilateral relations have improved recently.', ru: 'Двусторонние отношения улучшились в последнее время.' },
      { en: 'The meeting focused on bilateral issues involving security.', ru: 'Встреча была сосредоточена на двусторонних вопросах безопасности.' },
      { en: 'This condition requires bilateral surgery on both knees.', ru: 'Это состояние требует двусторонней операции на обоих коленях.' }
    ]
),

createRichWord('c1_bleak', 'Bleak', '/bliːk/', 'блик', 'Мрачный / Унылый', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Холодный и неприятный (о месте); или не дающий надежды (о ситуации).',
    '- Погода: "Bleak winter" (Суровая зима)\n- Будущее: "Bleak outlook" (Мрачные перспективы)\n- Место: "Bleak landscape" (Унылый пейзаж)',
    [
      { en: 'The future looks bleak for the small company.', ru: 'Будущее выглядит мрачным для маленькой компании.' },
      { en: 'It was a bleak and windy day on the coast.', ru: 'Это был унылый и ветреный день на побережье.' },
      { en: 'The report paints a bleak picture of the economy.', ru: 'Отчет рисует мрачную картину экономики.' },
      { en: 'Despite the bleak situation, he remained optimistic.', ru: 'Несмотря на мрачную ситуацию, он оставался оптимистом.' }
    ]
),

createRichWord('c1_blockade', 'Blockade', '/blɒˈkeɪd/', 'блокейд', 'Блокада', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Окружение места армией или кораблями для предотвращения входа и выхода людей или товаров.',
    '- Война: "Naval blockade" (Морская блокада)\n- Действие: "Impose a blockade" (Ввести блокаду)\n- Результат: "Break the blockade" (Прорвать блокаду)',
    [
      { en: 'The navy set up a blockade to stop weapon supplies.', ru: 'Флот установил блокаду, чтобы остановить поставки оружия.' },
      { en: 'The city suffered greatly during the long blockade.', ru: 'Город сильно пострадал во время долгой блокады.' },
      { en: 'They tried to run the blockade with small boats.', ru: 'Они пытались прорвать блокаду на маленьких лодках.' },
      { en: 'The economic blockade crippled the country\'s industry.', ru: 'Экономическая блокада парализовала промышленность страны.' }
    ]
),

createRichWord('c1_blunt', 'Blunt', '/blʌnt/', 'блант', 'Тупой / Прямолинейный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Не острый (о ноже); или очень прямой и честный, даже если это грубо (о человеке).',
    '- Предмет: "Blunt knife" (Тупой нож)\n- Речь: "To be blunt" (Говоря прямо)\n- Характер: "Blunt refusal" (Резкий отказ)',
    [
      { en: 'This pencil is blunt, I need to sharpen it.', ru: 'Этот карандаш тупой, мне нужно его заточить.' },
      { en: 'To be blunt, your work is not good enough.', ru: 'Говоря прямо, ваша работа недостаточно хороша.' },
      { en: 'He suffered a blow from a blunt instrument.', ru: 'Он получил удар тупым предметом.' },
      { en: 'Her blunt manner often offends people.', ru: 'Ее прямолинейная манера часто обижает людей.' }
    ]
),

createRichWord('c1_botany', 'Botany', '/ˈbɒtəni/', 'ботъэни', 'Ботаника', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Научное изучение растений.',
    '- Наука: "Study botany" (Изучать ботанику)\n- Учеба: "Botany class" (Урок ботаники)\n- Эксперт: "Professor of botany" (Профессор ботаники)',
    [
      { en: 'She has a degree in botany and loves flowers.', ru: 'У нее есть степень по ботанике, и она любит цветы.' },
      { en: 'Botany involves classifying different types of plants.', ru: 'Ботаника включает классификацию различных видов растений.' },
      { en: 'We went on a botany field trip to the forest.', ru: 'Мы отправились на ботаническую экскурсию в лес.' },
      { en: 'The history of botany goes back thousands of years.', ru: 'История ботаники насчитывает тысячи лет.' }
    ]
),

createRichWord('c1_bout', 'Bout', '/baʊt/', 'баут', 'Приступ / Поединок', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Короткий период болезни или интенсивной активности; или боксерский поединок.',
    '- Болезнь: "Bout of flu" (Приступ гриппа)\n- Спорт: "Boxing bout" (Боксерский поединок)\n- Активность: "Drinking bout" (Запой)',
    [
      { en: 'He is recovering from a severe bout of flu.', ru: 'Он выздоравливает после тяжелого приступа гриппа.' },
      { en: 'The boxing bout lasted only three rounds.', ru: 'Боксерский поединок длился всего три раунда.' },
      { en: 'She suffers from occasional bouts of depression.', ru: 'Она страдает от периодических приступов депрессии.' },
      { en: 'A bout of unemployment left him with no savings.', ru: 'Период безработицы оставил его без сбережений.' }
    ]
),

createRichWord('c1_bowel', 'Bowel', '/ˈbaʊəl/', 'бауэл', 'Кишечник', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Трубка в теле, по которой проходит пища (кишка).',
    '- Медицина: "Bowel movement" (Стул / Дефекация)\n- Здоровье: "Bowel cancer" (Рак кишечника)\n- Анатомия: "Small bowel" (Тонкая кишка)',
    [
      { en: 'Doctors recommend a high-fiber diet for healthy bowels.', ru: 'Врачи рекомендуют диету с высоким содержанием клетчатки для здорового кишечника.' },
      { en: 'He complained of pain in his lower bowel.', ru: 'Он жаловался на боль в нижней части кишечника.' },
      { en: 'Bowel cancer is treatable if caught early.', ru: 'Рак кишечника излечим, если обнаружен на ранней стадии.' },
      { en: 'Irritable bowel syndrome is a common condition.', ru: 'Синдром раздраженного кишечника — распространенное заболевание.' }
    ]
),

createRichWord('c1_boycott', 'Boycott', '/ˈbɔɪkɒt/', 'бойкот', 'Бойкот / Бойкотировать', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Отказ покупать, использовать или участвовать в чем-то в знак протеста.',
    '- Действие: "Organize a boycott" (Организовать бойкот)\n- Глагол: "Boycott goods" (Бойкотировать товары)\n- Политика: "Olympic boycott" (Бойкот Олимпиады)',
    [
      { en: 'Consumers decided to boycott the company\'s products.', ru: 'Потребители решили бойкотировать продукцию компании.' },
      { en: 'The bus boycott lasted for over a year.', ru: 'Автобусный бойкот длился больше года.' },
      { en: 'They are calling for a boycott of the election.', ru: 'Они призывают к бойкоту выборов.' },
      { en: 'Many countries boycotted the games in protest.', ru: 'Многие страны бойкотировали игры в знак протеста.' }
    ]
),

createRichWord('c1_brigade', 'Brigade', '/brɪˈɡeɪd/', 'бригейд', 'Бригада', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большая группа солдат; или организация людей с общей целью.',
    '- Армия: "Army brigade" (Армейская бригада)\n- Пожарные: "Fire brigade" (Пожарная бригада)\n- Метафора: "Anti-smoking brigade" (Борцы с курением)',
    [
      { en: 'The fire brigade arrived within minutes to put out the fire.', ru: 'Пожарная бригада прибыла через несколько минут, чтобы потушить огонь.' },
      { en: 'He commands a tank brigade in the army.', ru: 'Он командует танковой бригадой в армии.' },
      { en: 'The kitchen brigade prepared dinner for huge crowd.', ru: 'Кухонная бригада приготовила ужин для огромной толпы.' },
      { en: 'An entire brigade was deployed to the border.', ru: 'Целая бригада была переброшена к границе.' }
    ]
),

createRichWord('c1_brisk', 'Brisk', '/brɪsk/', 'бриск', 'Живой / Проворный / Свежий', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Быстрый и энергичный; или холодный, но приятный (о погоде).',
    '- Движение: "Brisk walk" (Быстрая ходьба)\n- Бизнес: "Brisk trade" (Бойкая торговля)\n- Погода: "Brisk morning" (Свежее утро)',
    [
      { en: 'We went for a brisk walk in the park to warm up.', ru: 'Мы пошли на быструю прогулку в парк, чтобы согреться.' },
      { en: 'Business was brisk at the market today.', ru: 'Торговля на рынке сегодня была бойкой.' },
      { en: 'She answered in a brisk, efficient manner.', ru: 'Она ответила в живой, деловой манере.' },
      { en: 'The morning air was cool and brisk.', ru: 'Утренний воздух был прохладным и свежим.' }
    ]
),

createRichWord('c1_bulge', 'Bulge', '/bʌldʒ/', 'балд’ж', 'Выпуклость / Выпирать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Округлая припухлость, выступающая наружу; или внезапное увеличение числа.',
    '- Форма: "Bulge in the pocket" (Выпуклость в кармане)\n- Тело: "Eye bulge" (Глаза на выкате)\n- Количество: "Population bulge" (Демографический взрыв)',
    [
      { en: 'The gun made a noticeable bulge under his jacket.', ru: 'Пистолет создавал заметную выпуклость под его курткой.' },
      { en: 'His eyes seemed to bulge with surprise.', ru: 'Его глаза, казалось, вылезли из орбит от удивления.' },
      { en: 'There was a sudden bulge in demand for masks.', ru: 'Произошел внезапный всплеск спроса на маски.' },
      { en: 'The wall started to bulge outwards due to pressure.', ru: 'Стена начала выпирать наружу из-за давления.' }
    ]
),

createRichWord('c1_bulletin', 'Bulletin', '/ˈbʊlətɪn/', 'булетин', 'Бюллетень / Сводка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Короткое официальное заявление или сводка новостей.',
    '- Новости: "News bulletin" (Сводка новостей)\n- Информация: "Weather bulletin" (Сводка погоды)\n- Доска: "Bulletin board" (Доска объявлений)',
    [
      { en: 'We interrupted this program for a special news bulletin.', ru: 'Мы прервали эту программу для специальной сводки новостей.' },
      { en: 'Check the bulletin board for new job postings.', ru: 'Проверьте доску объявлений на наличие новых вакансий.' },
      { en: 'The medical bulletin says the president is recovering.', ru: 'Медицинский бюллетень гласит, что президент выздоравливает.' },
      { en: 'She reads the daily bulletin to stay informed.', ru: 'Она читает ежедневную сводку, чтобы быть в курсе.' }
    ]
),

createRichWord('c1_carbohydrate', 'Carbohydrate', '/kɑːbəʊˈhaɪdreɪt/', 'карбохайдрейт', 'Углевод', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Вещество в еде (сахар, крахмал), дающее энергию.',
    '- Еда: "Rich in carbohydrates" (Богатый углеводами)\n- Диета: "Low carbohydrate" (Низкоуглеводный)\n- Спорт: "Carbohydrate loading" (Углеводная загрузка)',
    [
      { en: 'Bread, pasta, and potatoes are rich in carbohydrates.', ru: 'Хлеб, макароны и картофель богаты углеводами.' },
      { en: 'Athletes need carbohydrates for energy before a race.', ru: 'Спортсменам нужны углеводы для энергии перед гонкой.' },
      { en: 'She is on a diet that restricts carbohydrates.', ru: 'Она на диете, ограничивающей углеводы.' },
      { en: 'Carbohydrates are broken down into glucose by the body.', ru: 'Углеводы расщепляются организмом до глюкозы.' }
    ]
),

createRichWord('c1_cardinal', 'Cardinal', '/ˈkɑːdɪn(ə)l/', 'кадинл', 'Кардинальный / Кардинал', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Главный, основной (прил.); или священник высокого ранга (сущ.).',
    '- Важность: "Cardinal rule" (Главное правило)\n- Религия: "Cardinal sin" (Смертный грех)\n- Направление: "Cardinal points" (Стороны света)',
    [
      { en: 'Respect for others is a cardinal principle of this school.', ru: 'Уважение к другим — это кардинальный принцип этой школы.' },
      { en: 'The four cardinal points are North, South, East, and West.', ru: 'Четыре стороны света — это Север, Юг, Восток и Запад.' },
      { en: 'The cardinals gathered in Rome to elect a new Pope.', ru: 'Кардиналы собрались в Риме, чтобы избрать нового Папу.' },
      { en: 'He committed the cardinal error of forgetting her name.', ru: 'Он совершил грубейшую (кардинальную) ошибку, забыв ее имя.' }
    ]
),

createRichWord('c1_causal', 'Causal', '/ˈkɔːz(ə)l/', 'козл', 'Причинный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к причине и следствию.',
    '- Связь: "Causal link" (Причинная связь)\n- Отношения: "Causal relationship" (Причинно-следственная связь)\n- Фактор: "Causal factor" (Причинный фактор)',
    [
      { en: 'Scientists found a causal link between smoking and cancer.', ru: 'Ученые обнаружили причинную связь между курением и раком.' },
      { en: 'It is hard to establish a causal relationship in this case.', ru: 'В данном случае трудно установить причинно-следственную связь.' },
      { en: 'We need to investigate the causal factors of the accident.', ru: 'Нам нужно расследовать причинные факторы аварии.' },
      { en: 'Correlation does not imply a causal connection.', ru: 'Корреляция не подразумевает причинной связи.' }
    ]
  ),
createRichWord('c1_abduct', 'Abduct', '/əbˈdʌkt/', 'эбдакт', 'Похищать', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Увести человека силой или обманом (синоним kidnap).',
    '- Преступление: "Abduct a child" (Похитить ребенка)\n- НЛО: "Alien abduction" (Похищение инопланетянами)\n- Действие: "Attempt to abduct" (Попытаться похитить)',
    [
      { en: 'The police are searching for the man who tried to abduct the boy.', ru: 'Полиция ищет мужчину, который пытался похитить мальчика.' },
      { en: 'He claimed he was abducted by aliens.', ru: 'Он утверждал, что его похитили инопланетяне.' },
      { en: 'The millionaire was abducted for a huge ransom.', ru: 'Миллионера похитили ради огромного выкупа.' },
      { en: 'Security cameras captured the moment she was abducted.', ru: 'Камеры наблюдения запечатлели момент, когда ее похитили.' }
    ]
),

createRichWord('c1_abide', 'Abide', '/əˈbaɪd/', 'эбайд', 'Соблюдать / Терпеть', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Принимать или действовать в соответствии с правилом (abide by); или терпеть кого-то (can\'t abide).',
    '- Закон: "Abide by the law" (Соблюдать закон)\n- Решение: "Abide by the decision" (Подчиниться решению)\n- Неприязнь: "Can\'t abide him" (Терпеть его не могу)',
    [
      { en: 'We must abide by the rules of the competition.', ru: 'Мы должны соблюдать правила соревнования.' },
      { en: 'She cannot abide people who are always late.', ru: 'Она терпеть не может людей, которые всегда опаздывают.' },
      { en: 'Members agreed to abide by the committee\'s vote.', ru: 'Члены согласились подчиниться голосованию комитета.' },
      { en: 'If you join the club, you have to abide by its regulations.', ru: 'Если вы вступаете в клуб, вы должны соблюдать его устав.' }
    ]
),

createRichWord('c1_abolition', 'Abolition', '/ˌæbəˈlɪʃn/', 'эбэлишн', 'Отмена (закона)', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Официальное прекращение действия закона или системы (например, рабства или смертной казни).',
    '- История: "Abolition of slavery" (Отмена рабства)\n- Закон: "Abolition of the death penalty" (Отмена смертной казни)\n- Движение: "Call for abolition" (Призывать к отмене)',
    [
      { en: 'The abolition of slavery was a major historical event.', ru: 'Отмена рабства была крупным историческим событием.' },
      { en: 'Campaigners are fighting for the abolition of nuclear weapons.', ru: 'Активисты борются за ликвидацию ядерного оружия.' },
      { en: 'The abolition of the tax was welcomed by the public.', ru: 'Отмена налога была приветствована общественностью.' },
      { en: 'He supports the complete abolition of animal testing.', ru: 'Он поддерживает полную отмену тестирования на животных.' }
    ]
),

createRichWord('c1_acclaim', 'Acclaim', '/əˈkleɪm/', 'эклейм', 'Признание / Шумно приветствовать', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Публичная похвала и одобрение (сущ.); или приветствовать с энтузиазмом (гл.).',
    '- Успех: "Critical acclaim" (Признание критиков)\n- Слава: "International acclaim" (Международное признание)\n- Действие: "Widely acclaimed" (Широко признанный)',
    [
      { en: 'The movie received critical acclaim for its screenplay.', ru: 'Фильм получил признание критиков за сценарий.' },
      { en: 'She deserves all the acclaim she is getting.', ru: 'Она заслуживает всей похвалы, которую получает.' },
      { en: 'His new novel was acclaimed as a masterpiece.', ru: 'Его новый роман был провозглашен шедевром.' },
      { en: 'The scientist won international acclaim for his discovery.', ru: 'Ученый получил международное признание за свое открытие.' }
    ]
),

createRichWord('c1_accord', 'Accord', '/əˈkɔːd/', 'экод', 'Соглашение / Соответствие', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Официальное соглашение или договор; или согласие.',
    '- Политика: "Peace accord" (Мирное соглашение)\n- Мнение: "In accord with" (В соответствии с)\n- Действие: "Of own accord" (По собственной воле)',
    [
      { en: 'The two countries signed a peace accord yesterday.', ru: 'Две страны подписали мирное соглашение вчера.' },
      { en: 'His views are not in accord with the party policy.', ru: 'Его взгляды не соответствуют политике партии.' },
      { en: 'She left the company of her own accord.', ru: 'Она ушла из компании по собственной воле.' },
      { en: 'We hope to reach an accord on this matter soon.', ru: 'Мы надеемся вскоре достичь соглашения по этому вопросу.' }
    ]
),

createRichWord('c1_adequacy', 'Adequacy', '/ˈædɪkwəsi/', 'эдиквэси', 'Адекватность / Достаточность', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Состояние, когда чего-то достаточно или оно подходит для определенной цели.',
    '- Качество: "Adequacy of resources" (Достаточность ресурсов)\n- Сомнение: "Question the adequacy" (Ставить под сомнение адекватность)\n- Стандарт: "Standard of adequacy" (Стандарт достаточности)',
    [
      { en: 'Critics questioned the adequacy of the safety measures.', ru: 'Критики поставили под сомнение достаточность мер безопасности.' },
      { en: 'There are doubts about the adequacy of current funding.', ru: 'Существуют сомнения по поводу достаточности текущего финансирования.' },
      { en: 'We need to check the adequacy of the water supply.', ru: 'Нам нужно проверить достаточность водоснабжения.' },
      { en: 'The adequacy of his training was evident in the crisis.', ru: 'Адекватность (достаточность) его подготовки была очевидна в кризисной ситуации.' }
    ]
),

createRichWord('c1_admiral', 'Admiral', '/ˈædmərəl/', 'эдмирэл', 'Адмирал', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Офицер очень высокого ранга во флоте.',
    '- Флот: "Rear admiral" (Контр-адмирал)\n- Звание: "Rank of admiral" (Звание адмирала)\n- Командование: "Fleet admiral" (Адмирал флота)',
    [
      { en: 'The admiral commanded the fleet during the battle.', ru: 'Адмирал командовал флотом во время битвы.' },
      { en: 'He was promoted to the rank of admiral last year.', ru: 'В прошлом году его повысили до звания адмирала.' },
      { en: 'Admiral Nelson is a famous figure in British history.', ru: 'Адмирал Нельсон — известная фигура в британской истории.' },
      { en: 'The admiral inspected the ships in the harbor.', ru: 'Адмирал осмотрел корабли в гавани.' }
    ]
),

createRichWord('c1_adorn', 'Adorn', '/əˈdɔːn/', 'эдон', 'Украшать', ProficiencyLevel.C1, 'verb', 'Low', 'Literary',
    'Сделать что-то более привлекательным, добавив украшения.',
    '- Декор: "Adorn with flowers" (Украсить цветами)\n- Стена: "Adorn the wall" (Украсить стену)\n- Праздник: "Richly adorned" (Богато украшенный)',
    [
      { en: 'Paintings of ancestors adorned the hallway walls.', ru: 'Картины предков украшали стены коридора.' },
      { en: 'She likes to adorn herself with expensive jewelry.', ru: 'Она любит украшать себя дорогими ювелирными изделиями.' },
      { en: 'The Christmas tree was adorned with lights and baubles.', ru: 'Рождественская елка была украшена огнями и шарами.' },
      { en: 'Garlands of flowers adorned the wedding car.', ru: 'Гирлянды цветов украшали свадебную машину.' }
    ]
),

createRichWord('c1_adversary', 'Adversary', '/ˈædvəsəri/', 'эдвэсэри', 'Противник', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Человек или группа, противостоящая другому (враг, оппонент).',
    '- Конфликт: "Political adversary" (Политический противник)\n- Спорт: "Worthy adversary" (Достойный противник)\n- Битва: "Face an adversary" (Столкнуться с противником)',
    [
      { en: 'He defeated his old adversary in the tennis match.', ru: 'Он победил своего старого противника в теннисном матче.' },
      { en: 'They were once friends, but now they are adversaries.', ru: 'Когда-то они были друзьями, но теперь они противники.' },
      { en: 'Respect your adversary, even if you disagree.', ru: 'Уважай своего противника, даже если ты не согласен.' },
      { en: 'The country viewed its neighbor as a dangerous adversary.', ru: 'Страна рассматривала своего соседа как опасного противника.' }
    ]
),

createRichWord('c1_aerospace', 'Aerospace', '/ˈeərəʊspeɪs/', 'эроуспейс', 'Аэрокосмический', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Отрасль, связанная с производством самолетов и космических аппаратов.',
    '- Индустрия: "Aerospace industry" (Аэрокосмическая промышленность)\n- Наука: "Aerospace engineering" (Аэрокосмическая инженерия)\n- Технологии: "Aerospace technology" (Аэрокосмические технологии)',
    [
      { en: 'He works as an engineer for a large aerospace company.', ru: 'Он работает инженером в крупной аэрокосмической компании.' },
      { en: 'The aerospace industry is vital to the economy.', ru: 'Аэрокосмическая промышленность жизненно важна для экономики.' },
      { en: 'Aerospace technology has advanced rapidly in recent years.', ru: 'Аэрокосмические технологии быстро развивались в последние годы.' },
      { en: 'They are developing new materials for aerospace applications.', ru: 'Они разрабатывают новые материалы для аэрокосмического применения.' }
    ]
),

createRichWord('c1_affluent', 'Affluent', '/ˈæfluənt/', 'эфлуэнт', 'Богатый / Зажиточный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Имеющий много денег или имущества; богатый.',
    '- Общество: "Affluent society" (Богатое общество)\n- Место: "Affluent neighborhood" (Зажиточный район)\n- Люди: "Affluent family" (Богатая семья)',
    [
      { en: 'She grew up in an affluent neighborhood in London.', ru: 'Она выросла в зажиточном районе Лондона.' },
      { en: 'Affluent consumers are buying more luxury goods.', ru: 'Богатые потребители покупают больше предметов роскоши.' },
      { en: 'The country became more affluent after the oil boom.', ru: 'Страна стала более богатой после нефтяного бума.' },
      { en: 'He comes from a very affluent background.', ru: 'Он происходит из очень обеспеченной среды.' }
    ]
),

createRichWord('c1_algae', 'Algae', '/ˈælɡiː/', 'элджи', 'Водоросли', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Простые растения, не имеющие листьев или стеблей, растущие в воде.',
    '- Природа: "Green algae" (Зеленые водоросли)\n- Море: "Marine algae" (Морские водоросли)\n- Цветение: "Algae bloom" (Цветение водорослей)',
    [
      { en: 'The pond was covered in green algae.', ru: 'Пруд был покрыт зелеными водорослями.' },
      { en: 'Some types of algae can be eaten as food.', ru: 'Некоторые виды водорослей можно употреблять в пищу.' },
      { en: 'High temperatures caused the algae to grow rapidly.', ru: 'Высокие температуры вызвали быстрый рост водорослей.' },
      { en: 'Fish feed on small insects and algae.', ru: 'Рыбы питаются мелкими насекомыми и водорослями.' }
    ]
),

createRichWord('c1_alleviate', 'Alleviate', '/əˈliːvieɪt/', 'эливиейт', 'Облегчать (боль, страдания)', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Сделать проблему или боль менее серьезной.',
    '- Боль: "Alleviate pain" (Облегчить боль)\n- Проблема: "Alleviate poverty" (Смягчить бедность)\n- Стресс: "Alleviate stress" (Снять стресс)',
    [
      { en: 'The doctor gave him drugs to alleviate the pain.', ru: 'Врач дал ему лекарства, чтобы облегчить боль.' },
      { en: 'Measures were taken to alleviate the traffic congestion.', ru: 'Были приняты меры для облегчения транспортных заторов.' },
      { en: 'Charities work to alleviate suffering in war zones.', ru: 'Благотворительные организации работают над облегчением страданий в зонах военных действий.' },
      { en: 'A hot bath can help alleviate muscle tension.', ru: 'Горячая ванна может помочь снять мышечное напряжение.' }
    ]
),

createRichWord('c1_allot', 'Allot', '/əˈlɒt/', 'элот', 'Выделять / Распределять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Дать (время, деньги, обязанности) кому-то как долю или задачу.',
    '- Время: "Allot time" (Выделить время)\n- Деньги: "Allot funds" (Выделить средства)\n- Место: "Allot a seat" (Предоставить место)',
    [
      { en: 'The teacher allotted thirty minutes for the test.', ru: 'Учитель выделил тридцать минут на тест.' },
      { en: 'How much money has been allotted to the project?', ru: 'Сколько денег было выделено на проект?' },
      { en: 'They allotted a parking space to each employee.', ru: 'Они выделили парковочное место каждому сотруднику.' },
      { en: 'We need to allot tasks evenly among the team.', ru: 'Нам нужно равномерно распределить задачи между членами команды.' }
    ]
),

createRichWord('c1_ambush', 'Ambush', '/ˈæmbʊʃ/', 'эмбуш', 'Засада', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Внезапная атака из скрытого места.',
    '- Война: "Lay an ambush" (Устроить засаду)\n- Атака: "Ambush attack" (Нападение из засады)\n- Опасность: "Walk into an ambush" (Попасть в засаду)',
    [
      { en: 'The soldiers were killed in an enemy ambush.', ru: 'Солдаты были убиты во вражеской засаде.' },
      { en: 'The police set up an ambush to catch the gang.', ru: 'Полиция устроила засаду, чтобы поймать банду.' },
      { en: 'They waited in ambush for the convoy to pass.', ru: 'Они ждали в засаде, пока пройдет конвой.' },
      { en: 'He felt ambushed by the sudden difficult questions.', ru: 'Он почувствовал, что его застали врасплох (как в засаде) внезапными сложными вопросами.' }
    ]
),

createRichWord('c1_amenity', 'Amenity', '/əˈmiːnəti/', 'эминэти', 'Удобство / Благоустройство', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Полезная или приятная функция места (бассейн, парк, магазин).',
    '- Отель: "Hotel amenities" (Удобства отеля)\n- Город: "Local amenities" (Местные удобства)\n- Жизнь: "Basic amenities" (Базовые удобства)',
    [
      { en: 'The hotel offers amenities such as a gym and a spa.', ru: 'Отель предлагает такие удобства, как тренажерный зал и спа.' },
      { en: 'The town lacks basic amenities like a library.', ru: 'В городе не хватает базовых удобств, таких как библиотека.' },
      { en: 'Close proximity to local amenities increases house prices.', ru: 'Близость к местным удобствам повышает цены на жилье.' },
      { en: 'We enjoy the amenities of modern city life.', ru: 'Мы наслаждаемся удобствами современной городской жизни.' }
    ]
),

createRichWord('c1_anarchy', 'Anarchy', '/ˈænəki/', 'энэки', 'Анархия', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Ситуация, когда нет правительства, порядка или контроля.',
    '- Политика: "State of anarchy" (Состояние анархии)\n- Хаос: "Descend into anarchy" (Погрузиться в анархию)\n- Контроль: "Total anarchy" (Полная анархия)',
    [
      { en: 'The country descended into anarchy after the revolution.', ru: 'Страна погрузилась в анархию после революции.' },
      { en: 'Without laws, there would be total anarchy.', ru: 'Без законов была бы полная анархия.' },
      { en: 'Police restored order and ended the anarchy on the streets.', ru: 'Полиция восстановила порядок и прекратила анархию на улицах.' },
      { en: 'Fear of anarchy kept the dictator in power.', ru: 'Страх перед анархией удерживал диктатора у власти.' }
    ]
),

createRichWord('c1_antiquity', 'Antiquity', '/ænˈtɪkwəti/', 'энтиквэти', 'Древность / Античность', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Древнее прошлое, особенно период греков и римлян.',
    '- История: "Classical antiquity" (Классическая античность)\n- Предмет: "Object of antiquity" (Предмет старины)\n- Время: "Great antiquity" (Глубокая древность)',
    [
      { en: 'The statue dates back to Roman antiquity.', ru: 'Статуя восходит к римской античности.' },
      { en: 'Antiquity is a fascinating period of history to study.', ru: 'Античность — увлекательный период истории для изучения.' },
      { en: 'The museum holds many treasures from antiquity.', ru: 'В музее хранится много сокровищ древности.' },
      { en: 'This custom is of great antiquity.', ru: 'Этот обычай очень древний.' }
    ]
),

createRichWord('c1_apartheid', 'Apartheid', '/əˈpɑːtaɪt/', 'эпатейт', 'Апартеид', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Бывшая политическая система в Южной Африке, где люди были разделены по расовому признаку.',
    '- История: "End of apartheid" (Конец апартеида)\n- Политика: "Apartheid regime" (Режим апартеида)\n- Борьба: "Anti-apartheid movement" (Движение против апартеида)',
    [
      { en: 'Nelson Mandela fought against apartheid in South Africa.', ru: 'Нельсон Мандела боролся против апартеида в Южной Африке.' },
      { en: 'The apartheid laws segregated people based on race.', ru: 'Законы апартеида разделяли людей по расовому признаку.' },
      { en: 'The end of apartheid brought democracy to the country.', ru: 'Конец апартеида принес демократию в страну.' },
      { en: 'Many nations imposed sanctions on the apartheid regime.', ru: 'Многие страны ввели санкции против режима апартеида.' }
    ]
),

createRichWord('c1_aquatic', 'Aquatic', '/əˈkwætɪk/', 'эквэтик', 'Водный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Растущий или живущий в воде.',
    '- Природа: "Aquatic plants" (Водные растения)\n- Животные: "Aquatic animals" (Водные животные)\n- Спорт: "Aquatic sports" (Водные виды спорта)',
    [
      { en: 'Dolphins are intelligent aquatic mammals.', ru: 'Дельфины — умные водные млекопитающие.' },
      { en: 'Aquatic plants provide oxygen for the fish.', ru: 'Водные растения обеспечивают рыб кислородом.' },
      { en: 'Swimming is a popular aquatic sport.', ru: 'Плавание — популярный водный вид спорта.' },
      { en: 'The park features an aquatic center with several pools.', ru: 'В парке есть водный центр с несколькими бассейнами.' }
    ]
),

createRichWord('c1_aristocrat', 'Aristocrat', '/ˈærɪstəkræt/', 'эристэкрэт', 'Аристократ', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, принадлежащий к высшему социальному классу, часто с титулом.',
    '- Общество: "Wealthy aristocrat" (Богатый аристократ)\n- История: "French aristocrats" (Французские аристократы)\n- Статус: "Born an aristocrat" (Рожденный аристократом)',
    [
      { en: 'The aristocrat lived in a large castle in the countryside.', ru: 'Аристократ жил в большом замке в сельской местности.' },
      { en: 'Many aristocrats lost their power during the revolution.', ru: 'Многие аристократы потеряли свою власть во время революции.' },
      { en: 'She acts like an aristocrat, even though she is not.', ru: 'Она ведет себя как аристократка, хотя таковой не является.' },
      { en: 'The party was attended by royals and aristocrats.', ru: 'На вечеринке присутствовали члены королевской семьи и аристократы.' }
    ]
),

createRichWord('c1_aroma', 'Aroma', '/əˈrəʊmə/', 'эроумэ', 'Аромат', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Сильный, приятный запах (часто еды или напитков).',
    '- Запах: "Coffee aroma" (Аромат кофе)\n- Описание: "Pleasant aroma" (Приятный аромат)\n- Кухня: "Spicy aroma" (Пряный аромат)',
    [
      { en: 'The aroma of fresh coffee filled the kitchen.', ru: 'Аромат свежего кофе наполнил кухню.' },
      { en: 'I love the aroma of baking bread.', ru: 'Я люблю аромат выпекаемого хлеба.' },
      { en: 'The flowers have a sweet and delicate aroma.', ru: 'Цветы имеют сладкий и нежный аромат.' },
      { en: 'A rich aroma came from the pot of soup.', ru: 'Насыщенный аромат исходил от кастрюли с супом.' }
    ]
),

createRichWord('c1_arthritis', 'Arthritis', '/ɑːˈθraɪtɪs/', 'асрайтис', 'Артрит', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Болезнь, вызывающая боль и отек в суставах.',
    '- Здоровье: "Suffer from arthritis" (Страдать артритом)\n- Боль: "Rheumatoid arthritis" (Ревматоидный артрит)\n- Лечение: "Treat arthritis" (Лечить артрит)',
    [
      { en: 'Her grandmother suffers from arthritis in her hands.', ru: 'Ее бабушка страдает артритом рук.' },
      { en: 'Arthritis can make it difficult to walk or hold things.', ru: 'Артрит может затруднить ходьбу или удержание предметов.' },
      { en: 'There is no cure for arthritis, but medication helps.', ru: 'Лекарства от артрита нет, но медикаменты помогают.' },
      { en: 'Cold weather often makes his arthritis worse.', ru: 'Холодная погода часто ухудшает его артрит.' }
    ]
),

createRichWord('c1_ascent', 'Ascent', '/əˈsent/', 'эсент', 'Подъем / Восхождение', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Действие движения вверх или подъема на гору.',
    '- Гора: "Steep ascent" (Крутой подъем)\n- Успех: "Ascent to power" (Восхождение к власти)\n- Действие: "Make an ascent" (Совершить восхождение)',
    [
      { en: 'The ascent of Mount Everest is very dangerous.', ru: 'Восхождение на Эверест очень опасно.' },
      { en: 'The plane began its steep ascent into the clouds.', ru: 'Самолет начал крутой подъем в облака.' },
      { en: 'His rapid ascent to the presidency surprised everyone.', ru: 'Его стремительное восхождение к президентству удивило всех.' },
      { en: 'We started our ascent early in the morning.', ru: 'Мы начали наш подъем рано утром.' }
    ]
),

createRichWord('c1_ashore', 'Ashore', '/əˈʃɔː/', 'эшо', 'На берег / К берегу', ProficiencyLevel.C1, 'adv', 'Low', 'Neutral',
    'К берегу или на берег (с воды).',
    '- Море: "Come ashore" (Сойти на берег)\n- Волна: "Wash ashore" (Вымыть на берег)\n- Путешествие: "Go ashore" (Сойти на берег)',
    [
      { en: 'The sailors went ashore to find food and water.', ru: 'Моряки сошли на берег, чтобы найти еду и воду.' },
      { en: 'Debris from the ship washed ashore after the storm.', ru: 'Обломки корабля вымыло на берег после шторма.' },
      { en: 'We swam ashore from the boat.', ru: 'Мы поплыли к берегу от лодки.' },
      { en: 'The passengers were happy to be safely ashore.', ru: 'Пассажиры были счастливы оказаться в безопасности на берегу.' }
    ]
),

createRichWord('c1_assorted', 'Assorted', '/əˈsɔːtɪd/', 'эсотид', 'Разнообразный / Ассорти', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Состоящий из различных типов или сортов.',
    '- Еда: "Box of assorted chocolates" (Коробка шоколадного ассорти)\n- Вещи: "Assorted goods" (Различные товары)\n- Смесь: "Assorted colors" (Разные цвета)',
    [
      { en: 'The tray contained assorted cheeses and fruits.', ru: 'На подносе были различные сыры и фрукты.' },
      { en: 'We sell assorted sizes and colors of shirts.', ru: 'Мы продаем рубашки разных размеров и цветов.' },
      { en: 'He collected assorted stamps from around the world.', ru: 'Он коллекционировал разнообразные марки со всего мира.' },
      { en: 'The jar was filled with assorted candies.', ru: 'Банка была наполнена конфетами ассорти.' }
    ]
),

createRichWord('c1_attentive', 'Attentive', '/əˈtentɪv/', 'этентив', 'Внимательный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Слушающий или наблюдающий внимательно; заботливый.',
    '- Слушатель: "Attentive listener" (Внимательный слушатель)\n- Забота: "Attentive to needs" (Внимательный к потребностям)\n- Аудитория: "Attentive audience" (Внимательная аудитория)',
    [
      { en: 'The students were very attentive during the lecture.', ru: 'Студенты были очень внимательны во время лекции.' },
      { en: 'He is an attentive husband who remembers birthdays.', ru: 'Он внимательный муж, который помнит дни рождения.' },
      { en: 'Please be attentive to the safety instructions.', ru: 'Пожалуйста, будьте внимательны к инструкциям по безопасности.' },
      { en: 'The waiter was polite and attentive throughout the meal.', ru: 'Официант был вежлив и внимателен на протяжении всей трапезы.' }
    ]
),

createRichWord('c1_augment', 'Augment', '/ɔːɡˈment/', 'огмент', 'Увеличивать / Прибавлять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сделать что-то большим, добавив к этому; усилить.',
    '- Доход: "Augment income" (Увеличить доход)\n- Сила: "Augment reality" (Дополнить реальность)\n- Количество: "Augment the supply" (Увеличить запас)',
    [
      { en: 'She took a second job to augment her income.', ru: 'Она устроилась на вторую работу, чтобы увеличить свой доход.' },
      { en: 'Technology can augment human capabilities.', ru: 'Технологии могут усилить человеческие возможности.' },
      { en: 'The army was augmented by reserve troops.', ru: 'Армия была усилена резервными войсками.' },
      { en: 'He used illustrations to augment the text.', ru: 'Он использовал иллюстрации, чтобы дополнить текст.' }
    ]
  ),
createRichWord('c1_babe', 'Babe', '/beɪb/', 'бэйб', 'Крошка / Малыш', ProficiencyLevel.C1, 'noun', 'Medium', 'Informal',
    'Ласковое обращение к любимому человеку (сленг); или (устар.) младенец.',
    '- Обращение: "Hey babe" (Эй, детка/малыш)\n- Ребенок: "Babe in arms" (Младенец на руках)\n- Сленг: "What a babe" (Какая красотка)',
    [
      { en: 'Hey babe, are you ready to go to the cinema?', ru: 'Эй, малыш, ты готова идти в кино?' },
      { en: 'She is such a babe, everyone looks at her.', ru: 'Она такая красотка, все на нее смотрят.' },
      { en: 'The forest was silent, like a babe asleep.', ru: 'Лес был тих, как спящий младенец.' },
      { en: 'Don\'t worry babe, everything will be fine.', ru: 'Не волнуйся, детка, все будет хорошо.' }
    ]
),

createRichWord('c1_bachelor', 'Bachelor', '/ˈbætʃələ/', 'бэчэлэ', 'Холостяк / Бакалавр', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Мужчина, который никогда не был женат; или первая ученая степень.',
    '- Статус: "Eligible bachelor" (Завидный холостяк)\n- Образование: "Bachelor\'s degree" (Степень бакалавра)\n- Жизнь: "Bachelor pad" (Холостяцкая квартира)',
    [
      { en: 'He is a confirmed bachelor and enjoys living alone.', ru: 'Он убежденный холостяк и любит жить один.' },
      { en: 'She has a Bachelor of Arts degree in History.', ru: 'У нее степень бакалавра искусств по истории.' },
      { en: 'The magazine named him the most eligible bachelor of the year.', ru: 'Журнал назвал его самым завидным холостяком года.' },
      { en: 'His bachelor party was held in Las Vegas.', ru: 'Его мальчишник проходил в Лас-Вегасе.' }
    ]
),

createRichWord('c1_banish', 'Banish', '/ˈbænɪʃ/', 'бэниш', 'Изгонять / Прогонять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Официально выслать кого-то из страны; или прогнать мысли/страхи.',
    '- Наказание: "Banish from the kingdom" (Изгнать из королевства)\n- Мысли: "Banish the thought" (Отогнать мысль)\n- Место: "Banish to an island" (Сослать на остров)',
    [
      { en: 'The king decided to banish the traitor from the land.', ru: 'Король решил изгнать предателя из страны.' },
      { en: 'She tried to banish all negative thoughts from her mind.', ru: 'Она пыталась прогнать все негативные мысли из головы.' },
      { en: 'He was banished to a distant island for his crimes.', ru: 'За свои преступления он был сослан на далекий остров.' },
      { en: 'They managed to banish fear and continue the mission.', ru: 'Им удалось побороть (прогнать) страх и продолжить миссию.' }
    ]
),

createRichWord('c1_banquet', 'Banquet', '/ˈbæŋkwɪt/', 'бэнквит', 'Банкет / Пир', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Официальный ужин для большого количества людей, обычно с речами.',
    '- Событие: "Wedding banquet" (Свадебный банкет)\n- Еда: "State banquet" (Государственный банкет)\n- Зал: "Banquet hall" (Банкетный зал)',
    [
      { en: 'A grand banquet was held in honor of the visiting president.', ru: 'В честь визита президента был устроен грандиозный банкет.' },
      { en: 'The wedding banquet included five different courses.', ru: 'Свадебный банкет включал пять разных блюд.' },
      { en: 'Hundreds of guests attended the awards banquet.', ru: 'Сотни гостей посетили банкет по случаю награждения.' },
      { en: 'They rented a large banquet hall for the celebration.', ru: 'Они арендовали большой банкетный зал для празднования.' }
    ]
),

createRichWord('c1_beware', 'Beware', '/bɪˈweə/', 'бивээ', 'Остерегаться', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Быть осторожным и внимательным к опасности (обычно в повелительном наклонении).',
    '- Предупреждение: "Beware of the dog" (Осторожно, злая собака)\n- Совет: "Beware of pickpockets" (Остерегайтесь карманников)\n- Опасность: "Buyers beware" (Покупателям следует быть осторожными)',
    [
      { en: 'You should beware of icy roads in winter.', ru: 'Зимой следует остерегаться обледенелых дорог.' },
      { en: 'Beware of strangers offering free gifts.', ru: 'Остерегайтесь незнакомцев, предлагающих бесплатные подарки.' },
      { en: 'The sign on the gate said "Beware of the Dog".', ru: 'Табличка на воротах гласила "Осторожно, злая собака".' },
      { en: 'Tourists must beware of scams in crowded areas.', ru: 'Туристам следует остерегаться мошенничества в людных местах.' }
    ]
),

createRichWord('c1_bibliography', 'Bibliography', '/ˌbɪbliˈɒɡrəfi/', 'библиогрэфи', 'Библиография', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Список книг или статей, использованных при написании работы; или список книг автора.',
    '- Учеба: "Includes a bibliography" (Включает библиографию)\n- Исследование: "Reference bibliography" (Справочная библиография)\n- Список: "Selected bibliography" (Избранная библиография)',
    [
      { en: 'Please include a bibliography at the end of your essay.', ru: 'Пожалуйста, включите библиографию в конце вашего эссе.' },
      { en: 'The bibliography lists all the sources used in the research.', ru: 'В библиографии перечислены все источники, использованные в исследовании.' },
      { en: 'Checking the bibliography can help you find more information.', ru: 'Проверка библиографии может помочь вам найти больше информации.' },
      { en: 'He has an extensive bibliography of books on history.', ru: 'У него есть обширная библиография книг по истории.' }
    ]
),

createRichWord('c1_bluff', 'Bluff', '/blʌf/', 'блаф', 'Блеф / Блефовать', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Притворяться уверенным или знающим, чтобы обмануть кого-то; или крутой утес.',
    '- Обман: "Call someone\'s bluff" (Раскрыть чей-то блеф)\n- Игра: "He is bluffing" (Он блефует)\n- География: "Steep bluff" (Крутой утес)',
    [
      { en: 'I think he is bluffing; he doesn\'t really have the cards.', ru: 'Я думаю, он блефует; у него на самом деле нет карт.' },
      { en: 'She called his bluff and asked him to prove it.', ru: 'Она не поверила его блефу и попросила доказать это.' },
      { en: 'They stood on the edge of the bluff overlooking the ocean.', ru: 'Они стояли на краю утеса, глядя на океан.' },
      { en: 'It was just a bluff to get us to agree.', ru: 'Это был просто блеф, чтобы заставить нас согласиться.' }
    ]
),

createRichWord('c1_bum', 'Bum', '/bʌm/', 'бам', 'Бездельник / Зад (разг.)', ProficiencyLevel.C1, 'noun', 'Medium', 'Slang',
    'Человек без дома или работы (грубо); или задняя часть тела (ягодицы); или бездельничать.',
    '- Человек: "Beach bum" (Пляжный бездельник)\n- Тело: "Fall on your bum" (Упасть на зад)\n- Глагол: "Bum around" (Слоняться без дела)',
    [
      { en: 'He spent the summer living like a beach bum.', ru: 'Он провел лето, живя как пляжный бездельник.' },
      { en: 'The baby slipped and landed on his bum.', ru: 'Малыш поскользнулся и приземлился на попу.' },
      { en: 'Can I bum a cigarette from you?', ru: 'Могу я стрельнуть у тебя сигарету?' },
      { en: 'Stop bumming around and get a job.', ru: 'Хватит слоняться без дела, найди работу.' }
    ]
),

createRichWord('c1_bun', 'Bun', '/bʌn/', 'бан', 'Булочка / Пучок (волос)', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Маленький сладкий хлеб или пирожное; или прическа, когда волосы собраны в круг.',
    '- Еда: "Cinnamon bun" (Булочка с корицей)\n- Еда: "Hamburger bun" (Булочка для гамбургера)\n- Прическа: "Hair in a bun" (Волосы в пучке)',
    [
      { en: 'I bought a sticky cinnamon bun for breakfast.', ru: 'Я купил липкую булочку с корицей на завтрак.' },
      { en: 'She wore her hair in a tight bun for the interview.', ru: 'Она собрала волосы в тугой пучок для интервью.' },
      { en: 'We need to buy some burger buns for the barbecue.', ru: 'Нам нужно купить булочки для бургеров для барбекю.' },
      { en: 'The ballerina had a neat bun on top of her head.', ru: 'У балерины был аккуратный пучок на макушке.' }
    ]
),

createRichWord('c1_bungalow', 'Bungalow', '/ˈbʌŋɡələʊ/', 'бангэлоу', 'Бунгало / Одноэтажный дом', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Дом, у которого только один этаж.',
    '- Жилье: "Live in a bungalow" (Жить в бунгало)\n- Отпуск: "Beach bungalow" (Пляжное бунгало)\n- Недвижимость: "Detached bungalow" (Отдельно стоящий одноэтажный дом)',
    [
      { en: 'Elderly people often prefer living in a bungalow.', ru: 'Пожилые люди часто предпочитают жить в одноэтажном доме.' },
      { en: 'We rented a small bungalow near the beach for a week.', ru: 'Мы арендовали маленькое бунгало у пляжа на неделю.' },
      { en: 'The bungalow has a large garden at the back.', ru: 'У этого одноэтажного дома есть большой сад сзади.' },
      { en: 'They are building new bungalows on the edge of town.', ru: 'На окраине города строят новые бунгало.' }
    ]
  ),
createRichWord('c1_bunker', 'Bunker', '/ˈbʌŋkə/', 'банкэ', 'Бункер', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Укрепленное подземное укрытие; или песчаная ловушка в гольфе.',
    '- Защита: "Underground bunker" (Подземный бункер)\n- Война: "Military bunker" (Военный бункер)\n- Спорт: "Golf bunker" (Песчаный бункер в гольфе)',
    [
      { en: 'They hid in the bunker during the air raid.', ru: 'Они прятались в бункере во время авианалета.' },
      { en: 'The president was taken to a secure bunker.', ru: 'Президента отвели в безопасный бункер.' },
      { en: 'My golf ball landed in a sand bunker.', ru: 'Мой мяч для гольфа приземлился в песчаную ловушку.' },
      { en: 'The old concrete bunker is from the Second World War.', ru: 'Этот старый бетонный бункер времен Второй мировой войны.' }
    ]
  ),
createRichWord('c1_abate', 'Abate', '/əˈbeɪt/', 'эбэйт', 'Утихать / Ослабевать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Становиться менее сильным, интенсивным или серьезным (о ветре, боли, шторме).',
    '- Погода: "Storm abated" (Шторм утих)\n- Боль: "Pain abates" (Боль утихает)\n- Эмоции: "Anger abated" (Гнев утих)',
    [
      { en: 'We waited for the storm to abate before leaving.', ru: 'Мы ждали, пока шторм утихнет, прежде чем уйти.' },
      { en: 'The pain in his leg finally began to abate.', ru: 'Боль в его ноге наконец начала утихать.' },
      { en: 'Steps are being taken to abate pollution.', ru: 'Принимаются меры для снижения (ослабления) загрязнения.' },
      { en: 'Her anger abated when she heard his explanation.', ru: 'Ее гнев утих, когда она услышала его объяснение.' }
    ]
),

createRichWord('c1_aborigine', 'Aborigine', '/ˌæbəˈrɪdʒɪni/', 'эбэриджини', 'Абориген', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Представитель коренного населения (часто относится к коренным жителям Австралии, хотя сейчас предпочитают term "Aboriginal person").',
    '- Люди: "Australian Aborigine" (Австралийский абориген)\n- Культура: "Aborigine art" (Искусство аборигенов)\n- История: "Native Aborigine" (Коренной житель)',
    [
      { en: 'The Aborigine shared stories about the Dreamtime.', ru: 'Абориген поделился историями о Времени сновидений.' },
      { en: 'We learned about the culture of the Australian Aborigines.', ru: 'Мы узнали о культуре австралийских аборигенов.' },
      { en: 'He is a descendant of an Australian Aborigine.', ru: 'Он потомок австралийского аборигена.' },
      { en: 'The term "Aborigine" is sometimes considered outdated.', ru: 'Термин "абориген" иногда считается устаревшим.' }
    ]
),

createRichWord('c1_accentuate', 'Accentuate', '/əkˈsentʃueɪt/', 'эксенчуэйт', 'Акцентировать / Подчеркивать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сделать что-то более заметным или важным.',
    '- Внешность: "Accentuate features" (Подчеркнуть черты лица)\n- Проблема: "Accentuate the positive" (Акцентировать позитивное)\n- Речь: "Accentuate a point" (Выделить мысль)',
    [
      { en: 'Her short hair accentuated her large eyes.', ru: 'Ее короткие волосы подчеркивали ее большие глаза.' },
      { en: 'The bright light accentuated the wrinkles on his face.', ru: 'Яркий свет подчеркнул морщины на его лице.' },
      { en: 'We should accentuate the positive aspects of the plan.', ru: 'Нам следует акцентировать внимание на положительных аспектах плана.' },
      { en: 'The crisis accentuated the gap between rich and poor.', ru: 'Кризис обострил (подчеркнул) разрыв между богатыми и бедными.' }
    ]
),

createRichWord('c1_adamant', 'Adamant', '/ˈædəmənt/', 'эдэмэнт', 'Непреклонный / Категоричный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Отказывающийся менять свое мнение или решение; твердый.',
    '- Мнение: "Adamant refusal" (Категорический отказ)\n- Поведение: "Remain adamant" (Оставаться непреклонным)\n- Убеждение: "Adamant that" (Твердо убежден, что)',
    [
      { en: 'He was adamant that he would not resign.', ru: 'Он был непреклонен в том, что не уйдет в отставку.' },
      { en: 'She remained adamant despite our pleas.', ru: 'Она оставалась непреклонной, несмотря на наши мольбы.' },
      { en: 'I tried to change his mind, but he was adamant.', ru: 'Я пытался переубедить его, но он был категоричен.' },
      { en: 'The government is adamant about enforcing the new law.', ru: 'Правительство твердо намерено обеспечить соблюдение нового закона.' }
    ]
),

createRichWord('c1_adept', 'Adept', '/əˈdept/', 'эдэпт', 'Знаток / Искусный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Очень умелый или опытный в чем-то (обычно "adept at").',
    '- Навык: "Adept at negotiation" (Искусный в переговорах)\n- Работа: "Adept mechanic" (Опытный механик)\n- Умение: "Become adept" (Стать экспертом)',
    [
      { en: 'She is very adept at dealing with difficult customers.', ru: 'Она очень искусно общается с трудными клиентами.' },
      { en: 'He became adept at fixing computers.', ru: 'Он стал знатоком в починке компьютеров.' },
      { en: 'Ideally, a leader should be adept in public speaking.', ru: 'В идеале лидер должен быть искусным в публичных выступлениях.' },
      { en: 'The politician is adept at avoiding direct questions.', ru: 'Политик искусно избегает прямых вопросов.' }
    ]
),

createRichWord('c1_admonish', 'Admonish', '/ədˈmɒnɪʃ/', 'эдмониш', 'Наставлять / Журить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сказать кому-то, что он сделал что-то неправильно (мягко упрекнуть); или настоятельно посоветовать.',
    '- Поведение: "Admonish for being late" (Пожурить за опоздание)\n- Совет: "Admonish to be careful" (Наставить быть осторожным)\n- Речь: "Gently admonish" (Мягко пожурить)',
    [
      { en: 'His mother admonished him for eating too quickly.', ru: 'Мать пожурила его за то, что он ел слишком быстро.' },
      { en: 'The teacher admonished the students to keep quiet.', ru: 'Учитель призвал (наставил) учеников соблюдать тишину.' },
      { en: 'He was admonished by the judge for his outburst.', ru: 'Судья сделал ему замечание за его вспышку.' },
      { en: 'I must admonish you against taking such risks.', ru: 'Я должен предостеречь вас от таких рисков.' }
    ]
),

createRichWord('c1_affidavit', 'Affidavit', '/ˌæfɪˈdeɪvɪt/', 'эфидейвит', 'Аффидевит / Письменное показание', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Письменное заявление, подтвержденное присягой, для использования в суде.',
    '- Закон: "Swear an affidavit" (Дать письменное показание под присягой)\n- Суд: "Sign an affidavit" (Подписать аффидевит)\n- Доказательство: "Submit an affidavit" (Представить письменное показание)',
    [
      { en: 'He swore an affidavit that the signature was genuine.', ru: 'Он дал письменное показание под присягой, что подпись была подлинной.' },
      { en: 'The witness provided a detailed affidavit to the court.', ru: 'Свидетель предоставил суду подробное письменное показание.' },
      { en: 'You need to sign the affidavit in front of a lawyer.', ru: 'Вам нужно подписать аффидевит в присутствии юриста.' },
      { en: 'False statements in an affidavit are a crime.', ru: 'Ложные заявления в аффидевите являются преступлением.' }
    ]
),

createRichWord('c1_allegory', 'Allegory', '/ˈæləɡəri/', 'элигэри', 'Аллегория', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'История или картина, в которой персонажи и события символизируют идеи о жизни (например, моральные или политические).',
    '- Литература: "Political allegory" (Политическая аллегория)\n- Смысл: "Use allegory" (Использовать аллегорию)\n- Пример: "Animal Farm is an allegory" (Скотный двор — это аллегория)',
    [
      { en: '"Animal Farm" is a famous political allegory.', ru: '"Скотный двор" — известная политическая аллегория.' },
      { en: 'The poem is an allegory of life and death.', ru: 'Это стихотворение — аллегория жизни и смерти.' },
      { en: 'He uses allegory to criticize the government.', ru: 'Он использует аллегорию, чтобы критиковать правительство.' },
      { en: 'The play can be read as an allegory for the Cold War.', ru: 'Пьесу можно прочитать как аллегорию Холодной войны.' }
    ]
),

createRichWord('c1_allude', 'Allude', '/əˈluːd/', 'элюд', 'Ссылаться / Намекать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Упоминать что-то или кого-то косвенно (обычно "allude to").',
    '- Разговор: "Allude to a problem" (Намекнуть на проблему)\n- Прошлое: "Allude to the past" (Сослаться на прошлое)\n- Речь: "He alluded to..." (Он упомянул...)',
    [
      { en: 'He alluded to problems with his boss but gave no details.', ru: 'Он намекнул на проблемы с начальником, но не дал подробностей.' },
      { en: 'The minister alluded to the possibility of tax cuts.', ru: 'Министр сослался на возможность снижения налогов.' },
      { en: 'She often alludes to her childhood in her books.', ru: 'В своих книгах она часто ссылается на свое детство.' },
      { en: 'I didn\'t understand who he was alluding to.', ru: 'Я не понял, на кого он намекал.' }
    ]
),

createRichWord('c1_alumni', 'Alumni', '/əˈlʌmnaɪ/', 'эламнай', 'Выпускники', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Бывшие студенты школы, колледжа или университета (множественное число от alumnus/alumna).',
    '- Университет: "University alumni" (Выпускники университета)\n- Встреча: "Alumni association" (Ассоциация выпускников)\n- Мероприятие: "Alumni reunion" (Встреча выпускников)',
    [
      { en: 'The college invited all its alumni to the celebration.', ru: 'Колледж пригласил всех своих выпускников на празднование.' },
      { en: 'Famous alumni include several presidents and actors.', ru: 'Среди известных выпускников есть несколько президентов и актеров.' },
      { en: 'He is an active member of the alumni association.', ru: 'Он активный член ассоциации выпускников.' },
      { en: 'Donations from alumni helped build the new library.', ru: 'Пожертвования выпускников помогли построить новую библиотеку.' }
    ]
),

createRichWord('c1_amass', 'Amass', '/əˈmæs/', 'эмэс', 'Накапливать / Собирать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Собрать большое количество чего-либо (денег, информации) в течение времени.',
    '- Деньги: "Amass a fortune" (Накопить состояние)\n- Данные: "Amass evidence" (Собрать доказательства)\n- Коллекция: "Amass knowledge" (Накопить знания)',
    [
      { en: 'He amassed a huge fortune in the oil business.', ru: 'Он сколотил огромное состояние на нефтяном бизнесе.' },
      { en: 'The lawyer amassed enough evidence to win the case.', ru: 'Адвокат собрал достаточно доказательств, чтобы выиграть дело.' },
      { en: 'She amassed a large collection of rare stamps.', ru: 'Она собрала большую коллекцию редких марок.' },
      { en: 'Clouds amassed on the horizon, signaling a storm.', ru: 'Облака скопились на горизонте, предвещая шторм.' }
    ]
),

createRichWord('c1_amino', 'Amino', '/əˈmiːnəʊ/', 'эминоу', 'Амино-', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к аминокислотам — строительным блокам белков.',
    '- Химия: "Amino acid" (Аминокислота)\n- Здоровье: "Essential amino acids" (Незаменимые аминокислоты)\n- Питание: "Amino supplements" (Аминокислотные добавки)',
    [
      { en: 'Proteins are made up of long chains of amino acids.', ru: 'Белки состоят из длинных цепей аминокислот.' },
      { en: 'There are nine essential amino acids that the body needs.', ru: 'Существует девять незаменимых аминокислот, необходимых организму.' },
      { en: 'Athletes often take amino acid supplements.', ru: 'Спортсмены часто принимают добавки с аминокислотами.' },
      { en: 'The structure of the amino group is important in chemistry.', ru: 'Структура аминогруппы важна в химии.' }
    ]
),

createRichWord('c1_antagonist', 'Antagonist', '/ænˈtæɡənɪst/', 'энтэгэнист', 'Антагонист / Противник', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, который противостоит кому-то; главный враг в истории.',
    '- История: "Main antagonist" (Главный антагонист)\n- Конфликт: "Political antagonist" (Политический противник)\n- Роль: "Play the antagonist" (Играть роль противника)',
    [
      { en: 'The Joker is the main antagonist in the Batman movie.', ru: 'Джокер — главный антагонист в фильме о Бэтмене.' },
      { en: 'He faced his antagonist in a final debate.', ru: 'Он встретился со своим противником в финальных дебатах.' },
      { en: 'Muscle antagonists work in pairs to move limbs.', ru: 'Мышцы-антагонисты работают парами для движения конечностей.' },
      { en: 'She saw him not as a colleague, but as an antagonist.', ru: 'Она видела в нем не коллегу, а противника.' }
    ]
),

createRichWord('c1_apathy', 'Apathy', '/ˈæpəθi/', 'эпэси', 'Апатия / Безразличие', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Отсутствие интереса, энтузиазма или озабоченности.',
    '- Чувство: "Public apathy" (Общественное безразличие)\n- Выборы: "Voter apathy" (Апатия избирателей)\n- Состояние: "Feeling of apathy" (Чувство апатии)',
    [
      { en: 'Voter apathy resulted in a very low turnout.', ru: 'Апатия избирателей привела к очень низкой явке.' },
      { en: 'There is a general sense of apathy among the students.', ru: 'Среди студентов царит общее чувство апатии.' },
      { en: 'We need to overcome public apathy towards climate change.', ru: 'Нам нужно преодолеть общественное безразличие к изменению климата.' },
      { en: 'His apathy towards his work worries his boss.', ru: 'Его безразличие к работе беспокоит его начальника.' }
    ]
),

createRichWord('c1_apocalypse', 'Apocalypse', '/əˈpɒkəlɪps/', 'эпокэлипс', 'Апокалипсис', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Полное разрушение мира; или очень серьезное событие/катастрофа.',
    '- Событие: "Nuclear apocalypse" (Ядерный апокалипсис)\n- Библия: "The Apocalypse" (Апокалипсис / Откровение)\n- Страх: "Fear the apocalypse" (Бояться апокалипсиса)',
    [
      { en: 'The movie depicts life after a zombie apocalypse.', ru: 'Фильм изображает жизнь после зомби-апокалипсиса.' },
      { en: 'Many people fear a nuclear apocalypse.', ru: 'Многие люди боятся ядерного апокалипсиса.' },
      { en: 'The book describes an environmental apocalypse.', ru: 'Книга описывает экологическую катастрофу (апокалипсис).' },
      { en: 'For the victims, the war was a personal apocalypse.', ru: 'Для жертв война стала личным апокалипсисом.' }
    ]
),

createRichWord('c1_appease', 'Appease', '/əˈpiːz/', 'эпиз', 'Умиротворять / Успокаивать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Успокоить кого-то, дав им то, что они хотят (часто с негативным оттенком).',
    '- Политика: "Appease the enemy" (Умиротворить врага)\n- Гнев: "Appease anger" (Усмирить гнев)\n- Толпа: "Appease the crowd" (Успокоить толпу)',
    [
      { en: 'The government tried to appease the protesters by lowering taxes.', ru: 'Правительство пыталось умиротворить протестующих, снизив налоги.' },
      { en: 'Chamberlain tried to appease Hitler to avoid war.', ru: 'Чемберлен пытался умиротворить Гитлера, чтобы избежать войны.' },
      { en: 'Nothing I do seems to appease him.', ru: 'Кажется, ничто из того, что я делаю, не может его успокоить.' },
      { en: 'She bought him a gift to appease his anger.', ru: 'Она купила ему подарок, чтобы усмирить его гнев.' }
    ]
),

createRichWord('c1_archetype', 'Archetype', '/ˈɑːkitaɪp/', 'акитайп', 'Архетип / Прообраз', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Типичный пример чего-либо; или первоначальная модель.',
    '- Литература: "Hero archetype" (Архетип героя)\n- Пример: "Perfect archetype" (Идеальный прообраз)\n- Психология: "Jungian archetype" (Юнгианский архетип)',
    [
      { en: 'Sherlock Holmes is the archetype of the brilliant detective.', ru: 'Шерлок Холмс — это архетип гениального детектива.' },
      { en: 'The story follows the classic archetype of good versus evil.', ru: 'История следует классическому архетипу добра против зла.' },
      { en: 'She is the archetype of a successful businesswoman.', ru: 'Она — прообраз успешной деловой женщины.' },
      { en: 'Carl Jung wrote extensively about psychological archetypes.', ru: 'Карл Юнг много писал о психологических архетипах.' }
    ]
),

createRichWord('c1_ardent', 'Ardent', '/ˈɑːdnt/', 'адэнт', 'Пылкий / Ярый', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Очень увлеченный и страстный в поддержке чего-либо.',
    '- Человек: "Ardent supporter" (Ярый сторонник)\n- Чувство: "Ardent love" (Пылкая любовь)\n- Интерес: "Ardent fan" (Ярый фанат)',
    [
      { en: 'He is an ardent supporter of the local football team.', ru: 'Он ярый болельщик местной футбольной команды.' },
      { en: 'She is an ardent feminist who fights for equality.', ru: 'Она пылкая феминистка, которая борется за равенство.' },
      { en: 'They were ardent lovers in their youth.', ru: 'В молодости они были пылкими любовниками.' },
      { en: 'An ardent desire to learn drove him forward.', ru: 'Страстное желание учиться двигало его вперед.' }
    ]
),

createRichWord('c1_arid', 'Arid', '/ˈærɪd/', 'эрид', 'Засушливый / Скучный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Очень сухой (о земле); или скучный и неинтересный (о теме).',
    '- Климат: "Arid desert" (Засушливая пустыня)\n- Земля: "Arid land" (Сухая земля)\n- Текст: "Arid discussion" (Сухая/скучная дискуссия)',
    [
      { en: 'Few plants can survive in such an arid climate.', ru: 'Немногие растения могут выжить в таком засушливом климате.' },
      { en: 'The desert is vast and arid.', ru: 'Пустыня обширна и засушлива.' },
      { en: 'His speech was long, technical, and arid.', ru: 'Его речь была длинной, технической и скучной.' },
      { en: 'Irrigation turned the arid land into a garden.', ru: 'Орошение превратило сухую землю в сад.' }
    ]
),

createRichWord('c1_arson', 'Arson', '/ˈɑːsn/', 'асон', 'Поджог', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Преступление, заключающееся в намеренном поджоге зданий или имущества.',
    '- Преступление: "Commit arson" (Совершить поджог)\n- Полиция: "Suspected arson" (Подозрение на поджог)\n- Человек: "Arsonist" (Поджигатель)',
    [
      { en: 'The fire was caused by arson, according to the police.', ru: 'По данным полиции, пожар был вызван поджогом.' },
      { en: 'He was arrested and charged with arson.', ru: 'Его арестовали и обвинили в поджоге.' },
      { en: 'Arson represents a serious threat to public safety.', ru: 'Поджог представляет серьезную угрозу общественной безопасности.' },
      { en: 'The old factory was destroyed in an act of arson.', ru: 'Старая фабрика была уничтожена в результате поджога.' }
    ]
),

createRichWord('c1_atheist', 'Atheist', '/ˈeɪθiɪst/', 'эйсиэст', 'Атеист', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, который не верит в существование Бога.',
    '- Вера: "Avowed atheist" (Убежденный атеист)\n- Мнение: "Become an atheist" (Стать атеистом)\n- Аргумент: "Atheist view" (Атеистический взгляд)',
    [
      { en: 'As an atheist, he does not go to church.', ru: 'Как атеист, он не ходит в церковь.' },
      { en: 'Richard Dawkins is a famous atheist writer.', ru: 'Ричард Докинз — известный писатель-атеист.' },
      { en: 'She respects religion but remains an atheist.', ru: 'Она уважает религию, но остается атеисткой.' },
      { en: 'The debate was between a priest and an atheist.', ru: 'Дебаты проходили между священником и атеистом.' }
    ]
),

createRichWord('c1_atrocity', 'Atrocity', '/əˈtrɒsəti/', 'этросэти', 'Зверство / Злодеяние', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Чрезвычайно жестокое и насильственное действие (часто на войне).',
    '- Война: "Commit atrocities" (Совершать зверства)\n- История: "War atrocity" (Военное преступление/зверство)\n- Реакция: "Shocking atrocity" (Шокирующее злодеяние)',
    [
      { en: 'The soldiers were accused of committing terrible atrocities.', ru: 'Солдат обвинили в совершении ужасных зверств.' },
      { en: 'History is full of stories of human atrocity.', ru: 'История полна историй о человеческих злодеяниях.' },
      { en: 'We must ensure such an atrocity never happens again.', ru: 'Мы должны гарантировать, что такое зверство никогда не повторится.' },
      { en: 'Reports of atrocities shocked the world.', ru: 'Сообщения о зверствах потрясли мир.' }
    ]
  ),
createRichWord('c1_auxiliary', 'Auxiliary', '/ɔːɡˈzɪliəri/', 'огзилиэри', 'Вспомогательный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Предоставляющий дополнительную помощь или поддержку.',
    '- Грамматика: "Auxiliary verb" (Вспомогательный глагол)\n- Персонал: "Auxiliary staff" (Вспомогательный персонал)\n- Техника: "Auxiliary power" (Резервное питание)',
    [
      { en: 'The hospital employs many auxiliary nurses.', ru: 'В больнице работает много вспомогательных медсестер.' },
      { en: 'When the main engine failed, the auxiliary power kicked in.', ru: 'Когда основной двигатель отказал, включилось резервное питание.' },
      { en: 'In English, "do" is often used as an auxiliary verb.', ru: 'В английском "do" часто используется как вспомогательный глагол.' },
      { en: 'They provide auxiliary services to the main company.', ru: 'Они предоставляют вспомогательные услуги основной компании.' }
    ]
),

createRichWord('c1_avalanche', 'Avalanche', '/ˈævəlɑːnʃ/', 'эвэланш', 'Лавина', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большая масса снега, льда и камней, падающая с горы.',
    '- Опасность: "Trigger an avalanche" (Вызвать лавину)\n- Переносно: "Avalanche of letters" (Лавина писем)\n- Спасение: "Avalanche victim" (Жертва лавины)',
    [
      { en: 'The skiers were warned about the risk of an avalanche.', ru: 'Лыжников предупредили о риске схода лавины.' },
      { en: 'An avalanche buried the small village in snow.', ru: 'Лавина погребла маленькую деревню под снегом.' },
      { en: 'The company received an avalanche of complaints.', ru: 'Компания получила лавину жалоб.' },
      { en: 'Rescue dogs searched for survivors of the avalanche.', ru: 'Собаки-спасатели искали выживших после лавины.' }
    ]
),

createRichWord('c1_avid', 'Avid', '/ˈævɪd/', 'эвид', 'Заядлый / Алчный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Имеющий или показывающий сильный интерес и энтузиазм к чему-либо.',
    '- Хобби: "Avid reader" (Заядлый читатель)\n- Спорт: "Avid fan" (Ярый фанат)\n- Интерес: "Avid interest" (Жгучий интерес)',
    [
      { en: 'He is an avid reader of science fiction novels.', ru: 'Он заядлый читатель научно-фантастических романов.' },
      { en: 'She is an avid collector of old stamps.', ru: 'Она страстный коллекционер старых марок.' },
      { en: 'They took an avid interest in the investigation.', ru: 'Они проявили живой интерес к расследованию.' },
      { en: 'My father is an avid golfer.', ru: 'Мой отец — заядлый игрок в гольф.' }
    ]
),

createRichWord('c1_ballad', 'Ballad', '/ˈbæləd/', 'бэлэд', 'Баллада', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Медленная сентиментальная или романтическая песня; или стихотворение, рассказывающее историю.',
    '- Музыка: "Love ballad" (Баллада о любви)\n- Стиль: "Power ballad" (Мощная рок-баллада)\n- Литература: "Folk ballad" (Народная баллада)',
    [
      { en: 'He sang a beautiful ballad about lost love.', ru: 'Он спел красивую балладу о потерянной любви.' },
      { en: 'The band is famous for their rock ballads.', ru: 'Группа известна своими рок-балладами.' },
      { en: 'She wrote a ballad inspired by local legends.', ru: 'Она написала балладу, вдохновленную местными легендами.' },
      { en: 'The poem is written in the style of a traditional ballad.', ru: 'Стихотворение написано в стиле традиционной баллады.' }
    ]
),

createRichWord('c1_bamboo', 'Bamboo', '/bæmˈbuː/', 'бэмбу', 'Бамбук', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Высокое тропическое растение с полыми стеблями.',
    '- Растение: "Bamboo shoot" (Побег бамбука)\n- Материал: "Bamboo furniture" (Бамбуковая мебель)\n- Еда: "Eat bamboo" (Есть бамбук)',
    [
      { en: 'Pandas mainly eat bamboo leaves and shoots.', ru: 'Панды в основном едят листья и побеги бамбука.' },
      { en: 'The furniture on the patio is made of bamboo.', ru: 'Мебель на веранде сделана из бамбука.' },
      { en: 'Bamboo grows very quickly in the right climate.', ru: 'Бамбук растет очень быстро в подходящем климате.' },
      { en: 'They built a small hut using bamboo poles.', ru: 'Они построили маленькую хижину, используя бамбуковые шесты.' }
    ]
),

createRichWord('c1_baptise', 'Baptise', '/bæpˈtaɪz/', 'бэптайз', 'Крестить', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Совершать христианскую церемонию крещения (называть и принимать в церковь).',
    '- Религия: "Baptise a baby" (Крестить ребенка)\n- Имя: "Baptised as John" (Крещен как Джон)\n- Обряд: "To be baptised" (Быть крещеным)',
    [
      { en: 'They decided to baptise their son next month.', ru: 'Они решили крестить сына в следующем месяце.' },
      { en: 'He was baptised in the local village church.', ru: 'Он был крещен в местной деревенской церкви.' },
      { en: 'Many adults choose to be baptised later in life.', ru: 'Многие взрослые решают креститься в более позднем возрасте.' },
      { en: 'The priest baptised the child with holy water.', ru: 'Священник окрестил ребенка святой водой.' }
    ]
),

createRichWord('c1_baptism', 'Baptism', '/ˈbæptɪzəm/', 'бэптизэм', 'Крещение', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Христианская религиозная церемония принятия человека в церковь.',
    '- Религия: "Receive baptism" (Принять крещение)\n- Идиома: "Baptism of fire" (Боевое крещение / Тяжелое первое испытание)\n- Церемония: "Attend a baptism" (Посетить крещение)',
    [
      { en: 'The baptism took place on a sunny Sunday morning.', ru: 'Крещение состоялось солнечным воскресным утром.' },
      { en: 'His first day at work was a real baptism of fire.', ru: 'Его первый день на работе стал настоящим боевым крещением.' },
      { en: 'We invited close family to the baby\'s baptism.', ru: 'Мы пригласили близких родственников на крещение ребенка.' },
      { en: 'Baptism is considered a sacrament in many churches.', ru: 'Крещение считается таинством во многих церквях.' }
    ]
),

createRichWord('c1_barbarian', 'Barbarian', '/bɑːˈbeəriən/', 'бабээриэн', 'Варвар', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, которого считают нецивилизованным или жестоким.',
    '- История: "Barbarian invasion" (Вторжение варваров)\n- Поведение: "Act like a barbarian" (Вести себя как варвар)\n- Отношение: "Uncivilized barbarian" (Нецивилизованный варвар)',
    [
      { en: 'The Romans considered anyone outside their empire a barbarian.', ru: 'Римляне считали любого за пределами их империи варваром.' },
      { en: 'Don\'t eat with your hands like a barbarian!', ru: 'Не ешь руками, как варвар!' },
      { en: 'The city was destroyed by barbarian tribes.', ru: 'Город был разрушен варварскими племенами.' },
      { en: 'He described the attackers as ruthless barbarians.', ru: 'Он описал нападавших как безжалостных варваров.' }
    ]
),

createRichWord('c1_barley', 'Barley', '/ˈbɑːli/', 'бали', 'Ячмень', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Злаковое растение, используемое для еды и изготовления пива/виски.',
    '- Еда: "Barley soup" (Ячменный суп)\n- Напиток: "Malted barley" (Соложеный ячмень)\n- Поле: "Field of barley" (Ячменное поле)',
    [
      { en: 'Farmers grow barley to feed their livestock.', ru: 'Фермеры выращивают ячмень, чтобы кормить свой скот.' },
      { en: 'Beer is predominantly made from barley.', ru: 'Пиво преимущественно делается из ячменя.' },
      { en: 'She made a hearty beef and barley stew.', ru: 'Она приготовила сытное рагу из говядины и ячменя.' },
      { en: 'The wind blew across the golden fields of barley.', ru: 'Ветер дул над золотыми полями ячменя.' }
    ]
),

createRichWord('c1_barricade', 'Barricade', '/ˌbærɪˈkeɪd/', 'бэрикейд', 'Баррикада / Забаррикадировать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Преграда, построенная, чтобы остановить людей (сущ.); блокировать вход (гл.).',
    '- Протест: "Build a barricade" (Построить баррикаду)\n- Полиция: "Police barricade" (Полицейское заграждение)\n- Глагол: "Barricade the door" (Забаррикадировать дверь)',
    [
      { en: 'Protesters built a barricade across the main street.', ru: 'Протестующие построили баррикаду поперек главной улицы.' },
      { en: 'He barricaded himself in the room and refused to come out.', ru: 'Он забаррикадировался в комнате и отказался выходить.' },
      { en: 'Police broke through the barricade to reach the crowd.', ru: 'Полиция прорвала баррикаду, чтобы добраться до толпы.' },
      { en: 'Furniture was used to form a makeshift barricade.', ru: 'Мебель использовалась для создания импровизированной баррикады.' }
    ]
),

createRichWord('c1_benchmark', 'Benchmark', '/ˈbentʃmɑːk/', 'бэнчмак', 'Эталон / Критерий', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Стандарт, по которому оцениваются другие вещи.',
    '- Бизнес: "Set a benchmark" (Установить стандарт)\n- Качество: "Industry benchmark" (Отраслевой эталон)\n- Тест: "Benchmark test" (Эталонный тест)',
    [
      { en: 'This product sets a new benchmark for quality.', ru: 'Этот продукт устанавливает новый эталон качества.' },
      { en: 'We use their performance as a benchmark for our own.', ru: 'Мы используем их показатели как ориентир для наших собственных.' },
      { en: 'The company is the benchmark against which others are measured.', ru: 'Эта компания — эталон, по которому оценивают других.' },
      { en: 'These figures will serve as a benchmark for future comparison.', ru: 'Эти цифры послужат критерием для будущего сравнения.' }
    ]
),

createRichWord('c1_beverage', 'Beverage', '/ˈbevərɪdʒ/', 'бэвэридж', 'Напиток', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Любой тип напитка (формальное слово).',
    '- Меню: "Hot beverage" (Горячий напиток)\n- Алкоголь: "Alcoholic beverage" (Алкогольный напиток)\n- Выбор: "Beverage list" (Карта напитков)',
    [
      { en: 'Tea and coffee are popular hot beverages.', ru: 'Чай и кофе — популярные горячие напитки.' },
      { en: 'No alcoholic beverages are allowed in the park.', ru: 'В парке запрещены алкогольные напитки.' },
      { en: 'Please select a beverage from the menu.', ru: 'Пожалуйста, выберите напиток из меню.' },
      { en: 'The flight attendant offered us a cold beverage.', ru: 'Стюардесса предложила нам холодный напиток.' }
    ]
),

createRichWord('c1_bingo', 'Bingo', '/ˈbɪŋɡəʊ/', 'бингоу', 'Бинго / Лото', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Игра, в которой отмечают названные числа на карточках; восклицание при успехе.',
    '- Игра: "Play bingo" (Играть в бинго)\n- Место: "Bingo hall" (Зал для игры в бинго)\n- Восклицание: "Bingo!" (Есть! / Угадал!)',
    [
      { en: 'My grandmother goes to play bingo every Tuesday.', ru: 'Моя бабушка ходит играть в бинго каждый вторник.' },
      { en: 'Bingo! That is exactly the answer I was looking for.', ru: 'Бинго! Это именно тот ответ, который я искал.' },
      { en: 'The prize for winning the bingo game was fifty pounds.', ru: 'Призом за победу в игре бинго были пятьдесят фунтов.' },
      { en: 'Bingo is a game of chance popular with older people.', ru: 'Бинго — азартная игра, популярная среди пожилых людей.' }
    ]
),

createRichWord('c1_blackmail', 'Blackmail', '/ˈblækmeɪl/', 'блэкмейл', 'Шантаж / Шантажировать', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Требование денег в обмен на неразглашение секретов (сущ.); или действие шантажа (гл.).',
    '- Преступление: "Commit blackmail" (Совершить шантаж)\n- Эмоции: "Emotional blackmail" (Эмоциональный шантаж)\n- Глагол: "Blackmail someone" (Шантажировать кого-то)',
    [
      { en: 'He tried to blackmail her with compromising photos.', ru: 'Он пытался шантажировать ее компрометирующими фотографиями.' },
      { en: 'The politician claimed he was a victim of blackmail.', ru: 'Политик заявил, что стал жертвой шантажа.' },
      { en: 'Emotional blackmail is a form of manipulation.', ru: 'Эмоциональный шантаж — это форма манипуляции.' },
      { en: 'They were sent to prison for blackmailing the CEO.', ru: 'Их отправили в тюрьму за шантаж генерального директора.' }
    ]
),

createRichWord('c1_blunder', 'Blunder', '/ˈblʌndə/', 'бландэ', 'Грубая ошибка / Оплошность', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Серьезная или глупая ошибка, обычно вызванная невнимательностью.',
    '- Ошибка: "Make a blunder" (Совершить оплошность)\n- Политика: "Political blunder" (Политическая ошибка)\n- Описание: "Terrible blunder" (Ужасная ошибка)',
    [
      { en: 'I made a terrible blunder by forgetting her name.', ru: 'Я совершил ужасную оплошность, забыв ее имя.' },
      { en: 'The general admitted that the attack was a strategic blunder.', ru: 'Генерал признал, что атака была стратегической ошибкой.' },
      { en: 'One small blunder can ruin the whole project.', ru: 'Одна маленькая оплошность может разрушить весь проект.' },
      { en: 'He blundered into the meeting room by mistake.', ru: 'Он по ошибке ввалился (допустил оплошность, войдя) в переговорную.' }
    ]
),

createRichWord('c1_bonfire', 'Bonfire', '/ˈbɒnfaɪə/', 'бонфайэ', 'Костер', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большой огонь, разведенный на улице для праздника или сжигания мусора.',
    '- Праздник: "Bonfire Night" (Ночь костров - праздник в UK)\n- Действие: "Light a bonfire" (Зажечь костер)\n- Место: "Sit around the bonfire" (Сидеть у костра)',
    [
      { en: 'We gathered around the bonfire to keep warm.', ru: 'Мы собрались вокруг костра, чтобы согреться.' },
      { en: 'They built a huge bonfire on the beach.', ru: 'Они построили огромный костер на пляже.' },
      { en: 'Bonfire Night is celebrated with fireworks in November.', ru: 'Ночь костров празднуется фейерверками в ноябре.' },
      { en: 'We burned the old leaves on a bonfire.', ru: 'Мы сожгли старые листья в костре.' }
    ]
),

createRichWord('c1_booze', 'Booze', '/buːz/', 'буз', 'Выпивка / Спиртное', ProficiencyLevel.C1, 'noun', 'Medium', 'Informal',
    'Алкогольные напитки (разговорное).',
    '- Вечеринка: "Bring your own booze" (Приносить свою выпивку)\n- Количество: "Lot of booze" (Много выпивки)\n- Глагол: "Out boozing" (Пьянствовать)',
    [
      { en: 'There was plenty of free booze at the party.', ru: 'На вечеринке было много бесплатной выпивки.' },
      { en: 'He spent all his money on booze and cigarettes.', ru: 'Он потратил все свои деньги на выпивку и сигареты.' },
      { en: 'They went out boozing last Friday night.', ru: 'Они ходили пьянствовать в прошлую пятницу вечером.' },
      { en: 'Are you bringing any booze to the dinner?', ru: 'Ты принесешь какую-нибудь выпивку на ужин?' }
    ]
),

createRichWord('c1_bouquet', 'Bouquet', '/buˈkeɪ/', 'букэй', 'Букет', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Связка цветов, красиво оформленная; или аромат вина.',
    '- Цветы: "Bouquet of roses" (Букет роз)\n- Свадьба: "Bride\'s bouquet" (Букет невесты)\n- Вино: "Rich bouquet" (Богатый букет/аромат)',
    [
      { en: 'He sent her a huge bouquet of red roses.', ru: 'Он прислал ей огромный букет красных роз.' },
      { en: 'The bride threw her bouquet over her shoulder.', ru: 'Невеста бросила свой букет через плечо.' },
      { en: 'This wine has a wonderful floral bouquet.', ru: 'У этого вина чудесный цветочный букет (аромат).' },
      { en: 'I bought a bouquet of flowers for my mother.', ru: 'Я купил букет цветов для своей мамы.' }
    ]
),

createRichWord('c1_broth', 'Broth', '/brɒθ/', 'брос', 'Бульон', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Жидкий суп, сваренный на мясе, рыбе или овощах.',
    '- Еда: "Chicken broth" (Куриный бульон)\n- Суп: "Vegetable broth" (Овощной бульон)\n- Вкус: "Bone broth" (Костный бульон)',
    [
      { en: 'She made a nourishing chicken broth for the sick child.', ru: 'Она приготовила питательный куриный бульон для больного ребенка.' },
      { en: 'Add some noodles to the broth to make it filling.', ru: 'Добавь немного лапши в бульон, чтобы сделать его сытным.' },
      { en: 'Bone broth is said to be good for your health.', ru: 'Говорят, что костный бульон полезен для здоровья.' },
      { en: 'The soup consists of a clear broth with vegetables.', ru: 'Суп состоит из прозрачного бульона с овощами.' }
    ]
),

createRichWord('c1_bunk', 'Bunk', '/bʌŋk/', 'банк', 'Койка / Чепуха', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Узкая кровать (часто двухъярусная); или (разг.) полная чепуха.',
    '- Мебель: "Bunk beds" (Двухъярусная кровать)\n- Сленг: "Load of bunk" (Полная чушь)\n- Сон: "Sleep in a bunk" (Спать на койке)',
    [
      { en: 'The children sleep in bunk beds in the same room.', ru: 'Дети спят на двухъярусной кровати в одной комнате.' },
      { en: 'I slept on the top bunk on the train.', ru: 'Я спал на верхней полке (койке) в поезде.' },
      { en: 'Don\'t listen to him, he is talking bunk.', ru: 'Не слушай его, он несет чепуху.' },
      { en: 'Can I bag the bottom bunk?', ru: 'Могу я занять нижнюю койку?' }
    ]
),

createRichWord('c1_busted', 'Busted', '/ˈbʌstɪd/', 'бастид', 'Пойманный / Сломанный', ProficiencyLevel.C1, 'adj', 'Medium', 'Slang',
    'Сленговое слово, означающее "пойман с поличным" или "сломанный".',
    '- Полиция: "You are busted" (Ты попался/арестован)\n- Вещь: "Busted lip" (Разбитая губа)\n- Состояние: "Flat busted" (Без гроша)',
    [
      { en: 'The police busted the drug dealers yesterday.', ru: 'Полиция накрыла наркоторговцев вчера.' },
      { en: 'I can\'t call you, my phone is busted.', ru: 'Я не могу позвонить тебе, мой телефон сломан.' },
      { en: 'He got busted for cheating on the exam.', ru: 'Его поймали (спалили) на списывании на экзамене.' },
      { en: 'Look at that busted old car.', ru: 'Посмотри на эту разбитую старую машину.' }
    ]
),

createRichWord('c1_caddie', 'Caddie', '/ˈkædi/', 'кэди', 'Кэдди (помощник гольфиста)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, который носит клюшки игрока в гольф и дает советы.',
    '- Гольф: "Golf caddie" (Гольф-кэдди)\n- Работа: "Work as a caddie" (Работать кэдди)\n- Совет: "Ask the caddie" (Спросить кэдди)',
    [
      { en: 'The caddie suggested using a different club.', ru: 'Кэдди посоветовал использовать другую клюшку.' },
      { en: 'He earned extra money working as a caddie in the summer.', ru: 'Он зарабатывал дополнительные деньги, работая кэдди летом.' },
      { en: 'A good caddie knows the golf course perfectly.', ru: 'Хороший кэдди знает поле для гольфа идеально.' },
      { en: 'The player and his caddie celebrated the victory.', ru: 'Игрок и его кэдди отпраздновали победу.' }
    ]
),

createRichWord('c1_camouflage', 'Camouflage', '/ˈkæməflɑːʒ/', 'кэмэфлаж', 'Камуфляж / Маскировка', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Окраска или материалы, делающие что-то трудноразличимым на фоне окружения.',
    '- Армия: "Wear camouflage" (Носить камуфляж)\n- Животные: "Natural camouflage" (Природная маскировка)\n- Глагол: "To camouflage" (Маскировать)',
    [
      { en: 'Soldiers wear green camouflage to hide in the forest.', ru: 'Солдаты носят зеленый камуфляж, чтобы прятаться в лесу.' },
      { en: 'The lizard\'s skin acts as perfect camouflage.', ru: 'Кожа ящерицы действует как идеальная маскировка.' },
      { en: 'They tried to camouflage the tank with branches.', ru: 'Они пытались замаскировать танк ветками.' },
      { en: 'The bird\'s feathers provide excellent camouflage.', ru: 'Перья птицы обеспечивают отличную маскировку.' }
    ]
),

createRichWord('c1_candid', 'Candid', '/ˈkændɪd/', 'кэндид', 'Искренний / Откровенный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Честный и прямой; или (о фото) сделанный неожиданно, без позирования.',
    '- Разговор: "Candid opinion" (Искреннее мнение)\n- Фото: "Candid camera" (Скрытая камера)\n- Характер: "To be candid" (Честно говоря)',
    [
      { en: 'To be candid, I don\'t think you should go.', ru: 'Честно говоря, я не думаю, что тебе стоит идти.' },
      { en: 'She gave a very candid interview about her life.', ru: 'Она дала очень откровенное интервью о своей жизни.' },
      { en: 'I appreciate your candid feedback on my work.', ru: 'Я ценю твой искренний отзыв о моей работе.' },
      { en: 'He took a candid photo of the children playing.', ru: 'Он сделал естественное (непостановочное) фото играющих детей.' }
    ]
  ),
createRichWord('c1_acoustic', 'Acoustic', '/əˈkuːstɪk/', 'экустик', 'Акустический', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Связанный со звуком или слухом; (о музыке) использующий инструменты без электрического усиления.',
    '- Музыка: "Acoustic guitar" (Акустическая гитара)\n- Звук: "Acoustic properties" (Акустические свойства)\n- Выступление: "Acoustic version" (Акустическая версия)',
    [
      { en: 'He played a beautiful song on his acoustic guitar.', ru: 'Он сыграл красивую песню на своей акустической гитаре.' },
      { en: 'The acoustic properties of the hall are excellent.', ru: 'Акустические свойства зала превосходны.' },
      { en: 'They recorded an acoustic version of their hit song.', ru: 'Они записали акустическую версию своего хита.' },
      { en: 'Dogs have a much better acoustic range than humans.', ru: 'У собак гораздо лучший акустический диапазон, чем у людей.' }
    ]
),

createRichWord('c1_afloat', 'Afloat', '/əˈfləʊt/', 'эфлоут', 'На плаву', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Плавающий на поверхности воды; (перен.) не имеющий долгов, способный функционировать.',
    '- Вода: "Stay afloat" (Держаться на плаву)\n- Бизнес: "Keep the company afloat" (Удержать компанию на плаву)\n- Состояние: "Back afloat" (Снова на плаву)',
    [
      { en: 'They managed to keep the boat afloat despite the storm.', ru: 'Им удалось удержать лодку на плаву, несмотря на шторм.' },
      { en: 'She took a second job to keep the family financially afloat.', ru: 'Она устроилась на вторую работу, чтобы удержать семью на плаву финансово.' },
      { en: 'The wreckage was still afloat days after the accident.', ru: 'Обломки все еще были на плаву спустя дни после аварии.' },
      { en: 'We are struggling to stay afloat in this economy.', ru: 'Мы изо всех сил пытаемся удержаться на плаву в этой экономике.' }
    ]
),

createRichWord('c1_amiss', 'Amiss', '/əˈmɪs/', 'эмис', 'Неладный / Неверный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Не совсем правильный; не такой, как должен быть (обычно используется в выражении "something is amiss").',
    '- Подозрение: "Something is amiss" (Что-то неладное)\n- Отношение: "Take amiss" (Истолковать превратно / Обидеться)\n- Проблема: "Nothing amiss" (Ничего плохого)',
    [
      { en: 'I noticed immediately that something was amiss.', ru: 'Я сразу заметил, что что-то неладно.' },
      { en: 'Please do not take my comments amiss; I mean well.', ru: 'Пожалуйста, не поймите мои комментарии превратно; я желаю добра.' },
      { en: 'She checked the engine, but found nothing amiss.', ru: 'Она проверила двигатель, но не нашла ничего неисправного.' },
      { en: 'His silence suggested that something was seriously amiss.', ru: 'Его молчание наводило на мысль, что что-то серьезно не так.' }
    ]
),

createRichWord('c1_amp', 'Amp', '/æmp/', 'эмп', 'Усилитель / Ампер', ProficiencyLevel.C1, 'noun', 'Medium', 'Informal',
    'Сокращение от "amplifier" (усилитель звука) или "ampere" (единица силы тока).',
    '- Музыка: "Guitar amp" (Гитарный усилитель)\n- Электричество: "13-amp fuse" (Предохранитель на 13 ампер)\n- Сленг: "Amped up" (Взволнованный / Энергичный)',
    [
      { en: 'He plugged his electric guitar into the amp.', ru: 'Он подключил свою электрогитару к усилителю.' },
      { en: 'This circuit requires a 10-amp fuse.', ru: 'Этой цепи требуется предохранитель на 10 ампер.' },
      { en: 'The crowd was amped up for the concert.', ru: 'Толпа была на взводе (в предвкушении) перед концертом.' },
      { en: 'Turn up the amp, I can\'t hear the bass.', ru: 'Сделай усилитель погромче, я не слышу басов.' }
    ]
),

createRichWord('c1_analogue', 'Analogue', '/ˈænəlɒɡ/', 'энэлог', 'Аналог / Аналоговый', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек или вещь, сопоставимая с другой; (прил.) использующий физические величины, а не цифры (не цифровой).',
    '- Сравнение: "Modern analogue" (Современный аналог)\n- Техника: "Analogue clock" (Аналоговые часы)\n- Связь: "Analogue signal" (Аналоговый сигнал)',
    [
      { en: 'The wing of a bat is an analogue to the arm of a human.', ru: 'Крыло летучей мыши — это аналог руки человека.' },
      { en: 'Many audiophiles still prefer analogue recordings like vinyl.', ru: 'Многие аудиофилы до сих пор предпочитают аналоговые записи, такие как винил.' },
      { en: 'Is there a digital analogue to this old process?', ru: 'Существует ли цифровой аналог этого старого процесса?' },
      { en: 'He prefers reading an analogue watch over a digital one.', ru: 'Он предпочитает определять время по аналоговым часам, а не по цифровым.' }
    ]
),

createRichWord('c1_ancestry', 'Ancestry', '/ˈænsestri/', 'энсэстри', 'Происхождение / Родословная', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Происхождение семьи или этнические корни человека.',
    '- Семья: "Trace ancestry" (Отслеживать родословную)\n- Корни: "Irish ancestry" (Ирландское происхождение)\n- История: "Common ancestry" (Общее происхождение)',
    [
      { en: 'She is proud of her Scottish ancestry.', ru: 'Она гордится своим шотландским происхождением.' },
      { en: 'DNA tests can reveal a lot about your ancestry.', ru: 'ДНК-тесты могут многое рассказать о вашем происхождении.' },
      { en: 'Humans and apes share a common ancestry.', ru: 'Люди и человекообразные обезьяны имеют общее происхождение.' },
      { en: 'He traced his ancestry back to the 17th century.', ru: 'Он проследил свою родословную до 17-го века.' }
    ]
),

createRichWord('c1_asteroid', 'Asteroid', '/ˈæstərɔɪd/', 'эстэройд', 'Астероид', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Небольшое скалистое тело, вращающееся вокруг Солнца.',
    '- Космос: "Asteroid belt" (Пояс астероидов)\n- Угроза: "Asteroid impact" (Столкновение с астероидом)\n- Наука: "Discover an asteroid" (Открыть астероид)',
    [
      { en: 'Scientists are tracking an asteroid that could pass near Earth.', ru: 'Ученые отслеживают астероид, который может пройти рядом с Землей.' },
      { en: 'The dinosaur extinction was caused by a massive asteroid impact.', ru: 'Вымирание динозавров было вызвано столкновением с массивным астероидом.' },
      { en: 'Most asteroids are found in a belt between Mars and Jupiter.', ru: 'Большинство астероидов находятся в поясе между Марсом и Юпитером.' },
      { en: 'They named the newly discovered asteroid after a famous singer.', ru: 'Они назвали недавно открытый астероид в честь известного певца.' }
    ]
),

createRichWord('c1_astrology', 'Astrology', '/əˈstrɒlədʒi/', 'эстролэджи', 'Астрология', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Изучение движения планет и звезд с верой в то, что они влияют на человеческие события.',
    '- Предсказание: "Believe in astrology" (Верить в астрологию)\n- Знаки: "Astrology sign" (Знак зодиака)\n- Чтение: "Read astrology" (Читать гороскопы)',
    [
      { en: 'She reads her horoscope every day because she believes in astrology.', ru: 'Она читает свой гороскоп каждый день, потому что верит в астрологию.' },
      { en: 'Astrology is often considered a pseudoscience.', ru: 'Астрология часто считается лженаукой.' },
      { en: 'According to astrology, Mars influences energy and conflict.', ru: 'Согласно астрологии, Марс влияет на энергию и конфликты.' },
      { en: 'He consulted an expert in astrology to choose a wedding date.', ru: 'Он проконсультировался с экспертом по астрологии, чтобы выбрать дату свадьбы.' }
    ]
),

createRichWord('c1_attire', 'Attire', '/əˈtaɪə/', 'этайэ', 'Наряд / Одежда', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Одежда, особенно формальная или предназначенная для особого случая.',
    '- Дресс-код: "Formal attire" (Формальная одежда)\n- Стиль: "Casual attire" (Повседневная одежда)\n- Случай: "Appropriate attire" (Соответствующий наряд)',
    [
      { en: 'Formal attire is required for the gala dinner.', ru: 'Для гала-ужина требуется формальная одежда.' },
      { en: 'He was dressed in strange attire for a business meeting.', ru: 'Он был одет в странный наряд для деловой встречи.' },
      { en: 'Proper attire must be worn when visiting religious sites.', ru: 'При посещении религиозных мест необходимо носить подобающую одежду.' },
      { en: 'Guests were asked to wear black-tie attire.', ru: 'Гостей попросили надеть смокинги и вечерние платья.' }
    ]
  ),
createRichWord('c1_autistic', 'Autistic', '/ɔːˈtɪstɪk/', 'отистик', 'Аутичный / Страдающий аутизмом', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Относящийся к аутизму — состоянию, влияющему на социальное взаимодействие и общение.',
    '- Здоровье: "Autistic spectrum" (Аутистический спектр)\n- Ребенок: "Autistic child" (Ребенок с аутизмом)\n- Диагноз: "Diagnosed as autistic" (Диагностирован как аутист)',
    [
      { en: 'Many autistic children have exceptional talents in specific areas.', ru: 'Многие дети с аутизмом обладают исключительными талантами в определенных областях.' },
      { en: 'He works with autistic adults to help them find employment.', ru: 'Он работает со взрослыми аутистами, помогая им найти работу.' },
      { en: 'Understanding autistic behavior requires patience and empathy.', ru: 'Понимание поведения аутистов требует терпения и сочувствия.' },
      { en: 'She is on the autistic spectrum but functions very well.', ru: 'Она находится в аутистическом спектре, но очень хорошо функционирует.' }
    ]
),

createRichWord('c1_automotive', 'Automotive', '/ˌɔːtəˈməʊtɪv/', 'отэмоутив', 'Автомобильный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Связанный с транспортными средствами, приводимыми в движение двигателем.',
    '- Индустрия: "Automotive industry" (Автомобильная промышленность)\n- Детали: "Automotive parts" (Автомобильные запчасти)\n- Инженер: "Automotive engineer" (Автомобильный инженер)',
    [
      { en: 'The automotive industry is facing significant changes with electric cars.', ru: 'Автомобильная промышленность сталкивается со значительными изменениями из-за электромобилей.' },
      { en: 'He works as an automotive engineer for a major company.', ru: 'Он работает автомобильным инженером в крупной компании.' },
      { en: 'Automotive safety standards have improved over the years.', ru: 'Стандарты автомобильной безопасности улучшились с годами.' },
      { en: 'This shop specializes in automotive repairs.', ru: 'Этот магазин специализируется на ремонте автомобилей.' }
    ]
),

createRichWord('c1_baggy', 'Baggy', '/ˈbæɡi/', 'бэги', 'Мешковатый', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Висящий свободно, слишком большой (об одежде).',
    '- Одежда: "Baggy trousers" (Мешковатые брюки)\n- Стиль: "Baggy jumper" (Объемный джемпер)\n- Описание: "Loose and baggy" (Свободный и мешковатый)',
    [
      { en: 'He prefers wearing baggy jeans and a t-shirt.', ru: 'Он предпочитает носить мешковатые джинсы и футболку.' },
      { en: 'The sweater was old and baggy at the elbows.', ru: 'Свитер был старым и растянутым (мешковатым) на локтях.' },
      { en: 'Baggy clothes were very fashionable in the nineties.', ru: 'Мешковатая одежда была очень модной в девяностые.' },
      { en: 'She wore a baggy shirt to be comfortable.', ru: 'Она надела свободную рубашку, чтобы чувствовать себя комфортно.' }
    ]
),

createRichWord('c1_basil', 'Basil', '/ˈbæzl/', 'бэзл', 'Базилик', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Ароматическая трава, часто используемая в кулинарии (особенно итальянской).',
    '- Еда: "Fresh basil" (Свежий базилик)\n- Соус: "Tomato and basil" (Томат и базилик)\n- Сад: "Grow basil" (Выращивать базилик)',
    [
      { en: 'I added some fresh basil to the pasta sauce.', ru: 'Я добавил немного свежего базилика в соус для пасты.' },
      { en: 'Basil smells wonderful when you chop it.', ru: 'Базилик чудесно пахнет, когда его режешь.' },
      { en: 'Pesto is typically made with pine nuts and basil.', ru: 'Песто обычно делают из кедровых орехов и базилика.' },
      { en: 'We grow basil in a pot on the windowsill.', ru: 'Мы выращиваем базилик в горшке на подоконнике.' }
    ]
),

createRichWord('c1_bazaar', 'Bazaar', '/bəˈzɑː/', 'бэза', 'Базар / Рынок', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Рынок в ближневосточной стране; или распродажа товаров для благотворительности.',
    '- Место: "Grand bazaar" (Гранд-базар)\n- Благотворительность: "Charity bazaar" (Благотворительная ярмарка)\n- Покупки: "Christmas bazaar" (Рождественский базар)',
    [
      { en: 'We visited the famous spice bazaar in Istanbul.', ru: 'Мы посетили знаменитый базар специй в Стамбуле.' },
      { en: 'The church holds a charity bazaar every year.', ru: 'Церковь проводит благотворительную ярмарку каждый год.' },
      { en: 'You can find almost anything in the bustling bazaar.', ru: 'На шумном базаре можно найти почти всё.' },
      { en: 'She bought a rug at the local bazaar.', ru: 'Она купила ковер на местном базаре.' }
    ]
),

createRichWord('c1_beaver', 'Beaver', '/ˈbiːvə/', 'бивэ', 'Бобр', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Животное с широким плоским хвостом, которое строит плотины на реках.',
    '- Животное: "Busy as a beaver" (Занятой как бобр / Трудолюбивый)\n- Сооружение: "Beaver dam" (Бобровая плотина)\n- Действие: "Beaver away" (Усердно работать - идиома)',
    [
      { en: 'Beavers can cut down trees with their strong teeth.', ru: 'Бобры могут валить деревья своими сильными зубами.' },
      { en: 'We saw a large beaver dam across the river.', ru: 'Мы видели большую бобровую плотину поперек реки.' },
      { en: 'He has been beavering away at his homework all night.', ru: 'Он корпел над домашним заданием всю ночь.' },
      { en: 'The beaver is a symbol of hard work and industry.', ru: 'Бобр — символ тяжелого труда и усердия.' }
    ]
),

createRichWord('c1_belated', 'Belated', '/bɪˈleɪtɪd/', 'билейтид', 'Запоздалый', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Происходящий или приходящий позже, чем ожидалось.',
    '- Праздник: "Belated birthday" (Запоздалое поздравление с днём рождения)\n- Извинение: "Belated apology" (Запоздалое извинение)\n- Реакция: "Belated recognition" (Запоздалое признание)',
    [
      { en: 'Happy belated birthday! Sorry I missed the actual day.', ru: 'С прошедшим днем рождения! Извини, что пропустил сам день.' },
      { en: 'They made a belated attempt to fix the problem.', ru: 'Они предприняли запоздалую попытку исправить проблему.' },
      { en: 'He offered a belated apology for his rude behavior.', ru: 'Он принес запоздалые извинения за свое грубое поведение.' },
      { en: 'The recognition was welcome, though somewhat belated.', ru: 'Признание было желанным, хотя и несколько запоздалым.' }
    ]
),

createRichWord('c1_binge', 'Binge', '/bɪndʒ/', 'биндж', 'Запой / Чрезмерное увлечение', ProficiencyLevel.C1, 'verb', 'Medium', 'Informal',
    'Делать что-то в избытке за короткое время (есть, пить, смотреть сериалы).',
    '- Еда: "Binge eating" (Переедание / Обжорство)\n- ТВ: "Binge-watch" (Смотреть запоем)\n- Алкоголь: "Drinking binge" (Запой)',
    [
      { en: 'I tend to binge on chocolate when I am stressed.', ru: 'Я склонен объедаться шоколадом, когда у меня стресс.' },
      { en: 'We decided to binge-watch the entire series this weekend.', ru: 'Мы решили посмотреть весь сериал запоем в эти выходные.' },
      { en: 'He went on a drinking binge after losing his job.', ru: 'Он ушел в запой после потери работы.' },
      { en: 'Binge eating can lead to serious health problems.', ru: 'Компульсивное переедание может привести к серьезным проблемам со здоровьем.' }
    ]
),

createRichWord('c1_biodiversity', 'Biodiversity', '/ˌbaɪəʊdaɪˈvɜːsəti/', 'байодайвёсэти', 'Биоразнообразие', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Разнообразие растительной и животной жизни в мире или в конкретной среде обитания.',
    '- Природа: "Loss of biodiversity" (Потеря биоразнообразия)\n- Защита: "Protect biodiversity" (Защищать биоразнообразие)\n- Экология: "Rich biodiversity" (Богатое биоразнообразие)',
    [
      { en: 'The rainforest is known for its incredible biodiversity.', ru: 'Тропический лес известен своим невероятным биоразнообразием.' },
      { en: 'Climate change poses a threat to global biodiversity.', ru: 'Изменение климата представляет угрозу для глобального биоразнообразия.' },
      { en: 'Preserving biodiversity is essential for a healthy ecosystem.', ru: 'Сохранение биоразнообразия необходимо для здоровой экосистемы.' },
      { en: 'Pollution significantly reduces the biodiversity of the river.', ru: 'Загрязнение значительно снижает биоразнообразие реки.' }
    ]
),

createRichWord('c1_biographer', 'Biographer', '/baɪˈɒɡrəfə/', 'байогрэфэ', 'Биограф', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, который пишет историю жизни другого человека.',
    '- Книги: "Official biographer" (Официальный биограф)\n- Работа: "Noted biographer" (Известный биограф)\n- Исследование: "The biographer claims" (Биограф утверждает)',
    [
      { en: 'The biographer spent years researching the president\'s life.', ru: 'Биограф потратил годы на изучение жизни президента.' },
      { en: 'He is the official biographer of the royal family.', ru: 'Он является официальным биографом королевской семьи.' },
      { en: 'A good biographer tries to remain objective.', ru: 'Хороший биограф старается оставаться объективным.' },
      { en: 'The biographer uncovered new details about the actor\'s childhood.', ru: 'Биограф раскрыл новые подробности о детстве актера.' }
    ]
),

createRichWord('c1_blacksmith', 'Blacksmith', '/ˈblæksmɪθ/', 'блэксмис', 'Кузнец', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, который делает и ремонтирует вещи из железа вручную.',
    '- Профессия: "Village blacksmith" (Деревенский кузнец)\n- Действие: "Blacksmith\'s hammer" (Молот кузнеца)\n- Место: "Blacksmith\'s forge" (Кузница)',
    [
      { en: 'The blacksmith forged a new horseshoe from iron.', ru: 'Кузнец выковал новую подкову из железа.' },
      { en: 'In the past, every village needed a blacksmith.', ru: 'В прошлом каждой деревне нужен был кузнец.' },
      { en: 'We watched the blacksmith shape the hot metal.', ru: 'Мы наблюдали, как кузнец придает форму горячему металлу.' },
      { en: 'Being a blacksmith requires great physical strength.', ru: 'Работа кузнеца требует большой физической силы.' }
    ]
),

createRichWord('c1_blindfold', 'Blindfold', '/ˈblaɪndfəʊld/', 'блайндфоулд', 'Повязка на глаза / Завязывать глаза', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Закрыть чьи-то глаза тканью, чтобы они не могли видеть (глаг.); или сама повязка (сущ.).',
    '- Действие: "Blindfold the prisoner" (Завязать глаза пленнику)\n- Игра: "Wear a blindfold" (Носить повязку на глазах)\n- Описание: "Did it blindfolded" (Сделал это с закрытыми глазами/легко)',
    [
      { en: 'They blindfolded the hostage so he couldn\'t see where he was going.', ru: 'Заложнику завязали глаза, чтобы он не видел, куда идет.' },
      { en: 'She put on a blindfold for the game.', ru: 'Она надела повязку на глаза для игры.' },
      { en: 'I could assemble this machine blindfolded.', ru: 'Я мог бы собрать эту машину с закрытыми глазами.' },
      { en: 'He was led blindfolded into the secret room.', ru: 'Его с завязанными глазами ввели в тайную комнату.' }
    ]
),

createRichWord('c1_bonnet', 'Bonnet', '/ˈbɒnɪt/', 'бонит', 'Капот / Чепчик', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Металлическая крышка двигателя автомобиля (в британском английском; в США - hood); или тип шляпы.',
    '- Машина: "Open the bonnet" (Открыть капот)\n- Одежда: "Baby bonnet" (Детский чепчик)\n- Проверка: "Under the bonnet" (Под капотом)',
    [
      { en: 'Smoke was coming from under the bonnet of the car.', ru: 'Из-под капота машины шел дым.' },
      { en: 'He lifted the bonnet to check the oil level.', ru: 'Он поднял капот, чтобы проверить уровень масла.' },
      { en: 'The baby looked cute in her pink bonnet.', ru: 'Малышка выглядела мило в своем розовом чепчике.' },
      { en: 'In America, they call the bonnet a "hood".', ru: 'В Америке капот называют "hood".' }
    ]
  ),
createRichWord('c1_academia', 'Academia', '/ˌækəˈdiːmiə/', 'экэдимиа', 'Академическая среда', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Сообщество, связанное с университетами, образованием и исследовательской деятельностью.',
    '- Работа: "Career in academia" (Карьера в науке)\n- Мир: "World of academia" (Мир академии)\n- Среда: "Enter academia" (Войти в академическую среду)',
    [
      { en: 'He decided to leave the corporate world and return to academia.', ru: 'Он решил покинуть корпоративный мир и вернуться в академическую среду.' },
      { en: 'Academia can be a very competitive environment for young researchers.', ru: 'Академическая среда может быть очень конкурентной для молодых исследователей.' },
      { en: 'Her contributions to academia have been widely recognized.', ru: 'Ее вклад в науку был широко признан.' },
      { en: 'There is often a disconnect between academia and industry.', ru: 'Часто существует разрыв между академической средой и промышленностью.' }
    ]
),

createRichWord('c1_acne', 'Acne', '/ˈækni/', 'акни', 'Акне / Угри', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Кожное заболевание, характеризующееся появлением красных прыщей на лице и шее.',
    '- Кожа: "Suffer from acne" (Страдать от акне)\n- Лечение: "Acne treatment" (Лечение угрей)\n- Подростки: "Teenage acne" (Подростковые прыщи)',
    [
      { en: 'Many teenagers feel self-conscious about their acne.', ru: 'Многие подростки стесняются своих угрей.' },
      { en: 'She visited a dermatologist to find a cure for her acne.', ru: 'Она посетила дерматолога, чтобы найти лекарство от акне.' },
      { en: 'Stress and poor diet can make acne worse.', ru: 'Стресс и плохое питание могут ухудшить состояние акне.' },
      { en: 'He used a special cream to clear up his acne.', ru: 'Он использовал специальный крем, чтобы избавиться от прыщей.' }
    ]
),

createRichWord('c1_acrobat', 'Acrobat', '/ˈækrəbæt/', 'экрэбэт', 'Акробат', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, выполняющий сложные гимнастические трюки, например, в цирке.',
    '- Цирк: "Circus acrobat" (Цирковой акробат)\n- Навык: "Skilled acrobat" (Искусный акробат)\n- Шоу: "Perform like an acrobat" (Выступать как акробат)',
    [
      { en: 'The acrobat walked across the tightrope without a safety net.', ru: 'Акробат прошел по канату без страховки.' },
      { en: 'She trained for years to become a professional acrobat.', ru: 'Она тренировалась годами, чтобы стать профессиональной акробаткой.' },
      { en: 'The crowd cheered as the acrobats formed a human pyramid.', ru: 'Толпа ликовала, когда акробаты построили человеческую пирамиду.' },
      { en: 'He is as flexible and agile as an acrobat.', ru: 'Он такой же гибкий и ловкий, как акробат.' }
    ]
),

createRichWord('c1_adrenaline', 'Adrenaline', '/əˈdrenəlɪn/', 'эдренэлин', 'Адреналин', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Гормон, вырабатываемый организмом в состоянии стресса или возбуждения.',
    '- Эмоции: "Rush of adrenaline" (Прилив адреналина)\n- Спорт: "Adrenaline junkie" (Любитель острых ощущений)\n- Реакция: "Adrenaline pumping" (Адреналин зашкаливает)',
    [
      { en: 'He felt a sudden rush of adrenaline when he saw the bear.', ru: 'Он почувствовал внезапный прилив адреналина, когда увидел медведя.' },
      { en: 'Skydiving gives you a massive adrenaline boost.', ru: 'Прыжки с парашютом дают мощный заряд адреналина.' },
      { en: 'The adrenaline kept him going despite the injury.', ru: 'Адреналин поддерживал его, несмотря на травму.' },
      { en: 'She loves extreme sports because she is an adrenaline junkie.', ru: 'Она любит экстремальные виды спорта, потому что она адреналиновая наркоманка.' }
    ]
),

createRichWord('c1_affluence', 'Affluence', '/ˈæfluəns/', 'эфлуэнс', 'Богатство / Изобилие', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Состояние обладания большим количеством денег и высоким уровнем жизни.',
    '- Общество: "Growing affluence" (Растущее благосостояние)\n- Статус: "Sign of affluence" (Признак богатства)\n- Жизнь: "Live in affluence" (Жить в достатке)',
    [
      { en: 'The 1950s were a period of growing affluence in America.', ru: '1950-е годы были периодом растущего благосостояния в Америке.' },
      { en: 'Their lifestyle was a display of great affluence.', ru: 'Их образ жизни был демонстрацией огромного богатства.' },
      { en: 'Despite his affluence, he lived a very simple life.', ru: 'Несмотря на свое богатство, он жил очень простой жизнью.' },
      { en: 'Affluence brings its own set of problems and responsibilities.', ru: 'Богатство приносит свой набор проблем и обязанностей.' }
    ]
),

createRichWord('c1_aggressor', 'Aggressor', '/əˈɡresə/', 'эгресэ', 'Агрессор', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек или страна, которые нападают первыми или начинают конфликт.',
    '- Война: "Act as an aggressor" (Действовать как агрессор)\n- Конфликт: "Identify the aggressor" (Определить агрессора)\n- Защита: "Defend against the aggressor" (Защищаться от агрессора)',
    [
      { en: 'In this conflict, it is clear who the aggressor is.', ru: 'В этом конфликте ясно, кто является агрессором.' },
      { en: 'They claimed they were acting in self-defense against the aggressor.', ru: 'Они заявили, что действовали в целях самообороны против агрессора.' },
      { en: 'The UN condemned the actions of the aggressor nation.', ru: 'ООН осудила действия страны-агрессора.' },
      { en: 'Usually, the aggressor has the advantage of surprise.', ru: 'Обычно агрессор имеет преимущество внезапности.' }
    ]
),

createRichWord('c1_alibi', 'Alibi', '/ˈæləbaɪ/', 'элибай', 'Алиби', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Доказательство того, что человек находился в другом месте во время совершения преступления.',
    '- Закон: "Provide an alibi" (Предоставить алиби)\n- Проверка: "Check the alibi" (Проверить алиби)\n- Надежность: "Cast-iron alibi" (Железное алиби)',
    [
      { en: 'The suspect had a cast-iron alibi for the night of the murder.', ru: 'У подозреваемого было железное алиби на ночь убийства.' },
      { en: 'Police checked his alibi and found it to be true.', ru: 'Полиция проверила его алиби и обнаружила, что оно верное.' },
      { en: 'He needs a good alibi to avoid being arrested.', ru: 'Ему нужно хорошее алиби, чтобы избежать ареста.' },
      { en: 'Her friends provided an alibi, saying she was at the party.', ru: 'Ее друзья предоставили алиби, сказав, что она была на вечеринке.' }
    ]
),

createRichWord('c1_alligator', 'Alligator', '/ˈælɪɡeɪtə/', 'элигейтэ', 'Аллигатор', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Крупная рептилия с жесткой кожей и острыми зубами, обитающая в реках и болотах (в основном в Америке и Китае).',
    '- Животное: "Wild alligator" (Дикий аллигатор)\n- Опасность: "Alligator attack" (Нападение аллигатора)\n- Место: "Swamp alligator" (Болотный аллигатор)',
    [
      { en: 'We saw a huge alligator sunbathing on the riverbank.', ru: 'Мы видели огромного аллигатора, греющегося на солнышке на берегу реки.' },
      { en: 'Alligators are common in the swamps of Florida.', ru: 'Аллигаторы часто встречаются на болотах Флориды.' },
      { en: 'Keep your distance, as alligators can move very fast.', ru: 'Держитесь на расстоянии, так как аллигаторы могут двигаться очень быстро.' },
      { en: 'The alligator snapped its jaws shut with a loud noise.', ru: 'Аллигатор с громким звуком захлопнул пасть.' }
    ]
),

createRichWord('c1_apparel', 'Apparel', '/əˈpærəl/', 'эпэрэл', 'Одежда (формально)', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Одежда, особенно когда речь идет о магазине или индустрии (синоним clothing).',
    '- Магазин: "Sports apparel" (Спортивная одежда)\n- Индустрия: "Wearing apparel" (Предметы одежды)\n- Стиль: "Women\'s apparel" (Женская одежда)',
    [
      { en: 'The store specializes in high-quality sports apparel.', ru: 'Магазин специализируется на высококачественной спортивной одежде.' },
      { en: 'She works in the apparel industry as a designer.', ru: 'Она работает в индустрии одежды дизайнером.' },
      { en: 'The website sells apparel for men, women, and children.', ru: 'Сайт продает одежду для мужчин, женщин и детей.' },
      { en: 'He was dressed in strange apparel for the ceremony.', ru: 'Он был одет в странное одеяние для церемонии.' }
    ]
),

createRichWord('c1_armpit', 'Armpit', '/ˈɑːmpɪt/', 'ампит', 'Подмышка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Впадина под местом соединения руки с плечом.',
    '- Тело: "Sweaty armpits" (Потные подмышки)\n- Гигиена: "Shave armpits" (Брить подмышки)\n- Место: "Under the armpit" (Под мышкой)',
    [
      { en: 'He tucked the newspaper under his armpit.', ru: 'Он сунул газету под мышку.' },
      { en: 'She applied deodorant to her armpits.', ru: 'Она нанесла дезодорант на подмышки.' },
      { en: 'The thermometer is placed in the armpit to check for fever.', ru: 'Термометр помещают под мышку, чтобы проверить температуру.' },
      { en: 'Sweat stains appeared under the armpits of his shirt.', ru: 'Пятна пота появились под мышками его рубашки.' }
    ]
),

createRichWord('c1_asparagus', 'Asparagus', '/əˈspærəɡəs/', 'эспэрэгэс', 'Спаржа', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Зеленый овощ в виде длинных стеблей с заостренными верхушками.',
    '- Еда: "Fresh asparagus" (Свежая спаржа)\n- Блюдо: "Grilled asparagus" (Спаржа на гриле)\n- Сезон: "Asparagus season" (Сезон спаржи)',
    [
      { en: 'I love eating grilled asparagus with lemon and butter.', ru: 'Я люблю есть спаржу на гриле с лимоном и маслом.' },
      { en: 'Asparagus is a seasonal vegetable that tastes best in spring.', ru: 'Спаржа — сезонный овощ, который вкуснее всего весной.' },
      { en: 'She served a soup made of green asparagus.', ru: 'Она подала суп из зеленой спаржи.' },
      { en: 'You should trim the woody ends off the asparagus.', ru: 'Вам следует обрезать жесткие концы у спаржи.' }
    ]
  ),
createRichWord('c1_asphalt', 'Asphalt', '/ˈæsfælt/', 'эсфэлт', 'Асфальт', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Черное липкое вещество, смешанное с камнями, используемое для покрытия дорог.',
    '- Дорога: "Lay asphalt" (Класть асфальт)\n- Покрытие: "Asphalt jungle" (Асфальтовые джунгли / Город)\n- Материал: "Hot asphalt" (Горячий асфальт)',
    [
      { en: 'The workers are laying new asphalt on the highway.', ru: 'Рабочие кладут новый асфальт на шоссе.' },
      { en: 'In summer, the asphalt gets soft and sticky.', ru: 'Летом асфальт становится мягким и липким.' },
      { en: 'The car skidded on the wet asphalt.', ru: 'Машина заскользила на мокром асфальте.' },
      { en: 'Children scraped their knees on the rough asphalt.', ru: 'Дети ободрали колени о грубый асфальт.' }
    ]
),

createRichWord('c1_atypical', 'Atypical', '/ˌeɪˈtɪpɪkl/', 'эйтипикл', 'Нетипичный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Не являющийся обычным или нормальным для данного типа человека или вещи.',
    '- Поведение: "Atypical behavior" (Нетипичное поведение)\n- Результат: "Atypical result" (Нетипичный результат)\n- Пример: "Not atypical" (Не редкость)',
    [
      { en: 'His angry outburst was atypical for such a calm man.', ru: 'Его гневная вспышка была нетипичной для такого спокойного человека.' },
      { en: 'Such warm weather is atypical for this time of year.', ru: 'Такая теплая погода нетипична для этого времени года.' },
      { en: 'The disease presented with atypical symptoms.', ru: 'Болезнь проявилась с нетипичными симптомами.' },
      { en: 'It is not atypical for students to change their major.', ru: 'Для студентов не редкость (не является нетипичным) менять специальность.' }
    ]
),

createRichWord('c1_backlog', 'Backlog', '/ˈbæklɒɡ/', 'бэклог', 'Задолженность (по работе) / Накопившаяся работа', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Накопление незавершенной работы или дел, с которыми нужно разобраться.',
    '- Работа: "Clear the backlog" (Разгрести завал)\n- Заказы: "Backlog of orders" (Невыполненные заказы)\n- Время: "Reduce the backlog" (Сократить отставание)',
    [
      { en: 'We have a huge backlog of orders to process.', ru: 'У нас огромный завал заказов, которые нужно обработать.' },
      { en: 'I stayed late at work to clear the backlog of emails.', ru: 'Я задержался на работе допоздна, чтобы разобрать накопившиеся письма.' },
      { en: 'The strike caused a backlog of mail at the post office.', ru: 'Забастовка привела к скоплению почты в почтовом отделении.' },
      { en: 'They hired extra staff to deal with the backlog.', ru: 'Они наняли дополнительный персонал, чтобы справиться с накопившейся работой.' }
    ]
),

createRichWord('c1_barbaric', 'Barbaric', '/bɑːˈbærɪk/', 'бабэрик', 'Варварский / Жестокий', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Чрезвычайно жестокий и неприятный; или относящийся к примитивным народам.',
    '- Жестокость: "Barbaric cruelty" (Варварская жестокость)\n- Обычай: "Barbaric custom" (Варварский обычай)\n- Действие: "Barbaric act" (Варварский поступок)',
    [
      { en: 'The treatment of prisoners was described as barbaric.', ru: 'Обращение с заключенными было описано как варварское.' },
      { en: 'Capital punishment is considered barbaric by many.', ru: 'Многие считают смертную казнь варварством.' },
      { en: 'They destroyed the ancient temple in a barbaric act.', ru: 'Они разрушили древний храм варварским поступком.' },
      { en: 'Such barbaric practices have no place in modern society.', ru: 'Таким варварским практикам нет места в современном обществе.' }
    ]
),

createRichWord('c1_befriend', 'Befriend', '/bɪˈfrend/', 'бифренд', 'Подружиться', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Стать другом кому-либо (особенно тому, кто нуждается в помощи) или вести себя дружелюбно.',
    '- Отношения: "Befriend a newcomer" (Подружиться с новичком)\n- Помощь: "Befriend the lonely" (Подружиться с одинокими)\n- Соцсети: "Unfriend and befriend" (Удалить и добавить в друзья)',
    [
      { en: 'He tried to befriend the new student in class.', ru: 'Он пытался подружиться с новым учеником в классе.' },
      { en: 'It is kind to befriend those who are lonely.', ru: 'Это благородно — подружиться с теми, кто одинок.' },
      { en: 'She befriended the stray cat and gave it food.', ru: 'Она подружилась с бездомной кошкой и дала ей еды.' },
      { en: 'They befriended him when he first arrived in the city.', ru: 'Они подружились с ним, когда он впервые приехал в город.' }
    ]
),

createRichWord('c1_bisexual', 'Bisexual', '/baɪˈsekʃuəl/', 'байсэкшуэл', 'Бисексуальный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Сексуально привлекаемый как к мужчинам, так и к женщинам.',
    '- Ориентация: "Openly bisexual" (Открытый бисексуал)\n- Общество: "Bisexual community" (Бисексуальное сообщество)\n- Идентичность: "Identify as bisexual" (Идентифицировать себя как бисексуал)',
    [
      { en: 'He came out as bisexual to his family last year.', ru: 'В прошлом году он признался семье, что он бисексуал.' },
      { en: 'The character in the movie is portrayed as bisexual.', ru: 'Персонаж в фильме изображен как бисексуал.' },
      { en: 'Discrimination against bisexual people is still an issue.', ru: 'Дискриминация в отношении бисексуальных людей все еще является проблемой.' },
      { en: 'She is an activist for the bisexual community.', ru: 'Она активистка бисексуального сообщества.' }
    ]
),

createRichWord('c1_boo', 'Boo', '/buː/', 'бу', 'Освистывать / Бу (восклицание)', ProficiencyLevel.C1, 'verb', 'Medium', 'Informal',
    'Издавать звук "бу", чтобы показать неодобрение; или пугать кого-то.',
    '- Неодобрение: "Boo the speaker" (Освистать оратора)\n- Страх: "Jump out and shout boo" (Выпрыгнуть и крикнуть "бу")\n- Реакция: "Boo off stage" (Освистать со сцены)',
    [
      { en: 'The crowd started to boo when the politician spoke.', ru: 'Толпа начала освистывать политика, когда он заговорил.' },
      { en: 'He was booed off the stage after a terrible performance.', ru: 'Его освистали и прогнали со сцены после ужасного выступления.' },
      { en: 'Don\'t boo just because you disagree with him.', ru: 'Не освистывай только потому, что ты с ним не согласен.' },
      { en: 'She hid behind the door to shout "boo" at her brother.', ru: 'Она спряталась за дверью, чтобы крикнуть "бу" своему брату.' }
    ]
),

createRichWord('c1_borderline', 'Borderline', '/ˈbɔːdəlaɪn/', 'бодэлайн', 'Пограничный / На грани', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Находящийся на границе между двумя качествами или состояниями; неопределенный.',
    '- Состояние: "Borderline case" (Пограничный случай)\n- Здоровье: "Borderline diabetic" (На грани диабета)\n- Качество: "Borderline acceptable" (Едва приемлемый)',
    [
      { en: 'His grades are borderline; he might fail the year.', ru: 'Его оценки на грани; он может не перейти на следующий курс.' },
      { en: 'The patient is borderline diabetic and needs to diet.', ru: 'Пациент находится на грани диабета и нуждается в диете.' },
      { en: 'Her behavior was borderline rude.', ru: 'Ее поведение было на грани грубости.' },
      { en: 'It was a borderline decision, but we accepted him.', ru: 'Это было пограничное решение, но мы его приняли.' }
    ]
),

createRichWord('c1_boulevard', 'Boulevard', '/ˈbuːləvɑːd/', 'булэвад', 'Бульвар', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Широкая городская улица, часто с деревьями по бокам.',
    '- Город: "Grand boulevard" (Грандиозный бульвар)\n- Прогулка: "Walk along the boulevard" (Гулять по бульвару)\n- Адрес: "Sunset Boulevard" (Сансет Бульвар)',
    [
      { en: 'They strolled down the wide boulevard lined with trees.', ru: 'Они прогуливались по широкому бульвару, обсаженному деревьями.' },
      { en: 'The cafe is located on a busy boulevard.', ru: 'Кафе расположено на оживленном бульваре.' },
      { en: 'Paris is famous for its beautiful boulevards.', ru: 'Париж славится своими красивыми бульварами.' },
      { en: 'Traffic was heavy on the main boulevard this morning.', ru: 'Сегодня утром на главном бульваре было интенсивное движение.' }
    ]
),

createRichWord('c1_brag', 'Brag', '/bræɡ/', 'брэг', 'Хвастаться', ProficiencyLevel.C1, 'verb', 'Medium', 'Informal',
    'Говорить слишком гордо о своих достижениях или имуществе.',
    '- Разговор: "Brag about money" (Хвастаться деньгами)\n- Характер: "Stop bragging" (Перестань хвастаться)\n- Фраза: "Nothing to brag about" (Нечем хвастаться)',
    [
      { en: 'He is always bragging about how much money he earns.', ru: 'Он всегда хвастается тем, сколько денег зарабатывает.' },
      { en: 'I don\'t mean to brag, but I won the competition.', ru: 'Не хочу хвастаться, но я выиграл конкурс.' },
      { en: 'Stop bragging and show us what you can actually do.', ru: 'Хватит хвастаться и покажи нам, что ты на самом деле умеешь.' },
      { en: 'She bragged that her son was the smartest in class.', ru: 'Она хвасталась, что ее сын самый умный в классе.' }
    ]
),

createRichWord('c1_bulldog', 'Bulldog', '/ˈbʊldɒɡ/', 'булдог', 'Бульдог', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Порода собак с большой головой и мощными челюстями; символ упорства.',
    '- Собака: "British bulldog" (Британский бульдог)\n- Характер: "Bulldog spirit" (Бульдожья хватка/упорство)\n- Внешность: "Like a bulldog" (Как бульдог)',
    [
      { en: 'The bulldog is often seen as a symbol of British determination.', ru: 'Бульдога часто рассматривают как символ британской решимости.' },
      { en: 'He has the tenacity of a bulldog.', ru: 'У него хватка (упорство) бульдога.' },
      { en: 'They keep a friendly bulldog as a family pet.', ru: 'Они держат дружелюбного бульдога в качестве домашнего питомца.' },
      { en: 'Churchill was famously compared to a bulldog.', ru: 'Черчилля, как известно, сравнивали с бульдогом.' }
    ]
  ),
createRichWord('c1_accordion', 'Accordion', '/əˈkɔːdiən/', 'экордиэн', 'Аккордеон', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Музыкальный инструмент с клавиатурой и мехами, на котором играют, растягивая и сжимая его.',
    '- Музыка: "Play the accordion" (Играть на аккордеоне)\n- Звук: "Accordion music" (Музыка аккордеона)\n- Метафора: "Accordion effect" (Эффект гармошки)',
    [
      { en: 'He played a lively tune on his old accordion.', ru: 'Он сыграл живую мелодию на своем старом аккордеоне.' },
      { en: 'The accordion is popular in French folk music.', ru: 'Аккордеон популярен во французской народной музыке.' },
      { en: 'She took lessons to learn how to play the accordion.', ru: 'Она брала уроки, чтобы научиться играть на аккордеоне.' },
      { en: 'The bus has an accordion section in the middle.', ru: 'У автобуса есть секция-"гармошка" посередине.' }
    ]
),

createRichWord('c1_amnesia', 'Amnesia', '/æmˈniːziə/', 'эмнизиэ', 'Амнезия / Потеря памяти', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Медицинское состояние, при котором человек теряет память полностью или частично.',
    '- Здоровье: "Suffer from amnesia" (Страдать амнезией)\n- Причина: "Caused by trauma" (Вызвано травмой)\n- Восстановление: "Recover from amnesia" (Оправиться от амнезии)',
    [
      { en: 'After the accident, he suffered from temporary amnesia.', ru: 'После аварии он страдал от временной амнезии.' },
      { en: 'The movie is about a spy with total amnesia.', ru: 'Фильм рассказывает о шпионе с полной потерей памяти.' },
      { en: 'Doctors hope her amnesia will fade with time.', ru: 'Врачи надеются, что ее амнезия со временем пройдет.' },
      { en: 'He woke up in the hospital with amnesia.', ru: 'Он очнулся в больнице с потерей памяти.' }
    ]
),

createRichWord('c1_android', 'Android', '/ˈændrɔɪd/', 'эндройд', 'Андроид', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Робот, внешне напоминающий человека; также операционная система.',
    '- Технологии: "Humanoid android" (Человекоподобный андроид)\n- Фантастика: "Android robot" (Робот-андроид)\n- ПО: "Android phone" (Телефон на Андроиде)',
    [
      { en: 'Science fiction stories often feature intelligent androids.', ru: 'В научно-фантастических рассказах часто фигурируют разумные андроиды.' },
      { en: 'The android looked remarkably like a real human.', ru: 'Андроид был удивительно похож на реального человека.' },
      { en: 'Engineers are developing an android to help the elderly.', ru: 'Инженеры разрабатывают андроида для помощи пожилым людям.' },
      { en: 'In the future, androids might perform dangerous tasks.', ru: 'В будущем андроиды, возможно, будут выполнять опасные задачи.' }
    ]
),

createRichWord('c1_audiovisual', 'Audiovisual', '/ˌɔːdiəʊˈvɪʒuəl/', 'одиоувижуэл', 'Аудиовизуальный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Использующий как звук, так и изображение (например, в обучении или презентациях).',
    '- Обучение: "Audiovisual aids" (Аудиовизуальные средства)\n- Презентация: "Audiovisual equipment" (Аудиовизуальное оборудование)\n- Техника: "Audiovisual technician" (Аудиовизуальный техник)',
    [
      { en: 'The teacher used audiovisual aids to explain the topic.', ru: 'Учитель использовал аудиовизуальные средства, чтобы объяснить тему.' },
      { en: 'We need to check the audiovisual equipment before the meeting.', ru: 'Нам нужно проверить аудиовизуальное оборудование перед встречей.' },
      { en: 'The presentation included an impressive audiovisual display.', ru: 'Презентация включала впечатляющий аудиовизуальный ряд.' },
      { en: 'Schools are investing more in audiovisual technology.', ru: 'Школы вкладывают больше средств в аудиовизуальные технологии.' }
    ]
  ),
createRichWord('c1_bicep', 'Bicep', '/ˈbaɪsep/', 'байсеп', 'Бицепс', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большая мышца на передней части плеча (правильнее biceps, но bicep часто используется в ед.ч.).',
    '- Тело: "Flex biceps" (Напрячь бицепсы)\n- Спорт: "Bicep curl" (Сгибание на бицепс)\n- Сила: "Big biceps" (Большие бицепсы)',
    [
      { en: 'He flexed his bicep to show his strength.', ru: 'Он напряг бицепс, чтобы показать свою силу.' },
      { en: 'She injured her bicep while lifting weights.', ru: 'Она повредила бицепс, поднимая тяжести.' },
      { en: 'Bicep exercises are popular at the gym.', ru: 'Упражнения на бицепс популярны в тренажерном зале.' },
      { en: 'The tattoo was on his left bicep.', ru: 'Татуировка была на его левом бицепсе.' }
    ]
),

createRichWord('c1_biochemistry', 'Biochemistry', '/ˌbaɪəʊˈkemɪstri/', 'байокемистри', 'Биохимия', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Наука, изучающая химические процессы в живых организмах.',
    '- Наука: "Study biochemistry" (Изучать биохимию)\n- Университет: "Degree in biochemistry" (Степень по биохимии)\n- Процесс: "Biochemistry of the brain" (Биохимия мозга)',
    [
      { en: 'He is studying biochemistry at the university.', ru: 'Он изучает биохимию в университете.' },
      { en: 'Biochemistry helps us understand how cells work.', ru: 'Биохимия помогает нам понять, как работают клетки.' },
      { en: 'Understanding the biochemistry of the virus is crucial.', ru: 'Понимание биохимии вируса имеет решающее значение.' },
      { en: 'She has a PhD in biochemistry.', ru: 'У нее докторская степень по биохимии.' }
    ]
),

createRichWord('c1_biomedical', 'Biomedical', '/ˌbaɪəʊˈmedɪkl/', 'байомедикл', 'Биомедицинский', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к биологии и медицине одновременно.',
    '- Наука: "Biomedical research" (Биомедицинские исследования)\n- Работа: "Biomedical engineer" (Биомедицинский инженер)\n- Технологии: "Biomedical science" (Биомедицинская наука)',
    [
      { en: 'Biomedical research has led to new treatments for cancer.', ru: 'Биомедицинские исследования привели к новым методам лечения рака.' },
      { en: 'He works as a biomedical engineer in a hospital.', ru: 'Он работает биомедицинским инженером в больнице.' },
      { en: 'The ethics of biomedical experiments are often debated.', ru: 'Этика биомедицинских экспериментов часто обсуждается.' },
      { en: 'Biomedical science combines biology and technology.', ru: 'Биомедицинская наука объединяет биологию и технологии.' }
    ]
),

createRichWord('c1_bison', 'Bison', '/ˈbaɪsn/', 'байсн', 'Бизон / Зубр', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Крупное дикое животное из семейства бычьих с лохматой шерстью (часто называют buffalo).',
    '- Животное: "American bison" (Американский бизон)\n- Группа: "Herd of bison" (Стадо бизонов)\n- Природа: "Wild bison" (Дикий бизон)',
    [
      { en: 'Huge herds of bison used to roam these plains.', ru: 'Огромные стада бизонов раньше бродили по этим равнинам.' },
      { en: 'The bison is a symbol of the American West.', ru: 'Бизон — символ американского Запада.' },
      { en: 'We saw a bison grazing in the national park.', ru: 'Мы видели бизона, пасущегося в национальном парке.' },
      { en: 'Bison are protected animals now.', ru: 'Бизоны сейчас являются охраняемыми животными.' }
    ]
),

createRichWord('c1_bistro', 'Bistro', '/ˈbiːstrəʊ/', 'бистроу', 'Бистро', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Небольшой и недорогой ресторан, обычно во французском стиле.',
    '- Место: "French bistro" (Французское бистро)\n- Еда: "Lunch at a bistro" (Обед в бистро)\n- Атмосфера: "Cozy bistro" (Уютное бистро)',
    [
      { en: 'We had a lovely dinner at a small bistro.', ru: 'Мы чудесно поужинали в маленьком бистро.' },
      { en: 'The bistro serves excellent wine and cheese.', ru: 'В бистро подают отличное вино и сыр.' },
      { en: 'They opened a trendy bistro in the city center.', ru: 'Они открыли модное бистро в центре города.' },
      { en: 'I prefer the relaxed atmosphere of a bistro.', ru: 'Я предпочитаю расслабленную атмосферу бистро.' }
    ]
),

createRichWord('c1_bleep', 'Bleep', '/bliːp/', 'блип', 'Писк / Запикивать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Издавать короткий высокий звук (электроника); или закрывать нецензурное слово звуком.',
    '- Звук: "Machine bleeps" (Машина пищит)\n- Цензура: "Bleep out" (Запикивать)\n- Устройство: "Bleeper" (Пейджер/сигнализатор)',
    [
      { en: 'The machine started to bleep loudly.', ru: 'Машина начала громко пищать.' },
      { en: 'They had to bleep out the swear words in the interview.', ru: 'Им пришлось запикать ругательства в интервью.' },
      { en: 'I heard a bleep from my phone.', ru: 'Я услышал писк от своего телефона.' },
      { en: 'The monitor bleeps with every heartbeat.', ru: 'Монитор пищит с каждым ударом сердца.' }
    ]
  ),
createRichWord('c1_chamber', 'Chamber', '/ˈtʃeɪm.bər/', 'чеймбэ', 'Палата / Камера', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Зал для официальных собраний, комната (устар.) или полость в организме/механизме.',
    '- Власть: "Council chamber" (Зал совета)\n- Организм: "Heart chambers" (Камеры сердца)\n- Оружие: "Bullet in the chamber" (Пуля в патроннике)',
    [
      { en: 'The members gathered in the council chamber.', ru: 'Члены собрались в зале совета.' },
      { en: 'The human heart has four chambers.', ru: 'Человеческое сердце имеет четыре камеры.' },
      { en: 'Harry Potter and the Chamber of Secrets.', ru: 'Гарри Поттер и Тайная комната.' },
      { en: 'Gas chamber.', ru: 'Газовая камера.' }
    ],
    []
),

createRichWord('c1_charter', 'Charter', '/ˈtʃɑː.tər/', 'чатэ', 'Устав / Хартия', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Официальный документ с правами или аренда транспорта (самолет/лодка).',
    '- Документ: "UN Charter" (Устав ООН)\n- Транспорт: "Charter flight" (Чартерный рейс)\n- Права: "Royal charter" (Королевская хартия)',
    [
      { en: 'The UN Charter outlines basic human rights.', ru: 'Устав ООН описывает основные права человека.' },
      { en: 'We took a charter flight to Greece.', ru: 'Мы полетели в Грецию чартерным рейсом.' },
      { en: 'They chartered a boat for the holiday.', ru: 'Они арендовали лодку на отпуск (глагол).' },
      { en: 'The university received its charter in 1950.', ru: 'Университет получил свой устав в 1950 году.' }
    ],
    []
),

createRichWord('c1_circulate', 'Circulate', '/ˈsɜː.kjə.leɪt/', 'сёкьюлейт', 'Циркулировать / Распространяться', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Двигаться по кругу (кровь, воздух) или передаваться от человека к человеку (слухи, документы).',
    '- Организм: "Blood circulates" (Кровь циркулирует)\n- Информация: "Rumors circulate" (Слухи ходят)\n- Вечеринка: "Circulate among guests" (Общаться с разными гостями)',
    [
      { en: 'Fans help air to circulate in the room.', ru: 'Вентиляторы помогают воздуху циркулировать в комнате.' },
      { en: 'Rumors are circulating about his resignation.', ru: 'Ходят слухи о его отставке.' },
      { en: 'Please circulate this memo to all staff.', ru: 'Пожалуйста, разошлите эту служебную записку всему персоналу.' },
      { en: 'Blood circulates through the body.', ru: 'Кровь циркулирует по телу.' }
    ],
    []
),

createRichWord('c1_cite', 'Cite', '/saɪt/', 'сайт', 'Цитировать / Ссылаться', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Упоминать что-то как пример или доказательство; приводить цитату.',
    '- Доказательство: "Cite statistics" (Приводить статистику)\n- Пример: "Cite an instance" (Привести пример)\n- Суд: "Cited for bravery" (Отмеченный за храбрость)',
    [
      { en: 'He cited several reasons for his decision.', ru: 'Он привел несколько причин своего решения.' },
      { en: 'Please cite your sources in the essay.', ru: 'Пожалуйста, укажите ваши источники в эссе.' },
      { en: 'She cited a poem by Keats.', ru: 'Она процитировала стихотворение Китса.' },
      { en: 'The company was cited for safety violations.', ru: 'Компании вынесли предупреждение за нарушение техники безопасности.' }
    ],
    []
),

createRichWord('c1_civilian', 'Civilian', '/sɪˈvɪl.jən/', 'сивильен', 'Гражданский (сущ.)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, не являющийся военным или полицейским.',
    '- Война: "Innocent civilians" (Невинные мирные жители)\n- Одежда: "Civilian clothes" (Гражданская одежда)\n- Статус: "Back to civilian life" (Назад к гражданской жизни)',
    [
      { en: 'Many civilians were killed in the bombing.', ru: 'Много мирных жителей погибло при бомбардировке.' },
      { en: 'It is hard for soldiers to adjust to civilian life.', ru: 'Солдатам трудно приспособиться к гражданской жизни.' },
      { en: 'The police protect civilians.', ru: 'Полиция защищает гражданских лиц.' },
      { en: 'He was dressed in civilian clothes.', ru: 'Он был одет в гражданское.' }
    ],
    []
),

createRichWord('c1_civilise', 'Civilise', '/ˈsɪv.əl.aɪz/', 'сивилайз', 'Цивилизовать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Просвещать, улучшать манеры или приводить общество к более развитому состоянию.',
    '- Общество: "Civilised society" (Цивилизованное общество)\n- Манеры: "Civilising influence" (Облагораживающее влияние)\n- История: "Civilise the world" (Цивилизовать мир)',
    [
      { en: 'The Romans wanted to civilise the barbarians.', ru: 'Римляне хотели цивилизовать варваров.' },
      { en: 'Education has a civilising effect.', ru: 'Образование оказывает цивилизующий эффект.' },
      { en: 'We need to behave like civilised people.', ru: 'Нам нужно вести себя как цивилизованные люди.' },
      { en: 'Art serves to civilise the human spirit.', ru: 'Искусство служит облагораживанию человеческого духа.' }
    ],
    []
),

createRichWord('c1_clarify', 'Clarify', '/ˈklær.ɪ.faɪ/', 'клэрифай', 'Прояснять', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Сделать что-то более понятным, устранить путаницу.',
    '- Понимание: "Clarify the situation" (Прояснить ситуацию)\n- Текст: "Clarify a point" (Уточнить момент)\n- Просьба: "Please clarify" (Пожалуйста, поясните)',
    [
      { en: 'Could you clarify what you mean?', ru: 'Не могли бы вы пояснить, что вы имеете в виду?' },
      { en: 'I hope this clarifies the matter.', ru: 'Надеюсь, это проясняет дело.' },
      { en: 'The position needs to be clarified.', ru: 'Позицию нужно прояснить.' },
      { en: 'He wrote a letter to clarify his statement.', ru: 'Он написал письмо, чтобы разъяснить свое заявление.' }
    ],
    [
        { meaning: "Make liquid clear (Cooking)", translation: "Осветлять (масло/бульон)", example: { en: "Clarified butter.", ru: "Топленое масло." } }
    ]
),

createRichWord('c1_cluster', 'Cluster', '/ˈklʌs.tər/', 'кластэ', 'Скопление / Гроздь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Группа однотипных объектов, расположенных близко друг к другу.',
    '- Звезды: "Star cluster" (Звездное скопление)\n- Фрукты: "Cluster of grapes" (Гроздь винограда)\n- Люди: "Cluster of people" (Группа людей)',
    [
      { en: 'A cluster of people stood around the accident.', ru: 'Группа людей стояла вокруг места аварии.' },
      { en: 'Galaxies often form clusters.', ru: 'Галактики часто образуют скопления.' },
      { en: 'The children clustered around the teacher.', ru: 'Дети столпились вокруг учителя (глагол).' },
      { en: 'A dense cluster of buildings.', ru: 'Плотное скопление зданий.' }
    ],
    []
),

createRichWord('c1_coalition', 'Coalition', '/ˌkəʊ.əˈlɪʃ.ən/', 'коуэлишн', 'Коалиция', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Временный союз политических партий или государств для совместных действий.',
    '- Политика: "Coalition government" (Коалиционное правительство)\n- Союз: "Form a coalition" (Сформировать коалицию)\n- Действие: "Ruling coalition" (Правящая коалиция)',
    [
      { en: 'The two parties formed a coalition.', ru: 'Две партии сформировали коалицию.' },
      { en: 'The coalition government collapsed after a month.', ru: 'Коалиционное правительство рухнуло через месяц.' },
      { en: 'A coalition of environmental groups.', ru: 'Коалиция экологических групп.' },
      { en: 'Governing by coalition is difficult.', ru: 'Управлять в коалиции сложно.' }
    ],
    []
),

createRichWord('c1_coincide', 'Coincide', '/ˌkəʊ.ɪnˈsaɪd/', 'коуинсайд', 'Совпадать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Происходить в то же время или быть одинаковым (о мнениях).',
    '- Время: "Dates coincide" (Даты совпадают)\n- Мнение: "Views coincide" (Взгляды совпадают)\n- Событие: "Coincide with" (Совпасть с)',
    [
      { en: 'My birthday coincides with a national holiday.', ru: 'Мой день рождения совпадает с национальным праздником.' },
      { en: 'Our interests coincide in this matter.', ru: 'Наши интересы в этом вопросе совпадают.' },
      { en: 'The strike was timed to coincide with the conference.', ru: 'Забастовка была приурочена к конференции.' },
      { en: 'If our schedules coincide, let\'s meet.', ru: 'Если наши расписания совпадут, давай встретимся.' }
    ],
    []
),

createRichWord('c1_collaborate', 'Collaborate', '/kəˈlæb.ə.reɪt/', 'кэлэбэрейт', 'Сотрудничать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Работать вместе над проектом или целью.',
    '- Работа: "Collaborate on a project" (Сотрудничать над проектом)\n- Наука: "Collaborate with researchers" (Сотрудничать с исследователями)\n- Предательство: "Collaborate with enemy" (Сотрудничать с врагом)',
    [
      { en: 'The two writers collaborated on the script.', ru: 'Два писателя вместе работали над сценарием.' },
      { en: 'We need to collaborate to succeed.', ru: 'Нам нужно сотрудничать, чтобы преуспеть.' },
      { en: 'He was accused of collaborating with the enemy.', ru: 'Его обвинили в сотрудничестве с врагом.' },
      { en: 'Scientists from different countries collaborated.', ru: 'Ученые из разных стран сотрудничали.' }
    ],
    []
),

createRichWord('c1_combat', 'Combat', '/ˈkɒm.bæt/', 'комбэт', 'Бой / Борьба', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Сражение (военное) или активные меры против чего-то плохого. Как глагол — бороться.',
    '- Война: "Armed combat" (Вооруженный бой)\n- Действие: "Combat crime" (Бороться с преступностью)\n- Спорт: "Combat sports" (Единоборства)',
    [
      { en: 'Soldiers are trained for unarmed combat.', ru: 'Солдат обучают рукопашному бою.' },
      { en: 'We must combat climate change.', ru: 'Мы должны бороться с изменением климата (глагол).' },
      { en: 'He was killed in combat.', ru: 'Он был убит в бою.' },
      { en: 'New measures to combat inflation.', ru: 'Новые меры по борьбе с инфляцией.' }
    ],
    []
),

createRichWord('c1_companion', 'Companion', '/kəmˈpæn.jən/', 'кэмпэньен', 'Спутник / Компаньон', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, с которым вы проводите время или путешествуете.',
    '- Путешествие: "Traveling companion" (Попутчик)\n- Жизнь: "Companion for life" (Спутник жизни)\n- Книга: "Gardener\'s companion" (Справочник садовода)',
    [
      { en: 'She is a wonderful dinner companion.', ru: 'Она прекрасный собеседник за ужином.' },
      { en: 'The dog was his faithful companion.', ru: 'Собака была его верным спутником.' },
      { en: 'He needs a constant companion.', ru: 'Ему нужен постоянный спутник (сиделка/друг).' },
      { en: 'A companion volume to the history book.', ru: 'Том-приложение к книге по истории.' }
    ],
    []
),

createRichWord('c1_compensate', 'Compensate', '/ˈkɒm.pən.seɪt/', 'компэнсейт', 'Компенсировать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Возмещать ущерб деньгами или уравновешивать недостаток чем-то другим.',
    '- Деньги: "Compensate for loss" (Компенсировать убытки)\n- Работа: "Compensate workers" (Платить работникам)\n- Недостаток: "Compensate for lack of skill" (Компенсировать недостаток навыка)',
    [
      { en: 'Nothing can compensate for the loss of a child.', ru: 'Ничто не может возместить потерю ребенка.' },
      { en: 'The company compensated him for the accident.', ru: 'Компания выплатила ему компенсацию за несчастный случай.' },
      { en: 'He works hard to compensate for his lack of experience.', ru: 'Он много работает, чтобы компенсировать недостаток опыта.' },
      { en: 'Victims will be compensated.', ru: 'Жертвам будет выплачена компенсация.' }
    ],
    []
),

createRichWord('c1_competent', 'Competent', '/ˈkɒm.pɪ.tənt/', 'компитэт', 'Компетентный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Имеющий достаточные знания и навыки для выполнения чего-либо.',
    '- Работа: "Competent employee" (Компетентный сотрудник)\n- Навык: "Very competent" (Очень квалифицированный)\n- Язык: "Competent speaker" (Владеющий языком на хорошем уровне)',
    [
      { en: 'She is a highly competent manager.', ru: 'Она высококвалифицированный менеджер.' },
      { en: 'I don\'t feel competent to give advice on this.', ru: 'Я не чувствую себя достаточно компетентным, чтобы давать советы по этому поводу.' },
      { en: 'He is competent in three languages.', ru: 'Он компетентен (владеет) в трех языках.' },
      { en: 'We need a competent mechanic.', ru: 'Нам нужен толковый механик.' }
    ],
    []
),

createRichWord('c1_comprehensive', 'Comprehensive', '/ˌkɒm.prɪˈhen.sɪv/', 'комприхенсив', 'Всеобъемлющий', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Включающий в себя всё или почти всё; полный.',
    '- Знание: "Comprehensive knowledge" (Глубокие знания)\n- Документ: "Comprehensive guide" (Полное руководство)\n- Страховка: "Comprehensive insurance" (Полная страховка)',
    [
      { en: 'We offer a comprehensive range of services.', ru: 'Мы предлагаем полный спектр услуг.' },
      { en: 'He has a comprehensive understanding of the subject.', ru: 'У него есть всестороннее понимание предмета.' },
      { en: 'The school provides comprehensive education.', ru: 'Школа предоставляет всестороннее образование.' },
      { en: 'They conducted a comprehensive review.', ru: 'Они провели всесторонний обзор.' }
    ],
    []
),

createRichWord('c1_comprise', 'Comprise', '/kəmˈpraɪz/', 'кэмпрайз', 'Включать / Составлять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Состоять из чего-либо или составлять собой целое.',
    '- Состав: "Comprise of" (Состоять из - *частая ошибка, лучше be comprised of*)\n- Части: "Team comprises" (Команда включает)\n- Целое: "Women comprise 50%" (Женщины составляют 50%)',
    [
      { en: 'The collection comprises 300 paintings.', ru: 'Коллекция насчитывает (включает) 300 картин.' },
      { en: 'The committee is comprised of eight members.', ru: 'Комитет состоит из восьми членов.' },
      { en: 'Women comprise a large proportion of the staff.', ru: 'Женщины составляют большую часть персонала.' },
      { en: 'The exam comprises two parts.', ru: 'Экзамен состоит из двух частей.' }
    ],
    []
  ),
createRichWord('c1_congress', 'Congress', '/ˈkɒŋ.ɡres/', 'конгрес', 'Конгресс / Съезд', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Крупное официальное собрание представителей (политическое или научное).',
    '- Политика: "US Congress" (Конгресс США)\n- Наука: "Medical congress" (Медицинский конгресс)\n- Действие: "Hold a congress" (Проводить съезд)',
    [
      { en: 'Congress passed a new law today.', ru: 'Конгресс принял сегодня новый закон.' },
      { en: 'He attended an international congress on physics.', ru: 'Он посетил международный конгресс по физике.' },
      { en: 'The party holds an annual congress.', ru: 'Партия проводит ежегодный съезд.' },
      { en: 'Members of Congress voted against it.', ru: 'Члены Конгресса проголосовали против этого.' }
    ],
    []
),

createRichWord('c1_consent', 'Consent', '/kənˈsent/', 'кэнсент', 'Согласие', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Разрешение или согласие на что-либо. Как глагол — соглашаться.',
    '- Разрешение: "Parental consent" (Согласие родителей)\n- Медицина: "Informed consent" (Информированное согласие)\n- Фраза: "By common consent" (С общего согласия)',
    [
      { en: 'You cannot go without your parents\' consent.', ru: 'Ты не можешь пойти без согласия родителей.' },
      { en: 'Silence implies consent.', ru: 'Молчание — знак согласия.' },
      { en: 'He consented to the marriage.', ru: 'Он дал согласие на брак (глагол).' },
      { en: 'The patient gave written consent for the surgery.', ru: 'Пациент дал письменное согласие на операцию.' }
    ],
    []
),

createRichWord('c1_consequent', 'Consequent', '/ˈkɒn.sɪ.kwənt/', 'консиквент', 'Следственный / Вытекающий', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Происходящий как результат чего-либо.',
    '- Логика: "Consequent problems" (Вытекающие проблемы)\n- Ущерб: "Consequent damage" (Последующий ущерб)\n- Фраза: "Consequent upon" (Являющийся следствием чего-то)',
    [
      { en: 'The drought and consequent famine killed thousands.', ru: 'Засуха и последовавший за ней голод убили тысячи.' },
      { en: 'He made a mistake and suffered the consequent loss.', ru: 'Он совершил ошибку и понес вытекающие убытки.' },
      { en: 'The rise in prices was consequent on the war.', ru: 'Рост цен был следствием войны.' },
      { en: 'We need to deal with the consequent issues.', ru: 'Нам нужно решить вытекающие вопросы.' }
    ],
    []
),

createRichWord('c1_conservative', 'Conservative', '/kənˈsɜː.və.tɪv/', 'кэнсёвэтив', 'Консервативный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Не любящий перемены или придерживающийся традиционных ценностей. Также "осторожный" (в оценках).',
    '- Политика: "Conservative party" (Консервативная партия)\n- Оценка: "Conservative estimate" (Скромная/осторожная оценка)\n- Стиль: "Conservative suit" (Строгий костюм)',
    [
      { en: 'He has very conservative views on marriage.', ru: 'У него очень консервативные взгляды на брак.' },
      { en: 'At a conservative estimate, he is worth a million.', ru: 'По скромным оценкам, его состояние составляет миллион.' },
      { en: 'Older people tend to be more conservative.', ru: 'Пожилые люди, как правило, более консервативны.' },
      { en: 'She wore a conservative dark blue dress.', ru: 'Она была одета в строгое темно-синее платье.' }
    ],
    []
),

createRichWord('c1_conserve', 'Conserve', '/kənˈsɜːv/', 'кэнсёв', 'Сохранять / Беречь', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Защищать от потери или истощения (природу, энергию).',
    '- Природа: "Conserve wildlife" (Беречь дикую природу)\n- Энергия: "Conserve energy" (Экономить энергию)\n- Ресурсы: "Conserve water" (Беречь воду)',
    [
      { en: 'We need to conserve our natural resources.', ru: 'Нам нужно беречь наши природные ресурсы.' },
      { en: 'Turn off the lights to conserve electricity.', ru: 'Выключайте свет, чтобы экономить электричество.' },
      { en: 'The aim is to conserve the old building.', ru: 'Цель состоит в том, чтобы сохранить старое здание.' },
      { en: 'Runners conserve their energy for the final sprint.', ru: 'Бегуны берегут силы для финального рывка.' }
    ],
    [
        { meaning: "Fruit jam (noun)", translation: "Варенье / Джем (с кусочками)", example: { en: "Apricot conserve.", ru: "Абрикосовый джем." } }
    ]
),

createRichWord('c1_constitute', 'Constitute', '/ˈkɒn.stɪ.tjuːt/', 'конститьют', 'Составлять / Представлять собой', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Быть частью целого или являться чем-то (формальный синоним "be").',
    '- Суть: "Constitute a danger" (Представлять опасность)\n- Части: "Constitute the majority" (Составлять большинство)\n- Определение: "What constitutes art?" (Что считается искусством?)',
    [
      { en: 'Twelve months constitute a year.', ru: 'Двенадцать месяцев составляют год.' },
      { en: 'This action constitutes a crime.', ru: 'Это действие является преступлением.' },
      { en: 'Women constitute 60% of the students.', ru: 'Женщины составляют 60% студентов.' },
      { en: 'Does this constitute a breach of contract?', ru: 'Является ли это нарушением контракта?' }
    ],
    []
),

createRichWord('c1_constitution', 'Constitution', '/ˌkɒn.stɪˈtjuː.ʃən/', 'конститьюшн', 'Конституция', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Основной закон страны или физическое состояние здоровья человека.',
    '- Закон: "Written constitution" (Письменная конституция)\n- Здоровье: "Strong constitution" (Крепкое здоровье/телосложение)\n- Политика: "Change the constitution" (Изменить конституцию)',
    [
      { en: 'The US Constitution was signed in 1787.', ru: 'Конституция США была подписана в 1787 году.' },
      { en: 'Freedom of speech is guaranteed by the constitution.', ru: 'Свобода слова гарантирована конституцией.' },
      { en: 'He has a very strong constitution.', ru: 'У него очень крепкое здоровье.' },
      { en: 'The club adopted a new constitution.', ru: 'Клуб принял новый устав.' }
    ],
    []
),

createRichWord('c1_contradict', 'Contradict', '/ˌkɒn.trəˈdɪkt/', 'контрэдикт', 'Противоречить / Возражать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Говорить обратное или не соответствовать чему-то.',
    '- Речь: "Don\'t contradict me" (Не возражай мне)\n- Факты: "Contradict the evidence" (Противоречить уликам)\n- Логика: "Contradict yourself" (Противоречить самому себе)',
    [
      { en: 'He didn\'t dare to contradict his boss.', ru: 'Он не смел возражать своему боссу.' },
      { en: 'The witness contradicted her earlier statement.', ru: 'Свидетельница противоречила своему раннему заявлению.' },
      { en: 'These results contradict previous research.', ru: 'Эти результаты противоречат предыдущим исследованиям.' },
      { en: 'Stop contradicting everything I say!', ru: 'Перестань возражать всему, что я говорю!' }
    ],
    []
),

createRichWord('c1_controversy', 'Controversy', '/ˈkɒn.trə.vɜː.si/', 'контрэвёси', 'Спор / Полемика', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Публичный спор или разногласие по важному вопросу.',
    '- Общество: "Caused controversy" (Вызвал споры)\n- Политика: "Political controversy" (Политическая полемика)\n- Масштаб: "Major controversy" (Крупный скандал/спор)',
    [
      { en: 'The new law caused a lot of controversy.', ru: 'Новый закон вызвал много споров.' },
      { en: 'There is a controversy over the new airport.', ru: 'Идут споры по поводу нового аэропорта.' },
      { en: 'He resigned amid controversy.', ru: 'Он ушел в отставку на фоне скандала.' },
      { en: 'The book is subject to much controversy.', ru: 'Книга является предметом многих споров.' }
    ],
    []
),

createRichWord('c1_convention', 'Convention', '/kənˈven.ʃən/', 'кэнвеншн', 'Конвенция / Съезд / Условность', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Большое собрание, международное соглашение или принятая норма поведения.',
    '- Соглашение: "Geneva Convention" (Женевская конвенция)\n- Собрание: "Comics convention" (Съезд любителей комиксов)\n- Норма: "Social convention" (Социальная норма)',
    [
      { en: 'The Geneva Convention protects prisoners of war.', ru: 'Женевская конвенция защищает военнопленных.' },
      { en: 'He defied convention by wearing jeans to the opera.', ru: 'Он бросил вызов условностям, надев джинсы в оперу.' },
      { en: 'Thousands attended the annual convention.', ru: 'Тысячи людей посетили ежегодный съезд.' },
      { en: 'By convention, the leader speaks first.', ru: 'По традиции (условному правилу), лидер говорит первым.' }
    ],
    []
),

createRichWord('c1_convey', 'Convey', '/kənˈveɪ/', 'кэнвей', 'Передавать / Выражать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Передавать сообщение, чувство или перевозить что-то.',
    '- Информация: "Convey a message" (Передать сообщение)\n- Чувство: "Convey meaning" (Передать смысл)\n- Транспорт: "Convey goods" (Перевозить товары)',
    [
      { en: 'Please convey my apologies to your wife.', ru: 'Пожалуйста, передай мои извинения своей жене.' },
      { en: 'Words cannot convey how happy I am.', ru: 'Слова не могут передать, как я счастлив.' },
      { en: 'The pipes convey water to the city.', ru: 'Трубы доставляют воду в город.' },
      { en: 'He managed to convey his enthusiasm.', ru: 'Ему удалось передать свой энтузиазм.' }
    ],
    []
),

createRichWord('c1_correspondent', 'Correspondent', '/ˌkɒr.ɪˈspɒn.dənt/', 'кориспондэнт', 'Корреспондент', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Журналист, сообщающий новости из определенного места или по теме.',
    '- СМИ: "War correspondent" (Военный корреспондент)\n- Тема: "Foreign correspondent" (Иностранный корреспондент)\n- Роль: "BBC correspondent" (Корреспондент BBC)',
    [
      { en: 'She works as a foreign correspondent in Paris.', ru: 'Она работает иностранным корреспондентом в Париже.' },
      { en: 'Our correspondent reports from the scene.', ru: 'Наш корреспондент передает с места событий.' },
      { en: 'He was a war correspondent in Vietnam.', ru: 'Он был военным корреспондентом во Вьетнаме.' },
      { en: 'The correspondent sent a dispatch.', ru: 'Корреспондент отправил депешу.' }
    ],
    []
),

createRichWord('c1_corrupt', 'Corrupt', '/kəˈrʌpt/', 'кэрапт', 'Коррумпированный / Развращать', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Нечестный (берущий взятки) или испорченный. Как глагол — развращать или портить (файл).',
    '- Политика: "Corrupt official" (Коррумпированный чиновник)\n- Мораль: "Morally corrupt" (Морально разложившийся)\n- IT: "Corrupt file" (Поврежденный файл)',
    [
      { en: 'The new mayor promised to fight corrupt politicians.', ru: 'Новый мэр пообещал бороться с коррумпированными политиками.' },
      { en: 'Power tends to corrupt.', ru: 'Власть имеет свойство развращать.' },
      { en: 'The computer file is corrupt and won\'t open.', ru: 'Компьютерный файл поврежден и не открывается.' },
      { en: 'He was accused of corrupt practices.', ru: 'Его обвинили в коррупционных действиях.' }
    ],
    []
),

createRichWord('c1_criteria', 'Criteria', '/kraɪˈtɪə.ri.ə/', 'крайтириэ', 'Критерии', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Стандарты, по которым что-то оценивается (множественное число от Criterion).',
    '- Оценка: "Selection criteria" (Критерии отбора)\n- Требование: "Meet the criteria" (Соответствовать критериям)\n- Важность: "Main criteria" (Главные критерии)',
    [
      { en: 'What represent the criteria for success?', ru: 'Что представляет собой критерии успеха?' },
      { en: 'She meets all the criteria for the job.', ru: 'Она соответствует всем критериям для этой работы.' },
      { en: 'The criteria are very strict.', ru: 'Критерии очень строгие.' },
      { en: 'Academic ability is not the only criterion.', ru: 'Академические способности — не единственный критерий (ед.ч.).' }
    ],
    []
),

createRichWord('c1_crystal', 'Crystal', '/ˈkrɪs.təl/', 'кристэл', 'Кристалл / Хрусталь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Прозрачный минерал или высококачественное стекло.',
    '- Материал: "Crystal glass" (Хрустальный бокал)\n- Ясность: "Crystal clear" (Кристально чистый / Совершенно ясный)\n- Магия: "Crystal ball" (Хрустальный шар)',
    [
      { en: 'She drank from a crystal goblet.', ru: 'Она пила из хрустального кубка.' },
      { en: 'The water in the lake was crystal clear.', ru: 'Вода в озере была кристально чистой.' },
      { en: 'Salt forms cubic crystals.', ru: 'Соль образует кубические кристаллы.' },
      { en: 'I made my meaning crystal clear.', ru: 'Я выразился предельно ясно.' }
    ],
    []
),

createRichWord('c1_damn', 'Damn', '/dæm/', 'дэм', 'Проклинать / Черт!', ProficiencyLevel.C1, 'verb', 'High', 'Informal',
    'Ругательство, выражающее злость, или (в прямом смысле) обрекать на адские муки.',
    '- Эмоция: "Damn it!" (Черт возьми!)\n- Усиление: "Damn good" (Чертовски хороший)\n- Религия: "Damned soul" (Проклятая душа)',
    [
      { en: 'Damn! I forgot my keys.', ru: 'Черт! Я забыл ключи.' },
      { en: 'That is a damn good idea.', ru: 'Это чертовски хорошая идея.' },
      { en: 'He was damned for his sins.', ru: 'Он был проклят за свои грехи.' },
      { en: 'I don\'t give a damn.', ru: 'Мне наплевать (грубо).' }
    ],
    []
  ),
createRichWord('c1_bureaucracy', 'Bureaucracy', '/bjʊəˈrɒk.rə.si/', 'бьюрокрэси', 'Бюрократия', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Сложная система управления с множеством правил и бумажной работы.',
    '- Система: "Government bureaucracy" (Правительственная бюрократия)\n- Проблема: "Reduce bureaucracy" (Сократить бюрократию)\n- Метафора: "Red tape" (Бюрократическая волокита)',
    [
      { en: 'We have to deal with a lot of bureaucracy.', ru: 'Нам приходится иметь дело с большой бюрократией.' },
      { en: 'Bureaucracy slows down the process.', ru: 'Бюрократия замедляет процесс.' },
      { en: 'He complained about the unnecessary bureaucracy.', ru: 'Он жаловался на ненужную бюрократию.' },
      { en: 'Small businesses struggle with bureaucracy.', ru: 'Малый бизнес страдает от бюрократии.' }
    ],
    []
),

createRichWord('c1_bureaucrat', 'Bureaucrat', '/ˈbjʊə.rə.kræt/', 'бьюрэкрэт', 'Бюрократ / Чиновник', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Чиновник, работающий в государственной системе, часто следующий правилам слишком строго.',
    '- Человек: "Faceless bureaucrat" (Безликий бюрократ)\n- Отношение: "Petty bureaucrat" (Мелкий чиновник)\n- Работа: "Senior bureaucrat" (Высокопоставленный чиновник)',
    [
      { en: 'He was just a bureaucrat doing his job.', ru: 'Он был просто чиновником, делающим свою работу.' },
      { en: 'Bureaucrats often ignore the needs of real people.', ru: 'Бюрократы часто игнорируют нужды реальных людей.' },
      { en: 'The decision was made by unelected bureaucrats.', ru: 'Решение было принято неизбранными чиновниками.' },
      { en: 'Don\'t be such a bureaucrat!', ru: 'Не будь таким бюрократом!' }
    ],
    []
),

createRichWord('c1_canvas', 'Canvas', '/ˈkæn.vəs/', 'кэнвэс', 'Холст / Брезент', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Прочная грубая ткань, используемая для палаток, парусов или рисования картин.',
    '- Искусство: "Oil on canvas" (Масло на холсте)\n- Материал: "Canvas bag" (Брезентовая сумка)\n- Идиома: "Blank canvas" (Чистый лист / Начало с нуля)',
    [
      { en: 'The artist painted on a large canvas.', ru: 'Художник рисовал на большом холсте.' },
      { en: 'We slept in a tent made of canvas.', ru: 'Мы спали в палатке из брезента.' },
      { en: 'He wore simple canvas shoes.', ru: 'Он носил простые парусиновые туфли.' },
      { en: 'The project is a blank canvas for your ideas.', ru: 'Этот проект — чистый холст для твоих идей.' }
    ],
    []
),

createRichWord('c1_capitalism', 'Capitalism', '/ˈkæp.ɪ.təl.ɪ.zəm/', 'кэпитэлизм', 'Капитализм', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Экономическая система, где бизнес принадлежит частным лицам, а не государству.',
    '- Экономика: "Free market capitalism" (Рыночный капитализм)\n- Критика: "Critique of capitalism" (Критика капитализма)\n- Развитие: "Modern capitalism" (Современный капитализм)',
    [
      { en: 'Capitalism encourages competition.', ru: 'Капитализм поощряет конкуренцию.' },
      { en: 'They discussed the pros and cons of capitalism.', ru: 'Они обсуждали плюсы и минусы капитализма.' },
      { en: 'The country moved from communism to capitalism.', ru: 'Страна перешла от коммунизма к капитализму.' },
      { en: 'Capitalism is based on private ownership.', ru: 'Капитализм основан на частной собственности.' }
    ],
    []
),

createRichWord('c1_capitalist', 'Capitalist', '/ˈkæp.ɪ.təl.ɪst/', 'кэпитэлист', 'Капиталист', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Сторонник капитализма или богатый человек, инвестирующий в бизнес.',
    '- Человек: "Rich capitalist" (Богатый капиталист)\n- Система: "Capitalist society" (Капиталистическое общество)\n- Экономика: "Capitalist economy" (Капиталистическая экономика)',
    [
      { en: 'He is a wealthy venture capitalist.', ru: 'Он богатый венчурный капиталист.' },
      { en: 'They live in a capitalist country.', ru: 'Они живут в капиталистической стране.' },
      { en: 'The factory owners were typical capitalists.', ru: 'Владельцы фабрики были типичными капиталистами.' },
      { en: 'Capitalist ideals focus on profit.', ru: 'Капиталистические идеалы фокусируются на прибыли.' }
    ],
    []
),

createRichWord('c1_cargo', 'Cargo', '/ˈkɑː.ɡəʊ/', 'кагоу', 'Груз', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Товары, перевозимые на корабле, самолете или грузовике.',
    '- Транспорт: "Cargo ship" (Грузовой корабль)\n- Авиация: "Air cargo" (Авиагруз)\n- Действие: "Load cargo" (Погружать груз)',
    [
      { en: 'The ship was carrying a cargo of oil.', ru: 'Корабль перевозил груз нефти.' },
      { en: 'Cargo planes can carry heavy equipment.', ru: 'Грузовые самолеты могут перевозить тяжелое оборудование.' },
      { en: 'The cargo was inspected at the port.', ru: 'Груз был досмотрен в порту.' },
      { en: 'Precious cargo.', ru: 'Ценный груз.' }
    ],
    []
),

createRichWord('c1_carriage', 'Carriage', '/ˈkær.ɪdʒ/', 'кэридж', 'Вагон / Карета', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Пассажирский вагон поезда или транспортное средство, запряженное лошадьми.',
    '- Поезд: "Railway carriage" (Железнодорожный вагон)\n- История: "Horse-drawn carriage" (Конная карета)\n- Младенец: "Baby carriage" (Детская коляска - амер.)',
    [
      { en: 'We sat in the first carriage of the train.', ru: 'Мы сидели в первом вагоне поезда.' },
      { en: 'The Queen arrived in a golden carriage.', ru: 'Королева прибыла в золотой карете.' },
      { en: 'The carriage was full of commuters.', ru: 'Вагон был полон пассажиров.' },
      { en: 'The horse pulled the heavy carriage.', ru: 'Лошадь тянула тяжелую повозку.' }
    ],
    [
        { meaning: "Posture/Bearing", translation: "Осанка", example: { en: "She has an elegant carriage.", ru: "У нее элегантная осанка." } }
    ]
),

createRichWord('c1_cater', 'Cater', '/ˈkeɪ.tər/', 'кейтэ', 'Обслуживать / Поставлять еду', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Предоставлять еду и напитки для мероприятий или удовлетворять чьи-то нужды.',
    '- Еда: "Cater for a wedding" (Обслуживать свадьбу)\n- Нужды: "Cater to needs" (Удовлетворять потребности)\n- Вкусы: "Cater to all tastes" (Угодить всем вкусам)',
    [
      { en: 'Who is catering the party?', ru: 'Кто поставляет еду для вечеринки?' },
      { en: 'This TV show caters to children.', ru: 'Это телешоу ориентировано на (обслуживает интересы) детей.' },
      { en: 'We cater for vegetarians.', ru: 'Мы предоставляем питание для вегетарианцев.' },
      { en: 'They cater to a wealthy clientele.', ru: 'Они обслуживают богатую клиентуру.' }
    ],
    []
),

createRichWord('c1_caution', 'Caution', '/ˈkɔː.ʃən/', 'кошэн', 'Осторожность / Предостережение', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Внимательность, чтобы избежать опасности, или официальное предупреждение.',
    '- Поведение: "Exercise caution" (Проявлять осторожность)\n- Фраза: "Throw caution to the wind" (Отбросить осторожность)\n- Полиция: "Let off with a caution" (Отпустить с предупреждением)',
    [
      { en: 'Proceed with extreme caution.', ru: 'Действуйте с крайней осторожностью.' },
      { en: 'The police gave him a formal caution.', ru: 'Полиция вынесла ему официальное предостережение.' },
      { en: 'He treated the dog with caution.', ru: 'Он относился к собаке с опаской.' },
      { en: 'Words of caution.', ru: 'Слова предостережения.' }
    ],
    []
),

createRichWord('c1_certify', 'Certify', '/ˈsɜː.tɪ.faɪ/', 'сётифай', 'Удостоверять / Сертифицировать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Официально подтверждать, что что-то верно или соответствует стандартам.',
    '- Документ: "Certify a copy" (Заверить копию)\n- Качество: "Certified organic" (Сертифицированный органический)\n- Психика: "Certify insane" (Признать невменяемым)',
    [
      { en: 'The accounts must be certified by an auditor.', ru: 'Счета должны быть заверены аудитором.' },
      { en: 'This document certifies that you have passed.', ru: 'Этот документ удостоверяет, что вы сдали экзамен.' },
      { en: 'He is a certified accountant.', ru: 'Он дипломированный (сертифицированный) бухгалтер.' },
      { en: 'The doctor certified her dead.', ru: 'Врач констатировал (удостоверил) ее смерть.' }
    ],
    []
),

createRichWord('c1_chapel', 'Chapel', '/ˈtʃæp.əl/', 'чепл', 'Часовня', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Небольшая церковь или комната для молитв в большом здании (больнице, тюрьме).',
    '- Место: "Hospital chapel" (Больничная часовня)\n- Свадьба: "Wedding chapel" (Свадебная часовня)\n- Школа: "Attend chapel" (Посещать службу в часовне)',
    [
      { en: 'They prayed in the small chapel.', ru: 'Они молились в маленькой часовне.' },
      { en: 'The castle has its own private chapel.', ru: 'У замка есть собственная частная часовня.' },
      { en: 'We visited the Sistine Chapel in Rome.', ru: 'Мы посетили Сикстинскую капеллу в Риме.' },
      { en: 'The service was held in the college chapel.', ru: 'Служба проходила в часовне колледжа.' }
    ],
    []
),

createRichWord('c1_cholesterol', 'Cholesterol', '/kəˈles.tər.ɒl/', 'кэлестэрол', 'Холестерин', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Жировое вещество в организме.',
    '- Здоровье: "High cholesterol" (Высокий холестерин)\n- Еда: "Low in cholesterol" (С низким содержанием холестерина)\n- Анализ: "Cholesterol level" (Уровень холестерина)',
    [
      { en: 'You need to lower your cholesterol.', ru: 'Вам нужно снизить уровень холестерина.' },
      { en: 'Eggs contain cholesterol.', ru: 'Яйца содержат холестерин.' },
      { en: 'He takes medication for cholesterol.', ru: 'Он принимает лекарства от холестерина.' },
      { en: 'A diet high in fat raises cholesterol.', ru: 'Диета с высоким содержанием жиров повышает холестерин.' }
    ],
    []
),

createRichWord('c1_civic', 'Civic', '/ˈsɪv.ɪk/', 'сивик', 'Гражданский / Городской', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к городу или обязанностям граждан.',
    '- Долг: "Civic duty" (Гражданский долг)\n- Гордость: "Civic pride" (Гордость за свой город)\n- Центр: "Civic center" (Общественно-административный центр)',
    [
      { en: 'Voting is a civic duty.', ru: 'Голосование — это гражданский долг.' },
      { en: 'The mayor spoke about civic responsibility.', ru: 'Мэр говорил о гражданской ответственности.' },
      { en: 'There is a strong sense of civic pride here.', ru: 'Здесь сильно развито чувство городской гордости.' },
      { en: 'The meeting was held at the civic centre.', ru: 'Собрание проходило в общественном центре.' }
    ],
    []
),

createRichWord('c1_clash', 'Clash', '/klæʃ/', 'клэш', 'Столкновение / Лязг', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Серьезный конфликт, битва или громкий металлический звук. Как глагол — конфликтовать.',
    '- Конфликт: "Clash of cultures" (Столкновение культур)\n- Звук: "Metallic clash" (Металлический лязг)\n- Цвет: "Colors clash" (Цвета не сочетаются)',
    [
      { en: 'Police clashed with protesters.', ru: 'Полиция столкнулась с протестующими.' },
      { en: 'There was a clash of opinions at the meeting.', ru: 'На собрании произошло столкновение мнений.' },
      { en: 'Her pink shirt clashes with her red skirt.', ru: 'Её розовая рубашка не сочетается с красной юбкой.' },
      { en: 'I heard the clash of swords.', ru: 'Я слышал звон мечей.' }
    ],
    []
),

createRichWord('c1_classification', 'Classification', '/ˌklæs.ɪ.fɪˈkeɪ.ʃən/', 'клэсификейшн', 'Классификация', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Процесс распределения вещей по категориям.',
    '- Система: "System of classification" (Система классификации)\n- Вид: "Job classification" (Классификация должностей)\n- Биология: "Plant classification" (Классификация растений)',
    [
      { en: 'The classification of books in the library is complex.', ru: 'Классификация книг в библиотеке сложная.' },
      { en: 'This film has an 18 classification.', ru: 'У этого фильма рейтинг 18+.' },
      { en: 'We need a better classification system.', ru: 'Нам нужна лучшая система классификации.' },
      { en: 'The classification is based on size.', ru: 'Классификация основана на размере.' }
    ],
    []
),

createRichWord('c1_clone', 'Clone', '/kləʊn/', 'клоун', 'Клон / Клонировать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Точная генетическая копия растения или животного. Также подделка или копия.',
    '- Наука: "Human clone" (Клон человека)\n- IT: "PC clone" (Клон ПК)\n- Действие: "Clone a sheep" (Клонировать овцу)',
    [
      { en: 'Dolly the sheep was the first famous clone.', ru: 'Овечка Долли была первым известным клоном.' },
      { en: 'Scientists are trying to clone extinct animals.', ru: 'Ученые пытаются клонировать вымерших животных.' },
      { en: 'This phone is a cheap clone of the iPhone.', ru: 'Этот телефон — дешевая копия (клон) Айфона.' },
      { en: 'Is cloning ethical?', ru: 'Этично ли клонирование?' }
    ],
    []
),

createRichWord('c1_coffin', 'Coffin', '/ˈkɒf.ɪn/', 'кофин', 'Гроб', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Ящик, в котором хоронят или кремируют мертвое тело.',
    '- Похороны: "Carry the coffin" (Нести гроб)\n- Материал: "Wooden coffin" (Деревянный гроб)\n- Идиома: "Nail in the coffin" (Гвоздь в крышку гроба / Последняя капля)',
    [
      { en: 'The coffin was lowered into the ground.', ru: 'Гроб опустили в землю.' },
      { en: 'Friends and family followed the coffin.', ru: 'Друзья и семья шли за гробом.' },
      { en: 'That mistake was the final nail in the coffin for his career.', ru: 'Эта ошибка стала последним гвоздем в крышку гроба его карьеры.' },
      { en: 'He lay in an open coffin.', ru: 'Он лежал в открытом гробу.' }
    ],
    []
),

createRichWord('c1_colonel', 'Colonel', '/ˈkɜː.nəl/', 'кёнэл', 'Полковник', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Высокое воинское звание (выше майора, ниже генерала). Внимание: произносится как "kernel"!',
    '- Армия: "Army colonel" (Армейский полковник)\n- Звание: "Promoted to colonel" (Повышен до полковника)\n- Обращение: "Colonel Smith" (Полковник Смит)',
    [
      { en: 'The colonel ordered the troops to advance.', ru: 'Полковник приказал войскам наступать.' },
      { en: 'He retired as a colonel.', ru: 'Он ушел в отставку в звании полковника.' },
      { en: 'Colonel Sanders founded KFC.', ru: 'Полковник Сандерс основал KFC.' },
      { en: 'Salute the colonel.', ru: 'Поприветствуйте полковника.' }
    ],
    []
  ),
createRichWord('c1_commodity', 'Commodity', '/kəˈmɒd.ə.ti/', 'кэмодити', 'Товар / Сырье', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Продукт или сырье, которое можно покупать и продавать (нефть, зерно).',
    '- Рынок: "Commodity market" (Товарно-сырьевой рынок)\n- Ценность: "Valuable commodity" (Ценный товар)\n- База: "Basic commodities" (Основные товары потребления)',
    [
      { en: 'Oil is the world\'s most important commodity.', ru: 'Нефть — самый важный товар в мире.' },
      { en: 'Time is a precious commodity.', ru: 'Время — драгоценный ресурс (товар).' },
      { en: 'Prices of agricultural commodities have risen.', ru: 'Цены на сельскохозяйственное сырье выросли.' },
      { en: 'Water is becoming a scarce commodity in some regions.', ru: 'Вода становится дефицитным ресурсом в некоторых регионах.' }
    ],
    []
),

createRichWord('c1_commute', 'Commute', '/kəˈmjuːt/', 'кэмьют', 'Ездить на работу', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Регулярно путешествовать на работу и обратно, обычно на большое расстояние.',
    '- Путь: "Daily commute" (Ежедневная поездка на работу - сущ.)\n- Транспорт: "Commute by train" (Ездить на поезде)\n- Время: "Long commute" (Долгая дорога)',
    [
      { en: 'He commutes to London every day.', ru: 'Он ездит на работу в Лондон каждый день.' },
      { en: 'My morning commute takes an hour.', ru: 'Моя утренняя поездка на работу занимает час.' },
      { en: 'She is tired of commuting.', ru: 'Она устала от поездок на работу.' },
      { en: 'More people are commuting by bicycle.', ru: 'Все больше людей ездят на работу на велосипеде.' }
    ],
    [
        { meaning: "Reduce sentence (Law)", translation: "Смягчить (наказание)", example: { en: "His death sentence was commuted to life.", ru: "Его смертный приговор заменили на пожизненное." } }
    ]
),

createRichWord('c1_compatible', 'Compatible', '/kəmˈpæt.ə.bəl/', 'кэмпэтэбл', 'Совместимый', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Способный существовать или работать вместе без конфликтов.',
    '- Техника: "Software compatible" (Совместимое ПО)\n- Отношения: "Compatible couple" (Подходящая пара)\n- Логика: "Compatible with" (Совместимый с)',
    [
      { en: 'This software is not compatible with my computer.', ru: 'Это программное обеспечение несовместимо с моим компьютером.' },
      { en: 'They are a very compatible couple.', ru: 'Они очень подходящая друг другу пара.' },
      { en: 'Is this blood type compatible with the patient?', ru: 'Совместима ли эта группа крови с пациентом?' },
      { en: 'Her actions were compatible with the rules.', ru: 'Её действия соответствовали правилам.' }
    ],
    []
),

createRichWord('c1_compel', 'Compel', '/kəmˈpel/', 'кэмпел', 'Принуждать / Вызывать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставлять кого-то делать что-то или вызывать сильное чувство (уважение).',
    '- Сила: "Compel someone to do" (Заставить кого-то сделать)\n- Чувство: "Compel respect" (Вызывать уважение)\n- Состояние: "Feel compelled" (Чувствовать себя обязанным)',
    [
      { en: 'The law compels us to pay taxes.', ru: 'Закон обязывает (принуждает) нас платить налоги.' },
      { en: 'I felt compelled to tell the truth.', ru: 'Я чувствовал себя обязанным сказать правду.' },
      { en: 'His courage compelled admiration.', ru: 'Его мужество вызывало восхищение.' },
      { en: 'They were compelled to surrender.', ru: 'Их принудили сдаться.' }
    ],
    []
),

createRichWord('c1_competence', 'Competence', '/ˈkɒm.pɪ.təns/', 'компитэнс', 'Компетентность', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Способность делать что-то успешно или эффективно.',
    '- Работа: "Professional competence" (Профессиональная компетентность)\n- Навык: "Language competence" (Владение языком)\n- Право: "Legal competence" (Правомочность)',
    [
      { en: 'He questioned the competence of the government.', ru: 'Он поставил под сомнение компетентность правительства.' },
      { en: 'Students must demonstrate competence in writing.', ru: 'Студенты должны продемонстрировать навыки письма.' },
      { en: 'She has reached a high level of competence.', ru: 'Она достигла высокого уровня компетентности.' },
      { en: 'It is outside my area of competence.', ru: 'Это вне сферы моей компетенции.' }
    ],
    []
),

createRichWord('c1_compile', 'Compile', '/kəmˈpaɪl/', 'кэмпайл', 'Составлять / Компилировать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Собирать информацию из разных источников в один список или книгу.',
    '- Данные: "Compile a list" (Составить список)\n- Книга: "Compile a report" (Составить отчет)\n- IT: "Compile code" (Компилировать код)',
    [
      { en: 'We are compiling a list of potential customers.', ru: 'Мы составляем список потенциальных клиентов.' },
      { en: 'It took years to compile the dictionary.', ru: 'На составление словаря ушли годы.' },
      { en: 'She compiled an album of family photos.', ru: 'Она собрала альбом семейных фотографий.' },
      { en: 'The program takes time to compile.', ru: 'Программе нужно время для компиляции.' }
    ],
    []
),

createRichWord('c1_compliance', 'Compliance', '/kəmˈplaɪ.əns/', 'кэмплайэнс', 'Соблюдение / Соответствие', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Действие в соответствии с приказом, правилом или запросом.',
    '- Закон: "In compliance with" (В соответствии с)\n- Бизнес: "Compliance officer" (Сотрудник по контролю за соблюдением правил)\n- Поведение: "Ensure compliance" (Обеспечить соблюдение)',
    [
      { en: 'The company is in full compliance with safety regulations.', ru: 'Компания полностью соблюдает правила техники безопасности.' },
      { en: 'Compliance with the law is mandatory.', ru: 'Соблюдение закона обязательно.' },
      { en: 'They demanded compliance from all employees.', ru: 'Они потребовали подчинения от всех сотрудников.' },
      { en: 'Failure to ensure compliance leads to fines.', ru: 'Необеспечение соответствия ведет к штрафам.' }
    ],
    []
),

createRichWord('c1_comply', 'Comply', '/kəmˈplaɪ/', 'кэмплай', 'Соблюдать / Подчиняться', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Действовать согласно правилам или командам.',
    '- Правила: "Comply with regulations" (Соблюдать правила)\n- Просьба: "Refuse to comply" (Отказаться подчиняться)\n- Стандарт: "Comply with standards" (Соответствовать стандартам)',
    [
      { en: 'You must comply with the rules of the club.', ru: 'Вы должны соблюдать правила клуба.' },
      { en: 'The factory failed to comply with safety standards.', ru: 'Фабрика не соответствовала стандартам безопасности.' },
      { en: 'He refused to comply with the officer\'s order.', ru: 'Он отказался подчиниться приказу офицера.' },
      { en: 'Please comply with our request.', ru: 'Пожалуйста, выполните нашу просьбу.' }
    ],
    []
),

createRichWord('c1_confidential', 'Confidential', '/ˌkɒn.fɪˈden.ʃəl/', 'конфиденшл', 'Конфиденциальный / Секретный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Предназначенный для хранения в секрете.',
    '- Документы: "Confidential information" (Конфиденциальная информация)\n- Статус: "Strictly confidential" (Строго секретно)\n- Отношения: "Confidential nature" (Конфиденциальный характер)',
    [
      { en: 'These documents are strictly confidential.', ru: 'Эти документы строго конфиденциальны.' },
      { en: 'Please keep this information confidential.', ru: 'Пожалуйста, держите эту информацию в секрете.' },
      { en: 'Your medical records are confidential.', ru: 'Ваши медицинские записи конфиденциальны.' },
      { en: 'He spoke in a confidential tone.', ru: 'Он говорил доверительным тоном.' }
    ],
    []
),

createRichWord('c1_conscience', 'Conscience', '/ˈkɒn.ʃəns/', 'коншэнс', 'Совесть', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Чувство правильного и неправильного, которое руководит поведением.',
    '- Чувство: "Guilty conscience" (Нечистая совесть)\n- Чистота: "Clear conscience" (Чистая совесть)\n- Идиома: "Have on your conscience" (Иметь на своей совести)',
    [
      { en: 'My conscience would not let me lie.', ru: 'Моя совесть не позволила бы мне солгать.' },
      { en: 'He has a guilty conscience about cheating.', ru: 'Его мучает совесть из-за обмана.' },
      { en: 'You can vote according to your conscience.', ru: 'Вы можете голосовать по совести.' },
      { en: 'I have a clear conscience.', ru: 'У меня чиста совесть.' }
    ],
    []
),

createRichWord('c1_consistency', 'Consistency', '/kənˈsɪs.tən.si/', 'кэнсистэнси', 'Последовательность / Консистенция', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Качество оставаться неизменным (поведение) или густота вещества (жидкости).',
    '- Поведение: "Lack consistency" (Не хватать последовательности)\n- Жидкость: "Thick consistency" (Густая консистенция)\n- Качество: "Consistency of performance" (Стабильность результатов)',
    [
      { en: 'The team lacks consistency in their games.', ru: 'Команде не хватает стабильности в играх.' },
      { en: 'The sauce has a creamy consistency.', ru: 'У соуса кремообразная консистенция.' },
      { en: 'Consistency is key to success.', ru: 'Постоянство — ключ к успеху.' },
      { en: 'There is no consistency in his arguments.', ru: 'В его аргументах нет последовательности.' }
    ],
    []
),

createRichWord('c1_conspiracy', 'Conspiracy', '/kənˈspɪr.ə.si/', 'кэнспирэси', 'Заговор', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Секретный план группы людей сделать что-то незаконное или вредное.',
    '- Теория: "Conspiracy theory" (Теория заговора)\n- Закон: "Charged with conspiracy" (Обвинен в заговоре)\n- Молчание: "Conspiracy of silence" (Заговор молчания)',
    [
      { en: 'He believes in a government conspiracy.', ru: 'Он верит в правительственный заговор.' },
      { en: 'They were arrested for conspiracy to murder.', ru: 'Их арестовали за сговор с целью убийства.' },
      { en: 'It was a conspiracy to fix prices.', ru: 'Это был сговор с целью фиксации цен.' },
      { en: 'Conspiracy theories are spreading online.', ru: 'Теории заговора распространяются в интернете.' }
    ],
    []
),

createRichWord('c1_contaminate', 'Contaminate', '/kənˈtæm.ɪ.neɪt/', 'кэнтэминейт', 'Загрязнять / Заражать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Делать что-то грязным или ядовитым, добавляя вредное вещество.',
    '- Вода: "Contaminated water" (Загрязненная вода)\n- Еда: "Contaminated food" (Зараженная еда)\n- Место: "Contaminated zone" (Зона заражения)',
    [
      { en: 'The river was contaminated by toxic waste.', ru: 'Река была загрязнена токсичными отходами.' },
      { en: 'Don\'t touch the contaminated wound.', ru: 'Не трогай инфицированную рану.' },
      { en: 'The drinking water is contaminated with lead.', ru: 'Питьевая вода загрязнена свинцом.' },
      { en: 'Bacteria can contaminate the meat.', ru: 'Бактерии могут заразить мясо.' }
    ],
    []
),

createRichWord('c1_contrary', 'Contrary', '/ˈkɒn.trə.ri/', 'контрэри', 'Противоположный / Вопреки', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Полностью отличающийся; противоположный.',
    '- Фраза: "On the contrary" (Наоборот)\n- Направление: "Contrary direction" (Противоположное направление)\n- Мнение: "Contrary to belief" (Вопреки мнению)',
    [
      { en: 'Contrary to popular belief, cats can swim.', ru: 'Вопреки распространенному мнению, кошки умеют плавать.' },
      { en: '"You look tired." "On the contrary, I feel great."', ru: '"Ты выглядишь усталым." "Наоборот, я чувствую себя отлично."' },
      { en: 'He ignored all contrary advice.', ru: 'Он проигнорировал все советы, говорящие об обратном.' },
      { en: 'Unless there is evidence to the contrary.', ru: 'Если нет доказательств обратного.' }
    ],
    [
        { meaning: "Stubborn (Adj /kənˈtreə.ri/)", translation: "Упрямый / Сварливый", example: { en: "She is being very contrary today.", ru: "Она сегодня очень упряма (сварлива)." } }
    ]
),

createRichWord('c1_conversion', 'Conversion', '/kənˈvɜː.ʃən/', 'кэнвёшн', 'Преобразование / Обращение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Процесс изменения чего-либо из одной формы/системы в другую.',
    '- Валюта: "Currency conversion" (Конвертация валюты)\n- Религия: "Religious conversion" (Обращение в веру)\n- Здание: "Loft conversion" (Переделка чердака)',
    [
      { en: 'The conversion of the hotel into apartments took a year.', ru: 'Переделка отеля в квартиры заняла год.' },
      { en: 'What is the conversion rate from dollars to euros?', ru: 'Каков курс конвертации долларов в евро?' },
      { en: 'His sudden conversion to Buddhism surprised us.', ru: 'Его внезапное обращение в буддизм удивило нас.' },
      { en: 'Solar power involves the conversion of sunlight into energy.', ru: 'Солнечная энергетика включает преобразование солнечного света в энергию.' }
    ],
    []
),

createRichWord('c1_copyright', 'Copyright', '/ˈkɒp.i.raɪt/', 'копирайт', 'Авторское право', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Законное право автора контролировать использование своего произведения.',
    '- Закон: "Copyright law" (Закон об авторском праве)\n- Нарушение: "Copyright infringement" (Нарушение авторских прав)\n- Владение: "Hold the copyright" (Владеть авторскими правами)',
    [
      { en: 'The book is protected by copyright.', ru: 'Книга защищена авторским правом.' },
      { en: 'You need permission to use copyright material.', ru: 'Вам нужно разрешение на использование материалов, защищенных авторским правом.' },
      { en: 'Who holds the copyright on this song?', ru: 'Кому принадлежат авторские права на эту песню?' },
      { en: 'Copyright expires 70 years after death.', ru: 'Авторское право истекает через 70 лет после смерти.' }
    ],
    []
),

createRichWord('c1_cord', 'Cord', '/kɔːd/', 'код', 'Шнур / Веревка', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Толстая нить или тонкая веревка; также электрический провод.',
    '- Техника: "Power cord" (Шнур питания)\n- Анатомия: "Spinal cord" (Спинной мозг) / "Vocal cords" (Голосовые связки)\n- Одежда: "Corduroy" (Вельвет - сокр. cords)',
    [
      { en: 'Pull the cord to start the engine.', ru: 'Дерни за шнур, чтобы запустить двигатель.' },
      { en: 'The lamp has a long cord.', ru: 'У лампы длинный шнур.' },
      { en: 'He suffered an injury to his spinal cord.', ru: 'Он получил травму спинного мозга.' },
      { en: 'Tie the package with a piece of cord.', ru: 'Перевяжи посылку куском веревки.' }
    ],
    []
),

createRichWord('c1_counterpart', 'Counterpart', '/ˈkaʊn.tə.pɑːt/', 'каунтэпат', 'Коллега (аналог)', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек или вещь, выполняющая ту же функцию в другом месте.',
    '- Политика: "Foreign counterpart" (Иностранный коллега)\n- Бизнес: "The CEO met his counterpart" (Гендиректор встретился со своим коллегой)\n- Сравнение: "Male counterpart" (Мужской аналог)',
    [
      { en: 'The Foreign Minister met his French counterpart.', ru: 'Министр иностранных дел встретился со своим французским коллегой.' },
      { en: 'The car represents the counterpart to the British model.', ru: 'Эта машина представляет собой аналог британской модели.' },
      { en: 'Male workers earn more than their female counterparts.', ru: 'Работники-мужчины зарабатывают больше, чем их коллеги-женщины.' },
      { en: 'This organization has no counterpart in the US.', ru: 'У этой организации нет аналога в США.' }
    ],
    []
),

createRichWord('c1_coup', 'Coup', '/kuː/', 'ку', 'Переворот / Удачный ход', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Внезапный незаконный захват власти (государственный переворот) или неожиданный успех.',
    '- Политика: "Military coup" (Военный переворот)\n- Успех: "Marketing coup" (Маркетинговый успех/ход)\n- Действие: "Stage a coup" (Устроить переворот)',
    [
      { en: 'The president was overthrown in a military coup.', ru: 'Президент был свергнут в ходе военного переворота.' },
      { en: 'Getting him to sign was a major coup.', ru: 'Заставить его подписать контракт было большой удачей.' },
      { en: 'The attempted coup failed.', ru: 'Попытка переворота провалилась.' },
      { en: 'It was a brilliant diplomatic coup.', ru: 'Это был блестящий дипломатический ход.' }
    ],
    []
),

createRichWord('c1_courtesy', 'Courtesy', '/ˈkɜː.tə.si/', 'кётеси', 'Вежливость / Учтивость', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Вежливое поведение и хорошие манеры.',
    '- Поведение: "Treat with courtesy" (Относиться с учтивостью)\n- Фраза: "Courtesy of" (Любезно предоставлено / Благодаря)\n- Услуга: "Courtesy car" (Бесплатная машина на время ремонта)',
    [
      { en: 'He treated us with great courtesy.', ru: 'Он отнесся к нам с большой учтивостью.' },
      { en: 'They didn\'t even have the courtesy to apologize.', ru: 'У них даже не хватило вежливости извиниться.' },
      { en: 'Photos courtesy of NASA.', ru: 'Фотографии любезно предоставлены NASA.' },
      { en: 'It is common courtesy to knock before entering.', ru: 'Это элементарная вежливость — стучать перед входом.' }
    ],
    []
),

createRichWord('c1_credible', 'Credible', '/ˈkred.ə.bəl/', 'кредибл', 'Правдоподобный / Надежный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Заслуживающий доверия; такой, которому можно верить.',
    '- Свидетель: "Credible witness" (Надежный свидетель)\n- История: "Credible story" (Правдоподобная история)\n- Альтернатива: "Credible alternative" (Достойная альтернатива)',
    [
      { en: 'His excuse was barely credible.', ru: 'Его оправдание было едва ли правдоподобным.' },
      { en: 'We need a credible plan to reduce debt.', ru: 'Нам нужен надежный план по сокращению долга.' },
      { en: 'Is there any credible evidence?', ru: 'Есть ли какие-либо достоверные доказательства?' },
      { en: 'She is a credible candidate for the job.', ru: 'Она достойный (серьезный) кандидат на эту работу.' }
    ],
    []
),

createRichWord('c1_critique', 'Critique', '/krɪˈtiːk/', 'критик', 'Критика / Рецензия', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Подробный анализ и оценка чего-либо (книги, теории).',
    '- Анализ: "Detailed critique" (Подробная рецензия)\n- Работа: "Critique of capitalism" (Критика капитализма)\n- Действие: "Write a critique" (Написать критическую статью)',
    [
      { en: 'She wrote a feminist critique of the novel.', ru: 'Она написала феминистскую критику на этот роман.' },
      { en: 'The students offered a critique of the theory.', ru: 'Студенты представили критический анализ теории.' },
      { en: 'He gave a harsh critique of the performance.', ru: 'Он дал суровую оценку выступлению.' },
      { en: 'This is a critique, not an insult.', ru: 'Это критика (рецензия), а не оскорбление.' }
    ],
    []
),

createRichWord('c1_crude', 'Crude', '/kruːd/', 'круд', 'Сырой / Грубый', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'В естественном состоянии (необработанный) или сделанный грубо/просто. Также грубый (невежливый).',
    '- Ресурс: "Crude oil" (Сырая нефть)\n- Качество: "Crude drawing" (Грубый рисунок)\n- Поведение: "Crude joke" (Пошлая шутка)',
    [
      { en: 'The country exports crude oil.', ru: 'Страна экспортирует сырую нефть.' },
      { en: 'They built a crude shelter from branches.', ru: 'Они построили грубое (примитивное) укрытие из веток.' },
      { en: 'He made a crude remark about her.', ru: 'Он отпустил грубое (пошлое) замечание о ней.' },
      { en: 'These are just crude estimates.', ru: 'Это лишь грубые (приблизительные) оценки.' }
    ],
    []
),

createRichWord('c1_cult', 'Cult', '/kʌlt/', 'калт', 'Культ', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Религиозная группа с экстремальными взглядами или группа поклонников чего-либо.',
    '- Религия: "Religious cult" (Религиозный культ / Секта)\n- Популярность: "Cult movie" (Культовый фильм)\n- Статус: "Cult figure" (Культовая фигура)',
    [
      { en: 'The leader of the cult was arrested.', ru: 'Лидер секты был арестован.' },
      { en: 'This movie has a huge cult following.', ru: 'У этого фильма огромная армия поклонников (он стал культовым).' },
      { en: 'He became a cult hero for teenagers.', ru: 'Он стал культовым героем для подростков.' },
      { en: 'The cult of celebrity.', ru: 'Культ знаменитостей.' }
    ],
    []
),

createRichWord('c1_cultivate', 'Cultivate', '/ˈkʌl.tɪ.veɪt/', 'калтивейт', 'Выращивать / Развивать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Обрабатывать землю, выращивать растения или развивать навык/отношения.',
    '- Земля: "Cultivate land" (Обрабатывать землю)\n- Отношения: "Cultivate friends" (Заводить/поддерживать дружбу)\n- Навык: "Cultivate an image" (Создавать имидж)',
    [
      { en: 'The farmers cultivate corn and beans.', ru: 'Фермеры выращивают кукурузу и бобы.' },
      { en: 'She tries to cultivate an image of sophistication.', ru: 'Она пытается создать (культивировать) образ утонченности.' },
      { en: 'He cultivated good relations with the press.', ru: 'Он поддерживал хорошие отношения с прессой.' },
      { en: 'Reading cultivates the mind.', ru: 'Чтение развивает ум.' }
    ],
    []
),

createRichWord('c1_curse', 'Curse', '/kɜːs/', 'кёс', 'Проклятие / Ругательство', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Магическое заклинание на неудачу, бранное слово или источник беды. Как глагол — проклинать.',
    '- Магия: "Put a curse on" (Наложить проклятие)\n- Проблема: "Curse of unemployment" (Бич безработицы)\n- Слова: "Shout curses" (Выкрикивать ругательства)',
    [
      { en: 'The witch put a curse on the prince.', ru: 'Ведьма наложила проклятие на принца.' },
      { en: 'He muttered a curse under his breath.', ru: 'Он пробормотал ругательство себе под нос.' },
      { en: 'Gambling was the curse of his life.', ru: 'Азартные игры были проклятием его жизни.' },
      { en: 'She cursed him for being late.', ru: 'Она прокляла (обругала) его за опоздание.' }
    ],
    []
),

createRichWord('c1_custody', 'Custody', '/ˈkʌs.tə.di/', 'кастэди', 'Опека / Стража', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Юридическое право заботиться о ком-то (ребенке) или состояние ареста.',
    '- Семья: "Child custody" (Опека над ребенком)\n- Полиция: "In custody" (Под стражей)\n- Арест: "Take into custody" (Взять под стражу)',
    [
      { en: 'The parents fought for custody of the children.', ru: 'Родители боролись за опеку над детьми.' },
      { en: 'The suspect is currently in police custody.', ru: 'Подозреваемый сейчас находится под стражей в полиции.' },
      { en: 'He was remanded in custody.', ru: 'Его оставили под стражей (до суда).' },
      { en: 'The mother was granted sole custody.', ru: 'Матери была предоставлена единоличная опека.' }
    ],
    []
),

createRichWord('c1_dam', 'Dam', '/dæm/', 'дэм', 'Плотина / Дамба', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Стена, построенная поперек реки для удержания воды.',
    '- Строительство: "Build a dam" (Построить плотину)\n- Вода: "Dam burst" (Прорыв плотины)\n- Энергия: "Hydroelectric dam" (Гидроэлектростанция/плотина)',
    [
      { en: 'The dam generates electricity for the city.', ru: 'Плотина вырабатывает электричество для города.' },
      { en: 'Beavers build dams in rivers.', ru: 'Бобры строят плотины на реках.' },
      { en: 'The flood water broke through the dam.', ru: 'Паводковые воды прорвали дамбу.' },
      { en: 'They plan to dam the river.', ru: 'Они планируют перегородить реку плотиной (глагол).' }
    ],
    []
),

createRichWord('c1_dash', 'Dash', '/dæʃ/', 'дэш', 'Рывок / Тире', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Быстрый бег, малое количество чего-то или знак препинания (—).',
    '- Движение: "Make a dash" (Рвануть / Броситься)\n- Еда: "Dash of salt" (Щепотка соли)\n- Текст: "Em dash" (Длинное тире)',
    [
      { en: 'He made a dash for the exit.', ru: 'Он бросился к выходу.' },
      { en: 'Add a dash of lemon juice.', ru: 'Добавь капельку лимонного сока.' },
      { en: 'I must dash, I am late!', ru: 'Мне нужно бежать, я опаздываю!' },
      { en: 'Use a dash to separate the phrase.', ru: 'Используй тире, чтобы отделить фразу.' }
    ],
    [
        { meaning: "Destroy hopes (verb)", translation: "Разбивать (надежды)", example: { en: "Our hopes were dashed.", ru: "Наши надежды были разбиты." } },
        { meaning: "Dashboard (Short)", translation: "Приборная панель", example: { en: "Look at the dash.", ru: "Посмотри на приборную панель." } }
    ]
  ),
createRichWord('c1_chant', 'Chant', '/tʃɑːnt/', 'чант', 'Скандировать / Песнопение', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Повторять или петь слово или фразу снова и снова в ритме; религиозное пение.',
    '- Протест: "Chant slogans" (Скандировать лозунги)\n- Спорт: "Football chant" (Футбольная кричалка)\n- Религия: "Gregorian chant" (Григорианское песнопение)',
    [
        { en: 'The crowd began to chant the winner\'s name loudly.', ru: 'Толпа начала громко скандировать имя победителя.' },
        { en: 'Monks chant prayers in the monastery every morning.', ru: 'Монахи поют молитвы в монастыре каждое утро.' },
        { en: 'Their rhythmical chant could be heard from the street.', ru: 'Их ритмичное скандирование было слышно с улицы.' },
        { en: 'Protesters chanted for freedom outside the parliament.', ru: 'Протестующие скандировали лозунги о свободе у здания парламента.' }
    ],
    [
        { meaning: "Song/Melody", translation: "Напев", example: { en: "A monotonous chant.", ru: "Монотонный напев." } }
    ]
),

createRichWord('c1_chap', 'Chap', '/tʃæp/', 'чэп', 'Парень / Малый', ProficiencyLevel.C1, 'noun', 'Low', 'Informal',
    'Разговорное британское слово для обозначения мужчины или мальчика (дружелюбное).',
    '- Обращение: "Old chap" (Старина)\n- Описание: "Decent chap" (Приличный малый)\n- Приветствие: "Hello chaps" (Привет, ребята)',
    [
        { en: 'He seems like a very decent chap to me.', ru: 'Он кажется мне очень приличным малым.' },
        { en: 'Come on, old chap, let\'s have a drink.', ru: 'Давай, старина, выпьем.' },
        { en: 'A friendly chap helped me fix my flat tyre.', ru: 'Дружелюбный парень помог мне починить спущенное колесо.' },
        { en: 'Watch out for that chap, he looks suspicious.', ru: 'Остерегайся того типа, он выглядит подозрительно.' }
    ],
    [
        { meaning: "Cracked skin", translation: "Трещина (на коже)", example: { en: "Chapped lips.", ru: "Обветренные губы." } }
    ]
),

createRichWord('c1_chatter', 'Chatter', '/ˈtʃætə(r)/', 'чэтэ', 'Болтовня / Стучать (зубами)', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Быстро и непрерывно говорить о неважных вещах; издавать быстрые звуки (о зубах от холода или механизмах).',
    '- Разговор: "Incessant chatter" (Беспрестанная болтовня)\n- Холод: "Teeth chattering" (Зубы стучат)\n- Животные: "Monkeys chatter" (Обезьяны трещат)',
    [
        { en: 'The students would not stop chattering during the lesson.', ru: 'Студенты не прекращали болтать во время урока.' },
        { en: 'I was so cold that my teeth started to chatter.', ru: 'Я так замерз, что у меня начали стучать зубы.' },
        { en: 'We could hear the chatter of birds in the trees.', ru: 'Мы слышали щебет птиц на деревьях.' },
        { en: 'Please stop this idle chatter and focus on work.', ru: 'Пожалуйста, прекратите эту пустую болтовню и сосредоточьтесь на работе.' }
    ],
    [
        { meaning: "Vibration sound", translation: "Дребезжание", example: { en: "Machine chatter.", ru: "Вибрация станка." } }
    ]
),

createRichWord('c1_chuck', 'Chuck', '/tʃʌk/', 'чак', 'Бросать / Кидать', ProficiencyLevel.C1, 'verb', 'Medium', 'Informal',
    'Небрежно бросить что-то; отказаться от чего-то или прекратить (разг.).',
    '- Действие: "Chuck a ball" (Кинуть мяч)\n- Выбросить: "Chuck it away" (Выкинуть это)\n- Отношения: "Chuck him" (Бросить его)',
    [
        { en: 'Chuck me the keys, I need to open the car.', ru: 'Кинь мне ключи, мне нужно открыть машину.' },
        { en: 'You should chuck those old shoes in the bin.', ru: 'Тебе следует выкинуть эти старые туфли в мусорку.' },
        { en: 'He decided to chuck his job and travel the world.', ru: 'Он решил бросить работу и путешествовать по миру.' },
        { en: 'Don\'t just chuck your clothes on the floor.', ru: 'Не бросай просто так свою одежду на пол.' }
    ],
    [
        { meaning: "Meat cut", translation: "Шейно-лопаточная часть", example: { en: "Chuck steak.", ru: "Стейк из лопаточной части." } },
        { meaning: "Device part", translation: "Зажимной патрон", example: { en: "Drill chuck.", ru: "Патрон дрели." } }
    ]
),

createRichWord('c1_clamp', 'Clamp', '/klæmp/', 'клэмп', 'Зажим / Зажимать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Инструмент для фиксации предметов вместе; действие по сильному сжатию.',
    '- Инструмент: "Metal clamp" (Металлический зажим)\n- Медицина: "Surgical clamp" (Хирургический зажим)\n- Политика: "Clamp down on" (Принять строгие меры)',
    [
        { en: 'Secure the wood with a clamp before gluing.', ru: 'Закрепите дерево зажимом перед склеиванием.' },
        { en: 'He clamped his hand over her mouth to keep her quiet.', ru: 'Он зажал ей рот рукой, чтобы она молчала.' },
        { en: 'The government promised to clamp down on illegal parking.', ru: 'Правительство пообещало принять жесткие меры против незаконной парковки.' },
        { en: 'She felt a clamp of fear tighten around her heart.', ru: 'Она почувствовала, как тиски страха сжались вокруг ее сердца.' }
    ],
    []
),

createRichWord('c1_clasp', 'Clasp', '/klɑːsp/', 'класп', 'Сжимать / Застежка', ProficiencyLevel.C1, 'verb', 'Low', 'Literary',
    'Крепко держать кого-то или что-то; застегивать замок.',
    '- Жест: "Clasp hands" (Сцепить руки)\n- Объятие: "Clasp in arms" (Сжать в объятиях)\n- Предмет: "Gold clasp" (Золотая застежка)',
    [
        { en: 'She clasped the letter tightly to her chest.', ru: 'Она крепко прижала письмо к груди.' },
        { en: 'He clasped his hands together and prayed.', ru: 'Он сцепил руки и помолился.' },
        { en: 'The necklace has a delicate silver clasp.', ru: 'У ожерелья есть изящная серебряная застежка.' },
        { en: 'The child clasped his mother\'s hand in fear.', ru: 'Ребенок в страхе сжал руку матери.' }
    ],
    []
),

createRichWord('c1_cleanse', 'Cleanse', '/klenz/', 'кленз', 'Очищать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Делать что-то полностью чистым (часто о коже или душе/грехах); удалять токсины.',
    '- Косметика: "Cleanse the skin" (Очищать кожу)\n- Духовность: "Cleanse the soul" (Очистить душу)\n- Политика: "Ethnic cleansing" (Этническая чистка)',
    [
        { en: 'You should cleanse your face thoroughly every night.', ru: 'Вы должны тщательно очищать лицо каждый вечер.' },
        { en: 'The ritual is intended to cleanse the spirit of evil.', ru: 'Ритуал предназначен для очищения духа от зла.' },
        { en: 'She drank only juice to cleanse her body of toxins.', ru: 'Она пила только сок, чтобы очистить организм от токсинов.' },
        { en: 'The rain seemed to cleanse the city of its dust.', ru: 'Казалось, дождь смыл с города всю пыль.' }
    ],
    []
),

createRichWord('c1_clench', 'Clench', '/klentʃ/', 'кленч', 'Сжимать (зубы/кулаки)', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Сильно сжимать часть тела, обычно от злости или решимости.',
    '- Злость: "Clench fists" (Сжать кулаки)\n- Стресс: "Clench teeth" (Сжать зубы)\n- Мышцы: "Clench muscles" (Напрячь мышцы)',
    [
        { en: 'He clenched his fists in anger but said nothing.', ru: 'Он сжал кулаки от гнева, но ничего не сказал.' },
        { en: 'Don\'t clench your jaw, try to relax.', ru: 'Не сжимай челюсти, постарайся расслабиться.' },
        { en: 'She clenched the steering wheel as the car skidded.', ru: 'Она вцепилась в руль, когда машину занесло.' },
        { en: 'His stomach clenched with sudden anxiety.', ru: 'Его желудок сжался от внезапной тревоги.' }
    ],
    []
),

createRichWord('c1_clergy', 'Clergy', '/ˈklɜːdʒi/', 'клёджи', 'Духовенство', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Люди, которые являются официальными служителями церкви (священники, епископы и т.д.).',
    '- Церковь: "Member of the clergy" (Член духовенства)\n- Группа: "Local clergy" (Местное духовенство)\n- Карьера: "Join the clergy" (Стать священником)',
    [
        { en: 'The local clergy gathered to discuss the new regulations.', ru: 'Местное духовенство собралось, чтобы обсудить новые правила.' },
        { en: 'Members of the clergy are expected to live humble lives.', ru: 'Ожидается, что священнослужители будут вести скромный образ жизни.' },
        { en: 'He decided to leave his job and join the clergy.', ru: 'Он решил оставить работу и посвятить себя церкви.' },
        { en: 'The King was supported by the nobility and the clergy.', ru: 'Короля поддерживали знать и духовенство.' }
    ],
    []
),

createRichWord('c1_cloak', 'Cloak', '/kləʊk/', 'клоук', 'Плащ / Скрывать', ProficiencyLevel.C1, 'noun', 'Low', 'Literary',
    'Свободная верхняя одежда без рукавов; то, что скрывает или маскирует что-то.',
    '- Одежда: "Wear a cloak" (Носить плащ)\n- Метафора: "Cloak of secrecy" (Покров тайны)\n- Скрытие: "Cloak and dagger" (Шпионский / Тайный)',
    [
        { en: 'The mysterious stranger was wrapped in a black cloak.', ru: 'Таинственный незнакомец был закутан в черный плащ.' },
        { en: 'They operated under a cloak of secrecy for years.', ru: 'Они действовали под покровом тайны в течение многих лет.' },
        { en: 'Mist cloaked the hills in the early morning.', ru: 'Ранним утром туман укутал холмы.' },
        { en: 'He used humor as a cloak for his insecurity.', ru: 'Он использовал юмор как маскировку для своей неуверенности.' }
    ],
    [
        { meaning: "To hide/cover", translation: "Скрывать / Укутывать", example: { en: "Peaks cloaked in clouds.", ru: "Вершины, укутанные облаками." } }
    ]
),

createRichWord('c1_coarse', 'Coarse', '/kɔːs/', 'кос', 'Грубый / Шероховатый', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Имеющий грубую текстуру; грубый или вульгарный в поведении.',
    '- Текстура: "Coarse sand" (Крупный песок)\n- Материал: "Coarse cloth" (Грубая ткань)\n- Поведение: "Coarse language" (Грубый язык)',
    [
        { en: 'The jacket was made of coarse wool that scratched my skin.', ru: 'Куртка была сделана из грубой шерсти, которая царапала кожу.' },
        { en: 'He has a coarse sense of humor that offends some people.', ru: 'У него грубое чувство юмора, которое оскорбляет некоторых людей.' },
        { en: 'Use coarse salt for seasoning the steak.', ru: 'Используйте крупную соль для приправы стейка.' },
        { en: 'Her hands were coarse from years of hard work.', ru: 'Ее руки огрубели от многолетней тяжелой работы.' }
    ],
    []
),

createRichWord('c1_coefficient', 'Coefficient', '/ˌkəʊɪˈfɪʃnt/', 'кэуифишнт', 'Коэффициент', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Число, которое умножается на переменную в математике; показатель свойства вещества в физике.',
    '- Математика: "Correlation coefficient" (Коэффициент корреляции)\n- Физика: "Coefficient of friction" (Коэффициент трения)\n- Статистика: "High coefficient" (Высокий коэффициент)',
    [
        { en: 'The scientist calculated the drag coefficient of the car.', ru: 'Ученый рассчитал коэффициент аэродинамического сопротивления автомобиля.' },
        { en: 'In the equation 3x, 3 is the coefficient.', ru: 'В уравнении 3x тройка является коэффициентом.' },
        { en: 'We found a high correlation coefficient between the two variables.', ru: 'Мы обнаружили высокий коэффициент корреляции между двумя переменными.' },
        { en: 'The expansion coefficient of metal depends on temperature.', ru: 'Коэффициент расширения металла зависит от температуры.' }
    ],
    []
),

createRichWord('c1_coerce', 'Coerce', '/kəʊˈɜːs/', 'кэуёс', 'Принуждать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставлять кого-то делать что-то с помощью силы или угроз.',
    '- Действие: "Coerce into confessing" (Принудить к признанию)\n- Метод: "Coerced by threats" (Вынужденный под угрозами)\n- Сущ: "Under coercion" (Под принуждением)',
    [
        { en: 'He claimed he was coerced into signing the contract.', ru: 'Он утверждал, что его принудили подписать контракт.' },
        { en: 'The rebels used violence to coerce the population.', ru: 'Повстанцы использовали насилие, чтобы принудить население.' },
        { en: 'You cannot coerce people to respect you.', ru: 'Нельзя заставить людей уважать тебя силой.' },
        { en: 'The confession was obtained through police coercion.', ru: 'Признание было получено под давлением полиции.' }
    ],
    []
),

createRichWord('c1_coil', 'Coil', '/kɔɪl/', 'койл', 'Катушка / Сворачивать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Серия петель (веревка, проволока); деталь, наматывающаяся кольцами.',
    '- Техника: "Copper coil" (Медная катушка)\n- Форма: "Coil of rope" (Бухта веревки)\n- Действие: "Coil up" (Свернуться кольцом)',
    [
        { en: 'A snake can coil itself around a tree branch.', ru: 'Змея может обвиться вокруг ветки дерева.' },
        { en: 'The heating element consists of a metal coil.', ru: 'Нагревательный элемент состоит из металлической спирали.' },
        { en: 'He carried a heavy coil of rope on his shoulder.', ru: 'Он нес тяжелую бухту веревки на плече.' },
        { en: 'Smoke curled up from the chimney in a slow coil.', ru: 'Дым медленно поднимался из трубы колечками.' }
    ],
    []
),

createRichWord('c1_commemorate', 'Commemorate', '/kəˈmeməreɪt/', 'кэмемэрейт', 'Чтить память', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Напоминать о важном событии или человеке и выражать уважение к ним (обычно церемонией или памятником).',
    '- Событие: "Commemorate the victory" (Отпраздновать победу)\n- Память: "Plaque to commemorate" (Табличка в память о)\n- Дата: "Commemorate anniversary" (Отмечать годовщину)',
    [
        { en: 'A statue was built to commemorate the fallen soldiers.', ru: 'В память о павших солдатах была воздвигнута статуя.' },
        { en: 'We gather every year to commemorate this historic event.', ru: 'Мы собираемся каждый год, чтобы почтить память этого исторического события.' },
        { en: 'This stamp was issued to commemorate the royal wedding.', ru: 'Эта марка была выпущена в честь королевской свадьбы.' },
        { en: 'The museum commemorates the lives of early settlers.', ru: 'Музей увековечивает жизнь первых поселенцев.' }
    ],
    []
),

createRichWord('c1_commence', 'Commence', '/kəˈmens/', 'кэмэнс', 'Начинать / Приступать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Формальный синоним слова "begin" или "start".',
    '- Событие: "Ceremony commences" (Церемония начинается)\n- Действие: "Commence work" (Приступить к работе)\n- Время: "Shall we commence?" (Нам начинать?)',
    [
        { en: 'The graduation ceremony will commence at 10 AM sharp.', ru: 'Церемония вручения дипломов начнется ровно в 10 утра.' },
        { en: 'Legal proceedings have commenced against the company.', ru: 'Против компании началось судебное разбирательство.' },
        { en: 'Please commence writing when I give the signal.', ru: 'Пожалуйста, начинайте писать, когда я дам сигнал.' },
        { en: 'The construction of the bridge is scheduled to commence next month.', ru: 'Строительство моста запланировано начать в следующем месяце.' }
    ],
    []
),

createRichWord('c1_commend', 'Commend', '/kəˈmend/', 'кэмэнд', 'Хвалить / Рекомендовать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Официально хвалить кого-то; представлять как достойного внимания.',
    '- Похвала: "Commend for bravery" (Наградить/похвалить за храбрость)\n- Совет: "Highly commended" (Настоятельно рекомендуется)\n- Доверие: "Commend soul to God" (Вверить душу Богу)',
    [
        { en: 'The firefighter was commended for his bravery.', ru: 'Пожарного похвалили за его храбрость.' },
        { en: 'I can commend this book to anyone interested in history.', ru: 'Я могу порекомендовать эту книгу всем, кто интересуется историей.' },
        { en: 'Her design was highly commended by the judges.', ru: 'Ее дизайн получил высокую оценку судей.' },
        { en: 'We commend his dedication to the project.', ru: 'Мы высоко ценим его преданность проекту.' }
    ],
    []
),

createRichWord('c1_commonwealth', 'Commonwealth', '/ˈkɒmənwelθ/', 'комэнвэлс', 'Содружество', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Группа стран или штатов, имеющих политические связи; название ассоциации наций (бывших колоний Британии).',
    '- Политика: "The Commonwealth" (Британское Содружество)\n- Игры: "Commonwealth Games" (Игры Содружества)\n- Статус: "Independent commonwealth" (Независимое содружество)',
    [
        { en: 'Most member states of the Commonwealth were once British colonies.', ru: 'Большинство стран-членов Содружества когда-то были британскими колониями.' },
        { en: 'The Commonwealth Games are held every four years.', ru: 'Игры Содружества проводятся каждые четыре года.' },
        { en: 'They discussed trade agreements within the Commonwealth.', ru: 'Они обсудили торговые соглашения в рамках Содружества.' },
        { en: 'Virginia is officially known as a Commonwealth.', ru: 'Вирджиния официально именуется Содружеством.' }
    ],
    []
),

createRichWord('c1_communal', 'Communal', '/kəˈmjuːnl/', 'кэмьюнл', 'Общинный / Общественный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Разделяемый всеми членами группы или сообщества; относящийся к конфликтам между этническими группами.',
    '- Быт: "Communal kitchen" (Общая кухня)\n- Жизнь: "Communal living" (Жизнь в коммуне)\n- Конфликт: "Communal violence" (Межобщинное насилие)',
    [
        { en: 'The students share a large communal kitchen.', ru: 'Студенты пользуются большой общей кухней.' },
        { en: 'Communal violence broke out between the two tribes.', ru: 'Между двумя племенами вспыхнуло межобщинное насилие.' },
        { en: 'They believe in communal ownership of land.', ru: 'Они верят в общественную собственность на землю.' },
        { en: 'We gathered in the communal garden for a picnic.', ru: 'Мы собрались в общественном саду на пикник.' }
    ],
    []
),

createRichWord('c1_composite', 'Composite', '/ˈkɒmpəzɪt/', 'компэзит', 'Составной / Композитный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Сделанный из различных частей или материалов.',
    '- Материал: "Composite material" (Композитный материал)\n- Изображение: "Composite sketch" (Фоторобот)\n- Структура: "Composite index" (Сводный индекс)',
    [
        { en: 'Modern aircraft are often built using composite materials.', ru: 'Современные самолеты часто строятся с использованием композитных материалов.' },
        { en: 'The police released a composite sketch of the suspect.', ru: 'Полиция опубликовала фоторобот подозреваемого.' },
        { en: 'Concrete is a composite construction material.', ru: 'Бетон — это составной строительный материал.' },
        { en: 'The final score is a composite of three different tests.', ru: 'Окончательный балл складывается из результатов трех разных тестов.' }
    ],
    [
        { meaning: "Plant family", translation: "Сложноцветные", example: { en: "Dandelions are composite plants.", ru: "Одуванчики — это сложноцветные растения." } }
    ]
),

createRichWord('c1_comrade', 'Comrade', '/ˈkɒmreɪd/', 'комрэйд', 'Товарищ / Соратник', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Друг, особенно тот, с кем вы разделяли трудности (война, работа); обращение в социалистических странах.',
    '- Война: "Comrade in arms" (Боевой товарищ)\n- Политика: "Party comrade" (Партийный товарищ)\n- Дружба: "Old comrade" (Старый соратник)',
    [
        { en: 'He mourned the loss of his fallen comrades.', ru: 'Он оплакивал потерю своих павших товарищей.' },
        { en: 'They addressed each other as "Comrade" during the meeting.', ru: 'Во время собрания они обращались друг к другу "Товарищ".' },
        { en: 'Many of his old comrades have retired from the army.', ru: 'Многие его старые соратники уволились из армии.' },
        { en: 'She was a loyal comrade to me during difficult times.', ru: 'Она была мне верным товарищем в трудные времена.' }
    ],
    []
),

createRichWord('c1_conclusive', 'Conclusive', '/kənˈkluːsɪv/', 'кэнклюсив', 'Убедительный / Окончательный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Доказывающий что-то без всяких сомнений; завершающий.',
    '- Доказательство: "Conclusive evidence" (Неопровержимое доказательство)\n- Аргумент: "Conclusive argument" (Убедительный аргумент)\n- Результат: "Non-conclusive" (Неубедительный)',
    [
        { en: 'The DNA test provided conclusive proof of his guilt.', ru: 'ДНК-тест предоставил неопровержимое доказательство его вины.' },
        { en: 'There is no conclusive evidence that this treatment works.', ru: 'Нет убедительных доказательств того, что это лечение работает.' },
        { en: 'The results of the experiment were far from conclusive.', ru: 'Результаты эксперимента были далеко не убедительными.' },
        { en: 'We need conclusive answers before we proceed.', ru: 'Нам нужны окончательные ответы, прежде чем мы продолжим.' }
    ],
    []
),

createRichWord('c1_confederate', 'Confederate', '/kənˈfedərət/', 'кэнфэдэрет', 'Сообщник / Конфедерат', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Тот, кто помогает кому-то делать что-то (часто секретное или незаконное); сторонник Конфедерации (история США).',
    '- Преступление: "Acting as a confederate" (Действуя как сообщник)\n- История: "Confederate soldier" (Солдат Конфедерации)\n- Группа: "Confederate states" (Конфедеративные штаты)',
    [
        { en: 'The magician planted a confederate in the audience.', ru: 'Фокусник посадил в зале своего сообщника.' },
        { en: 'He and his confederates planned the robbery carefully.', ru: 'Он и его сообщники тщательно спланировали ограбление.' },
        { en: 'The museum displays uniforms of the Confederate army.', ru: 'В музее выставлена форма армии Конфедерации.' },
        { en: 'Switzerland was founded as a confederate state.', ru: 'Швейцария была основана как конфедеративное государство.' }
    ],
    []
),

createRichWord('c1_confide', 'Confide', '/kənˈfaɪd/', 'кэнфайд', 'Доверять (секрет)', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Рассказывать кому-то секреты или личную информацию, доверяя им не разглашать её.',
    '- Секрет: "Confide in a friend" (Довериться другу)\n- Действие: "Confide to someone" (Сообщить кому-то по секрету)\n- Отношения: "Someone to confide in" (Тот, кому можно открыться)',
    [
        { en: 'She confided her biggest secret to her sister.', ru: 'Она доверила свой самый большой секрет сестре.' },
        { en: 'I have no one to confide in when I am sad.', ru: 'Мне некому открыться, когда мне грустно.' },
        { en: 'He confided that he was planning to quit his job.', ru: 'Он по секрету сказал, что планирует уволиться с работы.' },
        { en: 'Do not confide in him; he is a terrible gossip.', ru: 'Не доверяй ему, он ужасный сплетник.' }
    ],
    []
),

createRichWord('c1_congest', 'Congest', '/kənˈdʒest/', 'кэнджэст', 'Перегружать / Забивать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Блокировать или переполнять (дороги, нос, легкие). Обычно используется в пассиве (be congested).',
    '- Трафик: "Congested roads" (Перегруженные дороги)\n- Здоровье: "Congested nose" (Заложенный нос)\n- Город: "Congestion charge" (Плата за въезд в центр)',
    [
        { en: 'The main roads are heavily congested during rush hour.', ru: 'Главные дороги сильно перегружены в час пик.' },
        { en: 'My nose is congested because of the flu.', ru: 'У меня заложен нос из-за гриппа.' },
        { en: 'Too much cholesterol can congest your arteries.', ru: 'Слишком много холестерина может закупорить ваши артерии.' },
        { en: 'City planners are trying to reduce traffic congestion.', ru: 'Градостроители пытаются уменьшить дорожные заторы.' }
    ],
    []
),

createRichWord('c1_consecutive', 'Consecutive', '/kənˈsekjətɪv/', 'кэнсэкьютив', 'Последовательный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Следующие друг за другом без перерыва.',
    '- Время: "Consecutive days" (Дни подряд)\n- Спорт: "Consecutive wins" (Победы подряд)\n- Числа: "Consecutive numbers" (Последовательные числа)',
    [
        { en: 'It has rained for five consecutive days.', ru: 'Дождь шел пять дней подряд.' },
        { en: 'She was elected for three consecutive terms.', ru: 'Она избиралась три срока подряд.' },
        { en: 'Number the pages in consecutive order.', ru: 'Пронумеруйте страницы в последовательном порядке.' },
        { en: 'This is the team\'s tenth consecutive victory.', ru: 'Это десятая победа команды подряд.' }
    ],
    []
),

createRichWord('c1_consortium', 'Consortium', '/kənˈsɔːtiəm/', 'кэнсотиэм', 'Консорциум', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Ассоциация нескольких компаний или банков для выполнения крупного проекта.',
    '- Бизнес: "International consortium" (Международный консорциум)\n- Действие: "Form a consortium" (Создать консорциум)\n- Участник: "Member of consortium" (Член консорциума)',
    [
        { en: 'A consortium of banks agreed to fund the project.', ru: 'Консорциум банков согласился финансировать проект.' },
        { en: 'The bridge was built by an international consortium.', ru: 'Мост был построен международным консорциумом.' },
        { en: 'Our company joined the consortium to bid for the contract.', ru: 'Наша компания присоединилась к консорциуму, чтобы участвовать в тендере на контракт.' },
        { en: 'The consortium manages the distribution of natural gas.', ru: 'Консорциум управляет распределением природного газа.' }
    ],
    []
  ),
createRichWord('c1_conspicuous', 'Conspicuous', '/kənˈspɪkjuəs/', 'кэнспикьюэс', 'Заметный / Бросающийся в глаза', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Легко видимый или привлекающий внимание; явный.',
    '- Внимание: "Conspicuous by absence" (Заметный своим отсутствием)\n- Богатство: "Conspicuous consumption" (Демонстративное потребление)\n- Вид: "In a conspicuous place" (На видном месте)',
    [
        { en: 'She tried not to look conspicuous in her bright red coat.', ru: 'Она старалась не бросаться в глаза в своем ярко-красном пальто.' },
        { en: 'The notice must be displayed in a conspicuous position.', ru: 'Объявление должно быть вывешено на видном месте.' },
        { en: 'His absence was conspicuous, given his usual punctuality.', ru: 'Его отсутствие было заметным, учитывая его обычную пунктуальность.' },
        { en: 'He was conspicuous for his height among the crowd.', ru: 'Он выделялся в толпе своим ростом.' }
    ],
    []
),

createRichWord('c1_converge', 'Converge', '/kənˈvɜːdʒ/', 'кэнвёдж', 'Сходиться / Сближаться', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Двигаться из разных мест в одну точку; становиться похожими (о мнениях или идеях).',
    '- Движение: "Roads converge" (Дороги сходятся)\n- Люди: "Crowds converged" (Толпы стеклись)\n- Идеи: "Opinions converge" (Мнения сходятся)',
    [
        { en: 'Thousands of supporters converged on the capital city.', ru: 'Тысячи сторонников стеклись в столицу.' },
        { en: 'The two rivers converge to form a larger waterway.', ru: 'Две реки сливаются, образуя более крупный водный путь.' },
        { en: 'Our views on politics seem to be converging.', ru: 'Наши взгляды на политику, кажется, сближаются.' },
        { en: 'Ambulances converged on the scene of the accident.', ru: 'Скорые помощи съехались к месту аварии.' }
    ],
    []
),

createRichWord('c1_covenant', 'Covenant', '/ˈkʌvənənt/', 'кавэнэнт', 'Завет / Соглашение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Официальное юридическое соглашение или обещание; религиозный договор между Богом и людьми.',
    '- Религия: "Ark of the Covenant" (Ковчег Завета)\n- Право: "Restrictive covenant" (Ограничивающее соглашение)\n- Отношения: "Enter into a covenant" (Заключить завет)',
    [
        { en: 'The landlord breached the covenant of the lease.', ru: 'Арендодатель нарушил условия договора аренды.' },
        { en: 'God made a covenant with Abraham in the Bible.', ru: 'В Библии Бог заключил завет с Авраамом.' },
        { en: 'International covenants protect human rights.', ru: 'Международные пакты защищают права человека.' },
        { en: 'Marriage is viewed by some as a sacred covenant.', ru: 'Брак рассматривается некоторыми как священный союз.' }
    ],
    []
),

createRichWord('c1_culminate', 'Culminate', '/ˈkʌlmɪneɪt/', 'калминейт', 'Кульминировать / Завершаться', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Достичь высшей точки или окончательного результата после длительного периода.',
    '- Результат: "Culminate in victory" (Завершиться победой)\n- Процесс: "Months of work culminated" (Месяцы работы увенчались)\n- Событие: "The show culminated" (Шоу завершилось)',
    [
        { en: 'The investigation culminated in the arrest of the mayor.', ru: 'Расследование завершилось арестом мэра.' },
        { en: 'Years of research culminated in a breakthrough discovery.', ru: 'Годы исследований увенчались прорывным открытием.' },
        { en: 'The festival culminated with a spectacular firework display.', ru: 'Фестиваль завершился грандиозным фейерверком.' },
        { en: 'Their arguments culminated in a divorce.', ru: 'Их ссоры закончились разводом.' }
    ],
    []
),

createRichWord('c1_daunt', 'Daunt', '/dɔːnt/', 'донт', 'Устрашать / Обескураживать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставлять кого-то чувствовать страх или беспокойство по поводу сложности задачи. Обычно используется в пассиве (daunted) или причастии (daunting).',
    '- Задача: "Daunting task" (Пугающая задача)\n- Состояние: "Nothing daunted" (Нисколько не смутившись)\n- Чувство: "Feel daunted" (Чувствовать робость)',
    [
        { en: 'She was daunted by the scale of the problem.', ru: 'Ее пугал масштаб проблемы.' },
        { en: 'The climb is daunting even for experienced hikers.', ru: 'Подъем пугает даже опытных туристов.' },
        { en: 'Do not be daunted by the initial difficulties.', ru: 'Не пугайтесь первых трудностей.' },
        { en: 'He faced the challenge with nothing daunted him.', ru: 'Он принял вызов, и ничто его не смутило.' }
    ],
    []
),

createRichWord('c1_decree', 'Decree', '/dɪˈkriː/', 'дикри', 'Указ / Декрет', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Официальный приказ, изданный правительством или правителем, имеющий силу закона.',
    '- Власть: "Presidential decree" (Президентский указ)\n- Действие: "Issue a decree" (Издать указ)\n- Суд: "Divorce decree" (Решение суда о разводе)',
    [
        { en: 'The King issued a decree raising taxes.', ru: 'Король издал указ о повышении налогов.' },
        { en: 'They ruled by decree rather than by democracy.', ru: 'Они правили с помощью декретов, а не демократии.' },
        { en: 'The decree banned public gatherings in the capital.', ru: 'Указ запретил публичные собрания в столице.' },
        { en: 'Fate has decreed that we shall never meet again.', ru: 'Судьба постановила, что мы никогда больше не встретимся.' }
    ],
    [
        { meaning: "To order officially", translation: "Постановлять", example: { en: "The committee decreed a change.", ru: "Комитет постановил внести изменения." } }
    ]
),

createRichWord('c1_demise', 'Demise', '/dɪˈmaɪz/', 'димайз', 'Кончина / Крах', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Смерть человека (обычно известного); конец существования чего-либо (компании, империи).',
    '- Человек: "Sudden demise" (Внезапная кончина)\n- Бизнес: "Demise of the company" (Крах компании)\n- Политика: "Political demise" (Политическая смерть)',
    [
        { en: 'The sudden demise of the actor shocked the world.', ru: 'Внезапная кончина актера потрясла мир.' },
        { en: 'Greed led to the demise of his empire.', ru: 'Жадность привела к краху его империи.' },
        { en: 'We are witnessing the demise of traditional retail.', ru: 'Мы наблюдаем упадок традиционной розничной торговли.' },
        { en: 'The war hastened the demise of the old regime.', ru: 'Война ускорила падение старого режима.' }
    ],
    []
),

createRichWord('c1_deplete', 'Deplete', '/dɪˈpliːt/', 'диплит', 'Истощать / Исчерпывать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Уменьшать количество чего-либо (ресурсов, денег, энергии) до опасного уровня.',
    '- Ресурсы: "Deplete resources" (Истощать ресурсы)\n- Озон: "Ozone depletion" (Истощение озонового слоя)\n- Запас: "Deplete stocks" (Исчерпать запасы)',
    [
        { en: 'Human activity depletes the earth\'s natural resources.', ru: 'Человеческая деятельность истощает природные ресурсы Земли.' },
        { en: 'My savings have been severely depleted by the trip.', ru: 'Мои сбережения сильно истощились из-за поездки.' },
        { en: 'The army was depleted by disease and hunger.', ru: 'Армия была истощена болезнями и голодом.' },
        { en: 'Avoid activities that deplete your energy.', ru: 'Избегайте занятий, которые истощают вашу энергию.' }
    ],
    []
),

createRichWord('c1_differential', 'Differential', '/ˌdɪfəˈrenʃl/', 'дифэрэншл', 'Разница / Дифференциал', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Разница между вещами (часто в оплате); механизм в машине, позволяющий колесам вращаться с разной скоростью.',
    '- Оплата: "Pay differential" (Разница в оплате)\n- Машина: "Rear differential" (Задний дифференциал)\n- Математика: "Differential equation" (Дифференциальное уравнение)',
    [
        { en: 'The union is fighting for a lower pay differential.', ru: 'Профсоюз борется за снижение разрыва в оплате труда.' },
        { en: 'There is a significant price differential between the two models.', ru: 'Между двумя моделями существует значительная разница в цене.' },
        { en: 'The mechanic repaired the broken differential.', ru: 'Механик починил сломанный дифференциал.' },
        { en: 'Maintain the differential to keep the car running smoothly.', ru: 'Обслуживайте дифференциал, чтобы машина работала плавно.' }
    ],
    []
),

createRichWord('c1_diffuse', 'Diffuse', '/dɪˈfjuːs/', 'дифьюз', 'Рассеивать / Многословный', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Распространять что-то на большую площадь (свет, тепло, знания); использовать слишком много слов (прил.).',
    '- Свет: "Diffuse light" (Рассеянный свет)\n- Конфликт: "Diffuse tension" (Разрядить напряжение - часто как defuse)\n- Речь: "Diffuse style" (Размытый стиль)',
    [
        { en: 'The lamp helps to diffuse the light softly.', ru: 'Лампа помогает мягко рассеивать свет.' },
        { en: 'Technology allows ideas to diffuse rapidly.', ru: 'Технологии позволяют идеям распространяться быстро.' },
        { en: 'His writing is too diffuse and hard to follow.', ru: 'Его письмо слишком многословно, и за ним трудно уследить.' },
        { en: 'The scent of flowers diffused through the room.', ru: 'Аромат цветов распространился по комнате.' }
    ],
    []
),

createRichWord('c1_dale', 'Dale', '/deɪl/', 'дейл', 'Долина (поэтич.)', ProficiencyLevel.C1, 'noun', 'Low', 'Literary',
    'Широкая открытая долина (используется в основном в географических названиях Северной Англии или литературе).',
    '- География: "Yorkshire Dales" (Йоркширские долины)\n- Природа: "Hill and dale" (Холмы и долины)\n- Литература: "Over dale" (Через долину)',
    [
        { en: 'We went hiking in the Yorkshire Dales.', ru: 'Мы ходили в поход по Йоркширским долинам.' },
        { en: 'The river winds its way through the green dale.', ru: 'Река извивается через зеленую долину.' },
        { en: 'They searched every hill and dale for the lost sheep.', ru: 'Они обыскали каждый холм и долину в поисках пропавшей овцы.' },
        { en: 'A small village lay nestled in the dale.', ru: 'Маленькая деревня уютно расположилась в долине.' }
    ],
    []
  ),
createRichWord('c1_canon', 'Canon', '/ˈkænən/', 'кэнэн', 'Канон', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Общепринятое правило или принцип; список книг, признанных подлинными или великими; церковный закон.',
    '- Литература: "The Western canon" (Западный канон литературы)\n- Церковь: "Canon law" (Каноническое право)\n- Принцип: "Canons of behaviour" (Каноны поведения)',
    [
        { en: 'Shakespeare\'s works are central to the English literary canon.', ru: 'Произведения Шекспира занимают центральное место в английском литературном каноне.' },
        { en: 'The priest studied canon law at the seminary.', ru: 'Священник изучал каноническое право в семинарии.' },
        { en: 'He violated the canons of polite society.', ru: 'Он нарушил каноны вежливого общества.' },
        { en: 'These books are not considered part of the official canon.', ru: 'Эти книги не считаются частью официального канона.' }
    ],
    [
        { meaning: "Priest title", translation: "Каноник", example: { en: "Canon Smith led the service.", ru: "Каноник Смит вел службу." } }
    ]
),

createRichWord('c1_catalyst', 'Catalyst', '/ˈkætəlɪst/', 'кэтэлист', 'Катализатор', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Вещество, ускоряющее химическую реакцию; человек или событие, вызывающее быстрые изменения.',
    '- Химия: "Act as a catalyst" (Действовать как катализатор)\n- Перемены: "Catalyst for change" (Катализатор перемен)\n- Событие: "Spark/Catalyst" (Толчок)',
    [
        { en: 'The enzyme acts as a catalyst in digestion.', ru: 'Фермент действует как катализатор в пищеварении.' },
        { en: 'The protest was the catalyst for the revolution.', ru: 'Протест стал катализатором революции.' },
        { en: 'Her speech served as a catalyst for the new movement.', ru: 'Её речь послужила катализатором нового движения.' },
        { en: 'Technology is often a catalyst for social change.', ru: 'Технологии часто являются катализатором социальных изменений.' }
    ],
    []
),

createRichWord('c1_churn', 'Churn', '/tʃɜːn/', 'чён', 'Взбивать / Отток (клиентов)', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Сильно перемешивать (жидкость); испытывать тошноту; (бизнес) терять клиентов.',
    '- Еда: "Churn butter" (Взбивать масло)\n- Чувства: "Stomach churns" (Желудок крутит/мутит)\n- Бизнес: "Churn rate" (Коэффициент оттока клиентов)',
    [
        { en: 'The boat\'s propeller churned the water into foam.', ru: 'Винт лодки взбил воду в пену.' },
        { en: 'My stomach churned with anxiety before the exam.', ru: 'У меня крутило живот от волнения перед экзаменом.' },
        { en: 'The company needs to reduce its customer churn.', ru: 'Компании необходимо сократить отток клиентов.' },
        { en: 'The sea was churning during the storm.', ru: 'Море бурлило во время шторма.' }
    ],
    []
),

createRichWord('c1_cleave', 'Cleave', '/kliːv/', 'клив', 'Раскалывать / Прилипать', ProficiencyLevel.C1, 'verb', 'Low', 'Literary',
    'Уникальное слово с противоположными значениями: 1. Разрубать или раскалывать надвое. 2. (Устар.) Прилипать или оставаться верным.',
    '- Разделение: "Cleave in two" (Расколоть надвое)\n- Инструмент: "Meat cleaver" (Мясницкий тесак)\n- Верность: "Cleave to beliefs" (Придерживаться убеждений)',
    [
        { en: 'With one blow, he cleaved the log in two.', ru: 'Одним ударом он расколол бревно надвое.' },
        { en: 'The ship cleaved through the waves.', ru: 'Корабль рассекал волны.' },
        { en: 'She cleaved to her principles despite the pressure.', ru: 'Она оставалась верна своим принципам, несмотря на давление.' },
        { en: 'His tongue cleaved to the roof of his mouth.', ru: 'Его язык прилип к небу.' }
    ],
    []
),

createRichWord('c1_clerical', 'Clerical', '/ˈklerɪkl/', 'клерикл', 'Канцелярский / Духовный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Связанный с офисной работой (бумагами); связанный со священниками (клиром).',
    '- Работа: "Clerical work" (Канцелярская работа)\n- Ошибка: "Clerical error" (Описка / Канцелярская ошибка)\n- Церковь: "Clerical collar" (Воротник священника)',
    [
        { en: 'She found a job doing clerical work in an office.', ru: 'Она нашла работу, занимаясь делопроизводством в офисе.' },
        { en: 'The mistake was due to a simple clerical error.', ru: 'Ошибка произошла из-за простой описки.' },
        { en: 'He wore the clerical collar of a priest.', ru: 'Он носил воротник священника.' },
        { en: 'The clerical staff manage the records.', ru: 'Канцелярский персонал управляет записями.' }
    ],
    []
),

createRichWord('c1_cohort', 'Cohort', '/ˈkəʊhɔːt/', 'кэухот', 'Когорта / Группа', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Группа людей с общей характеристикой (в статистике); группа спутников или сторонников.',
    '- Статистика: "Age cohort" (Возрастная когорта)\n- Исследование: "Cohort study" (Когортное исследование)\n- История: "Roman cohort" (Римская когорта)',
    [
        { en: 'The study followed a cohort of children born in 2000.', ru: 'Исследование отслеживало группу детей, родившихся в 2000 году.' },
        { en: 'This cohort of students is performing well in math.', ru: 'Эта группа студентов показывает хорошие результаты в математике.' },
        { en: 'He arrived with his usual cohort of admirers.', ru: 'Он прибыл со своей обычной свитой поклонников.' },
        { en: 'The 1990 birth cohort faces specific economic challenges.', ru: 'Поколение 1990 года рождения сталкивается со специфическими экономическими проблемами.' }
    ],
    []
  ),
createRichWord('c1_commonplace', 'Commonplace', '/ˈkɒmənpleɪs/', 'комэнплейс', 'Банальный / Обыденный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Обычный и неинтересный; происходящий часто.',
    '- Явление: "Become commonplace" (Стать обычным делом)\n- Вещь: "Commonplace object" (Обыденный предмет)\n- Описание: "Dull and commonplace" (Скучный и банальный)',
    [
        { en: 'Air travel has become commonplace for many people.', ru: 'Авиаперелеты стали обыденностью для многих людей.' },
        { en: 'Mobile phones are now commonplace in schools.', ru: 'Мобильные телефоны теперь обычное явление в школах.' },
        { en: 'His speech was full of commonplace remarks.', ru: 'Его речь была полна банальных замечаний.' },
        { en: 'It is a commonplace observation that time flies.', ru: 'То, что время летит, — это банальное наблюдение.' }
    ],
    []
),

createRichWord('c1_complacent', 'Complacent', '/kəmˈpleɪsnt/', 'кэмплейснт', 'Самодовольный / Беспечный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Слишком удовлетворенный собой и не желающий стараться или беспокоиться о проблемах.',
    '- Отношение: "Complacent attitude" (Беспечное отношение)\n- Состояние: "Grow complacent" (Стать самодовольным)\n- Успех: "Don\'t be complacent" (Не расслабляйся)',
    [
        { en: 'We cannot afford to be complacent about safety.', ru: 'Мы не можем позволить себе быть беспечными в вопросах безопасности.' },
        { en: 'Success made the team complacent, and they lost.', ru: 'Успех сделал команду самодовольной, и они проиграли.' },
        { en: 'A complacent smile appeared on his face.', ru: 'Самодовольная улыбка появилась на его лице.' },
        { en: 'The government has grown complacent after years in power.', ru: 'Правительство стало самодовольным после многих лет у власти.' }
    ],
    []
),

createRichWord('c1_concurrent', 'Concurrent', '/kənˈkʌrənt/', 'кэнкарэнт', 'Одновременный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Происходящий или существующий в одно и то же время.',
    '- События: "Concurrent events" (Одновременные события)\n- Право: "Concurrent sentences" (Параллельные сроки заключения)\n- Согласие: "Concurrent with" (Совпадающий с)',
    [
        { en: 'He is serving two concurrent prison sentences.', ru: 'Он отбывает два тюремных срока одновременно.' },
        { en: 'There are three concurrent exhibitions at the museum.', ru: 'В музее проходят три одновременные выставки.' },
        { en: 'The study produced concurrent improvements in health.', ru: 'Исследование показало сопутствующие улучшения здоровья.' },
        { en: 'My opinion is concurrent with yours.', ru: 'Мое мнение совпадает с вашим.' }
    ],
    []
),

createRichWord('c1_confiscate', 'Confiscate', '/ˈkɒnfɪskeɪt/', 'конфискейт', 'Конфисковать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Официально забрать что-то у кого-то (обычно как наказание).',
    '- Полиция: "Confiscate drugs" (Конфисковать наркотики)\n- Школа: "Confiscate phone" (Отобрать телефон)\n- Таможня: "Confiscate goods" (Изъять товары)',
    [
        { en: 'The teacher confiscated his mobile phone during class.', ru: 'Учитель отобрал его мобильный телефон во время урока.' },
        { en: 'Customs officers confiscated the illegal items.', ru: 'Таможенники конфисковали незаконные предметы.' },
        { en: 'His passport was confiscated by the police.', ru: 'Его паспорт был изъят полицией.' },
        { en: 'They have the power to confiscate assets.', ru: 'У них есть полномочия конфисковать активы.' }
    ],
    []
),

createRichWord('c1_conjunction', 'Conjunction', '/kənˈdʒʌŋkʃn/', 'кэнджанкшн', 'Союз / Сочетание', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Грамматическое слово (и, но); ситуация, когда вещи происходят вместе.',
    '- Грамматика: "Use a conjunction" (Использовать союз)\n- Связь: "In conjunction with" (В сочетании с)\n- Астрономия: "Planetary conjunction" (Парад планет)',
    [
        { en: 'The police are working in conjunction with the army.', ru: 'Полиция работает совместно с армией.' },
        { en: '"And" and "but" are common conjunctions.', ru: '"И" и "но" — распространенные союзы.' },
        { en: 'The drugs work best when used in conjunction.', ru: 'Лекарства действуют лучше всего при совместном использовании.' },
        { en: 'An unfortunate conjunction of events led to the crisis.', ru: 'Неудачное стечение обстоятельств привело к кризису.' }
    ],
    []
),

createRichWord('c1_conservatism', 'Conservatism', '/kənˈsɜːvətɪzəm/', 'кэнсёвэтизэм', 'Консерватизм', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Политическая или социальная вера в ценность традиций и сопротивление изменениям.',
    '- Политика: "Political conservatism" (Политический консерватизм)\n- Общество: "Cultural conservatism" (Культурный консерватизм)\n- Финансы: "Fiscal conservatism" (Финансовый консерватизм)',
    [
        { en: 'His natural conservatism makes him wary of new ideas.', ru: 'Его природный консерватизм заставляет его настороженно относиться к новым идеям.' },
        { en: 'There is a trend towards conservatism in rural areas.', ru: 'В сельской местности наблюдается тенденция к консерватизму.' },
        { en: 'The company acts with a degree of conservatism.', ru: 'Компания действует с определенной долей консерватизма.' },
        { en: 'Religious conservatism influences the laws here.', ru: 'Религиозный консерватизм влияет на законы здесь.' }
    ],
    []
),

createRichWord('c1_conspire', 'Conspire', '/kənˈspaɪə(r)/', 'кэнспайэ', 'Сговариваться', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Тайно планировать с другими людьми сделать что-то плохое или незаконное; когда события случайно складываются против кого-то.',
    '- Преступление: "Conspire to murder" (Сговориться об убийстве)\n- События: "Everything conspired against me" (Всё сговорилось против меня)\n- Группа: "Conspire together" (Замышлять вместе)',
    [
        { en: 'They conspired to overthrow the government.', ru: 'Они сговорились свергнуть правительство.' },
        { en: 'Bad weather and traffic conspired to make me late.', ru: 'Плохая погода и пробки сговорились, чтобы я опоздал.' },
        { en: 'He felt that the universe was conspiring against him.', ru: 'Он чувствовал, что вселенная сговорилась против него.' },
        { en: 'Three men were charged with conspiring to rob the bank.', ru: 'Троим мужчинам было предъявлено обвинение в сговоре с целью ограбления банка.' }
    ],
    []
),

createRichWord('c1_contented', 'Contented', '/kənˈtentɪd/', 'кэнтэнтид', 'Довольный / Умиротворенный', ProficiencyLevel.C1, 'adj', 'Low', 'Literary',
    'Чувствующий или выражающий счастье и удовлетворение (состояние души).',
    '- Вид: "Contented smile" (Довольная улыбка)\n- Жизнь: "Contented life" (Спокойная жизнь)\n- Звук: "Contented sigh" (Умиротворенный вздох)',
    [
        { en: 'The cat purred, looking fat and contented.', ru: 'Кот мурлыкал, выглядя толстым и довольным.' },
        { en: 'She lived a quiet, contented life in the village.', ru: 'Она жила тихой, довольной жизнью в деревне.' },
        { en: 'He gave a contented sigh after a good meal.', ru: 'Он издал довольный вздох после хорошей еды.' },
        { en: 'They seemed contented with their small house.', ru: 'Они казались довольными своим маленьким домом.' }
    ],
    []
),

createRichWord('c1_contour', 'Contour', '/ˈkɒntʊə(r)/', 'контуэ', 'Контур / Очертание', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Внешняя форма чего-либо или линия, очерчивающая её; линии высот на карте.',
    '- Форма: "Follow the contours" (Следовать контурам)\n- Карта: "Contour lines" (Горизонтали на карте)\n- Лицо: "Facial contours" (Черты лица)',
    [
        { en: 'The map shows the contours of the coastline.', ru: 'Карта показывает очертания береговой линии.' },
        { en: 'The artist drew the contours of the model\'s face.', ru: 'Художник нарисовал контуры лица модели.' },
        { en: 'The road follows the contour of the hill.', ru: 'Дорога повторяет контур холма.' },
        { en: 'Contour lines on the map indicate steep slopes.', ru: 'Горизонтали на карте указывают на крутые склоны.' }
    ],
    []
),

createRichWord('c1_contraction', 'Contraction', '/kənˈtrækʃn/', 'кэнтрэкшн', 'Сокращение / Схватка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Процесс становления меньше; короткая форма слова (don\'t); сильное сжатие мышцы (особенно при родах).',
    '- Грамматика: "Use contractions" (Использовать сокращения)\n- Роды: "Have contractions" (Иметь схватки)\n- Экономика: "Economic contraction" (Экономический спад)',
    [
        { en: '"Can\'t" is a contraction of "cannot".', ru: '"Can\'t" — это сокращение от "cannot".' },
        { en: 'She started having contractions early in the morning.', ru: 'У нее начались схватки рано утром.' },
        { en: 'Cold causes the contraction of the metal.', ru: 'Холод вызывает сжатие металла.' },
        { en: 'The country is facing a severe economic contraction.', ru: 'Страна сталкивается с серьезным экономическим спадом.' }
    ],
    []
),

createRichWord('c1_convoy', 'Convoy', '/ˈkɒnvɔɪ/', 'конвой', 'Конвой / Колонна', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Группа транспортных средств или кораблей, путешествующих вместе для защиты.',
    '- Военные: "Military convoy" (Военная колонна)\n- Помощь: "Aid convoy" (Гуманитарный конвой)\n- Защита: "Under convoy" (Под конвоем)',
    [
        { en: 'A convoy of trucks carried supplies to the city.', ru: 'Колонна грузовиков везла припасы в город.' },
        { en: 'The ships sailed in convoy to avoid pirate attacks.', ru: 'Корабли шли конвоем, чтобы избежать нападения пиратов.' },
        { en: 'An armed convoy escorted the president.', ru: 'Вооруженный конвой сопровождал президента.' },
        { en: 'The aid convoy was allowed to cross the border.', ru: 'Гуманитарному конвою разрешили пересечь границу.' }
    ],
    []
),

createRichWord('c1_cosmic', 'Cosmic', '/ˈkɒzmɪk/', 'козмик', 'Космический', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Связанный со всей вселенной; очень большой или важный.',
    '- Вселенная: "Cosmic rays" (Космические лучи)\n- Масштаб: "Cosmic scale" (Космический масштаб)\n- Значение: "Cosmic significance" (Вселенское значение)',
    [
        { en: 'Cosmic dust is found throughout the universe.', ru: 'Космическая пыль встречается во всей вселенной.' },
        { en: 'The disaster was of cosmic proportions.', ru: 'Катастрофа была космических масштабов.' },
        { en: 'He believes in a cosmic order of things.', ru: 'Он верит в космический порядок вещей.' },
        { en: 'We are just a speck in the cosmic darkness.', ru: 'Мы всего лишь песчинка в космической тьме.' }
    ],
    []
),

createRichWord('c1_cram', 'Cram', '/kræm/', 'крэм', 'Впихивать / Зубрить', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Силой помещать вещи в маленькое пространство; интенсивно учиться перед экзаменом.',
    '- Место: "Cram into a bus" (Набиться в автобус)\n- Учеба: "Cram for exams" (Зубрить к экзаменам)\n- Еда: "Cram food" (Запихивать еду)',
    [
        { en: 'She tried to cram all her clothes into one suitcase.', ru: 'Она пыталась запихнуть всю свою одежду в один чемодан.' },
        { en: 'Students are cramming for their final exams.', ru: 'Студенты зубрят к выпускным экзаменам.' },
        { en: 'We all crammed into the tiny car.', ru: 'Мы все набились в крошечную машину.' },
        { en: 'Don\'t cram your mouth full of food.', ru: 'Не набивай рот едой.' }
    ],
    []
),

createRichWord('c1_crave', 'Crave', '/kreɪv/', 'крейв', 'Страстно желать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Иметь очень сильное желание чего-то (еды, внимания, наркотиков).',
    '- Еда: "Crave chocolate" (Жаждать шоколада)\n- Внимание: "Crave attention" (Жаждать внимания)\n- Беременность: "Crave strange foods" (Хотеть странной еды)',
    [
        { en: 'Many pregnant women crave pickles and ice cream.', ru: 'Многие беременные женщины жаждут соленых огурцов и мороженого.' },
        { en: 'He craves attention from his parents.', ru: 'Он жаждет внимания от своих родителей.' },
        { en: 'After a week of dieting, I crave sugar.', ru: 'После недели диеты я жажду сахара.' },
        { en: 'The lonely child craved affection.', ru: 'Одинокий ребенок жаждал ласки.' }
    ],
    []
),

createRichWord('c1_creak', 'Creak', '/kriːk/', 'крик', 'Скрипеть', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Издавать долгий, высокий звук при движении (о дереве, двери).',
    '- Дверь: "Door creaks" (Дверь скрипит)\n- Пол: "Floorboards creak" (Половицы скрипят)\n- Мебель: "Chair creaks" (Стул скрипит)',
    [
        { en: 'The old wooden floor creaked under his weight.', ru: 'Старый деревянный пол скрипел под его весом.' },
        { en: 'I heard the door creak open slowly.', ru: 'Я услышал, как дверь медленно со скрипом открылась.' },
        { en: 'The stairs always creak at night.', ru: 'Лестница всегда скрипит по ночам.' },
        { en: 'The rusty gate creaked in the wind.', ru: 'Ржавые ворота скрипели на ветру.' }
    ],
    []
),

createRichWord('c1_crease', 'Crease', '/kriːs/', 'крис', 'Складка / Мять', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Линия на ткани или бумаге, где она была сложена; делать складки.',
    '- Одежда: "Iron out the creases" (Разгладить складки)\n- Кожа: "Face full of creases" (Лицо в морщинах)\n- Глагол: "Don\'t crease the paper" (Не помни бумагу)',
    [
        { en: 'His trousers had a sharp crease down the front.', ru: 'На его брюках была острая стрелка (складка) спереди.' },
        { en: 'Pack carefully so you don\'t crease your dress.', ru: 'Укладывай вещи аккуратно, чтобы не помять платье.' },
        { en: 'She smoothed the crease in the letter.', ru: 'Она разгладила складку на письме.' },
        { en: 'The fabric creases very easily.', ru: 'Эта ткань очень легко мнется.' }
    ],
    []
),

createRichWord('c1_credentials', 'Credentials', '/krəˈdenʃlz/', 'кридэншлз', 'Полномочия / Квалификация', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Документы, доказывающие, кто вы; опыт и достижения, делающие вас подходящим для работы.',
    '- Работа: "Check credentials" (Проверить рекомендации/дипломы)\n- Пресса: "Press credentials" (Удостоверение прессы)\n- Репутация: "Academic credentials" (Академические заслуги)',
    [
        { en: 'She has excellent credentials for the job.', ru: 'У нее отличная квалификация для этой работы.' },
        { en: 'The police officer showed his credentials.', ru: 'Полицейский показал свое удостоверение.' },
        { en: 'His experience gives him strong leadership credentials.', ru: 'Его опыт дает ему весомые основания для лидерства.' },
        { en: 'Diplomatic credentials must be presented to the Queen.', ru: 'Верительные грамоты должны быть представлены Королеве.' }
    ],
    []
),

createRichWord('c1_crumple', 'Crumple', '/ˈkrʌmpl/', 'крампл', 'Мять / Сминать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Сдавливать что-то (бумагу, ткань) так, что оно становится мятым; упасть на землю (о человеке).',
    '- Бумага: "Crumple a letter" (Скомкать письмо)\n- Лицо: "Face crumpled" (Лицо сморщилось - от плача)\n- Падение: "Crumple to the floor" (Рухнуть на пол)',
    [
        { en: 'He crumpled the paper into a ball and threw it.', ru: 'Он скомкал бумагу в шарик и бросил ее.' },
        { en: 'Her face crumpled and she began to cry.', ru: 'Ее лицо сморщилось, и она заплакала.' },
        { en: 'The front of the car crumpled upon impact.', ru: 'Передняя часть машины смялась при ударе.' },
        { en: 'He was shot and crumpled to the ground.', ru: 'В него выстрелили, и он рухнул на землю.' }
    ],
    []
),

createRichWord('c1_cuff', 'Cuff', '/kʌf/', 'каф', 'Манжета / Наручник', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Утолщенный край рукава; (мн.ч.) наручники; легкий удар рукой.',
    '- Одежда: "Shirt cuff" (Манжета рубашки)\n- Полиция: "In cuffs" (В наручниках)\n- Действие: "Off the cuff" (Экспромтом / Без подготовки)',
    [
        { en: 'The cuffs of his shirt were frayed.', ru: 'Манжеты его рубашки обтрепались.' },
        { en: 'The police put the suspect in cuffs immediately.', ru: 'Полиция немедленно надела на подозреваемого наручники.' },
        { en: 'He made a speech completely off the cuff.', ru: 'Он произнес речь совершенно спонтанно (без подготовки).' },
        { en: 'She gave him a playful cuff on the ear.', ru: 'Она игриво шлепнула его по уху.' }
    ],
    []
),

createRichWord('c1_cumulative', 'Cumulative', '/ˈkjuːmjələtɪv/', 'кьюмьюлэтив', 'Совокупный / Накопительный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Увеличивающийся со временем путем сложения.',
    '- Эффект: "Cumulative effect" (Накопительный эффект)\n- Данные: "Cumulative total" (Общая сумма)\n- Вред: "Cumulative damage" (Совокупный ущерб)',
    [
        { en: 'The cumulative effect of lack of sleep is dangerous.', ru: 'Накопительный эффект недосыпания опасен.' },
        { en: 'Depression is often the cumulative result of stress.', ru: 'Депрессия часто является совокупным результатом стресса.' },
        { en: 'We recorded the cumulative rainfall for the month.', ru: 'Мы записали суммарное количество осадков за месяц.' },
        { en: 'Interest is calculated on a cumulative basis.', ru: 'Проценты рассчитываются на накопительной основе.' }
    ],
    []
),

createRichWord('c1_decency', 'Decency', '/ˈdiːsnsi/', 'диснси', 'Приличие / Порядочность', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Честное и вежливое поведение, соответствующее общественным нормам.',
    '- Поведение: "Common decency" (Элементарное приличие)\n- Мораль: "Sense of decency" (Чувство приличия)\n- Действие: "Have the decency to" (Иметь совесть сделать что-то)',
    [
        { en: 'He didn\'t even have the decency to apologize.', ru: 'У него даже не хватило совести извиниться.' },
        { en: 'Common decency requires you to help them.', ru: 'Элементарное приличие требует, чтобы ты помог им.' },
        { en: 'The movie offended public decency.', ru: 'Фильм оскорбил общественную нравственность.' },
        { en: 'She is a woman of great integrity and decency.', ru: 'Она женщина большой честности и порядочности.' }
    ],
    []
),

createRichWord('c1_decentralize', 'Decentralize', '/ˌdiːˈsentrəlaɪz/', 'дисентрэлайз', 'Децентрализовать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Перемещать власть или контроль из центрального места в несколько меньших мест.',
    '- Власть: "Decentralize power" (Децентрализовать власть)\n- Компания: "Decentralize the company" (Децентрализовать компанию)\n- Система: "Decentralized system" (Децентрализованная система)',
    [
        { en: 'The government plans to decentralize the education system.', ru: 'Правительство планирует децентрализовать систему образования.' },
        { en: 'A decentralized network is harder to attack.', ru: 'Децентрализованную сеть труднее атаковать.' },
        { en: 'They decided to decentralize decision-making.', ru: 'Они решили децентрализовать процесс принятия решений.' },
        { en: 'We need to decentralize our operations to reduce costs.', ru: 'Нам нужно децентрализовать наши операции, чтобы сократить расходы.' }
    ],
    []
),

createRichWord('c1_defect', 'Defect', '/ˈdiːfekt/', 'дифект', 'Дефект / Дезертировать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Покинуть свою страну или группу, чтобы присоединиться к врагу (глагол); Недостаток или изъян (существительное - ударение на первый слог).',
    '- Политика: "Defect to the West" (Сбежать на Запад)\n- Качество: "Speech defect" (Дефект речи)\n- Товар: "Manufacturing defect" (Производственный брак)',
    [
        { en: 'The spy defected to the United States.', ru: 'Шпион перебежал в Соединенные Штаты.' },
        { en: 'Many soldiers defected from the army.', ru: 'Многие солдаты дезертировали из армии.' },
        { en: 'The car was recalled due to a brake defect.', ru: 'Машину отозвали из-за дефекта тормозов.' },
        { en: 'She was born with a heart defect.', ru: 'Она родилась с пороком сердца.' }
    ],
    []
),

createRichWord('c1_deflect', 'Deflect', '/dɪˈflekt/', 'дифлект', 'Отклонять / Отвлекать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Изменить направление чего-либо (удара, критики, внимания).',
    '- Удар: "Deflect the ball" (Отбить мяч)\n- Разговор: "Deflect attention" (Отвлечь внимание)\n- Критика: "Deflect blame" (Перевести вину)',
    [
        { en: 'The goalkeeper managed to deflect the ball.', ru: 'Вратарю удалось отбить мяч.' },
        { en: 'He tried to deflect attention away from his mistakes.', ru: 'Он пытался отвлечь внимание от своих ошибок.' },
        { en: 'The bullet was deflected by his helmet.', ru: 'Пуля отрикошетила от его шлема.' },
        { en: 'She skilfully deflected the awkward questions.', ru: 'Она искусно уклонилась от неудобных вопросов.' }
    ],
    []
),

createRichWord('c1_deform', 'Deform', '/dɪˈfɔːm/', 'дифом', 'Деформировать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Испортить обычную форму чего-либо.',
    '- Тело: "Deformed hand" (Деформированная рука)\n- Металл: "Heat deforms plastic" (Жар деформирует пластик)\n- Структура: "Deformed spine" (Искривленный позвоночник)',
    [
        { en: 'The intense heat deformed the plastic container.', ru: 'Сильный жар деформировал пластиковый контейнер.' },
        { en: 'Arthritis can deform the joints in your hands.', ru: 'Артрит может деформировать суставы рук.' },
        { en: 'The tree was deformed by the constant wind.', ru: 'Дерево было искривлено постоянным ветром.' },
        { en: 'Shoes that are too tight can deform your feet.', ru: 'Слишком тесная обувь может деформировать стопы.' }
    ],
    []
),

createRichWord('c1_dementia', 'Dementia', '/dɪˈmenʃə/', 'димэншэ', 'Деменция / Слабоумие', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Серьезное заболевание мозга, вызывающее потерю памяти и способности мыслить (обычно у пожилых).',
    '- Болезнь: "Suffer from dementia" (Страдать деменцией)\n- Тип: "Senile dementia" (Старческое слабоумие)\n- Уход: "Dementia care" (Уход за больными деменцией)',
    [
        { en: 'My grandmother is suffering from dementia.', ru: 'Моя бабушка страдает деменцией.' },
        { en: 'Memory loss is an early sign of dementia.', ru: 'Потеря памяти — ранний признак деменции.' },
        { en: 'Caring for a patient with dementia is difficult.', ru: 'Уход за пациентом с деменцией труден.' },
        { en: 'Alzheimer\'s disease is a common form of dementia.', ru: 'Болезнь Альцгеймера — распространенная форма деменции.' }
    ],
    []
),

createRichWord('c1_dean', 'Dean', '/diːn/', 'дин', 'Декан', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Глава факультета в университете или старший священник в соборе.',
    '- Университет: "Dean of the faculty" (Декан факультета)\n- Церковь: "Dean of the cathedral" (Настоятель собора)\n- Статус: "The dean" (Декан)',
    [
        { en: 'The Dean of the medical school welcomed the students.', ru: 'Декан медицинской школы поприветствовал студентов.' },
        { en: 'She was appointed Dean of Arts last year.', ru: 'В прошлом году ее назначили деканом факультета искусств.' },
        { en: 'You need to see the Dean about your suspension.', ru: 'Вам нужно встретиться с деканом по поводу вашего отстранения.' },
        { en: 'He is the longest-serving dean in the college.', ru: 'Он старейший декан в колледже.' }
    ],
    []
  ),
createRichWord('c1_carcass', 'Carcass', '/ˈkɑːkəs/', 'какэс', 'Туша / Каркас', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Мертвое тело животного (особенно приготовленное для разделки); остов или каркас чего-либо разрушенного.',
    '- Животное: "Animal carcass" (Туша животного)\n- Еда: "Chicken carcass" (Куриный остов)\n- Разрушение: "Burnt-out carcass" (Сгоревший остов)',
    [
        { en: 'Vultures were circling over the carcass of a zebra.', ru: 'Стервятники кружили над тушей зебры.' },
        { en: 'Use the chicken carcass to make a tasty soup stock.', ru: 'Используйте куриный остов, чтобы приготовить вкусный бульон.' },
        { en: 'The rusting carcass of an old car lay in the field.', ru: 'Ржавеющий остов старой машины лежал в поле.' },
        { en: 'They removed the carcass from the road.', ru: 'Они убрали тушу с дороги.' }
    ],
    []
),

createRichWord('c1_cardiovascular', 'Cardiovascular', '/ˌkɑːdiəʊˈvæskjələ(r)/', 'кадиэувэскьюлэ', 'Сердечно-сосудистый', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к сердцу и кровеносным сосудам.',
    '- Медицина: "Cardiovascular system" (Сердечно-сосудистая система)\n- Здоровье: "Cardiovascular disease" (Сердечно-сосудистое заболевание)\n- Спорт: "Cardiovascular exercise" (Кардиотренировка)',
    [
        { en: 'Smoking significantly increases the risk of cardiovascular disease.', ru: 'Курение значительно увеличивает риск сердечно-сосудистых заболеваний.' },
        { en: 'Running is excellent for your cardiovascular health.', ru: 'Бег отлично подходит для здоровья вашей сердечно-сосудистой системы.' },
        { en: 'The doctor checked his cardiovascular fitness.', ru: 'Врач проверил его сердечно-сосудистую выносливость.' },
        { en: 'A healthy diet protects the cardiovascular system.', ru: 'Здоровая диета защищает сердечно-сосудистую систему.' }
    ],
    []
),

createRichWord('c1_caricature', 'Caricature', '/ˈkærɪkətʃʊə(r)/', 'кэрикэчуэ', 'Карикатура', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Изображение или описание, в котором особенности человека преувеличены для комического эффекта.',
    '- Искусство: "Draw a caricature" (Нарисовать карикатуру)\n- Политика: "Political caricature" (Политическая карикатура)\n- Описание: "Gross caricature" (Грубая карикатура)',
    [
        { en: 'The artist drew a funny caricature of the tourist.', ru: 'Художник нарисовал смешную карикатуру на туриста.' },
        { en: 'The newspaper published a caricature of the Prime Minister.', ru: 'Газета опубликовала карикатуру на премьер-министра.' },
        { en: 'His performance was a caricature of a strict teacher.', ru: 'Его выступление было карикатурой на строгого учителя.' },
        { en: 'He rejected the description as a grotesque caricature.', ru: 'Он отверг это описание как гротескную карикатуру.' }
    ],
    [
        { meaning: "To parody", translation: "Изображать карикатурно", example: { en: "He caricatured his boss.", ru: "Он карикатурно изобразил своего начальника." } }
    ]
),

createRichWord('c1_caste', 'Caste', '/kɑːst/', 'каст', 'Каста', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Социальный класс, особенно в традиционной индуистской системе; любая жесткая классовая система.',
    '- Общество: "Caste system" (Кастовая система)\n- Статус: "High caste" (Высокая каста)\n- Социум: "Lowest caste" (Низшая каста)',
    [
        { en: 'The caste system determines social status in some cultures.', ru: 'Кастовая система определяет социальный статус в некоторых культурах.' },
        { en: 'They faced discrimination because of their caste.', ru: 'Они столкнулись с дискриминацией из-за своей касты.' },
        { en: 'Marriage outside one\'s caste was traditionally forbidden.', ru: 'Брак вне своей касты традиционно был запрещен.' },
        { en: 'He was born into a high-caste family.', ru: 'Он родился в семье высокой касты.' }
    ],
    []
),

createRichWord('c1_categorical', 'Categorical', '/ˌkætəˈɡɒrɪkl/', 'кэтэгорикл', 'Категоричный / Безусловный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Абсолютно ясный и определенный; не допускающий сомнений.',
    '- Заявление: "Categorical denial" (Категорическое отрицание)\n- Ответ: "Categorical answer" (Категоричный ответ)\n- Утверждение: "State categorically" (Заявить категорично)',
    [
        { en: 'He issued a categorical denial of the accusations.', ru: 'Он выступил с категорическим опровержением обвинений.' },
        { en: 'I can state categorically that I was not there.', ru: 'Я могу категорически заявить, что меня там не было.' },
        { en: 'The witness gave a categorical assurance.', ru: 'Свидетель дал безусловную гарантию.' },
        { en: 'We need a categorical "yes" or "no".', ru: 'Нам нужно категоричное "да" или "нет".' }
    ],
    []
),

createRichWord('c1_cedar', 'Cedar', '/ˈsiːdə(r)/', 'сидэ', 'Кедр', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Высокое вечнозеленое дерево с ароматной древесиной.',
    '- Дерево: "Cedar tree" (Кедровое дерево)\n- Материал: "Cedar wood" (Древесина кедра)\n- Запах: "Smell of cedar" (Запах кедра)',
    [
        { en: 'The box was made of aromatic cedar wood.', ru: 'Коробка была сделана из ароматного кедрового дерева.' },
        { en: 'Huge cedar trees lined the driveway.', ru: 'Огромные кедры росли вдоль подъездной аллеи.' },
        { en: 'Cedar is naturally resistant to rot and insects.', ru: 'Кедр от природы устойчив к гниению и насекомым.' },
        { en: 'The closet was lined with cedar to protect the clothes.', ru: 'Шкаф был обшит кедром для защиты одежды.' }
    ],
    []
),

createRichWord('c1_chic', 'Chic', '/ʃiːk/', 'шик', 'Шикарный / Элегантный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Стильный, модный и элегантный.',
    '- Мода: "Chic dress" (Шикарное платье)\n- Стиль: "Shabby chic" (Потертый шик - стиль интерьера)\n- Место: "Chic restaurant" (Модный ресторан)',
    [
        { en: 'She always looks so chic and sophisticated.', ru: 'Она всегда выглядит так шикарно и утонченно.' },
        { en: 'They stayed at a chic boutique hotel in Paris.', ru: 'Они остановились в шикарном бутик-отеле в Париже.' },
        { en: 'Simple black clothes can be very chic.', ru: 'Простая черная одежда может быть очень элегантной.' },
        { en: 'The apartment is decorated in a modern, chic style.', ru: 'Квартира оформлена в современном, шикарном стиле.' }
    ],
    []
),

createRichWord('c1_chime', 'Chime', '/tʃaɪm/', 'чайм', 'Звонить / Перезвон', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Издавать чистый звенящий звук (о колоколах или часах); соглашаться (с предлогом "in" или "with").',
    '- Звук: "Wind chimes" (Музыка ветра)\n- Часы: "Clock chimes" (Часы бьют)\n- Фраза: "Chime in" (Вступить в разговор)',
    [
        { en: 'The church bells chimed midnight.', ru: 'Церковные колокола пробили полночь.' },
        { en: 'Feel free to chime in if you have any ideas.', ru: 'Не стесняйтесь вступать в разговор, если у вас есть идеи.' },
        { en: 'The grandfather clock chimes every hour.', ru: 'Дедушкины часы бьют каждый час.' },
        { en: 'His opinion chimes with mine.', ru: 'Его мнение совпадает с моим.' }
    ],
    [
        { meaning: "Set of bells", translation: "Куранты / Набор колокольчиков", example: { en: "Hear the chimes.", ru: "Слышать куранты." } }
    ]
),

createRichWord('c1_chisel', 'Chisel', '/ˈtʃɪzl/', 'чизл', 'Стамеска / Долото', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Инструмент с острым металлическим лезвием, используемый для резьбы по дереву или камню.',
    '- Инструмент: "Wood chisel" (Стамеска по дереву)\n- Действие: "Chisel away" (Отсекать / Упорно работать)\n- Лицо: "Chiseled features" (Точеные черты лица)',
    [
        { en: 'The sculptor used a chisel to shape the marble.', ru: 'Скульптор использовал долото, чтобы придать форму мрамору.' },
        { en: 'He carefully chiseled the wood to fit the lock.', ru: 'Он аккуратно выдалбливал дерево стамеской, чтобы установить замок.' },
        { en: 'He has the chiseled features of a movie star.', ru: 'У него точеные черты лица, как у кинозвезды.' },
        { en: 'We had to chisel the ice off the windscreen.', ru: 'Нам пришлось скалывать лед с лобового стекла.' }
    ],
    [
        { meaning: "To cheat (Slang)", translation: "Обмануть / Выманить", example: { en: "He chiseled me out of ten dollars.", ru: "Он выманил у меня десять долларов." } }
    ]
),

createRichWord('c1_choral', 'Choral', '/ˈkɔːrəl/', 'корэл', 'Хоровой', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Относящийся к хору или исполняемый хором.',
    '- Музыка: "Choral music" (Хоровая музыка)\n- Группа: "Choral society" (Хоровое общество)\n- Исполнение: "Choral singing" (Хоровое пение)',
    [
        { en: 'We attended a magnificent choral concert in the cathedral.', ru: 'Мы посетили великолепный хоровой концерт в соборе.' },
        { en: 'Beethoven\'s Ninth Symphony features a famous choral finale.', ru: 'Девятая симфония Бетховена включает знаменитый хоровой финал.' },
        { en: 'She sings in a local choral group.', ru: 'Она поет в местной хоровой группе.' },
        { en: 'The composer wrote many choral works.', ru: 'Композитор написал много хоровых произведений.' }
    ],
    []
),

createRichWord('c1_clot', 'Clot', '/klɒt/', 'клот', 'Сгусток / Тромб', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Густая масса свернувшейся жидкости, особенно крови.',
    '- Медицина: "Blood clot" (Тромб)\n- Еда: "Clotted cream" (Топленые сливки)\n- Действие: "Blood clots" (Кровь сворачивается)',
    [
        { en: 'A blood clot in the leg can be very dangerous.', ru: 'Тромб в ноге может быть очень опасным.' },
        { en: 'The blood began to clot around the wound.', ru: 'Кровь начала сворачиваться вокруг раны.' },
        { en: 'Clotted cream is traditionally served with scones.', ru: 'Топленые сливки традиционно подают со сконами.' },
        { en: 'Drugs were given to dissolve the clot.', ru: 'Были даны лекарства, чтобы растворить тромб.' }
    ],
    [
        { meaning: "Fool (BrE Slang)", translation: "Олух / Балбес", example: { en: "You silly clot!", ru: "Ты глупый олух!" } }
    ]
),

createRichWord('c1_cohesive', 'Cohesive', '/kəʊˈhiːsɪv/', 'кэухисив', 'Сплоченный / Связный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Хорошо объединенный и работающий как единое целое.',
    '- Группа: "Cohesive team" (Сплоченная команда)\n- Текст: "Cohesive argument" (Связный аргумент)\n- Общество: "Cohesive society" (Сплоченное общество)',
    [
        { en: 'The aim is to build a cohesive and effective team.', ru: 'Цель — создать сплоченную и эффективную команду.' },
        { en: 'Her essay was not very cohesive; the ideas jumped around.', ru: 'Её эссе было не очень связным; идеи перескакивали с одной на другую.' },
        { en: 'Social events help make the community more cohesive.', ru: 'Социальные мероприятия помогают сделать сообщество более сплоченным.' },
        { en: 'A cohesive strategy is needed to solve the crisis.', ru: 'Для разрешения кризиса необходима согласованная стратегия.' }
    ],
    []
),

createRichWord('c1_colt', 'Colt', '/kəʊlt/', 'кэулт', 'Жеребенок', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Молодой самец лошади (обычно до 4 лет).',
    '- Лошади: "Young colt" (Молодой жеребчик)\n- Ферма: "Training a colt" (Объездка жеребенка)\n- Метафора: "Frisky as a colt" (Игривый как жеребенок)',
    [
        { en: 'The colt ran freely across the meadow.', ru: 'Жеребенок свободно бегал по лугу.' },
        { en: 'He is training the colt for future races.', ru: 'Он тренирует жеребенка для будущих скачек.' },
        { en: 'A colt can stand up shortly after birth.', ru: 'Жеребенок может встать на ноги вскоре после рождения.' },
        { en: 'The mare watched her colt carefully.', ru: 'Кобыла внимательно следила за своим жеребенком.' }
    ],
    [
        { meaning: "Revolver (Brand)", translation: "Кольт (револьвер)", example: { en: "He carried a Colt 45.", ru: "Он носил Кольт 45-го калибра." } }
    ]
),

createRichWord('c1_commando', 'Commando', '/kəˈmɑːndəʊ/', 'кэмандеу', 'Коммандос / Диверсант', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Солдат, специально обученный для выполнения быстрых и опасных рейдов.',
    '- Армия: "Commando unit" (Отряд коммандос)\n- Действие: "Commando raid" (Рейд диверсантов)\n- Сленг: "Go commando" (Ходить без нижнего белья)',
    [
        { en: 'A team of commandos was sent to rescue the hostages.', ru: 'Группа коммандос была отправлена для спасения заложников.' },
        { en: 'He underwent tough training to become a commando.', ru: 'Он прошел суровую подготовку, чтобы стать спецназовцем.' },
        { en: 'The commandos attacked under the cover of darkness.', ru: 'Коммандос атаковали под покровом темноты.' },
        { en: 'The bridge was destroyed by a commando unit.', ru: 'Мост был разрушен отрядом диверсантов.' }
    ],
    []
),

createRichWord('c1_compassionate', 'Compassionate', '/kəmˈpæʃənət/', 'кэмпэшэнэт', 'Сострадательный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Проявляющий жалость, сочувствие и заботу о других.',
    '- Характер: "Compassionate nature" (Сострадательная натура)\n- Действие: "Compassionate leave" (Отпуск по семейным обстоятельствам - горе)\n- Человек: "Compassionate nurse" (Милосердная медсестра)',
    [
        { en: 'She is a deeply compassionate woman who helps the poor.', ru: 'Она глубоко сострадательная женщина, которая помогает бедным.' },
        { en: 'He was granted compassionate leave to attend the funeral.', ru: 'Ему предоставили отпуск по семейным обстоятельствам для посещения похорон.' },
        { en: 'Doctors must be professional yet compassionate.', ru: 'Врачи должны быть профессиональными, но сострадательными.' },
        { en: 'A compassionate society cares for its weakest members.', ru: 'Гуманное общество заботится о своих самых слабых членах.' }
    ],
    []
),

createRichWord('c1_complexion', 'Complexion', '/kəmˈplekʃn/', 'кэмплекшн', 'Цвет лица / Характер', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Естественный цвет и вид кожи на лице; общий характер ситуации.',
    '- Кожа: "Pale complexion" (Бледный цвет лица)\n- Вид: "Clear complexion" (Чистая кожа)\n- Ситуация: "Change the complexion" (Изменить характер ситуации)',
    [
        { en: 'She has a fair complexion and blue eyes.', ru: 'У нее светлая кожа и голубые глаза.' },
        { en: 'Drinking water is good for your complexion.', ru: 'Питьевая вода полезна для цвета лица.' },
        { en: 'The arrival of the police changed the complexion of the riot.', ru: 'Прибытие полиции изменило характер беспорядков.' },
        { en: 'This new evidence puts a different complexion on the case.', ru: 'Эти новые улики представляют дело в ином свете.' }
    ],
    []
),

createRichWord('c1_compulsion', 'Compulsion', '/kəmˈpʌlʃn/', 'кэмпалшн', 'Принуждение / Навязчивое влечение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Сильное, неконтролируемое желание сделать что-то; действие по принуждению.',
    '- Психология: "Compulsion to check" (Навязчивое желание проверить)\n- Сила: "Under compulsion" (По принуждению)\n- Расстройство: "Obsessive compulsion" (Навязчивое состояние)',
    [
        { en: 'He felt a sudden compulsion to tell the truth.', ru: 'Он почувствовал внезапное непреодолимое желание сказать правду.' },
        { en: 'Gambling can become a dangerous compulsion.', ru: 'Азартные игры могут стать опасной зависимостью.' },
        { en: 'I did it of my own free will, not under compulsion.', ru: 'Я сделал это по собственной воле, а не по принуждению.' },
        { en: 'She fought the compulsion to look back.', ru: 'Она боролась с навязчивым желанием оглянуться.' }
    ],
    []
),

createRichWord('c1_concerto', 'Concerto', '/kənˈtʃɜːtəʊ/', 'кэнчётеу', 'Концерт (музыкальный жанр)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Музыкальное произведение для сольного инструмента (например, пианино) и оркестра.',
    '- Музыка: "Piano concerto" (Концерт для фортепиано)\n- Композитор: "Mozart\'s concertos" (Концерты Моцарта)\n- Исполнение: "Play a concerto" (Играть концерт)',
    [
        { en: 'Rachmaninoff\'s Piano Concerto No. 2 is very famous.', ru: 'Второй фортепианный концерт Рахманинова очень известен.' },
        { en: 'The violinist performed the concerto beautifully.', ru: 'Скрипач прекрасно исполнил концерт.' },
        { en: 'A concerto usually has three movements.', ru: 'Концерт обычно состоит из трех частей.' },
        { en: 'The orchestra accompanied the soloist in the concerto.', ru: 'Оркестр аккомпанировал солисту в концерте.' }
    ],
    []
),

createRichWord('c1_conscientious', 'Conscientious', '/ˌkɒnʃiˈenʃəs/', 'коншиэншэс', 'Добросовестный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Старающийся выполнять работу или долг хорошо и тщательно.',
    '- Работа: "Conscientious worker" (Добросовестный работник)\n- Учеба: "Conscientious student" (Прилежный студент)\n- Отказ: "Conscientious objector" (Отказник по идейным соображениям)',
    [
        { en: 'She is a conscientious employee who never misses a deadline.', ru: 'Она добросовестный сотрудник, который никогда не срывает сроки.' },
        { en: 'He made a conscientious effort to be polite.', ru: 'Он приложил сознательное усилие, чтобы быть вежливым.' },
        { en: 'A conscientious student checks their work twice.', ru: 'Прилежный студент проверяет свою работу дважды.' },
        { en: 'He was a conscientious objector during the war.', ru: 'Во время войны он был отказником по совести.' }
    ],
    []
),

createRichWord('c1_conservatory', 'Conservatory', '/kənˈsɜːvətri/', 'кэнсёвэтри', 'Оранжерея / Консерватория', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Стеклянная комната, пристроенная к дому (для растений или отдыха); школа музыки или драмы (чаще в США, но используется и в UK).',
    '- Дом: "Glass conservatory" (Стеклянная веранда/оранжерея)\n- Образование: "Music conservatory" (Консерватория)\n- Растения: "Plant conservatory" (Оранжерея)',
    [
        { en: 'We sat in the conservatory enjoying the winter sun.', ru: 'Мы сидели в оранжерее, наслаждаясь зимним солнцем.' },
        { en: 'She studied violin at a famous conservatory.', ru: 'Она училась игре на скрипке в известной консерватории.' },
        { en: 'It gets very hot in the conservatory in summer.', ru: 'Летом в оранжерее становится очень жарко.' },
        { en: 'They grow tropical plants in the conservatory.', ru: 'Они выращивают тропические растения в оранжерее.' }
    ],
    []
),

createRichWord('c1_constellation', 'Constellation', '/ˌkɒnstəˈleɪʃn/', 'констэлейшн', 'Созвездие / Плеяда', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Группа звезд, образующая узор; группа известных людей.',
    '- Космос: "Identify a constellation" (Определить созвездие)\n- Зодиак: "Zodiac constellation" (Зодиакальное созвездие)\n- Люди: "Constellation of stars" (Плеяда звезд)',
    [
        { en: 'Orion is one of the easiest constellations to find.', ru: 'Орион — одно из самых легких для поиска созвездий.' },
        { en: 'Ancient sailors navigated by the constellations.', ru: 'Древние моряки ориентировались по созвездиям.' },
        { en: 'A constellation of Hollywood stars attended the premiere.', ru: 'Плеяда голливудских звезд посетила премьеру.' },
        { en: 'The Big Dipper is part of a larger constellation.', ru: 'Большая Медведица — часть большего созвездия.' }
    ],
    []
),

createRichWord('c1_consul', 'Consul', '/ˈkɒnsl/', 'консл', 'Консул', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Государственный чиновник, живущий в чужой стране для защиты интересов своих граждан.',
    '- Дипломатия: "British Consul" (Британский консул)\n- Место: "Consul General" (Генеральный консул)\n- История: "Roman Consul" (Римский консул)',
    [
        { en: 'If you lose your passport, contact the British Consul.', ru: 'Если вы потеряете паспорт, свяжитесь с британским консулом.' },
        { en: 'The Consul helped us with the legal paperwork.', ru: 'Консул помог нам с оформлением юридических документов.' },
        { en: 'He was appointed honorary consul in Italy.', ru: 'Он был назначен почетным консулом в Италии.' },
        { en: 'Julius Caesar was a Roman Consul.', ru: 'Юлий Цезарь был римским консулом.' }
    ],
    []
),

createRichWord('c1_contractual', 'Contractual', '/kənˈtræktʃuəl/', 'кэнтрэкчуэл', 'Договорной / Контрактный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Связанный с юридическим контрактом.',
    '- Обязательство: "Contractual obligation" (Договорное обязательство)\n- Соглашение: "Contractual agreement" (Контрактное соглашение)\n- Спор: "Contractual dispute" (Спор по контракту)',
    [
        { en: 'The company has a contractual obligation to pay you.', ru: 'У компании есть договорное обязательство платить вам.' },
        { en: 'Failure to deliver is a contractual breach.', ru: 'Невыполнение поставки является нарушением контракта.' },
        { en: 'We are in a contractual dispute with the supplier.', ru: 'Мы находимся в договорном споре с поставщиком.' },
        { en: 'Read the contractual terms carefully before signing.', ru: 'Внимательно прочитайте условия договора перед подписанием.' }
    ],
    []
  ),
createRichWord('c1_convent', 'Convent', '/ˈkɒnvənt/', 'конвэнт', 'Женский монастырь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Здание, где живут монахини (женщины, посвятившие себя Богу).',
    '- Религия: "Join a convent" (Уйти в монастырь)\n- Образование: "Convent school" (Школа при монастыре)\n- Жители: "Nuns in a convent" (Монахини в монастыре)',
    [
        { en: 'She decided to become a nun and entered a convent.', ru: 'Она решила стать монахиней и ушла в монастырь.' },
        { en: 'The convent has a beautiful garden open to the public.', ru: 'При монастыре есть красивый сад, открытый для публики.' },
        { en: 'Convent schools were known for their strict discipline.', ru: 'Монастырские школы славились своей строгой дисциплиной.' },
        { en: 'They lived a quiet life within the walls of the convent.', ru: 'Они жили тихой жизнью в стенах монастыря.' }
    ],
    []
),

createRichWord('c1_cosmopolitan', 'Cosmopolitan', '/ˌkɒzməˈpɒlɪtən/', 'козмэполитэн', 'Космополитичный / Многонациональный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Содержащий людей из разных стран; открытый для разных культур и идей.',
    '- Город: "Cosmopolitan city" (Космополитичный город)\n- Атмосфера: "Cosmopolitan atmosphere" (Многонациональная атмосфера)\n- Человек: "Cosmopolitan outlook" (Космополитичные взгляды)',
    [
        { en: 'London is a truly cosmopolitan city with many cultures.', ru: 'Лондон — поистине космополитичный город со множеством культур.' },
        { en: 'She has a cosmopolitan outlook on life thanks to her travels.', ru: 'У нее космополитичные взгляды на жизнь благодаря путешествиям.' },
        { en: 'The restaurant offers a cosmopolitan menu.', ru: 'Ресторан предлагает интернациональное меню.' },
        { en: 'New York\'s population is incredibly cosmopolitan.', ru: 'Население Нью-Йорка невероятно многонационально.' }
    ],
    []
),

createRichWord('c1_craze', 'Craze', '/kreɪz/', 'крейз', 'Повальное увлечение / Мода', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Увлечение чем-то, что становится очень популярным на короткое время.',
    '- Мода: "Latest craze" (Последний писк моды)\n- Здоровье: "Fitness craze" (Повальное увлечение фитнесом)\n- Глагол: "Start a craze" (Запустить тренд)',
    [
        { en: 'The fidget spinner craze swept through schools last year.', ru: 'Увлечение спиннерами захлестнуло школы в прошлом году.' },
        { en: 'Cycling is the new fitness craze in the city.', ru: 'Велоспорт — новое повальное увлечение фитнесом в городе.' },
        { en: 'This dance craze will probably disappear in a month.', ru: 'Эта танцевальная лихорадка, вероятно, исчезнет через месяц.' },
        { en: 'He started a craze for wearing weird hats.', ru: 'Он запустил моду на ношение странных шляп.' }
    ],
    []
),

createRichWord('c1_crescent', 'Crescent', '/ˈkresnt/', 'креснт', 'Полумесяц', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Изогнутая форма, напоминающая Луну в начале или конце фазы.',
    '- Космос: "Crescent moon" (Лунный серп)\n- Город: "Live in a Crescent" (Жить на улице в форме полумесяца - часто в адресах)\n- Символ: "Red Crescent" (Красный Полумесяц - организация)',
    [
        { en: 'A thin crescent moon shone in the night sky.', ru: 'Тонкий серп луны сиял в ночном небе.' },
        { en: 'The flag of Turkey features a star and a crescent.', ru: 'На флаге Турции изображены звезда и полумесяц.' },
        { en: 'They live at 15 Mornington Crescent.', ru: 'Они живут на Морнингтон Кресент, 15.' },
        { en: 'The bay is shaped like a perfect crescent.', ru: 'Бухта имеет форму идеального полумесяца.' }
    ],
    []
),

createRichWord('c1_culinary', 'Culinary', '/ˈkʌlɪnəri/', 'калинэри', 'Кулинарный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Связанный с приготовлением пищи или кухней.',
    '- Еда: "Culinary skills" (Кулинарные навыки)\n- Искусство: "Culinary arts" (Кулинарное искусство)\n- Опыт: "Culinary delight" (Кулинарное наслаждение)',
    [
        { en: 'She went to Paris to improve her culinary skills.', ru: 'Она поехала в Париж, чтобы улучшить свои кулинарные навыки.' },
        { en: 'The region is famous for its culinary traditions.', ru: 'Регион славится своими кулинарными традициями.' },
        { en: 'This dish is a culinary masterpiece.', ru: 'Это блюдо — кулинарный шедевр.' },
        { en: 'Mushrooms are considered a culinary delicacy here.', ru: 'Грибы здесь считаются кулинарным деликатесом.' }
    ],
    []
),

createRichWord('c1_culprit', 'Culprit', '/ˈkʌlprɪt/', 'калприт', 'Виновник / Преступник', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, виновный в преступлении или проступке; причина проблемы.',
    '- Преступление: "Identify the culprit" (Опознать преступника)\n- Проблема: "Main culprit" (Главная причина/виновник)\n- Поиск: "Catch the culprit" (Поймать виновного)',
    [
        { en: 'Police are still looking for the culprit.', ru: 'Полиция все еще ищет преступника.' },
        { en: 'Sugar is often the main culprit in tooth decay.', ru: 'Сахар часто является главной причиной разрушения зубов.' },
        { en: 'The teacher tried to find the culprit who broke the window.', ru: 'Учитель пытался найти виновника, разбившего окно.' },
        { en: 'We suspected the virus was the culprit behind the crash.', ru: 'Мы подозревали, что вирус был причиной сбоя.' }
    ],
    []
),

createRichWord('c1_cunning', 'Cunning', '/ˈkʌnɪŋ/', 'канинг', 'Хитрый / Коварный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Умеющий добиваться своего, обманывая людей; изобретательный.',
    '- Характер: "Cunning fox" (Хитрый лис)\n- План: "Cunning plan" (Хитрый план)\n- Ум: "Low cunning" (Мелкая хитрость)',
    [
        { en: 'He is as cunning as a fox.', ru: 'Он хитер как лис.' },
        { en: 'She devised a cunning plan to escape.', ru: 'Она придумала хитроумный план побега.' },
        { en: 'The general used cunning tactics to win the battle.', ru: 'Генерал использовал коварную тактику, чтобы выиграть битву.' },
        { en: 'His cunning lies deceived everyone.', ru: 'Его хитрая ложь обманула всех.' }
    ],
    [
        { meaning: "Skill/Ingenuity (Old-fashioned)", translation: "Искусность", example: { en: "A work of great cunning.", ru: "Работа великого мастерства." } }
    ]
),

createRichWord('c1_dagger', 'Dagger', '/ˈdæɡə(r)/', 'дэгэ', 'Кинжал', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Короткий нож с острым концом, используемый как оружие.',
    '- Оружие: "Sharp dagger" (Острый кинжал)\n- Идиома: "Look daggers at" (Смотреть волком/злобно)\n- Действие: "Stab with a dagger" (Ударить кинжалом)',
    [
        { en: 'He pulled a dagger from his belt.', ru: 'Он выхватил кинжал из-за пояса.' },
        { en: 'She looked daggers at him across the room.', ru: 'Она бросала на него злобные взгляды через всю комнату.' },
        { en: 'The murder weapon was an antique dagger.', ru: 'Орудием убийства был старинный кинжал.' },
        { en: 'Cloak and dagger operations are common in spy movies.', ru: 'Шпионские операции (плаща и кинжала) обычны в фильмах про агентов.' }
    ],
    []
),

createRichWord('c1_daze', 'Daze', '/deɪz/', 'дейз', 'Оцепенение / Изумление', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Состояние замешательства, когда человек не может ясно мыслить (от удара или шока).',
    '- Состояние: "In a daze" (В оцепенении)\n- Глагол: "Dazed by the blow" (Оглушенный ударом)\n- Чувство: "Walk around in a daze" (Ходить как в тумане)',
    [
        { en: 'He wandered around in a daze after the accident.', ru: 'Он бродил в оцепенении после аварии.' },
        { en: 'The news left her in a complete daze.', ru: 'Новости повергли ее в полный ступор.' },
        { en: 'I was still half asleep and in a daze.', ru: 'Я все еще спал наполовину и был как в тумане.' },
        { en: 'The blow to the head dazed him for a moment.', ru: 'Удар по голове на мгновение оглушил его.' }
    ],
    []
),

createRichWord('c1_deceptive', 'Deceptive', '/dɪˈseptɪv/', 'дисэптив', 'Обманчивый', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Вводящий в заблуждение; кажущийся чем-то одним, но являющийся другим.',
    '- Внешность: "Deceptive appearance" (Обманчивая внешность)\n- Простота: "Deceptively simple" (Обманчиво простой)\n- Реклама: "Deceptive marketing" (Недобросовестная реклама)',
    [
        { en: 'Appearances can be deceptive.', ru: 'Внешность может быть обманчивой.' },
        { en: 'The exam looked deceptively easy.', ru: 'Экзамен казался обманчиво легким.' },
        { en: 'It is illegal to use deceptive packaging.', ru: 'Незаконно использовать вводящую в заблуждение упаковку.' },
        { en: 'A deceptive calm settled over the city.', ru: 'Обманчивое спокойствие опустилось на город.' }
    ],
    []
),

createRichWord('c1_decipher', 'Decipher', '/dɪˈsaɪfə(r)/', 'дисайфэ', 'Расшифровать / Разобрать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Понять смысл чего-то трудного (плохого почерка, кода, древнего языка).',
    '- Текст: "Decipher handwriting" (Разобрать почерк)\n- Код: "Decipher a code" (Расшифровать код)\n- Загадка: "Decipher the mystery" (Разгадать тайну)',
    [
        { en: 'I cannot decipher his terrible handwriting.', ru: 'Я не могу разобрать его ужасный почерк.' },
        { en: 'Experts are trying to decipher the ancient script.', ru: 'Эксперты пытаются расшифровать древнюю письменность.' },
        { en: 'It took years to decipher the enemy\'s signals.', ru: 'Потребовались годы, чтобы расшифровать сигналы врага.' },
        { en: 'We need to decipher what the instructions actually mean.', ru: 'Нам нужно понять (расшифровать), что на самом деле значат инструкции.' }
    ],
    []
),

createRichWord('c1_decompose', 'Decompose', '/ˌdiːkəmˈpəʊz/', 'дикэмпеуз', 'Разлагаться / Гнить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Распадаться на части (о мертвых растениях/животных); гнить.',
    '- Природа: "Body decomposes" (Тело разлагается)\n- Материал: "Plastic doesn\'t decompose" (Пластик не разлагается)\n- Химия: "Decompose into elements" (Распадаться на элементы)',
    [
        { en: 'Leaves decompose and enrich the soil.', ru: 'Листья разлагаются и обогащают почву.' },
        { en: 'The body had begun to decompose in the heat.', ru: 'Тело начало разлагаться на жаре.' },
        { en: 'Some plastics take hundreds of years to decompose.', ru: 'Некоторым видам пластика требуются сотни лет для разложения.' },
        { en: 'Bacteria help organic matter to decompose.', ru: 'Бактерии помогают органике разлагаться.' }
    ],
    []
),

createRichWord('c1_deconstruct', 'Deconstruct', '/ˌdiːkənˈstrʌkt/', 'дикэнстракт', 'Деконструировать / Разбирать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Анализировать что-то (текст, идею), разбирая на части, чтобы показать скрытые смыслы.',
    '- Анализ: "Deconstruct a text" (Деконструировать текст)\n- Идея: "Deconstruct a myth" (Развенчать миф)\n- Еда: "Deconstructed dish" (Деконструированное блюдо - поданное частями)',
    [
        { en: 'The critic tried to deconstruct the novel\'s themes.', ru: 'Критик попытался разобрать темы романа.' },
        { en: 'We need to deconstruct these old stereotypes.', ru: 'Нам нужно разобрать (разрушить) эти старые стереотипы.' },
        { en: 'The chef served a deconstructed cheesecake.', ru: 'Шеф-повар подал деконструированный чизкейк.' },
        { en: 'Let\'s deconstruct the argument to see if it holds up.', ru: 'Давайте разберем этот аргумент, чтобы увидеть, выдержит ли он критику.' }
    ],
    []
),

createRichWord('c1_decor', 'Decor', '/ˈdeɪkɔː(r)/', 'дэйко', 'Декор / Обстановка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Стиль мебели и украшений в комнате.',
    '- Дом: "Interior decor" (Интерьер)\n- Стиль: "Modern decor" (Современный декор)\n- Вкус: "Tasteful decor" (Оформление со вкусом)',
    [
        { en: 'The hotel features elegant Victorian decor.', ru: 'Отель отличается элегантным викторианским декором.' },
        { en: 'I am thinking of changing the decor in the living room.', ru: 'Я подумываю сменить обстановку в гостиной.' },
        { en: 'The decor was simple but stylish.', ru: 'Декор был простым, но стильным.' },
        { en: 'Bright colours are part of the cafe\'s decor.', ru: 'Яркие цвета — часть оформления кафе.' }
    ],
    []
),

createRichWord('c1_deduce', 'Deduce', '/dɪˈdjuːs/', 'дидьюс', 'Делать вывод / Заключать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Приходить к выводу на основе имеющейся информации или фактов.',
    '- Логика: "Deduce from facts" (Сделать вывод из фактов)\n- Ответ: "Deduce the answer" (Вывести ответ)\n- Метод: "Deduce logically" (Логически вывести)',
    [
        { en: 'We can deduce a lot from these footprints.', ru: 'Мы можем многое понять по этим следам.' },
        { en: 'Detectives deduced that the killer was left-handed.', ru: 'Детективы сделали вывод, что убийца был левшой.' },
        { en: 'From his accent, I deduced he was from Scotland.', ru: 'По его акценту я заключил, что он из Шотландии.' },
        { en: 'What can we deduce from the available data?', ru: 'Какой вывод мы можем сделать из доступных данных?' }
    ],
    []
),

createRichWord('c1_defiance', 'Defiance', '/dɪˈfaɪəns/', 'дифайэнс', 'Неповиновение / Вызов', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Открытый отказ подчиняться кому-то или чему-то.',
    '- Действие: "Act of defiance" (Акт неповиновения)\n- Взгляд: "Look of defiance" (Вызывающий взгляд)\n- Фраза: "In defiance of" (Вопреки / В нарушение)',
    [
        { en: 'He acted in defiance of the law.', ru: 'Он действовал в нарушение закона.' },
        { en: 'She stared at him with defiance in her eyes.', ru: 'Она смотрела на него с вызовом в глазах.' },
        { en: 'The demonstration was a show of defiance against the government.', ru: 'Демонстрация была проявлением неповиновения правительству.' },
        { en: 'He clenched his fist in a gesture of defiance.', ru: 'Он сжал кулак в жесте неповиновения.' }
    ],
    []
),

createRichWord('c1_deflate', 'Deflate', '/dɪˈfleɪt/', 'дифлейт', 'Сдувать / Осадить', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Выпустить воздух из чего-то (шины, шара); заставить кого-то чувствовать себя менее уверенным.',
    '- Предмет: "Deflate a tyre" (Спустить шину)\n- Эго: "Deflate his ego" (Сбить спесь)\n- Экономика: "Deflate the economy" (Сдерживать экономику)',
    [
        { en: 'The balloon deflated slowly overnight.', ru: 'За ночь шарик медленно сдулся.' },
        { en: 'His criticism completely deflated her confidence.', ru: 'Его критика полностью лишила ее уверенности.' },
        { en: 'I had a puncture that deflated the tyre.', ru: 'У меня был прокол, из-за которого спустило колесо.' },
        { en: 'The bad news deflated our high spirits.', ru: 'Плохие новости охладили наш пыл.' }
    ],
    []
),

createRichWord('c1_delicacy', 'Delicacy', '/ˈdelɪkəsi/', 'деликэси', 'Деликатес / Утонченность', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Редкая и вкусная еда; качество быть нежным, хрупким или тактичным.',
    '- Еда: "Local delicacy" (Местный деликатес)\n- Качество: "Treat with delicacy" (Обращаться деликатно/осторожно)\n- Ситуация: "Matter of delicacy" (Деликатный вопрос)',
    [
        { en: 'Caviar is considered a luxury delicacy.', ru: 'Икра считается роскошным деликатесом.' },
        { en: 'The situation requires great delicacy and tact.', ru: 'Ситуация требует большой деликатности и такта.' },
        { en: 'She handled the fragile glass with delicacy.', ru: 'Она обращалась с хрупким стеклом с осторожностью.' },
        { en: 'Fried insects are a delicacy in some countries.', ru: 'Жареные насекомые — деликатес в некоторых странах.' }
    ],
    []
),

createRichWord('c1_demolition', 'Demolition', '/ˌdeməˈlɪʃn/', 'дэмэлишн', 'Снос / Разрушение', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Процесс разрушения здания или сооружения.',
    '- Строительство: "Demolition site" (Место сноса)\n- Действие: "Scheduled for demolition" (Запланирован под снос)\n- Инструмент: "Demolition ball" (Шар-баба)',
    [
        { en: 'The demolition of the old stadium began today.', ru: 'Снос старого стадиона начался сегодня.' },
        { en: 'The building is unsafe and scheduled for demolition.', ru: 'Здание небезопасно и подлежит сносу.' },
        { en: 'Residents opposed the demolition of the historic library.', ru: 'Жители выступили против сноса исторической библиотеки.' },
        { en: 'Demolition experts used explosives to bring down the tower.', ru: 'Эксперты по сносу использовали взрывчатку, чтобы обрушить башню.' }
    ],
    []
),

createRichWord('c1_destabilize', 'Destabilize', '/ˌdiːˈsteɪbəlaɪz/', 'дистейбэлайз', 'Дестабилизировать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Делать правительство, регион или экономику нестабильными.',
    '- Политика: "Destabilize the region" (Дестабилизировать регион)\n- Экономика: "Destabilize the market" (Рашатать рынок)\n- Власть: "Attempt to destabilize" (Попытка дестабилизировать)',
    [
        { en: 'The rebels are trying to destabilize the government.', ru: 'Повстанцы пытаются дестабилизировать правительство.' },
        { en: 'Sudden price changes can destabilize the economy.', ru: 'Внезапные изменения цен могут дестабилизировать экономику.' },
        { en: 'Foreign interference destabilized the country.', ru: 'Иностранное вмешательство дестабилизировало страну.' },
        { en: 'Rumours can easily destabilize the stock market.', ru: 'Слухи могут легко раскачать фондовый рынок.' }
    ],
    []
),

createRichWord('c1_detonate', 'Detonate', '/ˈdetəneɪt/', 'детэнейт', 'Взрывать(ся) / Детонировать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Взрываться или заставлять бомбу взорваться.',
    '- Бомба: "Detonate a bomb" (Взорвать бомбу)\n- Устройство: "Remote detonation" (Дистанционный подрыв)\n- Взрыв: "Fail to detonate" (Не взорваться)',
    [
        { en: 'The terrorists planned to detonate the device at noon.', ru: 'Террористы планировали взорвать устройство в полдень.' },
        { en: 'The bomb failed to detonate.', ru: 'Бомба не взорвалась.' },
        { en: 'Police performed a controlled detonation of the package.', ru: 'Полиция произвела контролируемый подрыв пакета.' },
        { en: 'The mine detonated when the truck drove over it.', ru: 'Мина сдетонировала, когда грузовик наехал на нее.' }
    ],
    []
),

createRichWord('c1_detract', 'Detract', '/dɪˈtrækt/', 'дитрэкт', 'Умалять / Отвлекать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Делать что-то менее ценным или привлекательным; (реже) отвлекать внимание.',
    '- Ценность: "Detract from the value" (Снижать ценность)\n- Впечатление: "Detract from enjoyment" (Портить впечатление)\n- Аргумент: "Nothing detracts from" (Ничто не умаляет)',
    [
        { en: 'The litter detracts from the beauty of the park.', ru: 'Мусор портит красоту парка.' },
        { en: 'Small errors do not detract from the quality of his work.', ru: 'Мелкие ошибки не умаляют качества его работы.' },
        { en: 'His bad behaviour detracted from the celebration.', ru: 'Его плохое поведение испортило праздник.' },
        { en: 'Don\'t let this minor setback detract from your success.', ru: 'Не позволяй этой мелкой неудаче умалить твой успех.' }
    ],
    []
),

createRichWord('c1_devour', 'Devour', '/dɪˈvaʊə(r)/', 'дивауэ', 'Пожирать / Поглощать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Есть очень быстро и жадно; (перен.) читать книгу запоем или уничтожать (огнем).',
    '- Еда: "Devour a meal" (Жадно съесть еду)\n- Книги: "Devour books" (Глотать книги)\n- Огонь: "Flames devoured" (Пламя поглотило)',
    [
        { en: 'The hungry lion devoured its prey.', ru: 'Голодный лев сожрал свою добычу.' },
        { en: 'She devoured the novel in one sitting.', ru: 'Она проглотила роман за один присест.' },
        { en: 'The fire quickly devoured the wooden hut.', ru: 'Огонь быстро уничтожил деревянную хижину.' },
        { en: 'He devoured every piece of news about the scandal.', ru: 'Он жадно поглощал каждую новость о скандале.' }
    ],
    []
),

createRichWord('c1_discontinue', 'Discontinue', '/ˌdɪskənˈtɪnjuː/', 'дискэнтинью', 'Прекращать / Снимать с производства', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Остановить производство или использование чего-либо.',
    '- Продукт: "Discontinued model" (Модель, снятая с производства)\n- Лечение: "Discontinue treatment" (Прекратить лечение)\n- Услуга: "Discontinue service" (Приостановить обслуживание)',
    [
        { en: 'The manufacturer decided to discontinue this car model.', ru: 'Производитель решил снять эту модель автомобиля с производства.' },
        { en: 'Please discontinue use if irritation occurs.', ru: 'Пожалуйста, прекратите использование при появлении раздражения.' },
        { en: 'The bus service was discontinued due to lack of passengers.', ru: 'Автобусное сообщение было прекращено из-за нехватки пассажиров.' },
        { en: 'I was forced to discontinue my subscription.', ru: 'Я был вынужден прекратить подписку.' }
    ],
    []
),

createRichWord('c1_disinfect', 'Disinfect', '/ˌdɪsɪnˈfekt/', 'дисинфект', 'Дезинфицировать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Очищать что-то с использованием химикатов для уничтожения бактерий.',
    '- Рана: "Disinfect a wound" (Дезинфицировать рану)\n- Дом: "Disinfect surfaces" (Дезинфицировать поверхности)\n- Средство: "Disinfectant" (Дезинфицирующее средство)',
    [
        { en: 'You should disinfect the cut to prevent infection.', ru: 'Тебе следует продезинфицировать порез, чтобы предотвратить заражение.' },
        { en: 'Clean and disinfect the kitchen worktops regularly.', ru: 'Регулярно мойте и дезинфицируйте кухонные столешницы.' },
        { en: 'The smell of disinfectant filled the hospital corridor.', ru: 'Запах дезинфицирующего средства наполнил больничный коридор.' },
        { en: 'Boiling water is a good way to disinfect jars.', ru: 'Кипящая вода — хороший способ стерилизовать банки.' }
    ],
    []
),

createRichWord('c1_dislocate', 'Dislocate', '/ˈdɪsləkeɪt/', 'дислэкейт', 'Вывихнуть / Сместить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сдвинуть кость из сустава; нарушить работу системы.',
    '- Травма: "Dislocate a shoulder" (Вывихнуть плечо)\n- Система: "Dislocate trade" (Нарушить торговлю)\n- Люди: "Dislocated people" (Перемещенные лица)',
    [
        { en: 'He fell and dislocated his shoulder during the match.', ru: 'Он упал и вывихнул плечо во время матча.' },
        { en: 'The war dislocated the country\'s economy.', ru: 'Война разрушила экономику страны.' },
        { en: 'The doctor put the dislocated finger back in place.', ru: 'Врач вправил вывихнутый палец.' },
        { en: 'Traffic was severely dislocated by the strike.', ru: 'Движение было серьезно нарушено забастовкой.' }
    ],
    []
),

createRichWord('c1_disorientate', 'Disorientate', '/dɪsˈɔːriənteɪt/', 'дисориентейт', 'Дезориентировать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Заставить кого-то потерять чувство направления или запутаться (в AmE часто disorient).',
    '- Место: "Become disorientated" (Потерять ориентацию)\n- Свет: "Bright lights disorientate" (Яркий свет дезориентирует)\n- Чувство: "Feel disorientated" (Чувствовать растерянность)',
    [
        { en: 'The darkness completely disorientated him.', ru: 'Темнота полностью дезориентировала его.' },
        { en: 'She felt dizzy and disorientated after the spin.', ru: 'Она чувствовала головокружение и потерю ориентации после вращения.' },
        { en: 'The complex layout of the building disorientates visitors.', ru: 'Сложная планировка здания сбивает посетителей с толку.' },
        { en: 'Jet lag can leave you feeling tired and disorientated.', ru: 'Джетлага может оставить чувство усталости и дезориентации.' }
    ],
    []
  ),
createRichWord('b2_budge', 'Budge', '/bʌdʒ/', 'бадж', 'Сдвинуть с места / Уступить', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Слегка подвинуться; изменить мнение (обычно в отрицании: won\'t budge).',
    '- Движение: "Won\'t budge" (Не двигается с места)\n- Мнение: "Refuse to budge" (Отказываться уступать)\n- Усилие: "Can\'t budge it" (Не могу сдвинуть это)',
    [
        { en: 'I pushed the door, but it wouldn\'t budge.', ru: 'Я толкал дверь, но она не поддавалась.' },
        { en: 'He holds firm views and won\'t budge on them.', ru: 'У него твердые взгляды, и он не отступит от них.' },
        { en: 'Can you help me? I can\'t budge this box.', ru: 'Можешь помочь? Я не могу сдвинуть эту коробку.' },
        { en: 'Neither side was willing to budge in the negotiations.', ru: 'Ни одна из сторон не желала уступать в переговорах.' }
    ],
    []
),

createRichWord('b2_bullshit', 'Bullshit', '/ˈbʊlʃɪt/', 'булшит', 'Чушь / Вранье (Груб.)', ProficiencyLevel.B2, 'noun', 'High', 'Slang',
    'Грубое слово, означающее полную неправду или глупость.',
    '- Разговор: "That is bullshit" (Это чушь собачья)\n- Реакция: "Call bullshit" (Заявить, что это ложь)\n- Глагол: "Don\'t bullshit me" (Не вешай мне лапшу на уши)',
    [
        { en: 'Don\'t listen to him, he\'s talking bullshit.', ru: 'Не слушай его, он несет чушь.' },
        { en: 'I know you are lying, so cut the bullshit.', ru: 'Я знаю, что ты врешь, так что кончай заливать.' },
        { en: 'It\'s absolute bullshit that I was late.', ru: 'Это полная брехня, что я опоздал.' },
        { en: 'She called bullshit on his excuses.', ru: 'Она заявила, что его оправдания — вранье.' }
    ],
    []
),

createRichWord('b2_buttock', 'Buttock', '/ˈbʌtək/', 'батэк', 'Ягодица', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Одна из двух мягких частей тела, на которых мы сидим.',
    '- Анатомия: "Left buttock" (Левая ягодица)\n- Медицина: "Injection in the buttock" (Укол в ягодицу)\n- Мышцы: "Buttock muscles" (Ягодичные мышцы)',
    [
        { en: 'The nurse gave him an injection in the buttock.', ru: 'Медсестра сделала ему укол в ягодицу.' },
        { en: 'He slipped and landed on his buttocks.', ru: 'Он поскользнулся и приземлился на ягодицы.' },
        { en: 'These exercises tone your thigh and buttock muscles.', ru: 'Эти упражнения тонизируют мышцы бедер и ягодиц.' },
        { en: 'Pain in the buttock can be caused by the sciatic nerve.', ru: 'Боль в ягодице может быть вызвана седалищным нервом.' }
    ],
    []
),

createRichWord('b2_canine', 'Canine', '/ˈkeɪnaɪn/', 'кейнайн', 'Собачий / Клык', ProficiencyLevel.B2, 'adj', 'Low', 'Formal',
    'Связанный с собаками; острый зуб (клык).',
    '- Животные: "Canine friend" (Четвероногий друг)\n- Зубы: "Canine tooth" (Клык)\n- Полиция: "Canine unit" (Кинологическое подразделение / K-9)',
    [
        { en: 'The police canine unit searched for the suspect.', ru: 'Кинологическое подразделение полиции искало подозреваемого.' },
        { en: 'Humans have four canine teeth.', ru: 'У людей четыре клыка.' },
        { en: 'The shelter cares for feline and canine pets.', ru: 'Приют заботится о кошках и собаках.' },
        { en: 'Canine distemper is a serious disease for dogs.', ru: 'Чума плотоядных — серьезное заболевание для собак.' }
    ],
    []
),

createRichWord('b2_carbonate', 'Carbonate', '/ˈkɑːbənreɪt/', 'кабэнэйт', 'Газировать / Карбонат', ProficiencyLevel.B2, 'verb', 'Low', 'Formal',
    'Насыщать жидкость углекислым газом (делать газировку); соль угольной кислоты.',
    '- Напитки: "Carbonated water" (Газированная вода)\n- Химия: "Calcium carbonate" (Карбонат кальция)\n- Процесс: "Carbonated drink" (Газированный напиток)',
    [
        { en: 'Soda is a carbonated beverage.', ru: 'Газировка — это карбонизированный напиток.' },
        { en: 'Carbonated water has bubbles in it.', ru: 'В газированной воде есть пузырьки.' },
        { en: 'Limestone is made of calcium carbonate.', ru: 'Известняк состоит из карбоната кальция.' },
        { en: 'Do you prefer still or carbonated drinks?', ru: 'Ты предпочитаешь негазированные или газированные напитки?' }
    ],
    []
),

createRichWord('b2_carnivore', 'Carnivore', '/ˈkɑːnɪvɔː(r)/', 'каниво', 'Плотоядное животное / Хищник', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Животное, которое ест мясо.',
    '- Животные: "Large carnivore" (Крупный хищник)\n- Диета: "Strict carnivore" (Строгий мясоед)\n- Противоположность: "Herbivore" (Травоядное)',
    [
        { en: 'Lions and tigers are carnivores.', ru: 'Львы и тигры — плотоядные животные.' },
        { en: 'A carnivore needs meat to survive.', ru: 'Хищнику нужно мясо, чтобы выжить.' },
        { en: 'Dinosaurs included both herbivores and carnivores.', ru: 'Среди динозавров были и травоядные, и хищники.' },
        { en: 'Plants that eat insects are called carnivores too.', ru: 'Растения, которые едят насекомых, тоже называют плотоядными.' }
    ],
    []
),

createRichWord('b2_casing', 'Casing', '/ˈkeɪsɪŋ/', 'кейсинг', 'Оболочка / Гильза', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Внешнее покрытие, защищающее что-то; металлическая трубка пули.',
    '- Оружие: "Shell casing" (Гильза снаряда)\n- Еда: "Sausage casing" (Оболочка колбасы)\n- Окно: "Window casing" (Оконная рама/наличник)',
    [
        { en: 'Police found bullet casings at the crime scene.', ru: 'Полиция нашла гильзы на месте преступления.' },
        { en: 'The sausage casing is made of natural intestine.', ru: 'Оболочка колбасы сделана из натуральной кишки.' },
        { en: 'The computer\'s plastic casing was cracked.', ru: 'Пластиковый корпус компьютера был треснут.' },
        { en: 'Wires are protected by a rubber casing.', ru: 'Провода защищены резиновой оболочкой.' }
    ],
    []
),

createRichWord('b2_catalyse', 'Catalyse', '/ˈkætəlaɪz/', 'кэтэлайз', 'Катализировать / Ускорять', ProficiencyLevel.B2, 'verb', 'Low', 'Formal',
    'Заставить химическую реакцию идти быстрее; вызвать событие или изменение.',
    '- Химия: "Catalyse a reaction" (Катализировать реакцию)\n- Событие: "Catalyse change" (Ускорить перемены)\n- Роль: "Act to catalyse" (Действовать как катализатор)',
    [
        { en: 'Enzymes catalyse digestion in the stomach.', ru: 'Ферменты катализируют пищеварение в желудке.' },
        { en: 'The protest catalysed political reform.', ru: 'Протест ускорил политические реформы.' },
        { en: 'His speech helped to catalyse the peace process.', ru: 'Его речь помогла ускорить мирный процесс.' },
        { en: 'Heat can catalyse certain chemical changes.', ru: 'Тепло может катализировать определенные химические изменения.' }
    ],
    []
),

createRichWord('b2_chateau', 'Chateau', '/ˈʃætəʊ/', 'шэтэу', 'Шато / Замок', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Большой французский загородный дом или замок; винодельческое хозяйство.',
    '- Франция: "French chateau" (Французское шато)\n- Вино: "Chateau wine" (Вино из шато)\n- Туризм: "Visit a chateau" (Посетить замок)',
    [
        { en: 'We visited a beautiful chateau in the Loire Valley.', ru: 'Мы посетили красивое шато в долине Луары.' },
        { en: 'This wine comes from a famous Chateau.', ru: 'Это вино происходит из известного Шато.' },
        { en: 'The chateau has huge gardens and a lake.', ru: 'У замка огромные сады и озеро.' },
        { en: 'They produce their own wine at the chateau.', ru: 'Они производят собственное вино в шато.' }
    ],
    []
),

createRichWord('b2_chloride', 'Chloride', '/ˈklɔːraɪd/', 'клорайд', 'Хлорид', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Химическое соединение хлора (например, соль).',
    '- Химия: "Sodium chloride" (Хлорид натрия / Соль)\n- Вещество: "Polyvinyl chloride" (ПВХ - пластик)\n- Анализ: "Chloride levels" (Уровень хлоридов)',
    [
        { en: 'Sodium chloride is the chemical name for table salt.', ru: 'Хлорид натрия — это химическое название поваренной соли.' },
        { en: 'PVC stands for polyvinyl chloride.', ru: 'ПВХ означает поливинилхлорид.' },
        { en: 'The doctor checked the chloride levels in his blood.', ru: 'Врач проверил уровень хлоридов в его крови.' },
        { en: 'Potassium chloride is used in fertilizers.', ru: 'Хлорид калия используется в удобрениях.' }
    ],
    []
),

createRichWord('b2_chute', 'Chute', '/ʃuːt/', 'шут', 'Желоб / Парашют (разг.)', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Наклонный канал для спуска вещей вниз; сленговое название парашюта.',
    '- Мусор: "Rubbish chute" (Мусоропровод)\n- Белье: "Laundry chute" (Бельепровод)\n- Парашют: "Pull the chute" (Раскрыть парашют)',
    [
        { en: 'Drop the bags down the laundry chute.', ru: 'Брось мешки в бельепровод.' },
        { en: 'The skydiver pulled his chute at the last second.', ru: 'Парашютист раскрыл парашют в последнюю секунду.' },
        { en: 'Water rushed down the steep chute.', ru: 'Вода устремилась вниз по крутому желобу.' },
        { en: 'Use the emergency chute to exit the plane.', ru: 'Используйте аварийный трап для выхода из самолета.' }
    ],
    []
),

createRichWord('b2_circa', 'Circa', '/ˈsɜːkə/', 'сёкэ', 'Около / Примерно (о датах)', ProficiencyLevel.B2, 'prep', 'Low', 'Formal',
    'Используется с датами для указания приблизительного времени (сокр. c. или ca.).',
    '- Даты: "Built circa 1900" (Построено около 1900 года)\n- История: "Born circa 1564" (Родился примерно в 1564)\n- Время: "Circa 5 PM" (Около 5 вечера)',
    [
        { en: 'The castle was built circa 1200 AD.', ru: 'Замок был построен примерно в 1200 году нашей эры.' },
        { en: 'He was born circa 1950.', ru: 'Он родился около 1950 года.' },
        { en: 'The manuscript dates from circa the 10th century.', ru: 'Рукопись датируется примерно X веком.' },
        { en: 'The population was circa 5 million at that time.', ru: 'Население в то время составляло около 5 миллионов.' }
    ],
    []
),

createRichWord('b2_clientele', 'Clientele', '/ˌkliːɒnˈtel/', 'клионтел', 'Клиентура / Постоянные клиенты', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Все клиенты или покупатели определенного магазина или бизнеса.',
    '- Бизнес: "Loyal clientele" (Верная клиентура)\n- Тип: "Exclusive clientele" (Эксклюзивная клиентура)\n- Магазин: "Upmarket clientele" (Богатые клиенты)',
    [
        { en: 'The shop attracts a very wealthy clientele.', ru: 'Магазин привлекает очень богатую клиентуру.' },
        { en: 'They are trying to expand their clientele base.', ru: 'Они пытаются расширить свою базу клиентов.' },
        { en: 'The bar has a mixed clientele of students and locals.', ru: 'В баре смешанная клиентура из студентов и местных жителей.' },
        { en: 'Our clientele expects high quality service.', ru: 'Наши клиенты ожидают высокого качества обслуживания.' }
    ],
    []
),

createRichWord('b2_cobalt', 'Cobalt', '/ˈkəʊbɒlt/', 'кэуболт', 'Кобальт / Кобальтовый (синий)', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Твердый серебристо-белый металл; глубокий синий цвет.',
    '- Цвет: "Cobalt blue" (Кобальтовый синий)\n- Металл: "Cobalt alloy" (Кобальтовый сплав)\n- Химия: "Contains cobalt" (Содержит кобальт)',
    [
        { en: 'She painted the wall a striking cobalt blue.', ru: 'Она покрасила стену в поразительный кобальтово-синий цвет.' },
        { en: 'Cobalt is used to make strong magnets.', ru: 'Кобальт используется для создания сильных магнитов.' },
        { en: 'The glass has a deep cobalt colour.', ru: 'У стекла глубокий кобальтовый цвет.' },
        { en: 'Cobalt is an essential mineral in small amounts.', ru: 'Кобальт является необходимым минералом в малых количествах.' }
    ],
    []
),

createRichWord('b2_coli', 'Coli', '/ˈkəʊlaɪ/', 'кэулай', 'Кишечная палочка', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Обычно используется в названии бактерии E. coli (Escherichia coli).',
    '- Бактерия: "E. coli" (Кишечная палочка)\n- Болезнь: "Coli infection" (Коли-инфекция)\n- Еда: "Contaminated with E. coli" (Заражено кишечной палочкой)',
    [
        { en: 'E. coli bacteria can cause food poisoning.', ru: 'Бактерии кишечной палочки могут вызвать пищевое отравление.' },
        { en: 'They tested the water for E. coli.', ru: 'Они проверили воду на наличие кишечной палочки.' },
        { en: 'An outbreak of E. coli was linked to the lettuce.', ru: 'Вспышка кишечной палочки была связана с салатом.' },
        { en: 'Most strains of E. coli are harmless.', ru: 'Большинство штаммов кишечной палочки безвредны.' }
    ],
    []
  ),
createRichWord('c1_brothel', 'Brothel', '/ˈbrɒθl/', 'бросл', 'Бордель', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Дом, где люди платят за секс.',
    '- Место: "Run a brothel" (Содержать бордель)\n- Закон: "Illegal brothel" (Нелегальный бордель)\n- История: "Visit a brothel" (Посетить бордель)',
    [
        { en: 'The police raided a brothel in the city centre.', ru: 'Полиция совершила налет на бордель в центре города.' },
        { en: 'It is illegal to operate a brothel in this state.', ru: 'В этом штате незаконно содержать бордель.' },
        { en: 'He was accused of visiting a brothel.', ru: 'Его обвинили в посещении борделя.' },
        { en: 'The old building used to be a brothel.', ru: 'Это старое здание раньше было борделем.' }
    ],
    []
),

createRichWord('c1_captivate', 'Captivate', '/ˈkæptɪveɪt/', 'кэптивейт', 'Пленять / Очаровывать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Привлекать и удерживать чье-то внимание своим шармом или красотой.',
    '- Аудитория: "Captivate the audience" (Пленить аудиторию)\n- Красота: "Captivated by beauty" (Очарованный красотой)\n- История: "Captivating story" (Захватывающая история)',
    [
        { en: 'She captivated him with her beautiful singing.', ru: 'Она пленила его своим прекрасным пением.' },
        { en: 'The audience was captivated by the magician\'s tricks.', ru: 'Зрители были очарованы трюками фокусника.' },
        { en: 'He told a captivating story about his travels.', ru: 'Он рассказал захватывающую историю о своих путешествиях.' },
        { en: 'Her smile captivates everyone she meets.', ru: 'Ее улыбка очаровывает всех, кого она встречает.' }
    ],
    []
),

createRichWord('c1_carcinogen', 'Carcinogen', '/kɑːˈsɪnədʒən/', 'касинэджен', 'Канцероген', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Вещество, вызывающее рак.',
    '- Здоровье: "Known carcinogen" (Известный канцероген)\n- Химия: "Contains carcinogens" (Содержит канцерогены)\n- Риск: "Potential carcinogen" (Потенциальный канцероген)',
    [
        { en: 'Tobacco smoke contains many carcinogens.', ru: 'Табачный дым содержит много канцерогенов.' },
        { en: 'Asbestos is a dangerous carcinogen.', ru: 'Асбест — опасный канцероген.' },
        { en: 'They tested the food dye for carcinogens.', ru: 'Они проверили пищевой краситель на наличие канцерогенов.' },
        { en: 'Avoid exposure to known carcinogens.', ru: 'Избегайте воздействия известных канцерогенов.' }
    ],
    []
),

createRichWord('c1_caucus', 'Caucus', '/ˈkɔːkəs/', 'кокэс', 'Партийное собрание / Кокус', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Встреча членов политической партии для выбора кандидатов или обсуждения политики (в основном США).',
    '- Политика: "Iowa caucus" (Кокус в Айове)\n- Партия: "Party caucus" (Партийное совещание)\n- Группа: "Black Caucus" (Кокус чернокожих конгрессменов)',
    [
        { en: 'The Iowa caucus is the first event of the election season.', ru: 'Кокус в Айове — первое событие избирательного сезона.' },
        { en: 'Members of the caucus met to discuss the new bill.', ru: 'Члены фракции встретились, чтобы обсудить новый законопроект.' },
        { en: 'He was elected chairman of the caucus.', ru: 'Его избрали председателем партийного собрания.' },
        { en: 'They held a private caucus to decide on a strategy.', ru: 'Они провели закрытое совещание, чтобы определиться со стратегией.' }
    ],
    []
),

createRichWord('c1_celestial', 'Celestial', '/səˈlestiəl/', 'сэлестиэл', 'Небесный / Астрономический', ProficiencyLevel.C1, 'adj', 'Low', 'Literary',
    'Относящийся к небу или космосу; божественно прекрасный.',
    '- Космос: "Celestial bodies" (Небесные тела - звезды/планеты)\n- Небо: "Celestial sphere" (Небесная сфера)\n- Красота: "Celestial beauty" (Небесная красота)',
    [
        { en: 'Stars and planets are celestial bodies.', ru: 'Звезды и планеты — это небесные тела.' },
        { en: 'The choir sang with celestial voices.', ru: 'Хор пел небесными голосами.' },
        { en: 'Sailors used celestial navigation to cross the ocean.', ru: 'Моряки использовали астронавигацию, чтобы пересечь океан.' },
        { en: 'She had a celestial glow about her.', ru: 'От нее исходило небесное сияние.' }
    ],
    []
),

createRichWord('c1_celibacy', 'Celibacy', '/ˈselɪbəsi/', 'селибэси', 'Целибат / Воздержание', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Состояние, когда человек не вступает в брак и не имеет сексуальных отношений (обычно по религиозным причинам).',
    '- Религия: "Vow of celibacy" (Обет безбрачия)\n- Священник: "Priestly celibacy" (Священнический целибат)\n- Жизнь: "Life of celibacy" (Жизнь в воздержании)',
    [
        { en: 'Catholic priests take a vow of celibacy.', ru: 'Католические священники дают обет безбрачия.' },
        { en: 'He chose a life of celibacy and prayer.', ru: 'Он выбрал жизнь в воздержании и молитве.' },
        { en: 'Celibacy is a requirement for monks.', ru: 'Целибат является требованием для монахов.' },
        { en: 'They discussed the pros and cons of celibacy.', ru: 'Они обсудили плюсы и минусы воздержания.' }
    ],
    []
),

createRichWord('c1_chassis', 'Chassis', '/ˈʃæsi/', 'шэси', 'Шасси / Ходовая часть', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Рама автомобиля или другого транспортного средства, на которую крепятся остальные части.',
    '- Авто: "Car chassis" (Шасси автомобиля)\n- Самолет: "Landing chassis" (Посадочное шасси)\n- Структура: "Steel chassis" (Стальная рама)',
    [
        { en: 'The mechanic inspected the chassis for rust.', ru: 'Механик осмотрел шасси на наличие ржавчины.' },
        { en: 'The engine is mounted on the chassis.', ru: 'Двигатель установлен на раме.' },
        { en: 'Formula 1 cars have a carbon fibre chassis.', ru: 'У болидов Формулы 1 карбоновое шасси.' },
        { en: 'A bent chassis can be dangerous.', ru: 'Погнутое шасси может быть опасным.' }
    ],
    []
),

createRichWord('c1_circumvent', 'Circumvent', '/ˌsɜːkəmˈvent/', 'сёкэмвент', 'Обойти / Перехитрить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Найти способ обойти правило или проблему (часто хитростью).',
    '- Закон: "Circumvent the law" (Обойти закон)\n- Проблема: "Circumvent the problem" (Обойти проблему)\n- Система: "Circumvent security" (Обойти систему безопасности)',
    [
        { en: 'They found a way to circumvent the tax laws.', ru: 'Они нашли способ обойти налоговые законы.' },
        { en: 'Hackers tried to circumvent the firewall.', ru: 'Хакеры пытались обойти брандмауэр.' },
        { en: 'We need to circumvent these obstacles.', ru: 'Нам нужно обойти эти препятствия.' },
        { en: 'He circumvented the rules to get what he wanted.', ru: 'Он обошел правила, чтобы получить желаемое.' }
    ],
    []
),

createRichWord('c1_citadel', 'Citadel', '/ˈsɪtədəl/', 'ситэдл', 'Цитадель / Крепость', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Крепость, защищающая город; оплот чего-либо.',
    '- Война: "Ancient citadel" (Древняя цитадель)\n- Метафора: "Citadel of freedom" (Оплот свободы)\n- Защита: "Storm the citadel" (Штурмовать крепость)',
    [
        { en: 'The citadel overlooks the old city.', ru: 'Цитадель возвышается над старым городом.' },
        { en: 'Soldiers retreated to the safety of the citadel.', ru: 'Солдаты отступили под защиту цитадели.' },
        { en: 'The university is seen as a citadel of learning.', ru: 'Университет рассматривается как цитадель знаний.' },
        { en: 'Enemy forces surrounded the citadel.', ru: 'Вражеские силы окружили крепость.' }
    ],
    []
),

createRichWord('c1_codify', 'Codify', '/ˈkəʊdɪfaɪ/', 'кэудифай', 'Кодифицировать / Систематизировать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Собрать законы или правила в единую систему.',
    '- Закон: "Codify laws" (Кодифицировать законы)\n- Правила: "Codify practice" (Систематизировать практику)\n- Система: "Codified constitution" (Кодифицированная конституция)',
    [
        { en: 'Napoleon codified the French laws.', ru: 'Наполеон кодифицировал французские законы.' },
        { en: 'The UK does not have a codified constitution.', ru: 'В Великобритании нет кодифицированной конституции.' },
        { en: 'We need to codify these unwritten rules.', ru: 'Нам нужно систематизировать эти неписаные правила.' },
        { en: 'The agreement codified existing practices.', ru: 'Соглашение закрепило (кодифицировало) существующую практику.' }
    ],
    []
),

createRichWord('c1_cognition', 'Cognition', '/kɒɡˈnɪʃn/', 'когнишн', 'Познание / Когнитивная способность', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Процесс мышления, понимания и обучения.',
    '- Мозг: "Human cognition" (Человеческое познание)\n- Наука: "Cognition skills" (Когнитивные навыки)\n- Процесс: "Processes of cognition" (Процессы познания)',
    [
        { en: 'Age can affect speed of cognition.', ru: 'Возраст может влиять на скорость мышления.' },
        { en: 'He studies child cognition and development.', ru: 'Он изучает детское познание и развитие.' },
        { en: 'Drugs can impair cognition and memory.', ru: 'Наркотики могут ухудшить когнитивные способности и память.' },
        { en: 'Language plays a key role in cognition.', ru: 'Язык играет ключевую роль в познании.' }
    ],
    []
),

createRichWord('c1_clandestine', 'Clandestine', '/klænˈdestɪn/', 'клэндэстин', 'Тайный / Подпольный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Сделанный секретно, часто потому что это незаконно.',
    '- Секрет: "Clandestine meeting" (Тайная встреча)\n- Отношения: "Clandestine affair" (Тайный роман)\n- Операция: "Clandestine operation" (Секретная операция)',
    [
        { en: 'They held a clandestine meeting in the park.', ru: 'Они провели тайную встречу в парке.' },
        { en: 'The spies engaged in clandestine activities.', ru: 'Шпионы занимались подпольной деятельностью.' },
        { en: 'She had a clandestine relationship with her boss.', ru: 'У нее был тайный роман с начальником.' },
        { en: 'The group operated a clandestine radio station.', ru: 'Группа управляла подпольной радиостанцией.' }
    ],
    []
  ),
createRichWord('c1_collateral', 'Collateral', '/kəˈlætərəl/', 'кэлэтэрэл', 'Залог / Побочный', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Имущество, которое вы обещаете отдать банку, если не сможете вернуть кредит; побочный или второстепенный.',
    '- Финансы: "Put up as collateral" (Оставить в залог)\n- Война: "Collateral damage" (Сопутствующий ущерб/жертвы)\n- Семья: "Collateral relative" (Боковой родственник)',
    [
        { en: 'He used his house as collateral for the business loan.', ru: 'Он использовал свой дом в качестве залога для бизнес-кредита.' },
        { en: 'The bombing resulted in significant collateral damage.', ru: 'Бомбардировка привела к значительному сопутствующему ущербу.' },
        { en: 'The bank demanded collateral before approving the mortgage.', ru: 'Банк потребовал залог перед одобрением ипотеки.' },
        { en: 'Collateral arteries provide an alternative path for blood flow.', ru: 'Коллатеральные артерии обеспечивают альтернативный путь для кровотока.' }
    ],
    []
),

createRichWord('c1_commons', 'Commons', '/ˈkɒmənz/', 'комэнз', 'Палата общин / Общинная земля', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Нижняя палата парламента Великобритании (House of Commons); земля, принадлежащая всему сообществу.',
    '- Политика: "The House of Commons" (Палата общин)\n- Земля: "Wimbledon Common" (Уимблдонская пустошь/общинная земля)\n- Студенты: "Student commons" (Студенческая общая зона)',
    [
        { en: 'The bill was debated in the House of Commons yesterday.', ru: 'Законопроект обсуждался вчера в Палате общин.' },
        { en: 'Villagers used to graze their cattle on the commons.', ru: 'Деревенские жители раньше пасли свой скот на общинных землях.' },
        { en: 'MPs voted in the Commons late last night.', ru: 'Члены парламента голосовали в Палате общин поздно вечером.' },
        { en: 'Tragedy of the commons explains resource depletion.', ru: 'Трагедия общин объясняет истощение ресурсов.' }
    ],
    []
),

createRichWord('c1_commotion', 'Commotion', '/kəˈməʊʃn/', 'кэмэушн', 'Суматоха / Переполох', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Внезапный шум и неразбериха; беспорядки.',
    '- Шум: "Cause a commotion" (Вызвать переполох)\n- Ситуация: "What is the commotion?" (Что за шум?)\n- Улица: "Street commotion" (Уличная суматоха)',
    [
        { en: 'There was a huge commotion outside the stadium after the game.', ru: 'После игры у стадиона была огромная суматоха.' },
        { en: 'I heard a commotion downstairs and went to look.', ru: 'Я услышал шум внизу и пошел посмотреть.' },
        { en: 'His arrival caused quite a commotion in the quiet village.', ru: 'Его приезд вызвал настоящий переполох в тихой деревне.' },
        { en: 'Stop making such a commotion and go to sleep.', ru: 'Перестаньте устраивать такой шум и идите спать.' }
    ],
    []
),

createRichWord('c1_concise', 'Concise', '/kənˈsaɪs/', 'кэнсайс', 'Краткий / Лаконичный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Дающий много информации в нескольких словах; краткий и ясный.',
    '- Текст: "Concise summary" (Краткое резюме)\n- Стиль: "Clear and concise" (Ясный и лаконичный)\n- Речь: "Keep it concise" (Говори кратко)',
    [
        { en: 'Please give a concise explanation of the problem.', ru: 'Пожалуйста, дайте краткое объяснение проблемы.' },
        { en: 'Her report was clear, concise, and easy to read.', ru: 'Ее отчет был ясным, лаконичным и легким для чтения.' },
        { en: 'Make your answers concise to save time.', ru: 'Делайте свои ответы краткими, чтобы сэкономить время.' },
        { en: 'The dictionary provides concise definitions of words.', ru: 'Словарь дает лаконичные определения слов.' }
    ],
    []
),

createRichWord('c1_consequential', 'Consequential', '/ˌkɒnsɪˈkwenʃl/', 'консиквеншл', 'Важный / Следственный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Имеющий важные последствия; являющийся результатом чего-либо.',
    '- Важность: "Consequential decision" (Важное решение)\n- Логика: "Consequential loss" (Косвенный убыток)\n- Событие: "Highly consequential" (Чрезвычайно важный)',
    [
        { en: 'The election results will be consequential for the economy.', ru: 'Результаты выборов будут иметь важные последствия для экономики.' },
        { en: 'He suffered a consequential loss of earnings due to the accident.', ru: 'Он понес косвенную потерю заработка из-за аварии.' },
        { en: 'This is a highly consequential moment in our history.', ru: 'Это чрезвычайно важный момент в нашей истории.' },
        { en: 'The consequential damages were not covered by insurance.', ru: 'Косвенные убытки не покрывались страховкой.' }
    ],
    []
),

createRichWord('c1_consonant', 'Consonant', '/ˈkɒnsənənt/', 'консэнэнт', 'Согласный (звук/буква) / Созвучный', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Звук речи, произносимый с перекрытием потока воздуха; (adj) гармонирующий или согласующийся.',
    '- Язык: "Consonant cluster" (Стечение согласных)\n- Буква: "Vowels and consonants" (Гласные и согласные)\n- Гармония: "Consonant with" (Созвучный с)',
    [
        { en: 'English has many difficult consonant clusters.', ru: 'В английском много сложных стечений согласных.' },
        { en: 'The letter "B" is a consonant.', ru: 'Буква "B" — согласная.' },
        { en: 'His actions were consonant with his beliefs.', ru: 'Его действия согласовывались с его убеждениями.' },
        { en: 'Consonant sounds are produced by blocking air.', ru: 'Согласные звуки производятся путем блокирования воздуха.' }
    ],
    []
),

createRichWord('c1_coronation', 'Coronation', '/ˌkɒrəˈneɪʃn/', 'корэнейшн', 'Коронация', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Церемония коронации короля или королевы.',
    '- Монархия: "Coronation ceremony" (Церемония коронации)\n- Событие: "Queen\'s coronation" (Коронация королевы)\n- Дата: "Coronation day" (День коронации)',
    [
        { en: 'Millions watched the coronation on television.', ru: 'Миллионы смотрели коронацию по телевизору.' },
        { en: 'The coronation took place in Westminster Abbey.', ru: 'Коронация состоялась в Вестминстерском аббатстве.' },
        { en: 'Street parties were held to celebrate the coronation.', ru: 'Уличные вечеринки проводились в честь коронации.' },
        { en: 'It was the first coronation in seventy years.', ru: 'Это была первая коронация за семьдесят лет.' }
    ],
    []
),

createRichWord('c1_counteract', 'Counteract', '/ˌkaʊntərˈækt/', 'каунтэрэкт', 'Противодействовать / Нейтрализовать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сделать что-то, чтобы уменьшить или предотвратить эффект чего-либо плохого.',
    '- Действие: "Counteract the effects" (Нейтрализовать последствия)\n- Медицина: "Counteract poison" (Нейтрализовать яд)\n- Экономика: "Counteract inflation" (Противодействовать инфляции)',
    [
        { en: 'We need to counteract the negative publicity.', ru: 'Нам нужно противодействовать негативной огласке.' },
        { en: 'This medicine helps to counteract the pain.', ru: 'Это лекарство помогает нейтрализовать боль.' },
        { en: 'They planted trees to counteract carbon emissions.', ru: 'Они посадили деревья, чтобы компенсировать выбросы углерода.' },
        { en: 'Exercise can counteract the effects of stress.', ru: 'Физические упражнения могут нейтрализовать последствия стресса.' }
    ],
    []
),

createRichWord('c1_counterfeit', 'Counterfeit', '/ˈkaʊntəfɪt/', 'каунтэфит', 'Поддельный / Фальшивый', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Сделанный так, чтобы выглядеть как оригинал, с целью обмана (о деньгах или товарах).',
    '- Деньги: "Counterfeit money" (Фальшивые деньги)\n- Товары: "Counterfeit goods" (Контрафактные товары)\n- Документы: "Counterfeit passport" (Поддельный паспорт)',
    [
        { en: 'It is a crime to pass counterfeit currency.', ru: 'Сбыт фальшивой валюты является преступлением.' },
        { en: 'Police seized a shipment of counterfeit watches.', ru: 'Полиция изъяла партию поддельных часов.' },
        { en: 'The signature on the cheque was counterfeit.', ru: 'Подпись на чеке была поддельной.' },
        { en: 'Counterfeit drugs pose a serious health risk.', ru: 'Фальшивые лекарства представляют серьезную угрозу для здоровья.' }
    ],
    [
        { meaning: "To forge (verb)", translation: "Подделывать", example: { en: "They counterfeited the tickets.", ru: "Они подделали билеты." } }
    ]
),

createRichWord('c1_countess', 'Countess', '/ˈkaʊntes/', 'каунтэс', 'Графиня', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Женщина, имеющая титул графа или эрла, или жена графа.',
    '- Титул: "The Countess of Wessex" (Графиня Уэссекская)\n- Обращение: "My Lady" (Миледи - при обращении)\n- Общество: "Noble countess" (Знатная графиня)',
    [
        { en: 'The Countess hosted a charity ball at her estate.', ru: 'Графиня устроила благотворительный бал в своем поместье.' },
        { en: 'She became a countess after marrying the Earl.', ru: 'Она стала графиней, выйдя замуж за графа.' },
        { en: 'The portrait shows the Countess in her youth.', ru: 'Портрет изображает графиню в юности.' },
        { en: 'The Countess is a patron of the arts.', ru: 'Графиня является покровительницей искусств.' }
    ],
    []
),

createRichWord('c1_criminology', 'Criminology', '/ˌkrɪmɪˈnɒlədʒi/', 'криминолэджи', 'Криминология', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Научное изучение преступности и преступников.',
    '- Наука: "Study criminology" (Изучать криминологию)\n- Эксперт: "Forensic criminology" (Судебная криминология)\n- Университет: "Degree in criminology" (Степень по криминологии)',
    [
        { en: 'She is studying criminology at university.', ru: 'Она изучает криминологию в университете.' },
        { en: 'Criminology helps us understand why people commit crimes.', ru: 'Криминология помогает нам понять, почему люди совершают преступления.' },
        { en: 'Modern criminology focuses on rehabilitation.', ru: 'Современная криминология фокусируется на реабилитации.' },
        { en: 'The professor of criminology wrote a book on serial killers.', ru: 'Профессор криминологии написал книгу о серийных убийцах.' }
    ],
    []
),

createRichWord('c1_cringe', 'Cringe', '/krɪndʒ/', 'криндж', 'Съеживаться / Испытывать неловкость', ProficiencyLevel.C1, 'verb', 'High', 'Informal',
    'Отпрянуть от страха; (совр.) испытывать сильное чувство стыда или неловкости за кого-то (кринжевать).',
    '- Страх: "Cringe in fear" (Съежиться от страха)\n- Стыд: "Cringe at the memory" (Съеживаться при воспоминании)\n- Сленг: "That is cringe" (Это кринж/позор)',
    [
        { en: 'I cringe every time I think of that embarrassing moment.', ru: 'Я съеживаюсь каждый раз, когда думаю о том неловком моменте.' },
        { en: 'The dog cringed when its owner raised his hand.', ru: 'Собака сжалась, когда хозяин поднял руку.' },
        { en: 'His attempt at flirting made everyone cringe.', ru: 'Его попытка флирта заставила всех испытать испанский стыд.' },
        { en: 'It makes me cringe to hear my own voice recorded.', ru: 'Меня коробит, когда я слышу свой голос в записи.' }
    ],
    [
        { meaning: "Embarrassing (Adjective - slang)", translation: "Кринжовый / Позорный", example: { en: "That video is so cringe.", ru: "Это видео такое кринжовое." } }
    ]
),

createRichWord('c1_cubism', 'Cubism', '/ˈkjuːbɪzəm/', 'кьюбизэм', 'Кубизм', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Стиль искусства (Пикассо), где объекты изображаются в виде геометрических фигур.',
    '- Искусство: "Abstract Cubism" (Абстрактный кубизм)\n- Художник: "Cubism movement" (Движение кубизма)\n- Стиль: "Influenced by Cubism" (Под влиянием кубизма)',
    [
        { en: 'Picasso is the most famous figure of Cubism.', ru: 'Пикассо — самая известная фигура кубизма.' },
        { en: 'Cubism changed the way we look at art.', ru: 'Кубизм изменил наш взгляд на искусство.' },
        { en: 'The painting is a classic example of analytic Cubism.', ru: 'Эта картина — классический пример аналитического кубизма.' },
        { en: 'Cubism breaks objects apart and reassembles them.', ru: 'Кубизм разбивает объекты на части и собирает их заново.' }
    ],
    []
),

createRichWord('c1_cumbersome', 'Cumbersome', '/ˈkʌmbəsəm/', 'камбэсэм', 'Громоздкий / Обременительный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Тяжелый и неудобный для ношения; сложный и медленный (о процессе).',
    '- Предмет: "Cumbersome equipment" (Громоздкое оборудование)\n- Процесс: "Cumbersome bureaucracy" (Тяжеловесная бюрократия)\n- Одежда: "Cumbersome suit" (Неудобный костюм)',
    [
        { en: 'The knight wore a suit of cumbersome armour.', ru: 'Рыцарь носил громоздкие доспехи.' },
        { en: 'The application process is cumbersome and time-consuming.', ru: 'Процесс подачи заявки обременителен и отнимает много времени.' },
        { en: 'He dragged the cumbersome box up the stairs.', ru: 'Он затащил громоздкую коробку вверх по лестнице.' },
        { en: 'Old cameras were large and cumbersome.', ru: 'Старые камеры были большими и неудобными.' }
    ],
    []
),

createRichWord('c1_darn', 'Darn', '/dɑːn/', 'дан', 'Штопать / Черт возьми', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Чинить дырку в одежде (штопать); мягкое ругательство (вместо "damn").',
    '- Одежда: "Darn socks" (Штопать носки)\n- Восклицание: "Darn it!" (Черт побери!)\n- Усилитель: "Darn good" (Чертовски хорошо)',
    [
        { en: 'Grandma used to darn our woollen socks.', ru: 'Бабушка раньше штопала наши шерстяные носки.' },
        { en: 'I can\'t find the darn keys anywhere!', ru: 'Я нигде не могу найти эти чертовы ключи!' },
        { en: 'You did a darn good job today.', ru: 'Ты проделал чертовски хорошую работу сегодня.' },
        { en: 'This sweater needs darning at the elbow.', ru: 'Этот свитер нужно заштопать на локте.' }
    ],
    []
),

createRichWord('c1_deadlock', 'Deadlock', '/ˈdedlɒk/', 'дэдлок', 'Тупик / Мертвая точка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Ситуация, когда прогресс невозможен, так как стороны не могут договориться.',
    '- Переговоры: "Reach a deadlock" (Зайти в тупик)\n- Решение: "Break the deadlock" (Сдвинуться с мертвой точки)\n- Спорт: "End in deadlock" (Закончиться ничьей/тупиком)',
    [
        { en: 'The peace talks have reached a deadlock.', ru: 'Мирные переговоры зашли в тупик.' },
        { en: 'We need a mediator to break the deadlock.', ru: 'Нам нужен посредник, чтобы выйти из тупика.' },
        { en: 'The match ended in a 1-1 deadlock.', ru: 'Матч закончился ничьей 1:1.' },
        { en: 'Neither side would compromise, causing a deadlock.', ru: 'Ни одна из сторон не шла на компромисс, что вызвало тупиковую ситуацию.' }
    ],
    [
        { meaning: "Door lock", translation: "Засов / Ригель", example: { en: "He secured the door with a deadlock.", ru: "Он запер дверь на засов." } }
    ]
),

createRichWord('c1_deceit', 'Deceit', '/dɪˈsiːt/', 'дисит', 'Обман / Лживость', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Поведение, направленное на то, чтобы скрыть правду; акт лжи.',
    '- Поведение: "Web of deceit" (Паутина лжи)\n- Характер: "Full of deceit" (Лживый)\n- Закон: "Obtain by deceit" (Получить обманным путем)',
    [
        { en: 'He was accused of lies and deceit.', ru: 'Его обвинили во лжи и обмане.' },
        { en: 'The relationship was built on a foundation of deceit.', ru: 'Отношения были построены на фундаменте лжи.' },
        { en: 'She is incapable of deceit.', ru: 'Она неспособна на обман.' },
        { en: 'Their deceit was finally uncovered by the press.', ru: 'Их обман был наконец раскрыт прессой.' }
    ],
    []
),

createRichWord('c1_deforest', 'Deforest', '/diːˈfɒrɪst/', 'дифорист', 'Вырубать лес', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Уничтожать леса на большой территории (обычно используется сущ. deforestation).',
    '- Экология: "Deforested area" (Обезлесенная территория)\n- Процесс: "Rate of deforesting" (Скорость вырубки)\n- Результат: "Completely deforested" (Полностью вырублен)',
    [
        { en: 'Large areas of the Amazon have been deforested.', ru: 'Большие территории Амазонии были вырублены.' },
        { en: 'Humans continue to deforest the planet at an alarming rate.', ru: 'Люди продолжают вырубать леса планеты с пугающей скоростью.' },
        { en: 'The hills were deforested for farming.', ru: 'Холмы были обезлесены ради земледелия.' },
        { en: 'Deforesting leads to soil erosion.', ru: 'Вырубка лесов ведет к эрозии почвы.' }
    ],
    []
),

createRichWord('c1_defuse', 'Defuse', '/ˌdiːˈfjuːz/', 'дифьюз', 'Обезвредить / Разрядить', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Предотвратить взрыв бомбы; сделать ситуацию менее напряженной.',
    '- Бомба: "Defuse a bomb" (Обезвредить бомбу)\n- Конфликт: "Defuse tension" (Разрядить напряжение)\n- Спор: "Defuse the situation" (Уладить ситуацию)',
    [
        { en: 'Experts were called to defuse the bomb.', ru: 'Экспертов вызвали, чтобы обезвредить бомбу.' },
        { en: 'He made a joke to defuse the tension in the room.', ru: 'Он пошутил, чтобы разрядить напряжение в комнате.' },
        { en: 'Diplomats are trying to defuse the crisis.', ru: 'Дипломаты пытаются урегулировать кризис.' },
        { en: 'Her calm voice helped defuse his anger.', ru: 'Ее спокойный голос помог унять его гнев.' }
    ],
    []
),

createRichWord('c1_dehydrate', 'Dehydrate', '/ˌdiːhaɪˈdreɪt/', 'дихайдрейт', 'Обезвоживать / Сушить', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Терять воду (о теле); удалять воду из еды для хранения.',
    '- Здоровье: "Become dehydrated" (Обезводиться)\n- Еда: "Dehydrated food" (Сублимированная еда)\n- Процесс: "Dehydrate vegetables" (Сушить овощи)',
    [
        { en: 'You will dehydrate quickly in this heat if you don\'t drink.', ru: 'Ты быстро обезводишься на этой жаре, если не будешь пить.' },
        { en: 'Dehydrated meals are lightweight for camping.', ru: 'Сублимированные блюда легкие для походов.' },
        { en: 'Salt dehydrates the meat and preserves it.', ru: 'Соль обезвоживает мясо и консервирует его.' },
        { en: 'The runner collapsed because he was severely dehydrated.', ru: 'Бегун упал, потому что был сильно обезвожен.' }
    ],
    []
),

createRichWord('c1_demoralise', 'Demoralise', '/dɪˈmɒrəlaɪz/', 'диморэлайз', 'Деморализовать / Лишать духа', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставить кого-то потерять уверенность или надежду.',
    '- Армия: "Demoralise the troops" (Деморализовать войска)\n- Работа: "Demoralising effect" (Деморализующий эффект)\n- Команда: "Feel demoralised" (Чувствовать упадок духа)',
    [
        { en: 'Constant criticism demoralised the staff.', ru: 'Постоянная критика деморализовала персонал.' },
        { en: 'The team was demoralised by the early goal.', ru: 'Команда пала духом из-за раннего гола.' },
        { en: 'Don\'t let one failure demoralise you.', ru: 'Не позволяй одной неудаче сломить твой дух.' },
        { en: 'It is demoralising to work hard without recognition.', ru: 'Деморализует, когда работаешь усердно без признания.' }
    ],
    []
),

createRichWord('c1_derby', 'Derby', '/ˈdɑːbi/', 'даби', 'Дерби / Спортивное состязание', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Важное спортивное соревнование, часто между местными командами; тип скачек.',
    '- Футбол: "Local derby" (Местное дерби)\n- Скачки: "Kentucky Derby" (Кентукки Дерби)\n- Шляпа: "Derby hat" (Котелок - амер.)',
    [
        { en: 'The Manchester derby is always an exciting match.', ru: 'Манчестерское дерби — это всегда захватывающий матч.' },
        { en: 'He bet money on a horse in the Derby.', ru: 'Он поставил деньги на лошадь на скачках.' },
        { en: 'Crowds gathered for the annual soapbox derby.', ru: 'Толпы собрались на ежегодные гонки на мыльницах.' },
        { en: 'The local derby determines who rules the city.', ru: 'Местное дерби определяет, кто правит городом.' }
    ],
    []
  ),
createRichWord('b2_bullshit', 'Bullshit', '/ˈbʊlʃɪt/', 'булшит', 'Чушь / Вранье', ProficiencyLevel.B2, 'noun', 'High', 'Slang',
    'Грубое слово, означающее неправду, глупость или что-то нечестное (осторожно, нецензурно!).',
    '- Реакция: "That\'s bullshit!" (Это чушь собачья!)\n- Обман: "Cut the bullshit" (Хватит врать/нести чушь)\n- Описание: "Total bullshit" (Полный бред)',
    [
        { en: 'Don\'t listen to him, he talks a lot of bullshit.', ru: 'Не слушай его, он несет много чуши.' },
        { en: 'I know you are lying, so cut the bullshit.', ru: 'Я знаю, что ты врешь, так что кончай заливать.' },
        { en: 'The explanation they gave us was absolute bullshit.', ru: 'Объяснение, которое они нам дали, было полной брехней.' },
        { en: 'He called bullshit on their claims immediately.', ru: 'Он сразу заявил, что их утверждения — вранье.' }
    ],
    [
        { meaning: "To lie to someone (verb)", translation: "Вешать лапшу на уши", example: { en: "Don't bullshit a bullshitter.", ru: "Не вешай лапшу тому, кто сам умеет врать." } }
    ]
),

createRichWord('b2_caramel', 'Caramel', '/ˈkærəmel/', 'кэрэмел', 'Карамель', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Сладкая еда, приготовленная из жженого сахара, используемая для вкуса и цвета; светло-коричневый цвет.',
    '- Еда: "Salted caramel" (Соленая карамель)\n- Десерт: "Caramel sauce" (Карамельный соус)\n- Цвет: "Caramel colour" (Карамельный цвет)',
    [
        { en: 'I love ice cream with hot caramel sauce.', ru: 'Я обожаю мороженое с горячим карамельным соусом.' },
        { en: 'To make caramel, you simply melt sugar.', ru: 'Чтобы сделать карамель, нужно просто расплавить сахар.' },
        { en: 'She has beautiful caramel-coloured skin.', ru: 'У нее красивая кожа карамельного цвета.' },
        { en: 'Salted caramel has become very popular recently.', ru: 'Соленая карамель стала очень популярной в последнее время.' }
    ],
    []
),

createRichWord('b2_catwalk', 'Catwalk', '/ˈkætwɔːk/', 'кэтвок', 'Подиум', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Длинная узкая сцена, по которой модели ходят на показе мод; узкий мостик на высоте.',
    '- Мода: "Walk the catwalk" (Ходить по подиуму)\n- Шоу: "Fashion catwalk" (Модный подиум)\n- Стройка: "Steel catwalk" (Стальной мостик)',
    [
        { en: 'The models walked confidently down the catwalk.', ru: 'Модели уверенно шли по подиуму.' },
        { en: 'She dreams of becoming a catwalk model in Paris.', ru: 'Она мечтает стать подиумной моделью в Париже.' },
        { en: 'Designers present their new collections on the catwalk.', ru: 'Дизайнеры представляют свои новые коллекции на подиуме.' },
        { en: 'Workers used the metal catwalk to cross the factory floor.', ru: 'Рабочие использовали металлический мостик, чтобы пересечь цех.' }
    ],
    []
),

createRichWord('b2_cheeky', 'Cheeky', '/ˈtʃiːki/', 'чики', 'Нахальный / Дерзкий', ProficiencyLevel.B2, 'adj', 'High', 'Informal',
    'Слегка грубый или проявляющий неуважение, но часто в забавной или милой манере (особенно о детях).',
    '- Поведение: "Cheeky grin" (Нахальная ухмылка)\n- Речь: "Cheeky comment" (Дерзкий комментарий)\n- Сленг: "Cheeky pint" (Незапланированная пинта пива)',
    [
        { en: 'The cheeky boy stuck his tongue out at the teacher.', ru: 'Нахальный мальчишка показал язык учителю.' },
        { en: 'Don\'t be cheeky to your grandmother!', ru: 'Не дерзи своей бабушке!' },
        { en: 'She gave him a cheeky smile before running away.', ru: 'Она одарила его дерзкой улыбкой и убежала.' },
        { en: 'We went for a cheeky drink after work.', ru: 'Мы пошли пропустить по стаканчику после работы (спонтанно).' }
    ],
    []
),

createRichWord('b2_chirp', 'Chirp', '/tʃɜːp/', 'чёп', 'Чирикать / Щебетать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Издавать короткий высокий звук (о птицах или насекомых); говорить весело и оживленно.',
    '- Природа: "Birds chirp" (Птицы щебечут)\n- Звук: "Crickets chirp" (Сверчки стрекочут)\n- Речь: "Chirp happily" (Весело щебетать/говорить)',
    [
        { en: 'The birds started to chirp early in the morning.', ru: 'Птицы начали щебетать рано утром.' },
        { en: 'I could hear crickets chirping in the grass.', ru: 'Я слышал, как в траве стрекочут сверчки.' },
        { en: '"Good morning!" she chirped cheerfully.', ru: '"Доброе утро!" — весело прощебетала она.' },
        { en: 'The electronic device chirped a warning.', ru: 'Электронное устройство пискнуло, предупреждая об опасности.' }
    ],
    []
),

createRichWord('b2_considerate', 'Considerate', '/kənˈsɪdərət/', 'кэнсидэрэт', 'Внимательный / Деликатный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Думающий о чувствах и правах других людей; заботливый.',
    '- Характер: "Considerate person" (Внимательный человек)\n- Действие: "Be considerate of others" (Быть внимательным к другим)\n- Поведение: "Considerate gesture" (Заботливый жест)',
    [
        { en: 'It was very considerate of you to bring me flowers.', ru: 'Было очень мило (внимательно) с твоей стороны принести мне цветы.' },
        { en: 'Please be considerate and keep the noise down.', ru: 'Пожалуйста, будьте внимательны к другим и не шумите.' },
        { en: 'He is always polite and considerate towards his staff.', ru: 'Он всегда вежлив и деликатен по отношению к своим сотрудникам.' },
        { en: 'A considerate driver stops for pedestrians.', ru: 'Внимательный водитель останавливается перед пешеходами.' }
    ],
    []
),

createRichWord('b2_contagious', 'Contagious', '/kənˈteɪdʒəs/', 'кэнтейджэс', 'Заразный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Легко передающийся от одного человека к другому (о болезни); (перен.) легко распространяющийся (о смехе, эмоциях).',
    '- Болезнь: "Highly contagious" (Высокозаразный)\n- Эмоции: "Contagious laughter" (Заразительный смех)\n- Метафора: "Contagious enthusiasm" (Заразительный энтузиазм)',
    [
        { en: 'The flu is highly contagious, so stay home.', ru: 'Грипп очень заразен, поэтому оставайся дома.' },
        { en: 'Her laugh was so contagious that everyone started smiling.', ru: 'Ее смех был таким заразительным, что все начали улыбаться.' },
        { en: 'Yawning is often contagious.', ru: 'Зевота часто бывает заразительной.' },
        { en: 'Keep the patient isolated as the disease is contagious.', ru: 'Держите пациента в изоляции, так как болезнь заразна.' }
    ],
    []
  ),
createRichWord('c1_captor', 'Captor', '/ˈkæptə(r)/', 'кэптэ', 'Похититель / Тюремщик', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, который поймал кого-то и держит в плену.',
    '- Ситуация: "Escape from captors" (Сбежать от похитителей)\n- Заложники: "Hold captive" (Держать в плену)\n- Отношения: "Captor and hostage" (Похититель и заложник)',
    [
        { en: 'The hostage managed to escape from his captors.', ru: 'Заложнику удалось сбежать от своих похитителей.' },
        { en: 'She refused to speak to her captor.', ru: 'Она отказалась разговаривать со своим тюремщиком.' },
        { en: 'The prisoners were treated cruelly by their captors.', ru: 'Похитители жестоко обращались с пленниками.' },
        { en: 'He negotiated with the captors for the release of the victims.', ru: 'Он вел переговоры с захватчиками об освобождении жертв.' }
    ],
    []
),

createRichWord('c1_carnage', 'Carnage', '/ˈkɑːnɪdʒ/', 'канидж', 'Резня / Кровавая бойня', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Жестокое убийство большого количества людей; хаос и разрушение.',
    '- Война: "Scene of carnage" (Место бойни)\n- Дорога: "Road carnage" (Кровавое ДТП)\n- Метафора: "Financial carnage" (Финансовый крах)',
    [
        { en: 'The battlefield was a scene of utter carnage.', ru: 'Поле битвы представляло собой сцену полной резни.' },
        { en: 'Police described the accident site as absolute carnage.', ru: 'Полиция описала место аварии как настоящую кровавую баню.' },
        { en: 'The bombing caused terrible carnage in the city center.', ru: 'Бомбардировка вызвала ужасную бойню в центре города.' },
        { en: 'Reporters were shocked by the carnage they witnessed.', ru: 'Репортеры были шокированы резней, свидетелями которой они стали.' }
    ],
    []
),

createRichWord('c1_cartilage', 'Cartilage', '/ˈkɑːtɪlɪdʒ/', 'катилидж', 'Хрящ', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Прочная, но гибкая ткань, соединяющая суставы или формирующая структуру (носа, ушей).',
    '- Анатомия: "Torn cartilage" (Порванный хрящ)\n- Тело: "Nose cartilage" (Хрящ носа)\n- Травма: "Damage the cartilage" (Повредить хрящ)',
    [
        { en: 'He tore a cartilage in his knee playing football.', ru: 'Он порвал хрящ в колене, играя в футбол.' },
        { en: 'Sharks have skeletons made of cartilage, not bone.', ru: 'У акул скелет состоит из хрящей, а не из костей.' },
        { en: 'Cartilage acts as a cushion between the bones.', ru: 'Хрящ действует как подушка между костями.' },
        { en: 'The cartilage in her nose was damaged.', ru: 'Хрящ в ее носу был поврежден.' }
    ],
    []
),

createRichWord('c1_castrate', 'Castrate', '/kæˈstreɪt/', 'кэстрейт', 'Кастрировать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Удалить репродуктивные органы у животного или человека; (перен.) лишить силы или эффективности.',
    '- Животные: "Castrate a bull" (Кастрировать быка)\n- Метафора: "Castrate the law" (Лишить закон силы)\n- Чувства: "Feel castrated" (Чувствовать себя униженным/лишенным мужественности)',
    [
        { en: 'Farmers often castrate bulls to make them calmer.', ru: 'Фермеры часто кастрируют быков, чтобы сделать их спокойнее.' },
        { en: 'The editor felt that the censorship castrated his article.', ru: 'Редактор чувствовал, что цензура выхолостила его статью.' },
        { en: 'They plan to castrate the stray cats to control the population.', ru: 'Они планируют кастрировать бродячих котов для контроля популяции.' },
        { en: 'He felt castrated by the loss of his job.', ru: 'Он чувствовал себя лишенным мужественности из-за потери работы.' }
    ],
    []
),

createRichWord('c1_caveat', 'Caveat', '/ˈkæviæt/', 'кэвиэт', 'Оговорка / Предостережение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Предупреждение, которое нужно учитывать перед тем, как что-то сделать; ограничение к соглашению.',
    '- Договор: "With one caveat" (С одной оговоркой)\n- Совет: "Add a caveat" (Добавить предостережение)\n- Латынь: "Caveat emptor" (Пусть покупатель будет осмотрителен)',
    [
        { en: 'There is one important caveat to this deal.', ru: 'В этой сделке есть одна важная оговорка.' },
        { en: 'He agreed to the plan, but with several caveats.', ru: 'Он согласился на план, но с несколькими оговорками.' },
        { en: 'The caveat is that you must finish by Friday.', ru: 'Условие (оговорка) в том, что вы должны закончить к пятнице.' },
        { en: 'Caveat emptor means the buyer is responsible for checking the quality.', ru: 'Caveat emptor означает, что покупатель несет ответственность за проверку качества.' }
    ],
    []
),

createRichWord('c1_cede', 'Cede', '/siːd/', 'сид', 'Уступать (территорию/права)', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Отдать контроль над чем-то (землей, властью) другому лицу или стране, часто неохотно.',
    '- Политика: "Cede territory" (Уступить территорию)\n- Власть: "Cede control" (Передать контроль)\n- Спорт: "Cede victory" (Уступить победу)',
    [
        { en: 'The country was forced to cede territory after the war.', ru: 'Страна была вынуждена уступить территорию после войны.' },
        { en: 'He refused to cede control of the company.', ru: 'Он отказался передать контроль над компанией.' },
        { en: 'They ceded their rights to the property.', ru: 'Они уступили свои права на собственность.' },
        { en: 'Hong Kong was ceded to Britain in 1842.', ru: 'Гонконг был передан Британии в 1842 году.' }
    ],
    []
),

createRichWord('c1_centenary', 'Centenary', '/senˈtiːnəri/', 'сентинэри', 'Столетие / Столетний юбилей', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Сотая годовщина важного события.',
    '- Праздник: "Celebrate the centenary" (Праздновать столетие)\n- Дата: "Centenary year" (Год столетия)\n- Событие: "Mark the centenary" (Отметить столетие)',
    [
        { en: 'The club is celebrating its centenary this year.', ru: 'Клуб празднует свое столетие в этом году.' },
        { en: 'A monument was built to mark the centenary of the war.', ru: 'Был построен памятник в честь столетия войны.' },
        { en: 'The centenary celebrations attracted thousands of people.', ru: 'Празднование столетия привлекло тысячи людей.' },
        { en: 'Next year is the centenary of her birth.', ru: 'В следующем году исполняется сто лет со дня ее рождения.' }
    ],
    []
),

createRichWord('c1_cessation', 'Cessation', '/seˈseɪʃn/', 'сэсейшн', 'Прекращение / Остановка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Остановка или прекращение чего-либо (формальное слово для stopping).',
    '- Война: "Cessation of hostilities" (Прекращение военных действий)\n- Курение: "Smoking cessation" (Отказ от курения)\n- Действие: "Immediate cessation" (Немедленное прекращение)',
    [
        { en: 'The treaty called for a complete cessation of violence.', ru: 'Договор призывал к полному прекращению насилия.' },
        { en: 'He recommends a program for smoking cessation.', ru: 'Он рекомендует программу по отказу от курения.' },
        { en: 'The cessation of funding led to the project\'s collapse.', ru: 'Прекращение финансирования привело к краху проекта.' },
        { en: 'There was a temporary cessation of the rain.', ru: 'Дождь временно прекратился.' }
    ],
    []
),

createRichWord('c1_chivalry', 'Chivalry', '/ˈʃɪvəlri/', 'шивэлри', 'Рыцарство / Галантность', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Средневековый кодекс поведения рыцарей; вежливое и честное поведение мужчин по отношению к женщинам.',
    '- История: "Age of chivalry" (Эпоха рыцарства)\n- Поведение: "Act of chivalry" (Акт галантности)\n- Мнение: "Chivalry is dead" (Рыцарство умерло)',
    [
        { en: 'He opened the door for her with old-fashioned chivalry.', ru: 'Он открыл ей дверь со старомодной галантностью.' },
        { en: 'Tales of knights and chivalry were popular.', ru: 'Сказания о рыцарях и рыцарстве были популярны.' },
        { en: 'Some people say that chivalry is dead.', ru: 'Некоторые говорят, что рыцарство умерло.' },
        { en: 'He displayed great chivalry towards his opponent.', ru: 'Он проявил большое благородство по отношению к своему противнику.' }
    ],
    []
),

createRichWord('c1_circumcize', 'Circumcize', '/ˈsɜːkəmsaɪz/', 'сёкэмсайз', 'Обрезать (делать обрезание)', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Удалять крайнюю плоть у мужчины или мальчика по медицинским или религиозным причинам.',
    '- Религия: "To be circumcized" (Быть обрезанным)\n- Медицина: "Circumcize a baby" (Сделать обрезание младенцу)\n- Традиция: "Male circumcision" (Мужское обрезание)',
    [
        { en: 'In some cultures, boys are circumcized shortly after birth.', ru: 'В некоторых культурах мальчикам делают обрезание вскоре после рождения.' },
        { en: 'He was circumcized for religious reasons.', ru: 'Ему сделали обрезание по религиозным причинам.' },
        { en: 'Doctors debated whether to circumcize the child.', ru: 'Врачи обсуждали, стоит ли делать ребенку обрезание.' },
        { en: 'The ritual involves circumcizing young men.', ru: 'Ритуал включает обрезание юношей.' }
    ],
    []
),

createRichWord('c1_circumference', 'Circumference', '/səˈkʌmfərəns/', 'сэкамфэрэнс', 'Окружность / Длина окружности', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Линия, ограничивающая круг; длина этой линии.',
    '- Геометрия: "Calculate the circumference" (Вычислить длину окружности)\n- Тело: "Waist circumference" (Обхват талии)\n- Размер: "Earth\'s circumference" (Окружность Земли)',
    [
        { en: 'The circumference of the earth is about 40,000 kilometers.', ru: 'Окружность Земли составляет около 40 000 километров.' },
        { en: 'Measure the circumference of your waist.', ru: 'Измерьте обхват вашей талии.' },
        { en: 'Pi helps us find the circumference of a circle.', ru: 'Число Пи помогает нам найти длину окружности круга.' },
        { en: 'The tree has a circumference of three meters.', ru: 'Дерево имеет обхват три метра.' }
    ],
    []
),

createRichWord('c1_clang', 'Clang', '/klæŋ/', 'кләнг', 'Лязг / Звон', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Издавать громкий, резонирующий металлический звук.',
    '- Звук: "Loud clang" (Громкий лязг)\n- Действие: "Clang shut" (Захлопнуться с лязгом)\n- Объект: "Bells clang" (Колокола звонят)',
    [
        { en: 'The prison door clanged shut behind him.', ru: 'Тюремная дверь с лязгом захлопнулась за ним.' },
        { en: 'We heard the clang of metal against metal.', ru: 'Мы услышали лязг металла о металл.' },
        { en: 'Trams clanged their bells in the street.', ru: 'Трамваи звонили в колокольчики на улице.' },
        { en: 'He dropped the heavy pan with a loud clang.', ru: 'Он уронил тяжелую сковороду с громким звоном.' }
    ],
    []
),

createRichWord('c1_claustrophobia', 'Claustrophobia', '/ˌklɒstrəˈfəʊbiə/', 'клострэфэубиэ', 'Клаустрофобия', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Боязнь замкнутых или тесных пространств.',
    '- Страх: "Suffer from claustrophobia" (Страдать клаустрофобией)\n- Место: "Cause claustrophobia" (Вызывать клаустрофобию)\n- Прилагательное: "Claustrophobic" (Клаустрофобный/Тесный)',
    [
        { en: 'I cannot use the lift because of my claustrophobia.', ru: 'Я не могу пользоваться лифтом из-за моей клаустрофобии.' },
        { en: 'The small room gave me a sense of claustrophobia.', ru: 'Маленькая комната вызвала у меня чувство клаустрофобии.' },
        { en: 'He gets claustrophobia in crowded trains.', ru: 'У него начинается клаустрофобия в переполненных поездах.' },
        { en: 'Claustrophobia is a common anxiety disorder.', ru: 'Клаустрофобия — распространенное тревожное расстройство.' }
    ],
    []
),

createRichWord('c1_clink', 'Clink', '/klɪŋk/', 'клинк', 'Звякать / Чокаться', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Издавать короткий легкий звон (стекло, монеты); (сленг) тюрьма.',
    '- Звук: "Glasses clink" (Бокалы звенят)\n- Действие: "Clink glasses" (Чокаться)\n- Сленг: "Throw in the clink" (Бросить в кутузку)',
    [
        { en: 'They clinked glasses and toasted to the bride.', ru: 'Они чокнулись бокалами и выпили за невесту.' },
        { en: 'Coins clinked in his pocket as he walked.', ru: 'Монеты звенели в его кармане, когда он шел.' },
        { en: 'I heard the clink of ice in the glass.', ru: 'Я услышал звон льда в стакане.' },
        { en: 'He spent a night in the clink for drunk driving.', ru: 'Он провел ночь в кутузке за вождение в нетрезвом виде.' }
    ],
    []
),

createRichWord('c1_cocoon', 'Cocoon', '/kəˈkuːn/', 'кэкун', 'Кокон', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Шелковая оболочка, которую плетут гусеницы; (перен.) безопасное, изолированное место.',
    '- Природа: "Butterfly cocoon" (Кокон бабочки)\n- Защита: "Safe cocoon" (Безопасный кокон)\n- Глагол: "Cocooned in blankets" (Закутанный в одеяла)',
    [
        { en: 'The caterpillar spins a cocoon before becoming a moth.', ru: 'Гусеница плетет кокон перед тем, как стать мотыльком.' },
        { en: 'She lives in a cocoon of wealth and privilege.', ru: 'Она живет в коконе богатства и привилегий.' },
        { en: 'The baby was cocooned in a soft blanket.', ru: 'Ребенок был укутан в мягкое одеяло.' },
        { en: 'He emerged from his cocoon of isolation.', ru: 'Он вышел из своего кокона изоляции.' }
    ],
    []
),

createRichWord('c1_collagen', 'Collagen', '/ˈkɒlədʒən/', 'колэджен', 'Коллаген', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Белок, содержащийся в коже и костях, делающий их прочными.',
    '- Косметика: "Collagen injection" (Инъекция коллагена)\n- Тело: "Production of collagen" (Выработка коллагена)\n- Здоровье: "Collagen supplements" (Добавки с коллагеном)',
    [
        { en: 'Collagen helps keep skin looking young and elastic.', ru: 'Коллаген помогает сохранять кожу молодой и эластичной.' },
        { en: 'As we age, our bodies produce less collagen.', ru: 'С возрастом наш организм вырабатывает меньше коллагена.' },
        { en: 'Many face creams contain collagen.', ru: 'Многие кремы для лица содержат коллаген.' },
        { en: 'Collagen is essential for healthy joints.', ru: 'Коллаген необходим для здоровых суставов.' }
    ],
    []
),

createRichWord('c1_collegiate', 'Collegiate', '/kəˈliːdʒiət/', 'кэлиджиэт', 'Студенческий / Университетский', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к колледжу или университету; организованный как коллегия (равноправно).',
    '- Спорт: "Collegiate sports" (Студенческий спорт)\n- Стиль: "Collegiate atmosphere" (Университетская атмосфера)\n- Работа: "Collegiate approach" (Коллегиальный подход)',
    [
        { en: 'He was a star in collegiate basketball.', ru: 'Он был звездой студенческого баскетбола.' },
        { en: 'The university fosters a collegiate atmosphere.', ru: 'Университет поддерживает студенческую атмосферу.' },
        { en: 'We adopt a collegiate approach to decision-making.', ru: 'Мы применяем коллегиальный подход к принятию решений.' },
        { en: 'Inter-collegiate competitions are very popular.', ru: 'Межвузовские соревнования очень популярны.' }
    ],
    []
),

createRichWord('c1_connoisseur', 'Connoisseur', '/ˌkɒnəˈsɜː(r)/', 'конесё', 'Знаток / Ценитель', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Эксперт в области искусства, еды или напитков, обладающий тонким вкусом.',
    '- Вино: "Wine connoisseur" (Знаток вин)\n- Искусство: "Art connoisseur" (Ценитель искусства)\n- Вкус: "For the connoisseur" (Для ценителей)',
    [
        { en: 'He considers himself a connoisseur of fine wines.', ru: 'Он считает себя знатоком хороших вин.' },
        { en: 'This coffee is for the true connoisseur.', ru: 'Этот кофе — для истинного ценителя.' },
        { en: 'A connoisseur of classical music would appreciate this.', ru: 'Знаток классической музыки оценил бы это.' },
        { en: 'She is a connoisseur of antique furniture.', ru: 'Она знаток антикварной мебели.' }
    ],
    []
),

createRichWord('c1_consensual', 'Consensual', '/kənˈsenʃuəl/', 'кэнсэншуэл', 'По обоюдному согласию', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Основанный на согласии всех участников (особенно в сексе или праве).',
    '- Отношения: "Consensual sex" (Секс по согласию)\n- Решение: "Consensual agreement" (Взаимное соглашение)\n- Возраст: "Age of consent" (Возраст согласия)',
    [
        { en: 'The relationship was entirely consensual.', ru: 'Отношения были полностью по обоюдному согласию.' },
        { en: 'Consensual decision-making takes time.', ru: 'Принятие решений на основе консенсуса требует времени.' },
        { en: 'Police determined the encounter was consensual.', ru: 'Полиция установила, что контакт был по обоюдному согласию.' },
        { en: 'Non-consensual sharing of photos is a crime.', ru: 'Распространение фотографий без согласия является преступлением.' }
    ],
    []
),

createRichWord('c1_constipate', 'Constipate', '/ˈkɒnstɪpeɪt/', 'констипейт', 'Вызывать запор', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Вызывать трудности с опорожнением кишечника (обычно используется причастие constipated).',
    '- Состояние: "Feel constipated" (Страдать запором)\n- Причина: "Drugs constipate" (Лекарства вызывают запор)\n- Метафора: "Constipated system" (Застойная система)',
    [
        { en: 'I feel constipated after eating too much cheese.', ru: 'У меня запор после того, как я съел слишком много сыра.' },
        { en: 'Certain painkillers can constipate you.', ru: 'Определенные обезболивающие могут вызвать запор.' },
        { en: 'Drink plenty of water if you are constipated.', ru: 'Пейте много воды, если у вас запор.' },
        { en: 'A low-fiber diet often constipates people.', ru: 'Диета с низким содержанием клетчатки часто вызывает у людей запор.' }
    ],
    []
),

createRichWord('c1_contaminant', 'Contaminant', '/kənˈtæmɪnənt/', 'кэнтэминэнт', 'Загрязнитель', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Вещество, которое делает что-то грязным или ядовитым.',
    '- Вода: "Water contaminant" (Загрязнитель воды)\n- Воздух: "Airborne contaminant" (Загрязнитель в воздухе)\n- Очистка: "Remove contaminants" (Удалить загрязнители)',
    [
        { en: 'Filters remove contaminants from the tap water.', ru: 'Фильтры удаляют загрязнители из водопроводной воды.' },
        { en: 'Lead is a dangerous contaminant found in old paint.', ru: 'Свинец — опасный загрязнитель, содержащийся в старой краске.' },
        { en: 'Chemical contaminants polluted the river.', ru: 'Химические загрязнители загрязнили реку.' },
        { en: 'The laboratory must be free of contaminants.', ru: 'Лаборатория должна быть свободна от загрязнителей.' }
    ],
    []
),

createRichWord('c1_convection', 'Convection', '/kənˈvekʃn/', 'кэнвекшн', 'Конвекция', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Движение в газе или жидкости, при котором теплая часть поднимается, а холодная опускается (передача тепла).',
    '- Печь: "Convection oven" (Конвекционная печь)\n- Погода: "Convection currents" (Конвекционные потоки)\n- Физика: "Heat convection" (Тепловая конвекция)',
    [
        { en: 'Warm air rises due to convection.', ru: 'Теплый воздух поднимается благодаря конвекции.' },
        { en: 'A convection oven cooks food faster.', ru: 'Конвекционная печь готовит еду быстрее.' },
        { en: 'Convection currents in the mantle move tectonic plates.', ru: 'Конвекционные потоки в мантии двигают тектонические плиты.' },
        { en: 'Radiators heat the room by convection.', ru: 'Радиаторы нагревают комнату за счет конвекции.' }
    ],
    []
  ),
createRichWord('c1_counterbalance', 'Counterbalance', '/ˌkaʊntəˈbæləns/', 'каунтэбэлэнс', 'Уравновешивать / Противовес', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Иметь равный, но противоположный эффект; уравнивать влияние.',
    '- Сила: "Counterbalance the weight" (Уравновесить вес)\n- Эффект: "Counterbalance the risk" (Скомпенсировать риск)\n- Аргумент: "Act as a counterbalance" (Служить противовесом)',
    [
        { en: 'We need new policies to counterbalance the rising inflation.', ru: 'Нам нужны новые меры, чтобы уравновесить растущую инфляцию.' },
        { en: 'Her calm nature acts as a counterbalance to his anger.', ru: 'Ее спокойный характер служит противовесом его гневу.' },
        { en: 'The risk is counterbalanced by the potential reward.', ru: 'Риск компенсируется потенциальной наградой.' },
        { en: 'Heavy weights are used to counterbalance the lift.', ru: 'Тяжелые грузы используются для уравновешивания лифта.' }
    ],
    []
),

createRichWord('c1_custodian', 'Custodian', '/kʌˈstəʊdiən/', 'кастэудиэн', 'Хранитель / Опекун', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, ответственный за охрану или уход за чем-либо (зданием, традициями, ребенком).',
    '- Работа: "Museum custodian" (Смотритель музея)\n- Традиция: "Custodian of culture" (Хранитель культуры)\n- Право: "Legal custodian" (Законный опекун)',
    [
        { en: 'He sees himself as the custodian of the family heritage.', ru: 'Он считает себя хранителем семейного наследия.' },
        { en: 'The bank acts as a custodian for client assets.', ru: 'Банк выступает в качестве хранителя активов клиентов.' },
        { en: 'She was appointed legal custodian of the child.', ru: 'Она была назначена законным опекуном ребенка.' },
        { en: 'The custodian cleans the school building every night.', ru: 'Смотритель (уборщик) убирает здание школы каждую ночь.' }
    ],
    []
),

createRichWord('c1_cylindrical', 'Cylindrical', '/sɪˈlɪndrɪkl/', 'силиндрикл', 'Цилиндрический', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Имеющий форму цилиндра (прямые стороны и круглые концы).',
    '- Форма: "Cylindrical shape" (Цилиндрическая форма)\n- Предмет: "Cylindrical container" (Цилиндрический контейнер)\n- Объект: "Cylindrical tower" (Цилиндрическая башня)',
    [
        { en: 'The documents were stored in a cylindrical tube.', ru: 'Документы хранились в цилиндрической тубе.' },
        { en: 'The tower is cylindrical with a pointed roof.', ru: 'Башня цилиндрическая с остроконечной крышей.' },
        { en: 'We used a cylindrical vase for the long flowers.', ru: 'Мы использовали цилиндрическую вазу для длинных цветов.' },
        { en: 'Engineers designed a cylindrical fuel tank.', ru: 'Инженеры спроектировали цилиндрический топливный бак.' }
    ],
    []
),

createRichWord('c1_daft', 'Daft', '/dɑːft/', 'дафт', 'Глупый / Бесшабашный', ProficiencyLevel.C1, 'adj', 'Medium', 'Informal',
    'Глупый или немного сумасшедший (часто используется в британском английском, не очень грубо).',
    '- Идея: "Daft idea" (Глупая идея)\n- Человек: "Don\'t be daft" (Не будь дураком)\n- Вид: "Look daft" (Выглядеть глупо)',
    [
        { en: 'Don\'t be daft, of course I will help you.', ru: 'Не говори глупостей, конечно, я помогу тебе.' },
        { en: 'That hat makes you look a bit daft.', ru: 'В этой шляпе ты выглядишь немного глупо.' },
        { en: 'It was a daft thing to do in this weather.', ru: 'Это было глупо делать в такую погоду.' },
        { en: 'He has some daft plan to get rich quickly.', ru: 'У него есть какой-то дурацкий план быстро разбогатеть.' }
    ],
    []
),

createRichWord('c1_demote', 'Demote', '/diːˈməʊt/', 'димэут', 'Понижать в должности', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Перевести кого-то на более низкую позицию или ранг (обычно как наказание).',
    '- Работа: "Demote to assistant" (Понизить до ассистента)\n- Армия: "Demote a soldier" (Разжаловать солдата)\n- Спорт: "Demoted to the reserves" (Переведен в запас)',
    [
        { en: 'He was demoted for his poor performance.', ru: 'Его понизили в должности за плохие показатели.' },
        { en: 'The sergeant was demoted to private.', ru: 'Сержанта разжаловали в рядовые.' },
        { en: 'The team was demoted to the second division.', ru: 'Команда вылетела (была понижена) во второй дивизион.' },
        { en: 'She felt humiliated when they demoted her.', ru: 'Она чувствовала себя униженной, когда ее понизили.' }
    ],
    []
),

createRichWord('c1_denominator', 'Denominator', '/dɪˈnɒmɪneɪtə(r)/', 'диноминейтэ', 'Знаменатель', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Число под чертой в дроби; общая черта.',
    '- Математика: "Common denominator" (Общий знаменатель)\n- Фраза: "Lowest common denominator" (Наименьший общий знаменатель / Самый примитивный уровень)\n- Дробь: "Numerator and denominator" (Числитель и знаменатель)',
    [
        { en: 'In the fraction 1/2, 2 is the denominator.', ru: 'В дроби 1/2 двойка является знаменателем.' },
        { en: 'You need to find a common denominator to add these fractions.', ru: 'Нужно найти общий знаменатель, чтобы сложить эти дроби.' },
        { en: 'Fear was the common denominator among the refugees.', ru: 'Страх был общей чертой среди беженцев.' },
        { en: 'TV shows often appeal to the lowest common denominator.', ru: 'ТВ-шоу часто ориентируются на самую непритязательную аудиторию (наименьший общий знаменатель).' }
    ],
    []
),

createRichWord('c1_derail', 'Derail', '/diːˈreɪl/', 'дирейл', 'Сходить с рельсов / Срывать планы', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Сойти с рельсов (о поезде); помешать процессу или плану идти так, как задумано.',
    '- Поезд: "Train derailed" (Поезд сошел с рельсов)\n- План: "Derail the negotiations" (Сорвать переговоры)\n- Процесс: "Derail progress" (Пустить прогресс под откос)',
    [
        { en: 'The train derailed due to a faulty track.', ru: 'Поезд сошел с рельсов из-за неисправного пути.' },
        { en: 'This scandal could derail his political career.', ru: 'Этот скандал может пустить под откос его политическую карьеру.' },
        { en: 'Don\'t let minor issues derail the project.', ru: 'Не позволяй мелким проблемам сорвать проект.' },
        { en: 'The meeting was derailed by an argument.', ru: 'Собрание было сорвано спором.' }
    ],
    []
),

createRichWord('c1_dermatology', 'Dermatology', '/ˌdɜːməˈtɒlədʒi/', 'дёмэтолэджи', 'Дерматология', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Раздел медицины, занимающийся кожей и её болезнями.',
    '- Медицина: "Department of dermatology" (Отделение дерматологии)\n- Врач: "Professor of dermatology" (Профессор дерматологии)\n- Учеба: "Study dermatology" (Изучать дерматологию)',
    [
        { en: 'She has an appointment at the dermatology clinic.', ru: 'У нее прием в дерматологической клинике.' },
        { en: 'Advances in dermatology help treat skin cancer.', ru: 'Достижения в дерматологии помогают лечить рак кожи.' },
        { en: 'He decided to specialize in dermatology.', ru: 'Он решил специализироваться на дерматологии.' },
        { en: 'Dermatology covers both medical and cosmetic skin issues.', ru: 'Дерматология охватывает как медицинские, так и косметические проблемы кожи.' }
    ],
    []
),

createRichWord('c1_digitise', 'Digitise', '/ˈdɪdʒɪtaɪz/', 'диджитайз', 'Оцифровывать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Переводить информацию в цифровой формат.',
    '- Процесс: "Digitise records" (Оцифровать записи)\n- Фото: "Digitise photos" (Оцифровать фотографии)\n- Книги: "Digitise a library" (Оцифровать библиотеку)',
    [
        { en: 'The library plans to digitise all its old manuscripts.', ru: 'Библиотека планирует оцифровать все свои старые рукописи.' },
        { en: 'We need to digitise these paper files.', ru: 'Нам нужно перевести эти бумажные файлы в цифровой вид.' },
        { en: 'Digitising the collection makes it accessible to everyone.', ru: 'Оцифровка коллекции делает ее доступной для всех.' },
        { en: 'The music was digitised for better quality.', ru: 'Музыка была оцифрована для лучшего качества.' }
    ],
    []
),

createRichWord('c1_dimple', 'Dimple', '/ˈdɪmpl/', 'димпл', 'Ямочка (на щеке)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Маленькая впадина на коже, особенно на щеке или подбородке, появляющаяся при улыбке.',
    '- Лицо: "Cheek dimples" (Ямочки на щеках)\n- Улыбка: "Show dimples" (Показать ямочки)\n- Подбородок: "Cleft dimple" (Ямка на подбородке)',
    [
        { en: 'He has a deep dimple in his chin.', ru: 'У него глубокая ямка на подбородке.' },
        { en: 'She flashed a smile, revealing two dimples.', ru: 'Она улыбнулась, показав две ямочки.' },
        { en: 'The baby has cute dimples on her knees.', ru: 'У малышки милые ямочки на коленках.' },
        { en: 'Dimples are considered attractive in many cultures.', ru: 'Ямочки считаются привлекательными во многих культурах.' }
    ],
    [
        { meaning: "Dent (Golf)", translation: "Вмятина (на мяче для гольфа)", example: { en: "A golf ball has many dimples.", ru: "У мяча для гольфа много выемок." } }
    ]
  ),
createRichWord('c1_cameo', 'Cameo', '/ˈkæmiəʊ/', 'кэмиэу', 'Камео / Гемма', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Короткое появление известного человека в фильме; украшение с рельефным портретом.',
    '- Кино: "Cameo role" (Эпизодическая роль)\n- Украшение: "Cameo brooch" (Брошь-камея)\n- Появление: "Make a cameo" (Появиться в эпизоде)',
    [
        { en: 'The director made a brief cameo in his own movie.', ru: 'Режиссер появился в коротком эпизоде своего собственного фильма.' },
        { en: 'She wore an antique cameo brooch on her collar.', ru: 'Она носила старинную брошь-камею на воротнике.' },
        { en: 'Stan Lee is famous for his cameos in Marvel films.', ru: 'Стэн Ли известен своими камео в фильмах Marvel.' },
        { en: 'The famous actor agreed to a cameo appearance.', ru: 'Известный актер согласился на эпизодическую роль.' }
    ],
    []
),

createRichWord('c1_carnation', 'Carnation', '/kɑːˈneɪʃn/', 'канейшн', 'Гвоздика', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Садовый цветок с сладким запахом, часто розовый, белый или красный.',
    '- Цветок: "Red carnation" (Красная гвоздика)\n- Петлица: "Wear a carnation" (Носить гвоздику в петлице)\n- Сад: "Growing carnations" (Выращивание гвоздик)',
    [
        { en: 'He wore a red carnation in his buttonhole.', ru: 'Он носил красную гвоздику в петлице.' },
        { en: 'Carnations are popular flowers for Mother\'s Day.', ru: 'Гвоздики — популярные цветы на День матери.' },
        { en: 'The bouquet was made of roses and carnations.', ru: 'Букет состоял из роз и гвоздик.' },
        { en: 'White carnations symbolize pure love and good luck.', ru: 'Белые гвоздики символизируют чистую любовь и удачу.' }
    ],
    []
),

createRichWord('c1_cashmere', 'Cashmere', '/ˈkæʃmɪə(r)/', 'кэшмиэ', 'Кашемир', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Очень мягкая и дорогая шерсть.',
    '- Одежда: "Cashmere sweater" (Кашемировый свитер)\n- Ткань: "Pure cashmere" (Чистый кашемир)\n- Качество: "Soft cashmere" (Мягкий кашемир)',
    [
        { en: 'This scarf is made of 100% cashmere.', ru: 'Этот шарф сделан из 100% кашемира.' },
        { en: 'Cashmere is much softer than regular wool.', ru: 'Кашемир намного мягче обычной шерсти.' },
        { en: 'She treated herself to a luxury cashmere coat.', ru: 'Она побаловала себя роскошным кашемировым пальто.' },
        { en: 'Be careful when washing cashmere; it shrinks easily.', ru: 'Будьте осторожны при стирке кашемира, он легко садится.' }
    ],
    []
),

createRichWord('c1_cauldron', 'Cauldron', '/ˈkɔːldrən/', 'колдрэн', 'Котел', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большой металлический горшок для варки на открытом огне (часто ассоциируется с ведьмами).',
    '- Сказка: "Witch\'s cauldron" (Ведьмин котел)\n- Метафора: "Cauldron of emotion" (Котел эмоций/страстей)\n- Огонь: "Boiling cauldron" (Кипящий котел)',
    [
        { en: 'The three witches stirred the potion in the cauldron.', ru: 'Три ведьмы помешивали зелье в котле.' },
        { en: 'The stadium was a seething cauldron of noise.', ru: 'Стадион был бурлящим котлом шума.' },
        { en: 'Soup was bubbling in a large iron cauldron.', ru: 'Суп кипел в большом железном котле.' },
        { en: 'The region is a cauldron of political unrest.', ru: 'Этот регион — котел политических волнений.' }
    ],
    []
),

createRichWord('c1_caviar', 'Caviar', '/ˈkæviɑː(r)/', 'кэвиа', 'Икра (черная)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Икра определенных крупных рыб (осетра), считающаяся деликатесом.',
    '- Еда: "Beluga caviar" (Икра белуги)\n- Роскошь: "Champagne and caviar" (Шампанское и икра)\n- Вкус: "Taste of caviar" (Вкус икры)',
    [
        { en: 'Caviar is one of the most expensive foods in the world.', ru: 'Икра — один из самых дорогих продуктов в мире.' },
        { en: 'They served toast with black caviar at the party.', ru: 'На вечеринке подавали тосты с черной икрой.' },
        { en: 'I have never acquired a taste for caviar.', ru: 'Я так и не приобрел вкуса к икре (она мне не нравится).' },
        { en: 'Real caviar comes from the sturgeon fish.', ru: 'Настоящая икра происходит от осетровых рыб.' }
    ],
    []
),

createRichWord('c1_chalet', 'Chalet', '/ˈʃæleɪ/', 'шэлей', 'Шале / Домик в горах', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Деревянный дом с покатой крышей, типичный для Швейцарских Альп.',
    '- Отдых: "Ski chalet" (Лыжное шале)\n- Горы: "Swiss chalet" (Швейцарское шале)\n- Туризм: "Rent a chalet" (Арендовать шале)',
    [
        { en: 'We rented a cosy chalet for our skiing holiday.', ru: 'Мы арендовали уютное шале для нашего лыжного отпуска.' },
        { en: 'The chalet had a beautiful view of the mountains.', ru: 'Из шале открывался прекрасный вид на горы.' },
        { en: 'Smoke rose from the chimney of the wooden chalet.', ru: 'Дым поднимался из трубы деревянного шале.' },
        { en: 'Usually, a chalet is made of timber.', ru: 'Обычно шале строится из бруса.' }
    ],
    []
),

createRichWord('c1_chameleon', 'Chameleon', '/kəˈmiːliən/', 'кэмилиэн', 'Хамелеон', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Ящерица, которая может менять цвет кожи; (перен.) человек, меняющий поведение под ситуацию.',
    '- Животное: "Colour-changing chameleon" (Меняющий цвет хамелеон)\n- Характер: "Social chameleon" (Человек, подстраивающийся под окружение)\n- Способность: "Like a chameleon" (Как хамелеон)',
    [
        { en: 'The chameleon changed colour to match the leaf.', ru: 'Хамелеон изменил цвет, чтобы слиться с листом.' },
        { en: 'He is a political chameleon, changing views to get votes.', ru: 'Он политический хамелеон, меняющий взгляды ради голосов.' },
        { en: 'Chameleons can move their eyes independently.', ru: 'Хамелеоны могут двигать глазами независимо друг от друга.' },
        { en: 'As an actor, she is a true chameleon.', ru: 'Как актриса, она настоящий хамелеон.' }
    ],
    []
),

createRichWord('c1_charade', 'Charade', '/ʃəˈrɑːd/', 'шэрад', 'Шарада / Фарс', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Игра, где слово угадывают по пантомиме; притворство или обман.',
    '- Игра: "Play charades" (Играть в шарады/крокодила)\n- Обман: "Ended the charade" (Прекратил этот фарс)\n- Ситуация: "Cruel charade" (Жестокий фарс)',
    [
        { en: 'We played a game of charades after dinner.', ru: 'После ужина мы играли в шарады (крокодила).' },
        { en: 'Their happy marriage was just a charade.', ru: 'Их счастливый брак был просто фарсом.' },
        { en: 'He grew tired of keeping up the charade.', ru: 'Он устал поддерживать это притворство.' },
        { en: 'The trial was a charade; the verdict was already decided.', ru: 'Суд был фарсом; вердикт был уже решен.' }
    ],
    []
),

createRichWord('c1_chardonnay', 'Chardonnay', '/ˌʃɑːdəˈneɪ/', 'шадэней', 'Шардоне', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Тип белого вина или сорт винограда, из которого его делают.',
    '- Вино: "Glass of Chardonnay" (Бокал Шардоне)\n- Виноград: "Chardonnay grapes" (Виноград Шардоне)\n- Вкус: "Crisp Chardonnay" (Свежее Шардоне)',
    [
        { en: 'I\'ll have a glass of chilled Chardonnay, please.', ru: 'Я буду бокал охлажденного Шардоне, пожалуйста.' },
        { en: 'Chardonnay is one of the most popular white wines.', ru: 'Шардоне — одно из самых популярных белых вин.' },
        { en: 'This region produces an excellent oak-aged Chardonnay.', ru: 'Этот регион производит отличное Шардоне, выдержанное в дубе.' },
        { en: 'Would you prefer Sauvignon Blanc or Chardonnay?', ru: 'Вы предпочитаете Совиньон Блан или Шардоне?' }
    ],
    []
),

createRichWord('c1_chieftain', 'Chieftain', '/ˈtʃiːftən/', 'чифтэн', 'Вождь / Предводитель', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Лидер народа или клана (обычно в историческом или племенном контексте).',
    '- Племя: "Tribal chieftain" (Вождь племени)\n- Клан: "Scottish chieftain" (Шотландский вождь клана)\n- Власть: "Powerful chieftain" (Могущественный вождь)',
    [
        { en: 'The chieftain gathered his warriors for battle.', ru: 'Вождь собрал своих воинов для битвы.' },
        { en: 'He was the son of a powerful Highland chieftain.', ru: 'Он был сыном могущественного горского вождя.' },
        { en: 'Disputes were settled by the village chieftain.', ru: 'Споры разрешались деревенским старейшиной (вождем).' },
        { en: 'The chieftain wore a headdress of feathers.', ru: 'Вождь носил головной убор из перьев.' }
    ],
    []
),

createRichWord('c1_chives', 'Chives', '/tʃaɪvz/', 'чайвз', 'Зеленый лук (резанец)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Растение с длинными тонкими листьями и вкусом лука, используемое в кулинарии.',
    '- Еда: "Chopped chives" (Нарезанный зеленый лук)\n- Блюдо: "Potato with chives" (Картофель с луком)\n- Сад: "Grow chives" (Выращивать шнитт-лук)',
    [
        { en: 'Sprinkle some chopped chives on the baked potato.', ru: 'Посыпьте запеченный картофель нарезанным зеленым луком.' },
        { en: 'Chives are easy to grow in a window box.', ru: 'Шнитт-лук легко выращивать в ящике на окне.' },
        { en: 'Sour cream and chives is a classic flavour.', ru: 'Сметана с зеленым луком — это классический вкус.' },
        { en: 'I added chives to the omelette.', ru: 'Я добавил зеленый лук в омлет.' }
    ],
    []
),

createRichWord('c1_clique', 'Clique', '/kliːk/', 'клик', 'Клика / Группировка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Небольшая группа людей, которые проводят время вместе и неохотно пускают к себе других.',
    '- Школа: "School clique" (Школьная группировка)\n- Общество: "Ruling clique" (Правящая клика)\n- Глагол: "Form a clique" (Образовать группировку)',
    [
        { en: 'There was a clique of popular girls at school.', ru: 'В школе была группировка популярных девочек.' },
        { en: 'It is hard to get into their clique.', ru: 'Трудно попасть в их тусовку.' },
        { en: 'The club is run by a small clique.', ru: 'Клубом управляет маленькая клика.' },
        { en: 'He felt excluded by the office cliques.', ru: 'Он чувствовал себя исключенным офисными группировками.' }
    ],
    []
),

createRichWord('c1_cobweb', 'Cobweb', '/ˈkɒbweb/', 'кобвеб', 'Паутина', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Сеть, сплетенная пауком (особенно старая и пыльная).',
    '- Дом: "Dusty cobwebs" (Пыльная паутина)\n- Уборка: "Clear the cobwebs" (Убрать паутину / Проветрить мозги)\n- Хэллоуин: "Covered in cobwebs" (Покрытый паутиной)',
    [
        { en: 'The old house was full of dust and cobwebs.', ru: 'Старый дом был полон пыли и паутины.' },
        { en: 'She brushed a cobweb away from her face.', ru: 'Она смахнула паутину с лица.' },
        { en: 'A walk in the fresh air will blow away the cobwebs.', ru: 'Прогулка на свежем воздухе проветрит мозги (сдует паутину).' },
        { en: 'Spiders spin cobwebs to catch flies.', ru: 'Пауки плетут паутину, чтобы ловить мух.' }
    ],
    []
),

createRichWord('c1_cognac', 'Cognac', '/ˈkɒnjæk/', 'коньяк', 'Коньяк', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Высококачественный бренди, производимый во Франции.',
    '- Напиток: "Sip cognac" (Потягивать коньяк)\n- Бутылка: "Bottle of cognac" (Бутылка коньяка)\n- Старение: "Aged cognac" (Выдержанный коньяк)',
    [
        { en: 'He poured himself a glass of expensive cognac.', ru: 'Он налил себе бокал дорогого коньяка.' },
        { en: 'Cognac is best enjoyed slowly after dinner.', ru: 'Коньяком лучше всего наслаждаться медленно после ужина.' },
        { en: 'Real Cognac must come from a specific region in France.', ru: 'Настоящий коньяк должен происходить из определенного региона Франции.' },
        { en: 'The aroma of the cognac was rich and fruity.', ru: 'Аромат коньяка был насыщенным и фруктовым.' }
    ],
    []
),

createRichWord('c1_commonality', 'Commonality', '/ˌkɒməˈnæləti/', 'комэнэлэти', 'Общность', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Наличие общих черт или интересов.',
    '- Отношения: "Find commonality" (Найти общность)\n- Группа: "Sense of commonality" (Чувство общности)\n- Сравнение: "Lack of commonality" (Отсутствие общих черт)',
    [
        { en: 'Despite our differences, we have some commonality.', ru: 'Несмотря на наши различия, у нас есть некоторая общность.' },
        { en: 'There is a surprising commonality between the two cultures.', ru: 'Между двумя культурами существует удивительная общность.' },
        { en: 'We need to focus on our commonalities, not differences.', ru: 'Нам нужно сосредоточиться на том, что нас объединяет, а не на различиях.' },
        { en: 'The study highlights the commonality of human experience.', ru: 'Исследование подчеркивает общность человеческого опыта.' }
    ],
    []
),

createRichWord('c1_compatriot', 'Compatriot', '/kəmˈpætriət/', 'кэмпэтриэт', 'Соотечественник', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, который родом из той же страны, что и вы.',
    '- Страна: "Fellow compatriot" (Земляк/соотечественник)\n- Спорт: "Defeated his compatriot" (Победил своего соотечественника)\n- Встреча: "Meet compatriots" (Встретить соотечественников)',
    [
        { en: 'He was happy to meet a compatriot abroad.', ru: 'Он был счастлив встретить соотечественника за границей.' },
        { en: 'The tennis player faced his compatriot in the final.', ru: 'Теннисист встретился со своим соотечественником в финале.' },
        { en: 'Many of her compatriots fled the war.', ru: 'Многие из ее соотечественников бежали от войны.' },
        { en: 'We should support our compatriots in the Olympics.', ru: 'Мы должны поддерживать наших соотечественников на Олимпийских играх.' }
    ],
    []
),

createRichWord('c1_concourse', 'Concourse', '/ˈkɒŋkɔːs/', 'конкос', 'Вестибюль / Зал ожидания', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Большое открытое пространство внутри здания (вокзала, аэропорта), где собираются люди.',
    '- Аэропорт: "Airport concourse" (Зал аэропорта)\n- Вокзал: "Station concourse" (Вестибюль вокзала)\n- Толпа: "Crowded concourse" (Переполненный зал)',
    [
        { en: 'We met at the main concourse of the station.', ru: 'Мы встретились в главном вестибюле вокзала.' },
        { en: 'The airport concourse is lined with shops.', ru: 'В зале аэропорта расположены магазины.' },
        { en: 'Passengers waited in the concourse for announcements.', ru: 'Пассажиры ждали объявлений в зале ожидания.' },
        { en: 'A large sculpture stands in the center of the concourse.', ru: 'В центре вестибюля стоит большая скульптура.' }
    ],
    []
),

createRichWord('c1_condominium', 'Condominium', '/ˌkɒndəˈmɪniəm/', 'кондэминиэм', 'Кондоминиум / Квартира', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Многоквартирный дом, где квартиры принадлежат жильцам; (сокр. condo) квартира в таком доме.',
    '- Жилье: "Luxury condominium" (Роскошный кондоминиум)\n- Покупка: "Buy a condominium" (Купить квартиру в кондоминиуме)\n- Отдых: "Holiday condominium" (Квартира для отдыха)',
    [
        { en: 'They bought a condominium in Florida for their retirement.', ru: 'Они купили кондоминиум во Флориде для выхода на пенсию.' },
        { en: 'The condominium complex has a swimming pool and gym.', ru: 'В жилом комплексе есть бассейн и тренажерный зал.' },
        { en: 'Living in a condominium entails paying maintenance fees.', ru: 'Проживание в кондоминиуме влечет за собой уплату сборов за обслуживание.' },
        { en: 'Normally people just say "condo" instead of condominium.', ru: 'Обычно люди говорят просто "кондо" вместо кондоминиума.' }
    ],
    []
),

createRichWord('c1_conical', 'Conical', '/ˈkɒnɪkl/', 'коникл', 'Конический', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Имеющий форму конуса.',
    '- Форма: "Conical shape" (Коническая форма)\n- Предмет: "Conical hat" (Коническая шляпа)\n- Природа: "Conical volcano" (Конический вулкан)',
    [
        { en: 'The witch wore a tall conical hat.', ru: 'Ведьма носила высокую коническую шляпу.' },
        { en: 'The volcano has a perfect conical shape.', ru: 'Вулкан имеет идеальную коническую форму.' },
        { en: 'Pour the liquid into the conical flask.', ru: 'Налейте жидкость в коническую колбу.' },
        { en: 'Trees in this forest are mostly conical evergreens.', ru: 'Деревья в этом лесу в основном конические вечнозеленые растения.' }
    ],
    []
),

createRichWord('c1_contra', 'Contra', '/ˈkɒntrə/', 'контрэ', 'Против / Контра', ProficiencyLevel.C1, 'prep', 'Low', 'Formal',
    'Против чего-либо (часто используется как приставка или в выражении "pros and cons" - сокращение от contra).',
    '- Аргумент: "Pro and contra" (За и против)\n- Музыка: "Contra-bass" (Контрабас - приставка)\n- Позиция: "Contra-indication" (Противопоказание)',
    [
        { en: 'We weighed the pros and contras of the decision.', ru: 'Мы взвесили все за и против этого решения.' },
        { en: 'The evidence suggests the contra position.', ru: 'Улики указывают на противоположную позицию.' },
        { en: 'Contra-indications for this drug include pregnancy.', ru: 'Противопоказания к этому препарату включают беременность.' },
        { en: 'He argued contra the established theory.', ru: 'Он выступал против устоявшейся теории.' }
    ],
    []
  ),
createRichWord('c1_corduroy', 'Corduroy', '/ˈkɔːdərɔɪ/', 'кодэрой', 'Вельвет', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Плотная хлопчатобумажная ткань с параллельными бархатистыми рубчиками.',
    '- Одежда: "Corduroy trousers" (Вельветовые брюки)\n- Ткань: "Brown corduroy" (Коричневый вельвет)\n- Текстура: "Ribbed corduroy" (Ребристый вельвет)',
    [
        { en: 'He wore a brown corduroy jacket to the lecture.', ru: 'На лекцию он надел коричневый вельветовый пиджак.' },
        { en: 'Corduroy is a durable fabric often used for workwear.', ru: 'Вельвет — прочная ткань, часто используемая для рабочей одежды.' },
        { en: 'I have a pair of vintage corduroy pants.', ru: 'У меня есть пара винтажных вельветовых штанов.' },
        { en: 'The sofa was covered in soft green corduroy.', ru: 'Диван был обит мягким зеленым вельветом.' }
    ],
    []
),

createRichWord('c1_coriander', 'Coriander', '/ˌkɒriˈændə(r)/', 'кориэндэ', 'Кориандр / Кинза', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Растение, листья и семена которого используются как специя в кулинарии.',
    '- Еда: "Fresh coriander" (Свежая кинза)\n- Специя: "Ground coriander" (Молотый кориандр)\n- Вкус: "Love or hate coriander" (Любить или ненавидеть кинзу)',
    [
        { en: 'Chop some fresh coriander to garnish the curry.', ru: 'Нарежьте свежую кинзу, чтобы украсить карри.' },
        { en: 'Some people think coriander tastes like soap.', ru: 'Некоторые люди считают, что кинза на вкус как мыло.' },
        { en: 'Ground coriander seeds have a citrusy flavour.', ru: 'Молотые семена кориандра имеют цитрусовый привкус.' },
        { en: 'Add coriander and cumin to the spice mix.', ru: 'Добавьте кориандр и тмин в смесь специй.' }
    ],
    []
),

createRichWord('c1_corset', 'Corset', '/ˈkɔːsɪt/', 'косит', 'Корсет', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Плотная женская одежда, которую носят, чтобы придать фигуре форму или поддержать спину.',
    '- Одежда: "Tight corset" (Тесный корсет)\n- История: "Victorian corset" (Викторианский корсет)\n- Действие: "Lace up a corset" (Зашнуровать корсет)',
    [
        { en: 'In the past, women wore corsets to have a tiny waist.', ru: 'В прошлом женщины носили корсеты, чтобы иметь тонкую талию.' },
        { en: 'The corset was so tight she could hardly breathe.', ru: 'Корсет был таким тугим, что она едва могла дышать.' },
        { en: 'Modern corsets are often worn as fashion tops.', ru: 'Современные корсеты часто носят как модные топы.' },
        { en: 'She wears a medical corset for her back pain.', ru: 'Она носит медицинский корсет из-за боли в спине.' }
    ],
    []
),

createRichWord('c1_courtier', 'Courtier', '/ˈkɔːtiə(r)/', 'котиэ', 'Придворный', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, который посещает королевский двор или является спутником монарха.',
    '- История: "Royal courtier" (Королевский придворный)\n- Король: "King\'s courtiers" (Придворные короля)\n- Поведение: "Ambitious courtier" (Амбициозный придворный)',
    [
        { en: 'The king was surrounded by flattering courtiers.', ru: 'Король был окружен льстивыми придворными.' },
        { en: 'A courtier advised the queen on matters of state.', ru: 'Придворный давал королеве советы по государственным делам.' },
        { en: 'Life as a courtier was dangerous in those times.', ru: 'Жизнь придворного в те времена была опасной.' },
        { en: 'The courtiers bowed low when the prince entered.', ru: 'Придворные низко поклонились, когда вошел принц.' }
    ],
    []
),

createRichWord('c1_cowardice', 'Cowardice', '/ˈkaʊədɪs/', 'кауэдис', 'Трусость', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Отсутствие смелости; поведение труса.',
    '- Характер: "Act of cowardice" (Акт трусости)\n- Обвинение: "Accuse of cowardice" (Обвинить в трусости)\n- Мораль: "Show cowardice" (Проявить трусость)',
    [
        { en: 'He was despised for his cowardice in battle.', ru: 'Его презирали за трусость в бою.' },
        { en: 'It takes courage to admit your own cowardice.', ru: 'Нужно мужество, чтобы признать собственную трусость.' },
        { en: 'Running away was seen as a sign of cowardice.', ru: 'Бегство рассматривалось как признак трусости.' },
        { en: 'Cowardice prevented him from speaking the truth.', ru: 'Трусость помешала ему сказать правду.' }
    ],
    []
),

createRichWord('c1_crafty', 'Crafty', '/ˈkrɑːfti/', 'крафти', 'Хитрый / Коварный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Умеющий добиваться желаемого непрямыми или нечестными путями.',
    '- Характер: "Crafty fox" (Хитрый лис)\n- План: "Crafty scheme" (Коварный план)\n- Взгляд: "Crafty look" (Хитрый взгляд)',
    [
        { en: 'He is a crafty politician who knows how to manipulate people.', ru: 'Он хитрый политик, который знает, как манипулировать людьми.' },
        { en: 'She had a crafty look in her eyes.', ru: 'В ее глазах было хитрое выражение.' },
        { en: 'The crafty thief managed to steal the painting unseen.', ru: 'Хитрому вору удалось украсть картину незамеченным.' },
        { en: 'It was a crafty move to distract the opponent.', ru: 'Это был коварный ход, чтобы отвлечь противника.' }
    ],
    []
),

createRichWord('c1_crotch', 'Crotch', '/krɒtʃ/', 'кроч', 'Пах / Промежность', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Часть тела между верхней частью ног; место, где раздваиваются ветки дерева.',
    '- Тело: "Kick in the crotch" (Удар в пах)\n- Одежда: "Tight at the crotch" (Жмет в паху)\n- Дерево: "Crotch of a tree" (Развилка дерева)',
    [
        { en: 'These jeans are too tight in the crotch.', ru: 'Эти джинсы слишком тесные в паху.' },
        { en: 'He sat in the crotch of the apple tree.', ru: 'Он сидел на развилке яблони.' },
        { en: 'The football player wore protection for his crotch.', ru: 'Футболист носил защиту для паха.' },
        { en: 'She held the baby on her hip, near her crotch.', ru: 'Она держала ребенка на бедре.' }
    ],
    []
),

createRichWord('c1_cum', 'Cum', '/kʌm/', 'кам', 'Сперма (сленг) / Плюс', ProficiencyLevel.C1, 'noun', 'High', 'Slang',
    'Грубое сленговое слово для обозначения спермы; (как предлог, лат.) "вместе с" или "плюс".',
    '- Сленг: "Cum shot" (Кадр эякуляции)\n- Предлог: "Bedroom-cum-study" (Спальня-кабинет)\n- Вуз: "Magna cum laude" (С большим почетом)',
    [
        { en: 'The slang word "cum" is considered vulgar.', ru: 'Сленговое слово "cum" считается вульгарным.' },
        { en: 'He uses this room as a bedroom-cum-office.', ru: 'Он использует эту комнату как спальню и офис одновременно.' },
        { en: 'She graduated magna cum laude from Harvard.', ru: 'Она закончила Гарвард с отличием.' },
        { en: 'The biology teacher explained how semen is produced.', ru: 'Учитель биологии объяснил, как вырабатывается сперма.' }
    ],
    [
        { meaning: "Preposition (combined with)", translation: "Совмещенный с / Плюс", example: { en: "A pub-cum-restaurant.", ru: "Паб, совмещенный с рестораном." } }
    ]
),

createRichWord('c1_curd', 'Curd', '/kɜːd/', 'кёд', 'Творожное зерно / Сгусток', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Густая масса, образующаяся при скисании молока (используется для сыра).',
    '- Еда: "Lemon curd" (Лимонный курд/крем)\n- Сыроварение: "Curds and whey" (Творог и сыворотка)\n- Блюдо: "Bean curd" (Тофу)',
    [
        { en: 'Cheese is made by separating curds from whey.', ru: 'Сыр делают, отделяя творожную массу от сыворотки.' },
        { en: 'I love toast with lemon curd.', ru: 'Я обожаю тосты с лимонным кремом.' },
        { en: 'Bean curd, or tofu, is popular in Asian cuisine.', ru: 'Бобовый творог, или тофу, популярен в азиатской кухне.' },
        { en: 'The milk soured and formed curds.', ru: 'Молоко скисло и образовались сгустки.' }
    ],
    []
),

createRichWord('c1_currant', 'Currant', '/ˈkʌrənt/', 'карэнт', 'Смородина / Коринка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Маленькая сушеная ягода винограда или свежая ягода кустарника (смородина).',
    '- Ягода: "Black currant" (Черная смородина)\n- Выпечка: "Currant bun" (Булочка с коринкой)\n- Сад: "Red currant bush" (Куст красной смородины)',
    [
        { en: 'Black currant jam is rich in Vitamin C.', ru: 'Варенье из черной смородины богато витамином С.' },
        { en: 'She baked a cake full of raisins and currants.', ru: 'Она испекла кекс с изюмом и коринкой.' },
        { en: 'We picked red currants from the garden.', ru: 'Мы собирали красную смородину в саду.' },
        { en: 'Do you prefer sultanas or currants?', ru: 'Ты предпочитаешь кишмиш или коринку?' }
    ],
    []
),

createRichWord('c1_cypress', 'Cypress', '/ˈsaɪprəs/', 'сайпрэс', 'Кипарис', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Вечнозеленое дерево с темными листьями, часто сажаемое на кладбищах.',
    '- Дерево: "Tall cypress" (Высокий кипарис)\n- Ландшафт: "Row of cypresses" (Ряд кипарисов)\n- Материал: "Cypress wood" (Древесина кипариса)',
    [
        { en: 'Tall cypress trees lined the driveway.', ru: 'Высокие кипарисы росли вдоль подъездной аллеи.' },
        { en: 'Van Gogh famously painted cypress trees.', ru: 'Ван Гог знаменит своими картинами с кипарисами.' },
        { en: 'The cemetery was shaded by dark cypresses.', ru: 'Кладбище было затенено темными кипарисами.' },
        { en: 'Cypress wood is resistant to rot.', ru: 'Древесина кипариса устойчива к гниению.' }
    ],
    []
),

createRichWord('c1_cyst', 'Cyst', '/sɪst/', 'сист', 'Киста', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Мешочек с жидкостью, который растет внутри тела (обычно безвредный).',
    '- Медицина: "Ovarian cyst" (Киста яичника)\n- Кожа: "Sebaceous cyst" (Жировая киста)\n- Лечение: "Remove a cyst" (Удалить кисту)',
    [
        { en: 'The doctor discovered a cyst on her kidney.', ru: 'Врач обнаружил кисту на ее почке.' },
        { en: 'Most cysts are benign and disappear on their own.', ru: 'Большинство кист доброкачественные и исчезают сами.' },
        { en: 'He had a minor operation to remove a cyst.', ru: 'Ему сделали небольшую операцию по удалению кисты.' },
        { en: 'A cyst can sometimes cause pain if it grows large.', ru: 'Киста иногда может вызывать боль, если вырастает большой.' }
    ],
    []
),

createRichWord('c1_dandelion', 'Dandelion', '/ˈdændɪlaɪən/', 'дэндилайэн', 'Одуванчик', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Распространенный дикий цветок с желтой головкой, которая превращается в белый пушистый шар.',
    '- Цветок: "Yellow dandelion" (Желтый одуванчик)\n- Сад: "Dandelion clock" (Пушистая головка одуванчика)\n- Сорняк: "Remove dandelions" (Удалять одуванчики)',
    [
        { en: 'Children love blowing the seeds off a dandelion.', ru: 'Дети любят сдувать семена с одуванчика.' },
        { en: 'Dandelion leaves can be eaten in salads.', ru: 'Листья одуванчика можно есть в салатах.' },
        { en: 'Gardeners consider the dandelion a weed.', ru: 'Садоводы считают одуванчик сорняком.' },
        { en: 'The field was covered in yellow dandelions.', ru: 'Поле было покрыто желтыми одуванчиками.' }
    ],
    []
),

createRichWord('c1_dank', 'Dank', '/dæŋk/', 'дэнк', 'Сырой / Влажный (неприятно)', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Неприятно влажный и холодный (о месте); (сленг) отличный/крутой (о мемах).',
    '- Место: "Dank basement" (Сырой подвал)\n- Воздух: "Dank air" (Влажный воздух)\n- Сленг: "Dank meme" (Крутой мем)',
    [
        { en: 'The prisoners were kept in a dark, dank cell.', ru: 'Заключенных держали в темной, сырой камере.' },
        { en: 'A dank smell rose from the old well.', ru: 'Из старого колодца поднимался сырой запах.' },
        { en: 'We explored the dank caves near the beach.', ru: 'Мы исследовали сырые пещеры возле пляжа.' },
        { en: 'That is a dank meme you posted.', ru: 'Ты запостил крутой мем.' }
    ],
    []
),

createRichWord('c1_decapitate', 'Decapitate', '/dɪˈkæpɪteɪt/', 'дикэпитейт', 'Обезглавить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Отрубить голову.',
    '- Казнь: "Publicly decapitate" (Публично обезглавить)\n- Авария: "Decapitated by debris" (Обезглавленный обломками)\n- История: "Decapitation strike" (Обезглавливающий удар - воен.)',
    [
        { en: 'In medieval times, traitors were often decapitated.', ru: 'В средневековье предателей часто обезглавливали.' },
        { en: 'The accident decapitated the statue in the park.', ru: 'Авария снесла голову статуе в парке.' },
        { en: 'A decapitation strike aims to remove the leadership.', ru: 'Обезглавливающий удар направлен на устранение руководства.' },
        { en: 'The gruesome murder involved decapitating the victim.', ru: 'Жуткое убийство включало обезглавливание жертвы.' }
    ],
    []
),

createRichWord('c1_decelerate', 'Decelerate', '/ˌdiːˈseləreɪt/', 'диселэрейт', 'Замедлять(ся)', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Снижать скорость (противоположность accelerate).',
    '- Движение: "Vehicle decelerates" (Транспорт замедляется)\n- Экономика: "Growth decelerates" (Рост замедляется)\n- Физика: "Decelerate smoothly" (Плавно замедлиться)',
    [
        { en: 'The car began to decelerate as it approached the lights.', ru: 'Машина начала замедляться, приближаясь к светофору.' },
        { en: 'Economic growth has decelerated this year.', ru: 'Экономический рост замедлился в этом году.' },
        { en: 'You should decelerate before entering the curve.', ru: 'Вам следует снизить скорость перед входом в поворот.' },
        { en: 'The train decelerated smoothly to a halt.', ru: 'Поезд плавно замедлился до полной остановки.' }
    ],
    []
),

createRichWord('c1_decibel', 'Decibel', '/ˈdesɪbel/', 'дэсибел', 'Децибел', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Единица измерения громкости звука.',
    '- Звук: "High decibel" (Высокий уровень децибел)\n- Измерение: "Measure in decibels" (Измерять в децибелах)\n- Шум: "Decibel level" (Уровень шума)',
    [
        { en: 'The noise level reached 100 decibels.', ru: 'Уровень шума достиг 100 децибел.' },
        { en: 'Prolonged exposure to high decibels damages hearing.', ru: 'Длительное воздействие высоких децибел вредит слуху.' },
        { en: 'A whisper is about 30 decibels.', ru: 'Шепот составляет около 30 децибел.' },
        { en: 'The concert was loud, registering many decibels.', ru: 'Концерт был громким, регистрируя много децибел.' }
    ],
    []
),

createRichWord('c1_decked', 'Decked', '/dekt/', 'дэкт', 'Украшенный / Одетый', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Украшенный чем-либо; одетый (часто нарядно); (сленг) сбитый с ног ударом.',
    '- Праздник: "Decked out" (Наряженный/Украшенный)\n- Рождество: "Deck the halls" (Украшать залы)\n- Удар: "Decked him" (Вырубил его)',
    [
        { en: 'The hall was decked with flowers and ribbons.', ru: 'Зал был украшен цветами и лентами.' },
        { en: 'She was decked out in her finest jewellery.', ru: 'Она была выряжена в свои лучшие украшения.' },
        { en: 'He got angry and decked the guy in the bar.', ru: 'Он разозлился и вырубил парня в баре.' },
        { en: 'The streets were decked with flags for the parade.', ru: 'Улицы были украшены флагами к параду.' }
    ],
    []
),

createRichWord('c1_defraud', 'Defraud', '/dɪˈfrɔːd/', 'дифрод', 'Обирать / Мошенничать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Незаконно отнять у кого-то деньги или права путем обмана.',
    '- Преступление: "Defraud investors" (Обмануть инвесторов)\n- Деньги: "Defraud of money" (Выманить деньги)\n- Система: "Defraud the system" (Обмануть систему)',
    [
        { en: 'He attempted to defraud the bank of millions.', ru: 'Он попытался обмануть банк на миллионы.' },
        { en: 'She was charged with conspiring to defraud the government.', ru: 'Ее обвинили в сговоре с целью обмана правительства.' },
        { en: 'They defrauded elderly people out of their savings.', ru: 'Они выманили у пожилых людей их сбережения.' },
        { en: 'To defraud the tax office is a serious crime.', ru: 'Обмануть налоговую — серьезное преступление.' }
    ],
    []
),

createRichWord('c1_deity', 'Deity', '/ˈdeɪəti/', 'дейэти', 'Божество', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Бог или богиня (в религии).',
    '- Религия: "Pagan deity" (Языческое божество)\n- Поклонение: "Worship a deity" (Поклоняться божеству)\n- Статус: "Supreme deity" (Верховное божество)',
    [
        { en: 'Zeus was the supreme deity in Greek mythology.', ru: 'Зевс был верховным божеством в греческой мифологии.' },
        { en: 'They built a temple to the local deity.', ru: 'Они построили храм местному божеству.' },
        { en: 'The sun was worshipped as a deity.', ru: 'Солнцу поклонялись как божеству.' },
        { en: 'Hinduism has many deities.', ru: 'В индуизме много божеств.' }
    ],
    []
),

createRichWord('c1_delicatessen', 'Delicatessen', '/ˌdelɪkəˈtesn/', 'дэликэтэсн', 'Гастроном / Кулинария', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Магазин, продающий готовую еду и деликатесы (часто сокр. deli).',
    '- Магазин: "Local delicatessen" (Местная кулинария)\n- Еда: "Delicatessen counter" (Прилавок с гастрономией)\n- Сокращение: "Go to the deli" (Пойти в гастроном)',
    [
        { en: 'We bought some cheese and ham at the delicatessen.', ru: 'Мы купили сыр и ветчину в гастрономе.' },
        { en: 'The delicatessen sells high-quality meats.', ru: 'В кулинарии продается высококачественное мясо.' },
        { en: 'Let\'s grab a sandwich from the deli.', ru: 'Давай возьмем сэндвич в кулинарии.' },
        { en: 'A Jewish delicatessen is famous for its bagels.', ru: 'Еврейская кулинария славится своими бейглами.' }
    ],
    []
),

createRichWord('c1_delirious', 'Delirious', '/dɪˈlɪriəs/', 'дилириэс', 'Бредящий / Безумно рад', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Находящийся в состоянии бреда (из-за болезни); чрезвычайно счастливый.',
    '- Болезнь: "High fever made him delirious" (Высокая температура вызвала у него бред)\n- Счастье: "Delirious with joy" (Вне себя от радости)\n- Состояние: "Delirious state" (Бредовое состояние)',
    [
        { en: 'He was delirious with fever and talking nonsense.', ru: 'Он бредил от лихорадки и нес чепуху.' },
        { en: 'The fans were delirious when their team won.', ru: 'Фанаты обезумели от радости, когда их команда победила.' },
        { en: 'She became delirious after days without water.', ru: 'Она начала бредить после нескольких дней без воды.' },
        { en: 'We were delirious with happiness at the news.', ru: 'Мы были вне себя от счастья от этой новости.' }
    ],
    []
),

createRichWord('c1_demonstrable', 'Demonstrable', '/dɪˈmɒnstrəbl/', 'димонстрэбл', 'Очевидный / Доказуемый', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'То, что можно ясно показать или доказать.',
    '- Факт: "Demonstrable truth" (Очевидная истина)\n- Доказательство: "Demonstrable proof" (Наглядное доказательство)\n- Ошибка: "Demonstrable lack of" (Очевидная нехватка)',
    [
        { en: 'There is a demonstrable link between smoking and cancer.', ru: 'Существует доказуемая связь между курением и раком.' },
        { en: 'The project was a demonstrable success.', ru: 'Проект имел очевидный успех.' },
        { en: 'He showed a demonstrable lack of interest.', ru: 'Он проявил очевидное отсутствие интереса.' },
        { en: 'We need demonstrable results, not just theories.', ru: 'Нам нужны наглядные результаты, а не просто теории.' }
    ],
    []
),

createRichWord('c1_descriptor', 'Descriptor', '/dɪˈskrɪptə(r)/', 'дискриптэ', 'Дескриптор / Описание', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Слово или фраза, используемая для описания или идентификации чего-либо (в информатике/лингвистике).',
    '- Текст: "Key descriptor" (Ключевой описатель)\n- Данные: "File descriptor" (Дескриптор файла)\n- Язык: "Adjective as descriptor" (Прилагательное как описатель)',
    [
        { en: 'Use clear descriptors to categorize the items.', ru: 'Используйте четкие дескрипторы для категоризации предметов.' },
        { en: 'The term "hero" is not an accurate descriptor for him.', ru: 'Термин "герой" не является точным описанием для него.' },
        { en: 'Search engines use descriptors to index pages.', ru: 'Поисковые системы используют дескрипторы для индексации страниц.' },
        { en: 'The best descriptor for the taste is "bittersweet".', ru: 'Лучшее описание вкуса — "горько-сладкий".' }
    ],
    []
),

createRichWord('c1_despicable', 'Despicable', '/dɪˈspɪkəbl/', 'диспикэбл', 'Гадкий / Презренный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Заслуживающий ненависти и презрения; очень плохой.',
    '- Поступок: "Despicable crime" (Гнусное преступление)\n- Человек: "Despicable liar" (Презренный лжец)\n- Поведение: "Act in a despicable way" (Поступать подло)',
    [
        { en: 'Stealing from the poor is a despicable act.', ru: 'Воровство у бедных — это гнусный поступок.' },
        { en: 'He is a despicable man with no morals.', ru: 'Он презренный человек без морали.' },
        { en: 'It was despicable of you to lie to her.', ru: 'Было подло с твоей стороны врать ей.' },
        { en: 'The movie villain was truly despicable.', ru: 'Злодей в фильме был поистине омерзителен.' }
    ],
    []
),

createRichWord('c1_dill', 'Dill', '/dɪl/', 'дил', 'Укроп', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Трава с тонкими листьями, используемая в кулинарии (особенно с рыбой и огурцами).',
    '- Еда: "Fresh dill" (Свежий укроп)\n- Вкус: "Dill pickle" (Соленый огурец с укропом)\n- Соус: "Dill sauce" (Укропный соус)',
    [
        { en: 'Salmon tastes delicious with lemon and dill.', ru: 'Лосось очень вкусен с лимоном и укропом.' },
        { en: 'She added chopped dill to the potato salad.', ru: 'Она добавила нарезанный укроп в картофельный салат.' },
        { en: 'Dill is commonly used in Scandinavian cooking.', ru: 'Укроп широко используется в скандинавской кухне.' },
        { en: 'I love the smell of fresh dill.', ru: 'Я обожаю запах свежего укропа.' }
    ],
    []
  ),
  createRichWord('c1_defendant', 'Defendant', '/dɪˈfen.dənt/', 'дифендэнт', 'Подсудимый / Ответчик', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, которого обвиняют в суде в совершении преступления.',
    '- Суд: "The defendant stood up" (Подсудимый встал)\n- Право: "Rights of the defendant" (Права подсудимого)\n- Вердикт: "Find the defendant guilty" (Признать подсудимого виновным)',
    [
      { en: 'The defendant pleaded not guilty.', ru: 'Подсудимый не признал себя виновным.' },
      { en: 'The jury looked at the defendant.', ru: 'Присяжные смотрели на подсудимого.' },
      { en: 'The defendant was released on bail.', ru: 'Ответчик был освобожден под залог.' },
      { en: 'Evidence was presented against the defendant.', ru: 'Против подсудимого были представлены доказательства.' }
    ],
    []
  ),

  createRichWord('c1_deficit', 'Deficit', '/ˈdef.ɪ.sɪt/', 'дэфисит', 'Дефицит', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Сумма, на которую расходы превышают доходы; нехватка чего-либо.',
    '- Бюджет: "Budget deficit" (Бюджетный дефицит)\n- Торговля: "Trade deficit" (Торговый дефицит)\n- Внимание: "Attention deficit" (Дефицит внимания)',
    [
      { en: 'The government is trying to reduce the deficit.', ru: 'Правительство пытается сократить дефицит.' },
      { en: 'We are facing a deficit of skilled workers.', ru: 'Мы сталкиваемся с нехваткой (дефицитом) квалифицированных рабочих.' },
      { en: 'The company reported a substantial deficit.', ru: 'Компания сообщила о значительном дефиците.' },
      { en: 'He suffers from attention deficit disorder.', ru: 'Он страдает синдромом дефицита внимания.' }
    ],
    []
  ),

  createRichWord('c1_delegate', 'Delegate', '/ˈdel.ɪ.ɡeɪt/', 'дэлигейт', 'Делегировать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Передавать часть своей работы или власти кому-то другому (глагол). Сущ: Делегат /dɛlɪɡət/.',
    '- Работа: "Delegate tasks" (Делегировать задачи)\n- Власть: "Delegate authority" (Делегировать полномочия)\n- Ответственность: "Learn to delegate" (Научиться делегировать)',
    [
      { en: 'A good manager knows how to delegate.', ru: 'Хороший менеджер знает, как делегировать.' },
      { en: 'She delegated the task to her assistant.', ru: 'Она поручила (делегировала) задачу своему ассистенту.' },
      { en: 'Authority was delegated to the local commanders.', ru: 'Полномочия были делегированы местным командирам.' },
      { en: 'Don\'t try to do everything yourself, delegate!', ru: 'Не пытайся делать все сам, делегируй!' }
    ],
    [
      { meaning: "Representative (noun /dɛlɪɡət/)", translation: "Делегат / Представитель", example: { en: "The conference delegates.", ru: "Делегаты конференции." } }
    ]
  ),

  createRichWord('c1_deliberate', 'Deliberate', '/dɪˈlɪb.ər.ət/', 'дилибэрэт', 'Преднамеренный / Умышленный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Сделанный сознательно и намеренно (часто о чем-то плохом).',
    '- Действие: "Deliberate attack" (Преднамеренная атака)\n- Ложь: "Deliberate lie" (Умышленная ложь)\n- Попытка: "Deliberate attempt" (Намеренная попытка)',
    [
      { en: 'It was a deliberate attempt to hide the truth.', ru: 'Это была преднамеренная попытка скрыть правду.' },
      { en: 'I don\'t think it was an accident, it looked deliberate.', ru: 'Я не думаю, что это была случайность, это выглядело умышленно.' },
      { en: 'He made a deliberate mistake.', ru: 'Он совершил умышленную ошибку.' },
      { en: 'The speech was a deliberate insult.', ru: 'Речь была намеренным оскорблением.' }
    ],
    [
      { meaning: "To think carefully (verb)", translation: "Обдумывать", example: { en: "The jury deliberated for days.", ru: "Присяжные совещались (обдумывали) несколько дней." } }
    ]
  ),

  createRichWord('c1_depict', 'Depict', '/dɪˈpɪkt/', 'дипикт', 'Изображать / Описывать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Показывать что-то на картине или описывать словами (синоним portray).',
    '- Искусство: "Depict a scene" (Изобразить сцену)\n- Описание: "Depict life" (Описывать жизнь)\n- Характер: "Depicted as a hero" (Изображен как герой)',
    [
      { en: 'The painting depicts a battle scene.', ru: 'Картина изображает сцену битвы.' },
      { en: 'The novel depicts life in the 19th century.', ru: 'Роман описывает жизнь в 19 веке.' },
      { en: 'He was depicted as a cruel tyrant.', ru: 'Он был изображен как жестокий тиран.' },
      { en: 'The artist tried to depict the emotion of fear.', ru: 'Художник пытался изобразить эмоцию страха.' }
    ],
    []
  ),

  createRichWord('c1_deputy', 'Deputy', '/ˈdep.jə.ti/', 'депьюти', 'Заместитель / Депутат', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, чей ранг ниже главы организации, и который замещает его при необходимости.',
    '- Ранг: "Deputy director" (Заместитель директора)\n- Роль: "Act as deputy" (Действовать как заместитель)\n- Политика: "Deputy Prime Minister" (Вице-премьер)',
    [
      { en: 'I am acting as deputy while the boss is away.', ru: 'Я исполняю обязанности заместителя, пока босс в отъезде.' },
      { en: 'The deputy sheriff arrived at the scene.', ru: 'Помощник шерифа прибыл на место происшествия.' },
      { en: 'She was appointed Deputy Head.', ru: 'Она была назначена заместителем главы.' },
      { en: 'He delegated the work to his deputy.', ru: 'Он передал работу своему заместителю.' }
    ],
    []
  ),

  createRichWord('c1_derive', 'Derive', '/dɪˈraɪv/', 'дирайв', 'Происходить / Извлекать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Получать что-то из источника; происходить от чего-то (о словах).',
    '- Источник: "Derive benefit" (Извлекать выгоду)\n- Этимология: "Derived from Latin" (Происходит от латыни)\n- Удовольствие: "Derive pleasure" (Получать удовольствие)',
    [
      { en: 'Many English words are derived from Latin.', ru: 'Многие английские слова происходят от латыни.' },
      { en: 'He derives great pleasure from painting.', ru: 'Он получает большое удовольствие от рисования.' },
      { en: 'The drug is derived from a plant.', ru: 'Лекарство получено из растения.' },
      { en: 'We can derive a rule from these examples.', ru: 'Мы можем вывести правило из этих примеров.' }
    ],
    []
  ),

  createRichWord('c1_designate', 'Designate', '/ˈdez.ɪɡ.neɪt/', 'дезигнейт', 'Назначать / Обозначать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Официально выбрать кого-то для работы; или пометить что-то определенным знаком/названием.',
    '- Место: "Designated area" (Отведенная зона)\n- Назначение: "Designate a successor" (Назначить преемника)\n- Символ: "Designated by a cross" (Обозначено крестиком)',
    [
      { en: 'This area is designated for smoking.', ru: 'Эта зона отведена для курения.' },
      { en: 'He was designated as the team leader.', ru: 'Он был назначен лидером команды.' },
      { en: 'The red lines designate no parking zones.', ru: 'Красные линии обозначают зоны, где парковка запрещена.' },
      { en: 'The President designate will take office soon.', ru: 'Избранный (назначенный) президент скоро вступит в должность.' }
    ],
    []
  ),

  createRichWord('c1_devastate', 'Devastate', '/ˈdev.ə.steɪt/', 'дэвэстейт', 'Опустошать / Потрясать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Полностью разрушить место; или вызвать у кого-то сильный шок и горе.',
    '- Разрушение: "Devastate the city" (Опустошить город)\n- Чувства: "Absolutely devastated" (Совершенно раздавлен горем)\n- Прил: "Devastating news" (Потрясающие/ужасные новости)',
    [
      { en: 'The bomb devastated the city centre.', ru: 'Бомба опустошила центр города.' },
      { en: 'She was devastated by the death of her father.', ru: 'Она была раздавлена смертью отца.' },
      { en: 'The flood had a devastating effect on the village.', ru: 'Наводнение оказало разрушительное воздействие на деревню.' },
      { en: 'It was a devastating loss for the team.', ru: 'Это была сокрушительная потеря для команды.' }
    ],
    []
  ),

  createRichWord('c1_dictate', 'Dictate', '/dɪkˈteɪt/', 'диктейт', 'Диктовать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Говорить слова, чтобы кто-то их записал; или приказывать кому-то, что делать.',
    '- Текст: "Dictate a letter" (Диктовать письмо)\n- Условия: "Dictate terms" (Диктовать условия)\n- Контроль: "Don\'t dictate to me" (Не указывай мне)',
    [
      { en: 'He dictated a letter to his secretary.', ru: 'Он продиктовал письмо своему секретарю.' },
      { en: 'I won\'t let anyone dictate how I live my life.', ru: 'Я не позволю никому диктовать, как мне жить.' },
      { en: 'The weather will dictate our plans.', ru: 'Погода продиктует (определит) наши планы.' },
      { en: 'The conquerors dictated peace terms.', ru: 'Завоеватели продиктовали условия мира.' }
    ],
    []
  ),

  createRichWord('c1_discharge', 'Discharge', '/dɪsˈtʃɑːdʒ/', 'дисчадж', 'Выписывать / Выделять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Официально разрешить уйти (из больницы/армии); или выпускать газ/жидкость.',
    '- Больница: "Discharge from hospital" (Выписать из больницы)\n- Жидкость: "Discharge waste" (Сбрасывать отходы)\n- Долг: "Discharge a duty" (Исполнить обязанность)',
    [
      { en: 'He was discharged from the hospital yesterday.', ru: 'Его выписали из больницы вчера.' },
      { en: 'The factory discharges chemicals into the river.', ru: 'Фабрика сбрасывает химикаты в реку.' },
      { en: 'She was discharged from the army after the injury.', ru: 'Ее уволили из армии после травмы.' },
      { en: 'The wound discharged some pus.', ru: 'Из раны выделился гной.' }
    ],
    []
  ),

  createRichWord('c1_discreet', 'Discreet', '/dɪˈskriːt/', 'дискрит', 'Сдержанный / Осторожный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Осторожный в словах и действиях, чтобы не выдать секрет или не привлечь внимания.',
    '- Поведение: "Be discreet" (Быть сдержанным)\n- Внешность: "Discreet enquiry" (Осторожный запрос)\n- Дизайн: "Discreet logo" (Неброский логотип)',
    [
      { en: 'Please be discreet about my plans.', ru: 'Пожалуйста, будь сдержан по поводу моих планов.' },
      { en: 'We made a discreet exit from the party.', ru: 'Мы незаметно (осторожно) ушли с вечеринки.' },
      { en: 'He is very discreet, he won\'t tell anyone.', ru: 'Он очень сдержан, он никому не расскажет.' },
      { en: 'They met at a discreet location.', ru: 'Они встретились в укромном месте.' }
    ],
    []
  ),

  createRichWord('c1_discriminate', 'Discriminate', '/dɪˈskrɪm.ɪ.neɪt/', 'дискриминейт', 'Дискриминировать / Различать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Относиться к кому-то хуже из-за расы/пола; или видеть тонкую разницу (формально).',
    '- Несправедливость: "Discriminate against" (Дискриминировать кого-то)\n- Различие: "Discriminate between" (Различать между)\n- Вкус: "Discriminating taste" (Изысканный/разборчивый вкус)',
    [
      { en: 'It is illegal to discriminate based on race.', ru: 'Незаконно дискриминировать на основе расы.' },
      { en: 'Employers must not discriminate against women.', ru: 'Работодатели не должны дискриминировать женщин.' },
      { en: 'The law discriminates in favour of the rich.', ru: 'Закон делает различия в пользу богатых.' },
      { en: 'It is hard to discriminate between the two varieties.', ru: 'Трудно различить эти два сорта.' }
    ],
    []
  ),

  createRichWord('c1_dismiss', 'Dismiss', '/dɪˈsmɪs/', 'дис-мис', 'Увольнять / Отвергать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Отказаться рассматривать идею; уволить с работы; отпустить (класс/солдат).',
    '- Идея: "Dismiss an idea" (Отвергнуть идею)\n- Работа: "Dismiss an employee" (Уволить сотрудника)\n- Собрание: "Class dismissed" (Урок окончен/свободны)',
    [
      { en: 'He dismissed the suggestion as nonsense.', ru: 'Он отверг это предложение как чепуху.' },
      { en: 'She was dismissed for being late.', ru: 'Ее уволили за опоздания.' },
      { en: 'The judge dismissed the case due to lack of evidence.', ru: 'Судья закрыл дело из-за нехватки доказательств.' },
      { en: 'Let\'s not dismiss this possibility yet.', ru: 'Давай пока не будем отвергать эту возможность.' }
    ],
    []
  ),

  createRichWord('c1_dispose', 'Dispose', '/dɪˈspəʊz/', 'диспоуз', 'Распоряжаться / Избавляться', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Избавляться от чего-то (с предлогом of); расставлять или склонять к чему-то.',
    '- Мусор: "Dispose of waste" (Избавляться от отходов)\n- Имущество: "Dispose of assets" (Распоряжаться активами)\n- Настрой: "Well disposed" (Доброжелательно настроенный)',
    [
      { en: 'How should I dispose of these old batteries?', ru: 'Как мне избавиться от этих старых батареек?' },
      { en: 'He disposed of the evidence quickly.', ru: 'Он быстро избавился от улик.' },
      { en: 'Man proposes, God disposes.', ru: 'Человек предполагает, а Бог располагает.' },
      { en: 'The troops were disposed along the river.', ru: 'Войска были расположены вдоль реки.' }
    ],
    []
  ),

  createRichWord('c1_dispute', 'Dispute', '/dɪˈspjuːt/', 'диспьют', 'Спор / Оспаривать', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Серьезный спор или разногласие (сущ.); подвергать сомнению (глагол).',
    '- Конфликт: "Border dispute" (Пограничный спор)\n- Работа: "Industrial dispute" (Трудовой спор)\n- Фраза: "Beyond dispute" (Бесспорно)',
    [
      { en: 'They are in a dispute over the land.', ru: 'У них спор из-за земли.' },
      { en: 'I do not dispute his facts, only his conclusion.', ru: 'Я не оспариваю его факты, только его вывод.' },
      { en: 'The matter is still under dispute.', ru: 'Этот вопрос все еще является предметом спора.' },
      { en: 'It is beyond dispute that he is the best.', ru: 'Бесспорно, что он лучший.' }
    ],
    []
  ),

  createRichWord('c1_disrupt', 'Disrupt', '/dɪsˈrʌpt/', 'дисрапт', 'Срывать / Нарушать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Прерывать нормальный ход чего-либо, вызывая беспорядок.',
    '- Процесс: "Disrupt the meeting" (Сорвать встречу)\n- Движение: "Disrupt traffic" (Нарушить движение)\n- Сон: "Disrupt sleep" (Нарушить сон)',
    [
      { en: 'Protesters tried to disrupt the conference.', ru: 'Протестующие пытались сорвать конференцию.' },
      { en: 'Heavy snow disrupted rail services.', ru: 'Сильный снегопад нарушил железнодорожное сообщение.' },
      { en: 'Technology is disrupting traditional industries.', ru: 'Технологии подрывают (меняют) традиционные индустрии.' },
      { en: 'Don\'t disrupt the class.', ru: 'Не срывай урок.' }
    ],
    []
  ),

  createRichWord('c1_distinct', 'Distinct', '/dɪˈstɪŋkt/', 'дистинкт', 'Отчетливый / Особый', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Ясно различимый; или явно отличающийся от других.',
    '- Восприятие: "Distinct smell" (Отчетливый запах)\n- Различие: "Distinct types" (Особые/разные типы)\n- Ясность: "Distinct possibility" (Явная возможность)',
    [
      { en: 'There was a distinct smell of burning.', ru: 'Был отчетливый запах гари.' },
      { en: 'The two concepts are quite distinct.', ru: 'Эти две концепции совершенно различны.' },
      { en: 'He speaks with a distinct accent.', ru: 'Он говорит с отчетливым акцентом.' },
      { en: 'There is a distinct possibility that he will win.', ru: 'Существует явная возможность, что он победит.' }
    ],
    []
  ),
  createRichWord('c1_drift', 'Drift', '/drɪft/', 'дрифт', 'Дрейфовать / Плыть по течению', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Медленно перемещаться ветром или водой; терять цель в жизни; общий смысл (сущ.).',
    '- Движение: "Drift away" (Уплывать / Отдаляться)\n- Снег: "Snow drift" (Сугроб - сущ.)\n- Смысл: "Get the drift" (Уловить суть)',
    [
      { en: 'The boat started to drift out to sea.', ru: 'Лодка начала дрейфовать в открытое море.' },
      { en: 'He drifted from job to job without a plan.', ru: 'Он плыл по течению от работы к работе без плана.' },
      { en: 'I drifted off to sleep while watching TV.', ru: 'Я задремал (плавно погрузился в сон), пока смотрел телевизор.' },
      { en: 'Do you catch my drift?', ru: 'Ты улавливаешь мою мысль?' },
    ],
    []
  ),

  createRichWord('c1_elaborate', 'Elaborate', '/iˈlæb.ər.ət/', 'илэбэрэт', 'Тщательно разработанный / Уточнять', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Сложный и детальный (прил.); объяснять подробнее (гл. /reɪt/).',
    '- Детали: "Elaborate plan" (Тщательно продуманный план)\n- Стиль: "Elaborate design" (Изысканный дизайн)\n- Глагол: "Elaborate on" (Уточнить / Рассказать подробнее)',
    [
      { en: 'They made elaborate preparations for the wedding.', ru: 'Они сделали тщательные приготовления к свадьбе.' },
      { en: 'Can you elaborate on your idea?', ru: 'Можете ли вы рассказать подробнее о своей идее?' },
      { en: 'The pattern on the carpet was very elaborate.', ru: 'Узор на ковре был очень сложным (изысканным).' },
      { en: 'He refused to elaborate further.', ru: 'Он отказался давать дальнейшие разъяснения.' },
    ],
    []
  ),

  createRichWord('c1_elevate', 'Elevate', '/ˈel.ɪ.veɪt/', 'эливейт', 'Повышать / Поднимать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Поднимать на более высокий уровень или позицию (формально).',
    '- Статус: "Elevate status" (Повысить статус)\n- Физически: "Elevate legs" (Приподнять ноги)\n- Настроение: "Elevate mood" (Поднять настроение)',
    [
      { en: 'He was elevated to the position of manager.', ru: 'Его повысили до должности менеджера.' },
      { en: 'Reading can elevate the mind.', ru: 'Чтение может возвысить разум.' },
      { en: 'Elevate your injured leg to reduce swelling.', ru: 'Приподнимите травмированную ногу, чтобы уменьшить отек.' },
      { en: 'We aim to elevate the standard of living.', ru: 'Мы стремимся повысить уровень жизни.' },
    ],
    []
  ),

  createRichWord('c1_eliminate', 'Eliminate', '/iˈlɪm.ɪ.neɪt/', 'илиминейт', 'Устранять / Ликвидировать', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Полностью удалять что-то; исключать из соревнования.',
    '- Проблема: "Eliminate the problem" (Устранить проблему)\n- Спорт: "Eliminated from the tournament" (Выбыл из турнира)\n- Риск: "Eliminate risk" (Исключить риск)',
    [
      { en: 'We need to eliminate all errors from the text.', ru: 'Нам нужно устранить все ошибки из текста.' },
      { en: 'The police plan to eliminate crime in this area.', ru: 'Полиция планирует ликвидировать преступность в этом районе.' },
      { en: 'Our team was eliminated in the semi-finals.', ru: 'Наша команда выбыла в полуфинале.' },
      { en: 'A healthy diet helps eliminate toxins.', ru: 'Здоровая диета помогает выводить (устранять) токсины.' },
    ],
    []
  ),

  createRichWord('c1_elite', 'Elite', '/iˈliːt/', 'илит', 'Элита / Элитный', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Лучшая или самая могущественная группа людей; отборный.',
    '- Армия: "Elite troops" (Элитные войска)\n- Общество: "Ruling elite" (Правящая элита)\n- Спорт: "Elite athlete" (Спортсмен высшего класса)',
    [
      { en: 'Only the elite were invited to the palace.', ru: 'Только элита была приглашена во дворец.' },
      { en: 'He belongs to the country\'s political elite.', ru: 'Он принадлежит к политической элите страны.' },
      { en: 'These are elite soldiers trained for special missions.', ru: 'Это элитные солдаты, обученные для особых миссий.' },
      { en: 'Elite universities are very hard to get into.', ru: 'В элитные университеты очень трудно попасть.' },
    ],
    []
  ),

  createRichWord('c1_emit', 'Emit', '/iˈmɪt/', 'имит', 'Испукать / Выделять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Выбрасывать свет, звук, газ или запах.',
    '- Газ: "Emit carbon dioxide" (Выделять углекислый газ)\n- Звук: "Emit a sound" (Издать звук)\n- Свет: "Emit light" (Излучать свет)',
    [
      { en: 'The volcano emitted a cloud of ash.', ru: 'Вулкан выбросил облако пепла.' },
      { en: 'Cars emit harmful gases into the atmosphere.', ru: 'Машины выбрасывают вредные газы в атмосферу.' },
      { en: 'The device emits a high-pitched noise.', ru: 'Устройство издает высокочастотный шум.' },
      { en: 'Fireflies emit light at night.', ru: 'Светлячки излучают свет ночью.' },
    ],
    []
  ),

  createRichWord('c1_endorse', 'Endorse', '/ɪnˈdɔːs/', 'индос', 'Одобрять / Поддерживать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Публично выразить поддержку; рекламировать продукт (о знаменитостях).',
    '- Политика: "Endorse a candidate" (Поддержать кандидата)\n- Реклама: "Endorse a product" (Рекламировать продукт)\n- Документ: "Endorse a cheque" (Индоссировать чек)',
    [
      { en: 'The newspaper endorsed the president for reelection.', ru: 'Газета поддержала президента на перевыборах.' },
      { en: 'Famous athletes often endorse sports shoes.', ru: 'Известные спортсмены часто рекламируют спортивную обувь.' },
      { en: 'I cannot endorse this behaviour.', ru: 'Я не могу одобрить это поведение.' },
      { en: 'The committee fully endorsed the proposal.', ru: 'Комитет полностью одобрил предложение.' },
    ],
    []
  ),

  createRichWord('c1_enforce', 'Enforce', '/ɪnˈfɔːs/', 'инфос', 'Обеспечивать соблюдение / Принуждать', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Заставлять людей подчиняться закону или правилу.',
    '- Закон: "Enforce the law" (Обеспечивать соблюдение закона)\n- Правила: "Enforce rules" (Насаждать правила)\n- Меры: "Strictly enforced" (Строго соблюдаемый)',
    [
      { en: 'It is the job of the police to enforce the law.', ru: 'Задача полиции — обеспечивать соблюдение закона.' },
      { en: 'The new regulations will be strictly enforced.', ru: 'Новые правила будут строго соблюдаться (принудительно).' },
      { en: 'It is difficult to enforce silence in a classroom.', ru: 'Трудно добиться тишины в классе.' },
      { en: 'They enforce a strict dress code.', ru: 'Они насаждают строгий дресс-код.' },
    ],
    []
  ),

  createRichWord('c1_entitle', 'Entitle', '/ɪnˈtaɪ.təl/', 'интайтл', 'Давать право / Озаглавливать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Давать кому-то официальное право на что-то; давать название книге.',
    '- Право: "Entitled to benefits" (Имеющий право на льготы)\n- Книга: "Book entitled..." (Книга под названием...)\n- Чувство: "Feel entitled" (Чувствовать, что тебе все должны)',
    [
      { en: 'Buying a ticket entitles you to a free drink.', ru: 'Покупка билета дает вам право на бесплатный напиток.' },
      { en: 'You are entitled to your own opinion.', ru: 'Вы имеете право на собственное мнение.' },
      { en: 'He wrote a poem entitled "The Sea".', ru: 'Он написал стихотворение под названием "Море".' },
      { en: 'Employees are entitled to twenty days of holiday.', ru: 'Сотрудники имеют право на двадцать дней отпуска.' },
    ],
    []
  ),

  createRichWord('c1_exceed', 'Exceed', '/ɪkˈsiːd/', 'иксид', 'Превышать', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Быть больше, чем определенное число или количество; выходить за пределы.',
    '- Скорость: "Exceed the speed limit" (Превышать скорость)\n- Ожидания: "Exceed expectations" (Превзойти ожидания)\n- Бюджет: "Exceed the budget" (Превысить бюджет)',
    [
      { en: 'Drivers who exceed the speed limit will be fined.', ru: 'Водители, превышающие скорость, будут оштрафованы.' },
      { en: 'The final cost exceeded our initial estimate.', ru: 'Окончательная стоимость превысила нашу первоначальную оценку.' },
      { en: 'His performance exceeded all expectations.', ru: 'Его выступление превзошло все ожидания.' },
      { en: 'Do not exceed the recommended dose.', ru: 'Не превышайте рекомендуемую дозу.' },
    ],
    []
  ),

  createRichWord('c1_excess', 'Excess', '/ɪkˈses/', 'иксес', 'Избыток / Лишний', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Больше, чем нужно или разрешено.',
    '- Вес: "Excess baggage" (Лишний багаж)\n- Количество: "In excess of" (Свыше / Более чем)\n- Поведение: "Drink to excess" (Пить чрезмерно)',
    [
      { en: 'You have to pay for excess baggage.', ru: 'Вам нужно заплатить за лишний багаж.' },
      { en: 'An excess of fat in your diet is unhealthy.', ru: 'Избыток жира в вашем рационе вреден для здоровья.' },
      { en: 'The car was travelling in excess of 100 mph.', ru: 'Машина ехала со скоростью свыше 100 миль в час.' },
      { en: 'He eats to excess when he is stressed.', ru: 'Он чрезмерно ест, когда находится в стрессе.' },
    ],
    []
  ),

  createRichWord('c1_exclusive', 'Exclusive', '/ɪkˈskluː.sɪv/', 'иксклюсив', 'Эксклюзивный / Исключительный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Доступный только одной группе людей; дорогой и элитный; не включающий других.',
    '- Доступ: "Exclusive rights" (Эксклюзивные права)\n- Место: "Exclusive club" (Элитный клуб)\n- Интервью: "Exclusive interview" (Эксклюзивное интервью)',
    [
      { en: 'This offer is exclusive to our members.', ru: 'Это предложение доступно только (эксклюзивно) для наших членов.' },
      { en: 'They live in an exclusive neighbourhood.', ru: 'Они живут в элитном районе.' },
      { en: 'The magazine published an exclusive interview.', ru: 'Журнал опубликовал эксклюзивное интервью.' },
      { en: 'The prices are exclusive of tax.', ru: 'Цены указаны без учета налога (налог исключен).' },
    ],
    []
  ),

  createRichWord('c1_execute', 'Execute', '/ˈek.sɪ.kjuːt/', 'эксикьют', 'Казнить / Выполнять', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Убить кого-то как законное наказание; или выполнить план/команду (формально).',
    '- Наказание: "To be executed" (Быть казненным)\n- План: "Execute a plan" (Выполнить план)\n- Компьютер: "Execute command" (Выполнить команду)',
    [
      { en: 'The prisoner was executed at dawn.', ru: 'Заключенный был казнен на рассвете.' },
      { en: 'We need to execute the plan perfectly.', ru: 'Нам нужно выполнить план идеально.' },
      { en: 'The computer executed the program in seconds.', ru: 'Компьютер выполнил программу за секунды.' },
      { en: 'He executed a difficult turn on his skis.', ru: 'Он выполнил сложный поворот на лыжах.' },
    ],
    []
  ),
  createRichWord('c1_deem', 'Deem', '/diːm/', 'дим', 'Считать / Полагать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Рассматривать определенным образом; иметь мнение (очень формальный синоним consider).',
    '- Мнение: "Deem necessary" (Считать необходимым)\n- Оценка: "Deemed appropriate" (Сочтено уместным)\n- Успех: "Deemed a success" (Признано успешным)',
    [
      { en: 'The area is now deemed safe.', ru: 'Территория теперь считается безопасной.' },
      { en: 'We will do whatever is deemed necessary.', ru: 'Мы сделаем все, что будет сочтено необходимым.' },
      { en: 'He did not deem it worthy of a reply.', ru: 'Он не счел это достойным ответа.' },
      { en: 'The plan was deemed a failure.', ru: 'План был признан провальным.' }
    ],
    []
  ),

  createRichWord('c1_deduct', 'Deduct', '/dɪˈdʌkt/', 'дидакт', 'Вычитать / Удерживать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Забирать часть от целого (обычно деньги или баллы).',
    '- Деньги: "Deduct tax" (Вычитать налог)\n- Зарплата: "Deduct from salary" (Удерживать из зарплаты)\n- Математика: "Deduct points" (Снимать баллы)',
    [
      { en: 'The tax will be deducted from your salary.', ru: 'Налог будет вычтен из вашей зарплаты.' },
      { en: 'They deducted points for late submission.', ru: 'Они сняли баллы за позднюю сдачу.' },
      { en: 'You can deduct expenses from your taxable income.', ru: 'Вы можете вычесть расходы из вашего налогооблагаемого дохода.' },
      { en: 'The cost of the meal was deducted from the bill.', ru: 'Стоимость блюда была вычтена из счета.' }
    ],
    [
      { meaning: "To infer (Deduce)", translation: "Делать вывод", example: { en: "Use logic to deduce.", ru: "Используй логику, чтобы сделать вывод." } }
    ]
  ),

  createRichWord('c1_deficiency', 'Deficiency', '/dɪˈfɪʃ.ən.si/', 'дифишэнси', 'Дефицит / Нехватка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Состояние, когда чего-то не хватает (особенно в организме); недостаток.',
    '- Здоровье: "Vitamin deficiency" (Нехватка витаминов)\n- Иммунитет: "Immune deficiency" (Иммунодефицит)\n- Система: "Structural deficiency" (Структурный недостаток)',
    [
      { en: 'He suffers from an iron deficiency.', ru: 'Он страдает от дефицита железа.' },
      { en: 'There are serious deficiencies in the system.', ru: 'В системе есть серьезные недостатки.' },
      { en: 'A deficiency of Vitamin D causes rickets.', ru: 'Нехватка витамина D вызывает рахит.' },
      { en: 'We need to correct these deficiencies.', ru: 'Нам нужно исправить эти недостатки.' }
    ],
    []
  ),

  createRichWord('c1_defy', 'Defy', '/dɪˈfaɪ/', 'дифай', 'Бросать вызов / Игнорировать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Открыто не подчиняться; делать что-то невозможное.',
    '- Закон: "Defy the law" (Игнорировать закон)\n- Логика: "Defy logic" (Не поддаваться логике/объяснению)\n- Природа: "Defy gravity" (Преодолевать гравитацию)',
    [
      { en: 'She defied her parents and got married.', ru: 'Она ослушалась родителей и вышла замуж.' },
      { en: 'The plane seemed to defy gravity.', ru: 'Казалось, самолет преодолевает гравитацию.' },
      { en: 'His actions defy explanation.', ru: 'Его действия не поддаются объяснению.' },
      { en: 'I defy you to find a better offer.', ru: 'Я бросаю тебе вызов найти лучшее предложение.' }
    ],
    []
  ),

  createRichWord('c1_deploy', 'Deploy', '/dɪˈplɔɪ/', 'диплой', 'Развертывать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Размещать войска или оборудование для использования; внедрять ПО.',
    '- Армия: "Deploy troops" (Развернуть войска)\n- IT: "Deploy software" (Внедрить/развернуть ПО)\n- Ресурсы: "Deploy resources" (Задействовать ресурсы)',
    [
      { en: 'The government deployed troops to the region.', ru: 'Правительство направило войска в регион.' },
      { en: 'We are ready to deploy the new application.', ru: 'Мы готовы развернуть новое приложение.' },
      { en: 'They deployed the airbags during the crash.', ru: 'Подушки безопасности сработали (развернулись) во время аварии.' },
      { en: 'The company deploys its assets effectively.', ru: 'Компания эффективно использует свои активы.' }
    ],
    []
  ),

  createRichWord('c1_deprive', 'Deprive', '/dɪˈpraɪv/', 'дипрайв', 'Лишать / Отнимать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Забирать что-то необходимое или приятное у кого-то.',
    '- Сон: "Sleep deprived" (Лишенный сна)\n- Права: "Deprive of rights" (Лишить прав)\n- Детство: "Deprived childhood" (Трудное детство)',
    [
      { en: 'You cannot deprive citizens of their rights.', ru: 'Нельзя лишать граждан их прав.' },
      { en: 'He claimed he was deprived of a fair trial.', ru: 'Он заявил, что был лишен права на справедливый суд.' },
      { en: 'Why do you deprive yourself of cake?', ru: 'Почему ты отказываешь себе в торте?' },
      { en: 'The war deprived these children of an education.', ru: 'Война лишила этих детей образования.' }
    ],
    []
  ),

  createRichWord('c1_detain', 'Detain', '/dɪˈteɪn/', 'дитейн', 'Задерживать (полицией)', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Держать кого-то в официальном месте (тюрьме) или задерживать (заставлять ждать).',
    '- Полиция: "Detained for questioning" (Задержан для допроса)\n- Время: "Sorry to detain you" (Извините, что задерживаю)\n- Арест: "Detain a suspect" (Задержать подозреваемого)',
    [
      { en: 'The suspect was detained by the police.', ru: 'Подозреваемый был задержан полицией.' },
      { en: 'I won\'t detain you any longer.', ru: 'Я больше не буду вас задерживать.' },
      { en: 'He was detained at the border.', ru: 'Его задержали на границе.' },
      { en: 'Several protesters were detained.', ru: 'Несколько протестующих были задержаны.' }
    ],
    []
  ),

  createRichWord('c1_deter', 'Deter', '/dɪˈtɜːr/', 'дитё', 'Сдерживать / Отпугивать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставлять кого-то передумать делать что-то из страха или сомнений.',
    '- Преступление: "Deter crime" (Сдерживать преступность)\n- Мера: "Nuclear deterrent" (Ядерное сдерживание)\n- Действие: "Deter from doing" (Удерживать от совершения)',
    [
      { en: 'Cameras are installed to deter thieves.', ru: 'Камеры установлены, чтобы отпугивать воров.' },
      { en: 'Higher prices did not deter customers.', ru: 'Более высокие цены не отпугнули покупателей.' },
      { en: 'Nothing could deter him from his goal.', ru: 'Ничто не могло удержать его от цели.' },
      { en: 'Rain didn\'t deter the fans from coming.', ru: 'Дождь не помешал (не остановил) фанатам прийти.' }
    ],
    []
  ),

  createRichWord('c1_deteriorate', 'Deteriorate', '/dɪˈtɪə.ri.ə.reɪt/', 'дитиэриэрейт', 'Ухудшаться', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Становиться хуже.',
    '- Здоровье: "Condition deteriorated" (Состояние ухудшилось)\n- Отношения: "Relations deteriorated" (Отношения испортились)\n- Погода: "Weather deteriorated" (Погода испортилась)',
    [
      { en: 'His health began to deteriorate rapidly.', ru: 'Его здоровье начало стремительно ухудшаться.' },
      { en: 'The political situation has deteriorated.', ru: 'Политическая ситуация ухудшилась.' },
      { en: 'If the weather deteriorates, we will cancel.', ru: 'Если погода испортится, мы отменим.' },
      { en: 'The building has deteriorated over the years.', ru: 'Здание обветшало с годами.' }
    ],
    []
  ),

  createRichWord('c1_devise', 'Devise', '/dɪˈvaɪz/', 'дивайз', 'Разрабатывать / Изобретать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Придумывать план или систему с помощью интеллекта.',
    '- План: "Devise a plan" (Разработать план)\n- Метод: "Devise a method" (Придумать метод)\n- Стратегия: "Devise a strategy" (Разработать стратегию)',
    [
      { en: 'We need to devise a way to escape.', ru: 'Нам нужно придумать способ сбежать.' },
      { en: 'Scientists devised a new test for the virus.', ru: 'Ученые разработали новый тест на вирус.' },
      { en: 'He devised a clever scheme to get money.', ru: 'Он придумал хитрую схему, чтобы получить деньги.' },
      { en: 'A new system was devised to track sales.', ru: 'Была разработана новая система для отслеживания продаж.' }
    ],
    []
  ),

  createRichWord('c1_diagnose', 'Diagnose', '/ˈdaɪ.əɡ.nəʊz/', 'дайэгнэуз', 'Диагностировать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Определять болезнь или проблему путем осмотра.',
    '- Медицина: "Diagnosed with cancer" (Диагностирован рак)\n- Проблема: "Diagnose the fault" (Найти неисправность)\n- Врач: "Doctor diagnosed" (Врач поставил диагноз)',
    [
      { en: 'He was diagnosed with diabetes last year.', ru: 'В прошлом году у него диагностировали диабет.' },
      { en: 'The mechanic diagnosed the engine problem.', ru: 'Механик определил проблему с двигателем.' },
      { en: 'It is hard to diagnose this rare disease.', ru: 'Эту редкую болезнь трудно диагностировать.' },
      { en: 'Early diagnosis is important.', ru: 'Ранняя диагностика важна.' }
    ],
    []
  ),

  createRichWord('c1_differentiate', 'Differentiate', '/ˌdɪf.əˈren.ʃi.eɪt/', 'дифэреншиейт', 'Различать / Дифференцировать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Находить или показывать разницу между вещами.',
    '- Различие: "Differentiate between" (Различать между)\n- Маркетинг: "Differentiate the product" (Дифференцировать продукт)\n- Особенность: "What differentiates us?" (Что нас отличает?)',
    [
      { en: 'It is difficult to differentiate between the twins.', ru: 'Трудно различить близнецов.' },
      { en: 'We need to differentiate our product from the competition.', ru: 'Нам нужно выделить наш продукт на фоне конкурентов.' },
      { en: 'Colour blindness makes it hard to differentiate red and green.', ru: 'Дальтонизм затрудняет различение красного и зеленого.' },
      { en: 'A distinctive logo differentiates the brand.', ru: 'Отличительный логотип выделяет бренд.' }
    ],
    []
  ),

  createRichWord('c1_dignity', 'Dignity', '/ˈdɪɡ.nə.ti/', 'дигнити', 'Достоинство', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Чувство самоуважения; поведение, вызывающее уважение.',
    '- Поведение: "With dignity" (С достоинством)\n- Смерть: "Die with dignity" (Умереть с достоинством)\n- Уважение: "Human dignity" (Человеческое достоинство)',
    [
      { en: 'She accepted the award with quiet dignity.', ru: 'Она приняла награду со спокойным достоинством.' },
      { en: 'Every person has the right to dignity.', ru: 'Каждый человек имеет право на достоинство.' },
      { en: 'He lost his dignity when he started shouting.', ru: 'Он потерял свое достоинство, когда начал кричать.' },
      { en: 'Maintain your dignity at all times.', ru: 'Сохраняйте достоинство в любое время.' }
    ],
    []
  ),

  createRichWord('c1_diminish', 'Diminish', '/dɪˈmɪn.ɪʃ/', 'диминиш', 'Уменьшать / Ослаблять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Становиться меньше или делать что-то менее важным.',
    '- Размер: "Diminish in size" (Уменьшаться в размере)\n- Влияние: "Diminish influence" (Ослаблять влияние)\n- Запасы: "Supplies diminished" (Запасы истощились)',
    [
      { en: 'Our supplies are diminishing rapidly.', ru: 'Наши запасы стремительно тают.' },
      { en: 'Don\'t let him diminish your achievements.', ru: 'Не позволяй ему принижать твои достижения.' },
      { en: 'The pain will diminish over time.', ru: 'Боль со временем уменьшится.' },
      { en: 'His influence in the company has diminished.', ru: 'Его влияние в компании ослабло.' }
    ],
    []
  ),

  createRichWord('c1_discard', 'Discard', '/dɪˈskɑːd/', 'дискад', 'Выбрасывать / Отбрасывать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Избавляться от чего-то ненужного.',
    '- Вещи: "Discard old clothes" (Выбрасывать старую одежду)\n- Идеи: "Discard a theory" (Отбросить теорию)\n- Карты: "Discard a card" (Сбросить карту)',
    [
      { en: 'Discard any food that smells bad.', ru: 'Выбрось любую еду, которая плохо пахнет.' },
      { en: 'He discarded his cigarette.', ru: 'Он выбросил сигарету.' },
      { en: 'The plan was considered and then discarded.', ru: 'План был рассмотрен, а затем отброшен.' },
      { en: 'Don\'t discard your ticket until the end.', ru: 'Не выбрасывай билет до самого конца.' }
    ],
    []
  ),

  createRichWord('c1_disclose', 'Disclose', '/dɪˈskləʊz/', 'дисклоуз', 'Раскрывать / Обнародовать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Делать секретную информацию известной.',
    '- Секрет: "Disclose information" (Раскрыть информацию)\n- Детали: "Disclose details" (Обнародовать детали)\n- Личность: "Disclose identity" (Раскрыть личность)',
    [
      { en: 'The company refused to disclose its profits.', ru: 'Компания отказалась раскрыть свою прибыль.' },
      { en: 'She disclosed that she was leaving.', ru: 'Она раскрыла, что уходит.' },
      { en: 'He did not disclose the source of the money.', ru: 'Он не раскрыл источник денег.' },
      { en: 'Full details will be disclosed later.', ru: 'Полные детали будут обнародованы позже.' }
    ],
    []
  ),

  createRichWord('c1_disperse', 'Disperse', '/dɪˈspɜːs/', 'диспёс', 'Рассеивать / Разгонять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Расходиться в разные стороны; распространяться на большой площади.',
    '- Толпа: "Crowd dispersed" (Толпа разошлась)\n- Семена: "Disperse seeds" (Рассеивать семена)\n- Полиция: "Police dispersed protesters" (Полиция разогнала протестующих)',
    [
      { en: 'The police used tear gas to disperse the crowd.', ru: 'Полиция использовала слезоточивый газ, чтобы разогнать толпу.' },
      { en: 'The clouds dispersed and the sun came out.', ru: 'Облака рассеялись, и выглянуло солнце.' },
      { en: 'Seeds are dispersed by the wind.', ru: 'Семена разносятся ветром.' },
      { en: 'After the meeting, the group dispersed.', ru: 'После встречи группа разошлась.' }
    ],
    []
  ),

  createRichWord('c1_displace', 'Displace', '/dɪˈspleɪs/', 'дисплейс', 'Вытеснять / Перемещать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставлять кого-то покинуть свой дом; заменять кого-то на посту; вытеснять объем воды.',
    '- Люди: "Displaced persons" (Перемещенные лица/беженцы)\n- Работа: "Machines displace workers" (Машины вытесняют рабочих)\n- Физика: "Displace water" (Вытеснять воду)',
    [
      { en: 'The war displaced thousands of people.', ru: 'Война вынудила тысячи людей покинуть свои дома.' },
      { en: 'Coal is being displaced by renewable energy.', ru: 'Уголь вытесняется возобновляемой энергией.' },
      { en: 'He feels displaced in the new school.', ru: 'Он чувствует себя чужим (не на своем месте) в новой школе.' },
      { en: 'The ship displaces 10,000 tons of water.', ru: 'Корабль вытесняет 10 000 тонн воды.' }
    ],
    []
  ),

  createRichWord('c1_distort', 'Distort', '/dɪˈstɔːt/', 'дистот', 'Искажать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Менять форму, звук или правду так, что она становится неестественной или ложной.',
    '- Правда: "Distort the truth" (Искажать правду)\n- Изображение: "Distort the image" (Искажать изображение)\n- Звук: "Distorted sound" (Искаженный звук)',
    [
      { en: 'The media often distorts the facts.', ru: 'СМИ часто искажают факты.' },
      { en: 'Heat caused the plastic to distort.', ru: 'Жара заставила пластик деформироваться.' },
      { en: 'His face was distorted with anger.', ru: 'Его лицо было искажено гневом.' },
      { en: 'Electronic devices can distort the signal.', ru: 'Электронные устройства могут исказить сигнал.' }
    ],
    []
  ),

  createRichWord('c1_distress', 'Distress', '/dɪˈstres/', 'дистрес', 'Горе / Бедствие', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Сильная душевная боль или физическое страдание; состояние опасности (у кораблей).',
    '- Чувство: "In distress" (В беде / В горе)\n- Сигнал: "Distress signal" (Сигнал бедствия)\n- Глагол: "To distress" (Огорчать)',
    [
      { en: 'The news caused her great distress.', ru: 'Новости причинили ей сильное горе.' },
      { en: 'The ship sent out a distress signal.', ru: 'Корабль послал сигнал бедствия.' },
      { en: 'He was in obvious distress.', ru: 'Он был в явном смятении (страдании).' },
      { en: 'I didn\'t mean to distress you.', ru: 'Я не хотел тебя огорчать.' }
    ],
    []
  ),

  createRichWord('c1_dividend', 'Dividend', '/ˈdɪv.ɪ.dend/', 'дивидэнд', 'Дивиденд', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Часть прибыли компании, выплачиваемая акционерам; выгода от действия.',
    '- Финансы: "Pay dividends" (Выплачивать дивиденды)\n- Выгода: "Pay dividends later" (Принести плоды позже)\n- Акции: "Shareholder dividends" (Дивиденды акционеров)',
    [
      { en: 'The company declared a large dividend.', ru: 'Компания объявила о крупных дивидендах.' },
      { en: 'Hard work will pay dividends in the future.', ru: 'Упорный труд принесет плоды (дивиденды) в будущем.' },
      { en: 'Investors are happy with the dividend yield.', ru: 'Инвесторы довольны дивидендной доходностью.' },
      { en: 'Education pays the best dividends.', ru: 'Образование приносит лучшие дивиденды.' }
    ],
    []
  ),
  createRichWord('c1_domain', 'Domain', '/dəˈmeɪn/', 'домейн', 'Домен / Область', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Область интересов или контроля; интернет-адрес.',
    '- Интернет: "Domain name" (Доменное имя)\n- Власть: "Public domain" (Общественное достояние)\n- Сфера: "Domain of science" (Сфера науки)',
    [
      { en: 'This information is in the public domain.', ru: 'Эта информация является общественным достоянием.' },
      { en: 'Physics is outside my domain of knowledge.', ru: 'Физика находится вне моей области знаний.' },
      { en: 'You need to register a domain name for your website.', ru: 'Тебе нужно зарегистрировать доменное имя для своего сайта.' },
      { en: 'The king ruled over a vast domain.', ru: 'Король правил обширными владениями.' }
    ],
    []
  ),

  createRichWord('c1_dual', 'Dual', '/ˈdjuː.əl/', 'дъюэл', 'Двойной', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Имеющий две части или функции.',
    '- Гражданство: "Dual nationality/citizenship" (Двойное гражданство)\n- Цель: "Dual purpose" (Двойное назначение)\n- Роль: "Dual role" (Двойная роль)',
    [
      { en: 'He holds dual citizenship in the US and Canada.', ru: 'У него двойное гражданство США и Канады.' },
      { en: 'The room has a dual purpose: study and bedroom.', ru: 'Комната имеет двойное назначение: кабинет и спальня.' },
      { en: 'This car has dual airbags.', ru: 'В этой машине есть двойные подушки безопасности.' },
      { en: 'She plays a dual role in the movie.', ru: 'Она играет двойную роль в фильме.' }
    ],
    []
  ),

  createRichWord('c1_dwell', 'Dwell', '/dwel/', 'двэл', 'Обитать / Зацикливаться', ProficiencyLevel.C1, 'verb', 'Low', 'Literary',
    'Жить в определенном месте (книжн.); или думать слишком много о чем-то (dwell on).',
    '- Место: "City dweller" (Городской житель)\n- Мысли: "Dwell on the past" (Зацикливаться на прошлом)\n- Дом: "Dwelling" (Жилище)',
    [
      { en: 'Primitive people dwelt in caves.', ru: 'Первобытные люди обитали в пещерах.' },
      { en: 'Don\'t dwell on your mistakes.', ru: 'Не зацикливайся на своих ошибках.' },
      { en: 'He dwells in a remote cabin.', ru: 'Он живет в отдаленной хижине.' },
      { en: 'Let us not dwell on this sad subject.', ru: 'Давайте не будем останавливаться (зацикливаться) на этой грустной теме.' }
    ],
    []
  ),

  createRichWord('c1_ego', 'Ego', '/ˈiː.ɡəʊ/', 'игоу', 'Эго / Самомнение', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Чувство собственной важности; самооценка.',
    '- Размер: "Big ego" (Большое самомнение)\n- Удар: "Blow to his ego" (Удар по самолюбию)\n- Психология: "Alter ego" (Второе я)',
    [
      { en: 'He has a huge ego and never listens.', ru: 'У него огромное самомнение, и он никогда не слушает.' },
      { en: 'Losing the match was a blow to his ego.', ru: 'Проигрыш в матче стал ударом по его самолюбию.' },
      { en: 'You need to set your ego aside.', ru: 'Тебе нужно отложить свое эго в сторону.' },
      { en: 'Flattery feeds his ego.', ru: 'Лесть подпитывает его эго.' }
    ],
    []
  ),

  createRichWord('c1_electron', 'Electron', '/iˈlek.trɒn/', 'илектрон', 'Электрон', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Мельчайшая частица материи с отрицательным электрическим зарядом.',
    '- Физика: "Electron microscope" (Электронный микроскоп)\n- Атом: "Electron shell" (Электронная оболочка)\n- Электроника: "Electronics" (Электроника)',
    [
      { en: 'Electrons orbit the nucleus of an atom.', ru: 'Электроны вращаются вокруг ядра атома.' },
      { en: 'An electron microscope can see tiny details.', ru: 'Электронный микроскоп может видеть крошечные детали.' },
      { en: 'Electricity is the flow of electrons.', ru: 'Электричество — это поток электронов.' },
      { en: 'They studied the behaviour of electrons.', ru: 'Они изучали поведение электронов.' }
    ],
    []
  ),

  createRichWord('c1_eligible', 'Eligible', '/ˈel.ɪ.dʒə.bəl/', 'элиджэбл', 'Имеющий право / Подходящий', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Имеющий необходимые качества или права для чего-либо; подходящий для брака.',
    '- Право: "Eligible for a grant" (Имеющий право на грант)\n- Брак: "Eligible bachelor" (Завидный холостяк)\n- Выборы: "Eligible to vote" (Имеющий право голосовать)',
    [
      { en: 'You are eligible for a refund.', ru: 'Вы имеете право на возврат средств.' },
      { en: 'Only citizens are eligible to vote.', ru: 'Только граждане имеют право голосовать.' },
      { en: 'She is eligible for early retirement.', ru: 'Она имеет право на досрочный выход на пенсию.' },
      { en: 'He is the most eligible bachelor in town.', ru: 'Он самый завидный холостяк в городе.' }
    ],
    []
  ),

  createRichWord('c1_embody', 'Embody', '/ɪmˈbɒd.i/', 'имбоди', 'Воплощать / Олицетворять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Быть отличным примером идеи или качества; включать в себя.',
    '- Идея: "Embody the spirit" (Воплощать дух)\n- Качество: "Embody kindness" (Олицетворять доброту)\n- Закон: "Embodied in law" (Закреплено в законе)',
    [
      { en: 'She embodies the values of our company.', ru: 'Она воплощает ценности нашей компании.' },
      { en: 'The new car embodies the latest technology.', ru: 'Новая машина воплощает в себе новейшие технологии.' },
      { en: 'He embodies the spirit of hope.', ru: 'Он олицетворяет дух надежды.' },
      { en: 'The principles are embodied in the constitution.', ru: 'Принципы закреплены (воплощены) в конституции.' }
    ],
    []
  ),

  createRichWord('c1_enact', 'Enact', '/ɪˈnækt/', 'инэкт', 'Принимать (закон) / Разыгрывать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Вводить закон в действие; играть роль на сцене.',
    '- Закон: "Enact a law" (Принять закон)\n- Театр: "Re-enact a scene" (Разыграть сцену / Воспроизвести)\n- Действие: "Enact changes" (Осуществить изменения)',
    [
      { en: 'Congress enacted a new tax law.', ru: 'Конгресс принял новый налоговый закон.' },
      { en: 'They re-enacted the battle for the tourists.', ru: 'Они воспроизвели (разыграли) битву для туристов.' },
      { en: 'The legislation was enacted last year.', ru: 'Законодательство было введено в действие в прошлом году.' },
      { en: 'Actors enacted the story on stage.', ru: 'Актеры разыграли историю на сцене.' }
    ],
    []
  ),

  createRichWord('c1_endeavour', 'Endeavour', '/ɪnˈdev.ər/', 'индевэ', 'Стремление / Стараться', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Серьезная попытка сделать что-то (сущ.); очень стараться (гл.).',
    '- Попытка: "Make an endeavour" (Сделать попытку)\n- Успех: "Best endeavours" (Все усилия)\n- Глагол: "Endeavour to help" (Постараться помочь)',
    [
      { en: 'We will endeavour to finish on time.', ru: 'Мы постараемся закончить вовремя.' },
      { en: 'Despite our best endeavours, we failed.', ru: 'Несмотря на все наши усилия, мы потерпели неудачу.' },
      { en: 'He made an endeavour to improve his work.', ru: 'Он предпринял попытку улучшить свою работу.' },
      { en: 'Success crowned their endeavours.', ru: 'Успех увенчал их старания.' }
    ],
    []
  ),

  createRichWord('c1_endow', 'Endow', '/ɪnˈdaʊ/', 'индау', 'Наделять / Одарять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Давать деньги организации (фонду); наделять качеством (природой).',
    '- Природа: "Endowed with talent" (Одаренный талантом)\n- Деньги: "Endow a scholarship" (Учредить стипендию)\n- Качество: "Endowed with beauty" (Наделенная красотой)',
    [
      { en: 'She is endowed with a beautiful voice.', ru: 'Она одарена прекрасным голосом.' },
      { en: 'He endowed a hospital in his will.', ru: 'Он пожертвовал деньги на больницу в своем завещании.' },
      { en: 'Nature has endowed him with great strength.', ru: 'Природа наделила его огромной силой.' },
      { en: 'The university was endowed by a wealthy merchant.', ru: 'Университет был финансирован (одарен) богатым купцом.' }
    ],
    []
  ),

  createRichWord('c1_enlighten', 'Enlighten', '/ɪnˈlaɪ.tən/', 'инлайтэн', 'Просвещать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Давать кому-то больше знаний или понимания ситуации.',
    '- Знание: "Please enlighten me" (Пожалуйста, просвети меня)\n- Эпоха: "Age of Enlightenment" (Эпоха Просвещения)\n- Понимание: "Enlightened attitude" (Просвещенное отношение)',
    [
      { en: 'Can you enlighten me on this subject?', ru: 'Можешь просветить меня по этому вопросу?' },
      { en: 'The book enlightened me about the history of art.', ru: 'Книга просветила меня об истории искусства.' },
      { en: 'I remain enlightened by his wisdom.', ru: 'Я остаюсь просвещенным его мудростью.' },
      { en: 'We need an enlightened approach to education.', ru: 'Нам нужен просвещенный подход к образованию.' }
    ],
    []
  ),

  createRichWord('c1_entity', 'Entity', '/ˈen.tɪ.ti/', 'энтити', 'Сущность / Объект / Организация', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Что-то, что существует отдельно; организация или бизнес как юридическое лицо.',
    '- Бизнес: "Legal entity" (Юридическое лицо)\n- Независимость: "Separate entity" (Отдельная сущность/единица)\n- Философия: "Distinct entity" (Отдельный объект)',
    [
      { en: 'The company is a separate legal entity.', ru: 'Компания является отдельным юридическим лицом.' },
      { en: 'The mind and body are distinct entities.', ru: 'Разум и тело — это разные сущности.' },
      { en: 'They view the state as a single entity.', ru: 'Они рассматривают государство как единое целое (сущность).' },
      { en: 'Each department works as an independent entity.', ru: 'Каждый отдел работает как независимая единица.' }
    ],
    []
  ),

  createRichWord('c1_equity', 'Equity', '/ˈek.wɪ.ti/', 'эквити', 'Справедливость / Капитал', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Ситуация, когда ко всем относятся честно; стоимость акций компании.',
    '- Финансы: "Private equity" (Частный капитал)\n- Общество: "Gender equity" (Гендерное равенство/справедливость)\n- Дом: "Negative equity" (Отрицательный капитал - долг больше стоимости)',
    [
      { en: 'We must ensure equity in the workplace.', ru: 'Мы должны обеспечить справедливость на рабочем месте.' },
      { en: 'He owns 50% equity in the firm.', ru: 'Он владеет 50% капитала фирмы.' },
      { en: 'Equity and justice are important values.', ru: 'Равноправие и справедливость — важные ценности.' },
      { en: 'They sold their equity to investors.', ru: 'Они продали свою долю капитала инвесторам.' }
    ],
    []
  ),

  createRichWord('c1_erect', 'Erect', '/ɪˈrekt/', 'ирект', 'Возводить / Вертикальный', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Строить здание или стену (гл.); стоящий прямо (прил.).',
    '- Стройка: "Erect a statue" (Воздвигнуть статую)\n- Поза: "Stand erect" (Стоять прямо)\n- Палатка: "Erect a tent" (Поставить палатку - форм.)',
    [
      { en: 'They plan to erect a monument to the soldiers.', ru: 'Они планируют воздвигнуть памятник солдатам.' },
      { en: 'The dog\'s ears stood erect.', ru: 'Уши собаки стояли торчком (прямо).' },
      { en: 'It took days to erect the scaffolding.', ru: 'Потребовались дни, чтобы возвести строительные леса.' },
      { en: 'He stood erect and proud.', ru: 'Он стоял прямо и гордо.' }
    ],
    []
  ),

  createRichWord('c1_evoke', 'Evoke', '/ɪˈvəʊk/', 'ивоук', 'Вызывать (чувства)', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Вызывать воспоминание или чувство в уме.',
    '- Память: "Evoke memories" (Вызывать воспоминания)\n- Чувство: "Evoke sympathy" (Вызывать сочувствие)\n- Реакция: "Evoke a response" (Вызывать реакцию)',
    [
      { en: 'The smell of pine evoked memories of Christmas.', ru: 'Запах сосны вызвал воспоминания о Рождестве.' },
      { en: 'The music evoked a feeling of sadness.', ru: 'Музыка вызвала чувство грусти.' },
      { en: 'His speech evoked a strong reaction.', ru: 'Его речь вызвала сильную реакцию.' },
      { en: 'The photo evokes the atmosphere of the 1920s.', ru: 'Фотография передает (вызывает) атмосферу 1920-х годов.' }
    ],
    []
  ),

  createRichWord('c1_excavate', 'Excavate', '/ˈek.skə.veɪt/', 'экскэвейт', 'Раскапывать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Выкапывать землю, особенно для поиска старых вещей (археология).',
    '- Археология: "Excavate ruins" (Раскапывать руины)\n- Стройка: "Excavate the site" (Рыть котлован)\n- Находка: "Excavate pottery" (Откапывать керамику)',
    [
      { en: 'Archaeologists act carefully to excavate the site.', ru: 'Археологи действуют осторожно, раскапывая место.' },
      { en: 'They excavated an ancient Roman villa.', ru: 'Они раскопали древнюю римскую виллу.' },
      { en: 'The workers excavated a deep hole.', ru: 'Рабочие вырыли глубокую яму.' },
      { en: 'We need to excavate the soil before building.', ru: 'Нам нужно вынуть грунт перед строительством.' }
    ],
    []
  ),

  createRichWord('c1_exclusion', 'Exclusion', '/ɪkˈskluː.ʒən/', 'иксклюжн', 'Исключение / Отчуждение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Акт недопущения кого-либо; состояние быть исключенным.',
    '- Общество: "Social exclusion" (Социальное отчуждение)\n- Метод: "Method of exclusion" (Метод исключения)\n- Зона: "Exclusion zone" (Зона отчуждения)',
    [
      { en: 'Social exclusion leads to poverty.', ru: 'Социальное отчуждение ведет к бедности.' },
      { en: 'We identified the thief by a process of exclusion.', ru: 'Мы опознали вора методом исключения.' },
      { en: 'The exclusion of women from the vote was unfair.', ru: 'Исключение женщин из голосования было несправедливым.' },
      { en: 'There is a permanent exclusion zone around the volcano.', ru: 'Вокруг вулкана существует постоянная зона отчуждения.' }
    ],
    []
  ),

  createRichWord('c1_exempt', 'Exempt', '/ɪɡˈzempt/', 'игземпт', 'Освобожденный / Освобождать', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Не обязанный делать то, что должны делать другие (платить налоги, служить в армии).',
    '- Налоги: "Tax exempt" (Освобожденный от налогов)\n- Обязанность: "Exempt from duty" (Освобожден от службы)\n- Глагол: "To exempt" (Освобождать)',
    [
      { en: 'Charities are exempt from paying tax.', ru: 'Благотворительные организации освобождены от уплаты налогов.' },
      { en: 'He was exempt from military service due to health.', ru: 'Он был освобожден от военной службы по состоянию здоровья.' },
      { en: 'Small businesses are exempt from this rule.', ru: 'Малый бизнес освобожден от этого правила.' },
      { en: 'Pregnant women are exempt from dental charges.', ru: 'Беременные женщины освобождены от платы за стоматологию.' }
    ],
    []
  ),

  createRichWord('c1_exert', 'Exert', '/ɪɡˈzɜːt/', 'игзёт', 'Оказывать (давление) / Напрягать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Использовать силу или влияние для достижения чего-то; напрягать себя.',
    '- Давление: "Exert pressure" (Оказывать давление)\n- Влияние: "Exert influence" (Оказывать влияние)\n- Усилие: "Exert yourself" (Напрягаться / Прилагать усилия)',
    [
      { en: 'He exerted all his strength to open the door.', ru: 'Он приложил (напряг) все свои силы, чтобы открыть дверь.' },
      { en: 'Parents exert a strong influence on their children.', ru: 'Родители оказывают сильное влияние на своих детей.' },
      { en: 'Do not exert yourself too much after surgery.', ru: 'Не напрягайся слишком сильно после операции.' },
      { en: 'She exerted pressure on the committee.', ru: 'Она оказала давление на комитет.' }
    ],
    []
  ),

  createRichWord('c1_exile', 'Exile', '/ˈek.saɪl/', 'эксайл', 'Изгнание / Ссылка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Наказание, при котором человека высылают из его страны; человек в изгнании.',
    '- Политика: "In exile" (В изгнании)\n- Глагол: "To be exiled" (Быть изгнанным)\n- Человек: "A political exile" (Политический ссыльный)',
    [
      { en: 'The king was forced into exile.', ru: 'Король был вынужден отправиться в изгнание.' },
      { en: 'He lived in exile for twenty years.', ru: 'Он жил в изгнании двадцать лет.' },
      { en: 'Napoleon died in exile on St Helena.', ru: 'Наполеон умер в ссылке на острове Святой Елены.' },
      { en: 'They returned from exile after the war.', ru: 'Они вернулись из изгнания после войны.' }
    ],
    []
  ),

  createRichWord('c1_faction', 'Faction', '/ˈfæk.ʃən/', 'фэкшн', 'Фракция / Группировка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Малая группа внутри большой группы, часто несогласная с остальными.',
    '- Политика: "Rival factions" (Враждующие фракции)\n- Борьба: "Warring factions" (Воюющие группировки)\n- Партия: "Party faction" (Партийная фракция)',
    [
      { en: 'Rival factions fought for control of the city.', ru: 'Враждующие группировки сражались за контроль над городом.' },
      { en: 'The party split into several factions.', ru: 'Партия раскололась на несколько фракций.' },
      { en: 'He leads a radical faction within the movement.', ru: 'Он возглавляет радикальную фракцию внутри движения.' },
      { en: 'Factions often cause instability.', ru: 'Фракции (разногласия) часто вызывают нестабильность.' }
    ],
    []
  ),
  createRichWord('c1_diplomacy', 'Diplomacy', '/dɪˈpləʊ.mə.si/', 'диплоумеси', 'Дипломатия', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Управление отношениями между странами; умение общаться с людьми тактично.',
    '- Политика: "International diplomacy" (Международная дипломатия)\n- Навык: "Use diplomacy" (Использовать дипломатию/такт)\n- Метод: "Through diplomacy" (Путем дипломатии)',
    [
      { en: 'The crisis was resolved through diplomacy.', ru: 'Кризис был разрешен путем дипломатии.' },
      { en: 'Diplomacy is better than war.', ru: 'Дипломатия лучше войны.' },
      { en: 'He handled the situation with great diplomacy.', ru: 'Он справился с ситуацией с большой дипломатичностью.' },
      { en: 'Secret diplomacy often takes place behind closed doors.', ru: 'Тайная дипломатия часто происходит за закрытыми дверями.' }
    ],
    []
  ),

  createRichWord('c1_disarm', 'Disarm', '/dɪsˈɑːm/', 'дисам', 'Обезоруживать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Отобрать у кого-то оружие; уменьшить размер армии; успокоить гнев (переносно).',
    '- Оружие: "Disarm a suspect" (Обезоружить подозреваемого)\n- Бомба: "Disarm a bomb" (Обезвредить бомбу)\n- Эмоции: "Disarming smile" (Обезоруживающая улыбка)',
    [
      { en: 'The police managed to disarm the gunman.', ru: 'Полиции удалось обезоружить стрелка.' },
      { en: 'Nations agreed to disarm nuclear weapons.', ru: 'Нации согласились сократить ядерное вооружение.' },
      { en: 'Her smile disarmed his anger instantly.', ru: 'Ее улыбка мгновенно обезоружила его гнев.' },
      { en: 'Experts were called to disarm the device.', ru: 'Экспертов вызвали обезвредить устройство.' }
    ],
    []
  ),

  createRichWord('c1_discrepancy', 'Discrepancy', '/dɪˈskrep.ən.si/', 'дискрепэнси', 'Расхождение / Несоответствие', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Разница между двумя вещами, которые должны быть одинаковыми.',
    '- Документы: "Discrepancy in figures" (Расхождение в цифрах)\n- Отчеты: "Major discrepancy" (Серьезное несоответствие)\n- Поиск: "Find a discrepancy" (Найти несоответствие)',
    [
      { en: 'There is a discrepancy between the two reports.', ru: 'Между двумя отчетами есть расхождение.' },
      { en: 'We found a discrepancy in the accounts.', ru: 'Мы нашли несоответствие в счетах.' },
      { en: 'The discrepancy was due to a clerical error.', ru: 'Расхождение произошло из-за канцелярской ошибки.' },
      { en: 'Any discrepancy must be explained immediately.', ru: 'Любое несоответствие должно быть объяснено немедленно.' }
    ],
    []
  ),

  createRichWord('c1_disintegrate', 'Disintegrate', '/dɪsˈɪn.tɪ.ɡreɪt/', 'дисинтигрейт', 'Распадаться / Разрушаться', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Разбиваться на мелкие части; переставать существовать как единое целое.',
    '- Материал: "Paper disintegrates" (Бумага распадается)\n- Общество: "Society disintegrated" (Общество распалось)\n- Самолет: "Plane disintegrated" (Самолет развалился в воздухе)',
    [
      { en: 'The spacecraft disintegrated upon re-entry.', ru: 'Космический корабль разрушился при входе в атмосферу.' },
      { en: 'The old book started to disintegrate in my hands.', ru: 'Старая книга начала рассыпаться у меня в руках.' },
      { en: 'Without leadership, the group will disintegrate.', ru: 'Без лидерства группа распадется.' },
      { en: 'The tablets disintegrate quickly in water.', ru: 'Таблетки быстро растворяются (распадаются) в воде.' }
    ],
    []
  ),

  createRichWord('c1_dismantle', 'Dismantle', '/dɪsˈmæn.təl/', 'дисмантл', 'Демонтировать / Разбирать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Разбирать машину или конструкцию на части; постепенно уничтожать систему.',
    '- Техника: "Dismantle an engine" (Разобрать двигатель)\n- Система: "Dismantle the organization" (Расформировать организацию)\n- Мебель: "Dismantle the bed" (Разобрать кровать)',
    [
      { en: 'We had to dismantle the wardrobe to move it.', ru: 'Нам пришлось разобрать шкаф, чтобы перевезти его.' },
      { en: 'The government plans to dismantle the health service.', ru: 'Правительство планирует демонтировать систему здравоохранения.' },
      { en: 'Mechanics dismantled the car for parts.', ru: 'Механики разобрали машину на запчасти.' },
      { en: 'It took hours to dismantle the stage.', ru: 'На разборку сцены ушли часы.' }
    ],
    []
  ),

  createRichWord('c1_dissatisfy', 'Dissatisfy', '/ˌdɪsˈsæt.ɪs.faɪ/', 'диссэтисфай', 'Не удовлетворять / Разочаровывать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Не быть достаточно хорошим для кого-то; вызывать недовольство.',
    '- Клиент: "Dissatisfy customers" (Не удовлетворять клиентов)\n- Результат: "Result dissatisfied me" (Результат меня не удовлетворил)\n- Причастие: "Dissatisfied" (Недовольный - B2)',
    [
      { en: 'The service dissatisfied many customers.', ru: 'Обслуживание не удовлетворило многих клиентов.' },
      { en: 'It is hard not to dissatisfy someone with such choices.', ru: 'Трудно никого не разочаровать при таком выборе.' },
      { en: 'If the product dissatisfies you, return it.', ru: 'Если товар вас не удовлетворяет, верните его.' },
      { en: 'His explanation dissatisfied the police.', ru: 'Его объяснение не удовлетворило полицию.' }
    ],
    [
      { meaning: "Dissatisfied (Adjective - B2)", translation: "Недовольный", example: { en: "I am dissatisfied with the service.", ru: "Я недоволен обслуживанием." } }
    ]
  ),

  createRichWord('c1_diversify', 'Diversify', '/daɪˈvɜː.sɪ.faɪ/', 'дайвёрсифай', 'Разнообразить / Диверсифицировать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Начинать производить разные товары; вкладывать деньги в разные сферы.',
    '- Бизнес: "Diversify products" (Разнообразить продукты)\n- Инвестиции: "Diversify portfolio" (Диверсифицировать портфель)\n- Навыки: "Diversify skills" (Разнообразить навыки)',
    [
      { en: 'Farmers should diversify their crops.', ru: 'Фермерам следует разнообразить свои посевы.' },
      { en: 'The company plans to diversify into new markets.', ru: 'Компания планирует выйти (диверсифицироваться) на новые рынки.' },
      { en: 'It is risky not to diversify your investments.', ru: 'Рискованно не диверсифицировать свои инвестиции.' },
      { en: 'We need to diversify our energy sources.', ru: 'Нам нужно разнообразить наши источники энергии.' }
    ],
    []
  ),

  createRichWord('c1_diversion', 'Diversion', '/daɪˈvɜː.ʃən/', 'дайвёршн', 'Отвлечение / Объезд', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Действие по отвлечению внимания; изменение маршрута; развлечение.',
    '- Дорога: "Traffic diversion" (Объезд)\n- Внимание: "Create a diversion" (Создать отвлекающий маневр)\n- Развлечение: "Welcome diversion" (Приятное развлечение)',
    [
      { en: 'The accident caused a major traffic diversion.', ru: 'Авария вызвала серьезное изменение маршрута движения.' },
      { en: 'He created a diversion so we could escape.', ru: 'Он создал отвлекающий маневр, чтобы мы могли сбежать.' },
      { en: 'Gardening is a pleasant diversion for him.', ru: 'Садоводство для него — приятное развлечение.' },
      { en: 'A diversion of funds was discovered.', ru: 'Было обнаружено нецелевое использование (отвлечение) средств.' }
    ],
    []
  ),

  createRichWord('c1_dodge', 'Dodge', '/dɒdʒ/', 'додж', 'Уворачиваться / Избегать', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Быстро двигаться в сторону, чтобы избежать удара; хитро избегать обязанности.',
    '- Физически: "Dodge a ball" (Увернуться от мяча)\n- Обязанности: "Dodge taxes" (Уклоняться от налогов)\n- Вопрос: "Dodge a question" (Уйти от вопроса)',
    [
      { en: 'He managed to dodge the speeding car.', ru: 'Ему удалось увернуться от мчащейся машины.' },
      { en: 'Stop trying to dodge the question.', ru: 'Перестань пытаться уйти от вопроса.' },
      { en: 'Companies often try to dodge paying taxes.', ru: 'Компании часто пытаются уклониться от уплаты налогов.' },
      { en: 'She dodged through the crowd to catch the bus.', ru: 'Она петляла сквозь толпу, чтобы успеть на автобус.' }
    ],
    []
  ),

  createRichWord('c1_dominance', 'Dominance', '/ˈdɒm.ɪ.nəns/', 'доминэнс', 'Господство / Доминирование', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Состояние власти и контроля над другими.',
    '- Рынок: "Market dominance" (Доминирование на рынке)\n- Политика: "Military dominance" (Военное превосходство)\n- Спорт: "Assert dominance" (Утвердить господство)',
    [
      { en: 'The team continued their dominance of the league.', ru: 'Команда продолжила свое господство в лиге.' },
      { en: 'They fought for global dominance.', ru: 'Они боролись за мировое господство.' },
      { en: 'His physical dominance was obvious.', ru: 'Его физическое превосходство было очевидным.' },
      { en: 'The company lost its dominance in the sector.', ru: 'Компания потеряла свое доминирующее положение в секторе.' }
    ],
    []
  ),

  createRichWord('c1_doom', 'Doom', '/duːm/', 'дум', 'Рок / Обрекать', ProficiencyLevel.C1, 'noun', 'Low', 'Literary',
    'Смерть, разрушение или другая ужасная судьба (сущ.); обрекать на провал (гл.).',
    '- Судьба: "Sense of doom" (Чувство обреченности)\n- Глагол: "Doomed to fail" (Обречен на провал)\n- Фраза: "Gloom and doom" (Мрак и безысходность)',
    [
      { en: 'The plan was doomed from the start.', ru: 'План был обречен с самого начала.' },
      { en: 'A feeling of impending doom hung over the city.', ru: 'Чувство надвигающегося рока нависло над городом.' },
      { en: 'Are we doomed to repeat history?', ru: 'Мы обречены повторять историю?' },
      { en: 'Prophets of doom predicted the end of the world.', ru: 'Пророки гибели предсказывали конец света.' }
    ],
    []
  ),

  createRichWord('c1_drastic', 'Drastic', '/ˈdræstɪk/', 'дрэстик', 'Радикальный / Решительный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Экстремальный, сильный и имеющий серьезные последствия.',
    '- Меры: "Drastic measures" (Радикальные меры)\n- Изменения: "Drastic changes" (Решительные изменения)\n- Сокращение: "Drastic cuts" (Резкие сокращения)',
    [
      { en: 'Drastic measures are needed to save the economy.', ru: 'Для спасения экономики необходимы радикальные меры.' },
      { en: 'He made a drastic decision to quit his job.', ru: 'Он принял решительное решение уволиться с работы.' },
      { en: 'There was a drastic reduction in budget.', ru: 'Произошло резкое сокращение бюджета.' },
      { en: 'Don\'t do anything drastic until we talk.', ru: 'Не делай ничего радикального, пока мы не поговорим.' }
    ],
    []
  ),

  createRichWord('c1_dread', 'Dread', '/dred/', 'дрэд', 'Бояться / Страх', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Очень сильно бояться чего-то, что должно произойти.',
    '- Мысль: "Dread to think" (Страшно подумать)\n- Событие: "Dread the exam" (Бояться экзамена)\n- Сущ.: "Filled with dread" (Наполненный страхом)',
    [
      { en: 'I dread going to the dentist.', ru: 'Я до ужаса боюсь идти к стоматологу.' },
      { en: 'He lived in dread of losing his job.', ru: 'Он жил в страхе потерять работу.' },
      { en: 'I dread to think what might happen.', ru: 'Мне страшно подумать, что может случиться.' },
      { en: 'The dread of failure kept him awake.', ru: 'Страх неудачи не давал ему спать.' }
    ],
    []
  ),

  createRichWord('c1_dub', 'Dub', '/dʌb/', 'даб', 'Давать прозвище / Дублировать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Дать кому-то особое имя; заменить звуковую дорожку в фильме.',
    '- Имя: "Dubbed the King" (Прозванный Королем)\n- Кино: "Dubbed movie" (Дублированный фильм)\n- Звук: "Dub over" (Наложить звук)',
    [
      { en: 'The media dubbed him "The Hero".', ru: 'СМИ окрестили его "Героем".' },
      { en: 'I prefer subtitles to dubbed films.', ru: 'Я предпочитаю субтитры дублированным фильмам.' },
      { en: 'The film was dubbed into German.', ru: 'Фильм был дублирован на немецкий язык.' },
      { en: 'Critics dubbed the plan a disaster.', ru: 'Критики назвали план катастрофой.' }
    ],
    []
  ),

  createRichWord('c1_duplicate', 'Duplicate', '/ˈduː.plɪ.keɪt/', 'дупликейт', 'Дублировать / Копия', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сделать точную копию чего-либо; повторить действие (часто зря).',
    '- Копия: "Duplicate key" (Дубликат ключа - прил/сущ)\n- Работа: "Duplicate effort" (Дублировать усилия)\n- Документ: "In duplicate" (В двух экземплярах)',
    [
      { en: 'Please duplicate this document for me.', ru: 'Пожалуйста, сделайте копию этого документа для меня.' },
      { en: 'We must avoid duplicating our work.', ru: 'Мы должны избегать дублирования нашей работы.' },
      { en: 'Is this a duplicate key?', ru: 'Это дубликат ключа?' },
      { en: 'Fill out the form in duplicate.', ru: 'Заполните форму в двух экземплярах.' }
    ],
    []
  ),

  createRichWord('c1_durable', 'Durable', '/ˈdjʊə.rə.bəl/', 'дюрэбл', 'Прочный / Долговечный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Способный служить долго, не ломаясь.',
    '- Материал: "Durable fabric" (Прочная ткань)\n- Товар: "Durable goods" (Товары длительного пользования)\n- Отношения: "Durable peace" (Прочный мир)',
    [
      { en: 'These shoes are made of very durable leather.', ru: 'Эти туфли сделаны из очень прочной кожи.' },
      { en: 'We need a durable solution to the problem.', ru: 'Нам нужно долговечное решение проблемы.' },
      { en: 'Plastic is a durable material.', ru: 'Пластик — долговечный материал.' },
      { en: 'The ceasefire proved to be durable.', ru: 'Перемирие оказалось прочным.' }
    ],
    []
  ),

  createRichWord('c1_dynamics', 'Dynamics', '/daɪˈnæm.ɪks/', 'дайнэмикс', 'Динамика', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Силы или процессы, которые вызывают изменения внутри системы.',
    '- Группа: "Group dynamics" (Групповая динамика)\n- Рынок: "Market dynamics" (Динамика рынка)\n- Отношения: "Family dynamics" (Семейная динамика)',
    [
      { en: 'The dynamics of the team changed after he left.', ru: 'Динамика команды изменилась после его ухода.' },
      { en: 'We are studying the dynamics of population growth.', ru: 'Мы изучаем динамику роста населения.' },
      { en: 'Understanding family dynamics is complex.', ru: 'Понимание семейной динамики — это сложно.' },
      { en: 'Political dynamics shifted rapidly.', ru: 'Политическая динамика стремительно менялась.' }
    ],
    []
  ),

  createRichWord('c1_eclipse', 'Eclipse', '/ɪˈklɪps/', 'иклипс', 'Затмение / Затмевать', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Явление, когда одно небесное тело закрывает другое (сущ.); стать важнее или лучше кого-то (гл.).',
    '- Космос: "Solar eclipse" (Солнечное затмение)\n- Успех: "Totally eclipsed" (Полностью затмил)\n- Слава: "Eclipse his achievements" (Затмить его достижения)',
    [
      { en: 'A total solar eclipse is a rare event.', ru: 'Полное солнечное затмение — редкое событие.' },
      { en: 'His success was eclipsed by his brother\'s fame.', ru: 'Его успех был затмен славой его брата.' },
      { en: 'The moon eclipsed the sun.', ru: 'Луна закрыла (затмила) солнце.' },
      { en: 'New technology eclipses the old methods.', ru: 'Новые технологии затмевают старые методы.' }
    ],
    []
  ),

  createRichWord('c1_ecstasy', 'Ecstasy', '/ˈek.stə.si/', 'экстэси', 'Экстаз / Восторг', ProficiencyLevel.C1, 'noun', 'Low', 'Literary',
    'Состояние чрезвычайного счастья или возбуждения.',
    '- Эмоция: "In ecstasy" (В экстазе)\n- Реакция: "Go into ecstasies" (Прийти в восторг)\n- Чувство: "Pure ecstasy" (Чистый восторг)',
    [
      { en: 'She was in ecstasy when she won the lottery.', ru: 'Она была в экстазе, когда выиграла в лотерею.' },
      { en: 'The music sent the crowd into ecstasies.', ru: 'Музыка привела толпу в восторг.' },
      { en: 'It was a moment of pure ecstasy.', ru: 'Это был момент чистого восторга.' },
      { en: 'Religious ecstasy is a powerful experience.', ru: 'Религиозный экстаз — это мощное переживание.' }
    ],
    []
  ),

  createRichWord('c1_embark', 'Embark', '/ɪmˈbɑːk/', 'имбак', 'Садиться на корабль / Начинать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Садиться на судно или самолет; начинать что-то новое и важное (с on/upon).',
    '- Путешествие: "Embark on a ship" (Сесть на корабль)\n- Дело: "Embark on a career" (Начать карьеру)\n- Проект: "Embark on a project" (Приступить к проекту)',
    [
      { en: 'We embarked on the ship at dawn.', ru: 'Мы сели на корабль на рассвете.' },
      { en: 'She embarked on a new career as a writer.', ru: 'Она начала новую карьеру писателя.' },
      { en: 'Before you embark on this journey, be prepared.', ru: 'Прежде чем отправиться в это путешествие, будьте готовы.' },
      { en: 'The company has embarked on a major expansion.', ru: 'Компания приступила к масштабному расширению.' }
    ],
    []
  ),

  createRichWord('c1_embed', 'Embed', '/ɪmˈbed/', 'имбед', 'Встраивать / Внедрять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Прочно вставлять что-то внутрь чего-то другого; внедрять журналиста в армию.',
    '- Техника: "Embed video" (Встроить видео)\n- Предмет: "Embedded in the wall" (Вмурованный в стену)\n- Журналист: "Embedded journalist" (Прикомандированный журналист)',
    [
      { en: 'The bullet was embedded in the wall.', ru: 'Пуля застряла (была вмурована) в стене.' },
      { en: 'You can embed the video on your website.', ru: 'Вы можете встроить видео на свой веб-сайт.' },
      { en: 'These values are deeply embedded in our culture.', ru: 'Эти ценности глубоко укоренены (внедрены) в нашей культуре.' },
      { en: 'The journalist was embedded with the troops.', ru: 'Журналист был прикомандирован к войскам.' }
    ],
    []
  ),

  createRichWord('c1_embryo', 'Embryo', '/ˈem.bri.əʊ/', 'эмбриу', 'Эмбрион / Зародыш', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Животное или человек на ранней стадии развития (до рождения); начальная стадия чего-либо.',
    '- Биология: "Human embryo" (Человеческий эмбрион)\n- Переносное: "In embryo" (В зародыше / В проекте)\n- Развитие: "Embryo research" (Исследование эмбрионов)',
    [
      { en: 'The embryo develops in the womb.', ru: 'Эмбрион развивается в утробе.' },
      { en: 'The plan is still in embryo.', ru: 'План все еще находится в зародыше.' },
      { en: 'Stem cells can be taken from embryos.', ru: 'Стволовые клетки могут быть взяты из эмбрионов.' },
      { en: 'The idea existed in embryo years ago.', ru: 'Идея существовала в зародыше годы назад.' }
    ],
    []
  ),

  createRichWord('c1_empower', 'Empower', '/ɪmˈpaʊ.ər/', 'импауэ', 'Уполномочивать / Давать возможность', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Давать кому-то власть или уверенность сделать что-то.',
    '- Люди: "Empower women" (Расширять права женщин)\n- Право: "Empower the police" (Уполномочить полицию)\n- Чувство: "Feel empowered" (Чувствовать себя уверенным/сильным)',
    [
      { en: 'Education empowers people to change their lives.', ru: 'Образование дает людям возможность изменить свою жизнь.' },
      { en: 'The new law empowers the police to stop cars.', ru: 'Новый закон уполномочивает полицию останавливать машины.' },
      { en: 'We want to empower our employees.', ru: 'Мы хотим наделить наших сотрудников полномочиями.' },
      { en: 'She felt empowered by the training.', ru: 'Она почувствовала прилив сил после тренинга.' }
    ],
    []
  ),
  createRichWord('c1_ensemble', 'Ensemble', '/ɒnˈsɒm.bəl/', 'онсомбл', 'Ансамбль / Комплект', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Группа музыкантов/актеров, выступающих вместе; или комплект одежды.',
    '- Музыка: "Jazz ensemble" (Джазовый ансамбль)\n- Одежда: "Stylish ensemble" (Стильный комплект одежды)\n- Театр: "Cast ensemble" (Актерский состав)',
    [
      { en: 'A string ensemble played at the wedding.', ru: 'Струнный ансамбль играл на свадьбе.' },
      { en: 'She wore a matching purple ensemble.', ru: 'Она была одета в сочетающийся фиолетовый комплект.' },
      { en: 'The play features a strong ensemble cast.', ru: 'В пьесе задействован сильный актерский ансамбль.' },
      { en: 'The buildings form a pleasing architectural ensemble.', ru: 'Здания образуют приятный архитектурный ансамбль.' }
    ],
    []
  ),

  createRichWord('c1_ensue', 'Ensue', '/ɪnˈsjuː/', 'инсью', 'Следовать / Вытекать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Происходить после чего-то другого или в результате чего-то.',
    '- Результат: "Chaos ensued" (Последовал хаос)\n- Битва: "Battle ensued" (Завязалась битва)\n- Фраза: "The ensuing days" (Последующие дни)',
    [
      { en: 'An argument ensued after the decision.', ru: 'После решения последовал спор.' },
      { en: 'Panic ensued when the fire alarm rang.', ru: 'Когда прозвенела пожарная сигнализация, началась паника.' },
      { en: 'In the ensuing chaos, he escaped.', ru: 'В последовавшем хаосе он сбежал.' },
      { en: 'Silence ensued.', ru: 'Последовала тишина.' }
    ],
    []
  ),

  createRichWord('c1_entail', 'Entail', '/ɪnˈteɪl/', 'интейл', 'Влечь за собой / Предусматривать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Включать в себя что-то как необходимую часть или последствие.',
    '- Работа: "Job entails" (Работа предусматривает)\n- Риск: "Entail risk" (Влечь риск)\n- Расходы: "Entail expense" (Влечь расходы)',
    [
      { en: 'The job entails a lot of travel.', ru: 'Работа предусматривает много путешествий.' },
      { en: 'This decision entails serious consequences.', ru: 'Это решение влечет за собой серьезные последствия.' },
      { en: 'Building a house entails great expense.', ru: 'Строительство дома влечет большие расходы.' },
      { en: 'What does the procedure entail?', ru: 'Что включает в себя эта процедура?' }
    ],
    []
  ),

  createRichWord('c1_enzyme', 'Enzyme', '/ˈen.zaɪm/', 'энзайм', 'Фермент', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Химическое вещество в живых организмах, ускоряющее реакции (например, пищеварение).',
    '- Биология: "Digestive enzymes" (Пищеварительные ферменты)\n- Реакция: "Enzyme activity" (Активность ферментов)\n- Печень: "Liver enzymes" (Ферменты печени)',
    [
      { en: 'Enzymes help digest food in the stomach.', ru: 'Ферменты помогают переваривать пищу в желудке.' },
      { en: 'Saliva contains an enzyme that breaks down starch.', ru: 'Слюна содержит фермент, расщепляющий крахмал.' },
      { en: 'Certain enzymes are used in washing powders.', ru: 'Определенные ферменты используются в стиральных порошках.' },
      { en: 'High heat can destroy enzymes.', ru: 'Высокая температура может разрушить ферменты.' }
    ],
    []
  ),

  createRichWord('c1_erode', 'Erode', '/ɪˈrəʊd/', 'ироуд', 'Разъедать / Разрушать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Постепенно разрушаться под воздействием ветра/воды; или ослабевать (доверие/власть).',
    '- Природа: "Waves erode rocks" (Волны разрушают скалы)\n- Доверие: "Erode confidence" (Подрывать доверие)\n- Время: "Erode over time" (Разрушаться со временем)',
    [
      { en: 'The cliffs are being eroded by the sea.', ru: 'Скалы разрушаются морем.' },
      { en: 'Inflation erodes the value of money.', ru: 'Инфляция съедает (разрушает) стоимость денег.' },
      { en: 'His behaviour eroded my trust in him.', ru: 'Его поведение подорвало мое доверие к нему.' },
      { en: 'Wind and rain erode the soil.', ru: 'Ветер и дождь вызывают эрозию почвы.' }
    ],
    []
  ),

  createRichWord('c1_erosion', 'Erosion', '/ɪˈrəʊ.ʒən/', 'ироужн', 'Эрозия / Разрушение', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Процесс постепенного разрушения поверхности земли или чего-то абстрактного.',
    '- Почва: "Soil erosion" (Эрозия почвы)\n- Берег: "Coastal erosion" (Разрушение берегов)\n- Абстрактно: "Erosion of rights" (Ущемление прав)',
    [
      { en: 'Soil erosion is a major problem for farmers.', ru: 'Эрозия почвы — серьезная проблема для фермеров.' },
      { en: 'We must stop the erosion of our civil liberties.', ru: 'Мы должны остановить разрушение наших гражданских свобод.' },
      { en: 'Planting trees helps prevent erosion.', ru: 'Посадка деревьев помогает предотвратить эрозию.' },
      { en: 'The erosion of the coastline continues.', ru: 'Разрушение береговой линии продолжается.' }
    ],
    []
  ),

  createRichWord('c1_escalate', 'Escalate', '/ˈes.kə.leɪt/', 'эскэлейт', 'Обострять(ся) / Эскалировать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Быстро становиться более серьезным или интенсивным.',
    '- Конфликт: "Violence escalated" (Насилие обострилось)\n- Цены: "Costs escalated" (Расходы возросли)\n- Спор: "Argument escalated" (Спор перерос в ссору)',
    [
      { en: 'The conflict has escalated into a war.', ru: 'Конфликт перерос в войну.' },
      { en: 'Prices have escalated in recent months.', ru: 'Цены резко выросли в последние месяцы.' },
      { en: 'We must try not to escalate the situation.', ru: 'Мы должны постараться не обострять ситуацию.' },
      { en: 'The argument quickly escalated into a fight.', ru: 'Спор быстро перерос в драку.' }
    ],
    []
  ),

  createRichWord('c1_expel', 'Expel', '/ɪkˈspel/', 'икспел', 'Исключать / Выгонять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставить кого-то покинуть школу, организацию или страну; выталкивать воздух.',
    '- Школа: "Expel a student" (Исключить студента)\n- Страна: "Expel diplomats" (Выслать дипломатов)\n- Физика: "Expel air" (Выдыхать воздух)',
    [
      { en: 'He was expelled from school for bad behaviour.', ru: 'Его исключили из школы за плохое поведение.' },
      { en: 'The country expelled the foreign spies.', ru: 'Страна выслала иностранных шпионов.' },
      { en: 'The volcano expelled ash and lava.', ru: 'Вулкан изверг (вытолкнул) пепел и лаву.' },
      { en: 'They threatened to expel him from the club.', ru: 'Они угрожали исключить его из клуба.' }
    ],
    []
  ),

  createRichWord('c1_exquisite', 'Exquisite', '/ɪkˈskwɪz.ɪt/', 'иксквизит', 'Изысканный / Утонченный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Очень красивый и тонко сделанный; или очень сильный (о чувствах).',
    '- Красота: "Exquisite beauty" (Изысканная красота)\n- Вкус: "Exquisite taste" (Утонченный вкус)\n- Боль: "Exquisite pain" (Острая боль - редко)',
    [
      { en: 'She wore an exquisite diamond necklace.', ru: 'На ней было изысканное бриллиантовое ожерелье.' },
      { en: 'The food was exquisite.', ru: 'Еда была восхитительной.' },
      { en: 'The workmanship is exquisite.', ru: 'Мастерство исполнения утонченное.' },
      { en: 'He has exquisite taste in art.', ru: 'У него изысканный вкус в искусстве.' }
    ],
    []
  ),

  createRichWord('c1_farewell', 'Farewell', '/ˌfeəˈwel/', 'феэвел', 'Прощание / Прощай', ProficiencyLevel.C1, 'noun', 'Low', 'Literary',
    'Акт прощания или само слово "прощай" (формально/поэтично).',
    '- Событие: "Farewell party" (Прощальная вечеринка)\n- Действие: "Bid farewell" (Попрощаться)\n- Слова: "Say farewell" (Сказать прощай)',
    [
      { en: 'We threw a farewell party for him.', ru: 'Мы устроили для него прощальную вечеринку.' },
      { en: 'He bade farewell to his family.', ru: 'Он попрощался со своей семьей.' },
      { en: 'This is my final farewell.', ru: 'Это мое последнее прощание.' },
      { en: 'A fond farewell to our colleagues.', ru: 'Теплое прощание с нашими коллегами.' }
    ],
    []
  ),

  createRichWord('c1_fatigue', 'Fatigue', '/fəˈtiːɡ/', 'фатиг', 'Усталость / Утомление', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Крайняя усталость, часто от тяжелой работы или болезни.',
    '- Здоровье: "Chronic fatigue" (Хроническая усталость)\n- Причина: "Mental fatigue" (Умственное утомление)\n- Материал: "Metal fatigue" (Усталость металла)',
    [
      { en: 'She was suffering from exhaustion and fatigue.', ru: 'Она страдала от истощения и усталости.' },
      { en: 'Driver fatigue is a major cause of accidents.', ru: 'Усталость водителя — главная причина аварий.' },
      { en: 'His face showed signs of fatigue.', ru: 'На его лице были видны признаки усталости.' },
      { en: 'The bridge collapsed due to metal fatigue.', ru: 'Мост обрушился из-за усталости металла.' }
    ],
    []
  ),

  createRichWord('c1_feasible', 'Feasible', '/ˈfiː.zə.bəl/', 'физэбл', 'Осуществимый / Реальный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Возможный для выполнения; вероятный.',
    '- План: "Feasible plan" (Реальный план)\n- Решение: "Economically feasible" (Экономически целесообразный)\n- Вопрос: "Is it feasible?" (Это осуществимо?)',
    [
      { en: 'It is not feasible to finish by tomorrow.', ru: 'Закончить к завтрашнему дню нереально.' },
      { en: 'We need to find a feasible solution.', ru: 'Нам нужно найти осуществимое решение.' },
      { en: 'Is this project technically feasible?', ru: 'Технически ли осуществим этот проект?' },
      { en: 'The cost makes the idea barely feasible.', ru: 'Стоимость делает идею едва ли осуществимой.' }
    ],
    []
  ),

  createRichWord('c1_feast', 'Feast', '/fiːst/', 'фист', 'Пир / Празднество', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Обильная еда с множеством гостей; религиозный праздник.',
    '- Еда: "Wedding feast" (Свадебный пир)\n- Праздник: "Feast day" (Праздничный день)\n- Глагол: "Feast on" (Лакомиться)',
    [
      { en: 'They prepared a magnificent feast for the guests.', ru: 'Они приготовили великолепный пир для гостей.' },
      { en: 'Christmas is a time of feasting.', ru: 'Рождество — время пиршеств.' },
      { en: 'We feasted on roast chicken and wine.', ru: 'Мы лакомились жареной курицей и вином.' },
      { en: 'The view was a feast for the eyes.', ru: 'Вид был усладой (пиром) для глаз.' }
    ],
    []
  ),

  createRichWord('c1_fixture', 'Fixture', '/ˈfɪks.tʃər/', 'фикстчэ', 'Крепление / Спортивная встреча', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Предмет мебели/оборудования, прикрепленный к дому; запланированное спортивное событие.',
    '- Дом: "Light fixture" (Светильник)\n- Спорт: "Next fixture" (Следующая игра/матч)\n- Люди: "Permanent fixture" (Постоянный участник/элемент)',
    [
      { en: 'The bathroom fixtures need replacing.', ru: 'Сантехнику (крепления) в ванной нужно заменить.' },
      { en: 'Saturday\'s fixture against Arsenal is crucial.', ru: 'Субботний матч против Арсенала имеет решающее значение.' },
      { en: 'He has become a permanent fixture in the pub.', ru: 'Он стал постоянным обитателем паба.' },
      { en: 'Fixtures and fittings are included in the price.', ru: 'Встроенное оборудование и фурнитура включены в цену.' }
    ],
    []
  ),

  createRichWord('c1_flake', 'Flake', '/fleɪk/', 'флейк', 'Хлопья / Чешуйка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Маленький плоский кусочек чего-либо; ненадежный человек (слэнг).',
    '- Снег: "Snowflakes" (Снежинки)\n- Еда: "Corn flakes" (Кукурузные хлопья)\n- Краска: "Flakes of paint" (Чешуйки краски)',
    [
      { en: 'Large flakes of snow began to fall.', ru: 'Начали падать крупные хлопья снега.' },
      { en: 'The paint is peeling off in flakes.', ru: 'Краска отслаивается чешуйками.' },
      { en: 'He is such a flake, he never calls back.', ru: 'Он такой ненадежный, никогда не перезванивает.' },
      { en: 'Add some chilli flakes for spice.', ru: 'Добавь немного хлопьев чили для остроты.' }
    ],
    [
      { meaning: "To peel off (verb)", translation: "Осыпаться / Шелушиться", example: { en: "The paint is flaking.", ru: "Краска шелушится." } }
    ]
  ),

  createRichWord('c1_flats', 'Flats', '/flæts/', 'флэтс', 'Туфли на плоской подошве', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Женская обувь без каблука (plural noun). Также может означать квартиры (брит., B1/B2), но в уровне C1 часто имеется в виду обувь или равнины.',
    '- Обувь: "Wear flats" (Носить обувь на плоской подошве)\n- Удобство: "Comfortable flats" (Удобные балетки)\n- Местность: "Salt flats" (Солончаки)',
    [
      { en: 'She prefers wearing flats to high heels.', ru: 'Она предпочитает носить обувь на плоской подошве, а не каблуки.' },
      { en: 'I bought a pair of black ballet flats.', ru: 'Я купила пару черных балеток.' },
      { en: 'These flats are perfect for walking.', ru: 'Эти туфли идеально подходят для ходьбы.' },
      { en: 'The tide went out, exposing the mud flats.', ru: 'Прилив ушел, обнажив илистые отмели.' }
    ],
    []
  ),

  createRichWord('c1_flatter', 'Flatter', '/ˈflæt.ər/', 'флэтэ', 'Льстить', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Хвалить кого-то неискренне, чтобы получить что-то; или делать кого-то красивее, чем на самом деле.',
    '- Речь: "Flatter someone" (Льстить кому-то)\n- Одежда: "Dress flatters you" (Платье тебя красит)\n- Чувство: "Feel flattered" (Быть польщенным)',
    [
      { en: 'He tried to flatter me into doing his work.', ru: 'Он пытался лестью заставить меня сделать его работу.' },
      { en: 'That colour really flatters you.', ru: 'Этот цвет тебе очень идет (льстит твоей внешности).' },
      { en: 'I was flattered by the invitation.', ru: 'Я был польщен приглашением.' },
      { en: 'Don\'t flatter yourself, I didn\'t dress up for you.', ru: 'Не льсти себе, я нарядилась не для тебя.' }
    ],
    []
  ),

  createRichWord('c1_flop', 'Flop', '/flɒp/', 'флоп', 'Провал / Шлепнуться', ProficiencyLevel.C1, 'verb', 'Low', 'Informal',
    'С треском провалиться (о фильме/пьесе); тяжело упасть или сесть.',
    '- Неудача: "Complete flop" (Полный провал)\n- Движение: "Flop onto the sofa" (Плюхнуться на диван)\n- Волосы: "Hair flops" (Волосы спадают)',
    [
      { en: 'The new movie was a box office flop.', ru: 'Новый фильм стал кассовым провалом.' },
      { en: 'He flopped into the armchair, exhausted.', ru: 'Он плюхнулся в кресло, измученный.' },
      { en: 'The business venture flopped badly.', ru: 'Бизнес-затея с треском провалилась.' },
      { en: 'Her hair flopped over her eyes.', ru: 'Ее волосы спадали ей на глаза.' }
    ],
    []
  ),

  createRichWord('c1_fluctuate', 'Fluctuate', '/ˈflʌk.tʃu.eɪt/', 'флакчуэйт', 'Колебаться / Меняться', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Часто меняться, повышаясь и понижаясь (цены, температура, настроение).',
    '- Цены: "Prices fluctuate" (Цены колеблются)\n- Погода: "Temperature fluctuates" (Температура меняется)\n- Настроение: "Mood fluctuates" (Настроение скачет)',
    [
      { en: 'Oil prices fluctuate daily.', ru: 'Цены на нефть колеблются ежедневно.' },
      { en: 'Her mood fluctuates wildly.', ru: 'Ее настроение дико скачет.' },
      { en: 'The number of students fluctuates each year.', ru: 'Количество студентов меняется каждый год.' },
      { en: 'Vegetable prices fluctuate according to the season.', ru: 'Цены на овощи колеблются в зависимости от сезона.' }
    ],
    []
  ),

  createRichWord('c1_forthcoming', 'Forthcoming', '/ˌfɔːθˈkʌm.ɪŋ/', 'фоскамин', 'Предстоящий / Отзывчивый', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Тот, который скоро произойдет; или готовый предоставить информацию/помощь.',
    '- Время: "Forthcoming election" (Предстоящие выборы)\n- Инфо: "Not forthcoming" (Не желающий давать информацию)\n- Событие: "Forthcoming events" (Грядущие события)',
    [
      { en: 'We discussed the forthcoming trip.', ru: 'Мы обсудили предстоящую поездку.' },
      { en: 'He was not very forthcoming about his plans.', ru: 'Он не очень охотно делился своими планами.' },
      { en: 'A list of forthcoming books.', ru: 'Список готовящихся к выходу книг.' },
      { en: 'Help was not forthcoming.', ru: 'Помощь не пришла (не была предоставлена).' }
    ],
    []
  ),

  createRichWord('c1_frantic', 'Frantic', '/ˈfræn.tɪk/', 'фрэнтик', 'Безумный / Неистовый', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'В состоянии сильного волнения или страха; сделанный в спешке.',
    '- Страх: "Frantic parents" (Обезумевшие от страха родители)\n- Скорость: "Frantic pace" (Бешеный темп)\n- Поиск: "Frantic search" (Лихорадочные поиски)',
    [
      { en: 'She was frantic with worry.', ru: 'Она обезумела от беспокойства.' },
      { en: 'There was a frantic rush to finish on time.', ru: 'Была бешеная спешка, чтобы закончить вовремя.' },
      { en: 'I made a frantic call to the police.', ru: 'Я сделал лихорадочный звонок в полицию.' },
      { en: 'Life in the city is too frantic for me.', ru: 'Жизнь в городе слишком суматошная для меня.' }
    ],
    []
  ),

  createRichWord('c1_freight', 'Freight', '/freɪt/', 'фрейт', 'Груз / Фрахт', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Товары, перевозимые на корабле, поезде или самолете; стоимость перевозки.',
    '- Транспорт: "Freight train" (Грузовой поезд)\n- Тип: "Air freight" (Авиаперевозка грузов)\n- Глагол: "To freight" (Фрахтовать/Перевозить)',
    [
      { en: 'The goods were sent by air freight.', ru: 'Товары были отправлены авиаперевозкой.' },
      { en: 'Freight trains run at night.', ru: 'Грузовые поезда ходят ночью.' },
      { en: 'We pay extra for express freight.', ru: 'Мы платим дополнительно за экспресс-доставку груза.' },
      { en: 'The ship carries both passengers and freight.', ru: 'Корабль перевозит и пассажиров, и грузы.' }
    ],
    []
  ),

  createRichWord('c1_garment', 'Garment', '/ˈɡɑː.mənt/', 'гамэнт', 'Предмет одежды', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Любой предмет одежды (формальное слово).',
    '- Тип: "Woollen garment" (Шерстяное изделие)\n- Индустрия: "Garment industry" (Швейная промышленность)\n- Состояние: "Outer garment" (Верхняя одежда)',
    [
      { en: 'This garment should be dry cleaned only.', ru: 'Это изделие нужно сдавать только в химчистку.' },
      { en: 'She works in a garment factory.', ru: 'Она работает на швейной фабрике.' },
      { en: 'He wore a strange long garment.', ru: 'На нем было странное длинное одеяние.' },
      { en: 'Loose garments are more comfortable.', ru: 'Свободная одежда более удобна.' }
    ],
    []
  ),
  createRichWord('c1_denote', 'Denote', '/dɪˈnəʊt/', 'динут', 'Означать / Обозначать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Быть знаком или символом чего-либо; указывать на что-то.',
    '- Символ: "X denotes the spot" (X обозначает место)\n- Значение: "Word denotes" (Слово означает)\n- Указание: "Denote status" (Указывать на статус)',
    [
      { en: 'The colour red is used to denote danger.', ru: 'Красный цвет используется для обозначения опасности.' },
      { en: 'In this map, blue lines denote rivers.', ru: 'На этой карте синие линии обозначают реки.' },
      { en: 'The term "hacker" denotes a skilled programmer.', ru: 'Термин "хакер" обозначает квалифицированного программиста.' },
      { en: 'A smile usually denotes happiness.', ru: 'Улыбка обычно означает счастье.' }
    ],
    []
  ),

  createRichWord('c1_dent', 'Dent', '/dent/', 'дент', 'Вмятина / Оставлять вмятину', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Углубление на поверхности от удара (сущ.); повредить поверхность или (перен.) нанести ущерб уверенности/бюджету (гл.).',
    '- Машина: "Dent in the car" (Вмятина на машине)\n- Ущерб: "Dent confidence" (Подорвать уверенность)\n- Финансы: "Dent the savings" (Ударить по сбережениям)',
    [
      { en: 'Someone put a dent in my car door.', ru: 'Кто-то оставил вмятину на двери моей машины.' },
      { en: 'The accident dented the bumper.', ru: 'Авария помяла бампер.' },
      { en: 'The criticism barely dented his confidence.', ru: 'Критика едва ли пошатнула его уверенность.' },
      { en: 'Buying a house made a huge dent in our savings.', ru: 'Покупка дома нанесла огромный удар по нашим сбережениям.' }
    ],
    []
  ),

  createRichWord('c1_deport', 'Deport', '/dɪˈpɔːt/', 'дипот', 'Депортировать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Принудительно выслать иностранца из страны за нарушение закона.',
    '- Закон: "Deport illegal immigrants" (Депортировать нелегальных иммигрантов)\n- Действие: "Face deportation" (Грозит депортация)\n- Страна: "Deport back to..." (Депортировать обратно в...)',
    [
      { en: 'He was deported for overstaying his visa.', ru: 'Его депортировали за просроченную визу.' },
      { en: 'The government plans to deport criminals.', ru: 'Правительство планирует депортировать преступников.' },
      { en: 'She fears she might be deported.', ru: 'Она боится, что ее могут депортировать.' },
      { en: 'Thousands were deported during the war.', ru: 'Тысячи людей были депортированы во время войны.' }
    ],
    []
  ),

  createRichWord('c1_despise', 'Despise', '/dɪˈspaɪz/', 'диспайз', 'Презирать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Испытывать сильную неприязнь и отсутствие уважения к кому-либо.',
    '- Чувство: "Despise weakness" (Презирать слабость)\n- Отношение: "Despise hypocrisy" (Презирать лицемерие)\n- Интенсивность: "Utterly despise" (Крайне презирать)',
    [
      { en: 'She despises him for lying to her.', ru: 'Она презирает его за то, что он ей солгал.' },
      { en: 'I despise cruelty to animals.', ru: 'Я презираю жестокое обращение с животными.' },
      { en: 'He claimed to despise money, but lived in luxury.', ru: 'Он утверждал, что презирает деньги, но жил в роскоши.' },
      { en: 'They despise the politicians who betrayed them.', ru: 'Они презирают политиков, которые их предали.' }
    ],
    []
  ),

  createRichWord('c1_devalue', 'Devalue', '/ˌdiːˈvæl.juː/', 'дивэлью', 'Обесценивать / Девальвировать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Снижать ценность денег или важность чего-либо.',
    '- Валюта: "Devalue the currency" (Девальвировать валюту)\n- Мнение: "Devalue achievements" (Обесценивать достижения)\n- Работа: "Feel devalued" (Чувствовать себя недооцененным)',
    [
      { en: 'The government decided to devalue the currency.', ru: 'Правительство решило девальвировать валюту.' },
      { en: 'Don\'t let anyone devalue your work.', ru: 'Не позволяй никому обесценивать твою работу.' },
      { en: 'Inflation devalues savings rapidly.', ru: 'Инфляция быстро обесценивает сбережения.' },
      { en: 'He felt devalued by his boss\'s comments.', ru: 'Он чувствовал себя недооцененным из-за комментариев начальника.' }
    ],
    []
  ),

  createRichWord('c1_diagonal', 'Diagonal', '/daɪˈæɡ.ən.əl/', 'дайэгэнэл', 'Диагональный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Идущий из одного угла в противоположный; косой.',
    '- Линия: "Diagonal line" (Диагональная линия)\n- Узор: "Diagonal stripes" (Диагональные полосы)\n- Направление: "Walk diagonally" (Идти по диагонали)',
    [
      { en: 'Draw a diagonal line across the page.', ru: 'Нарисуй диагональную линию через страницу.' },
      { en: 'The path cuts diagonally across the field.', ru: 'Тропинка пересекает поле по диагонали.' },
      { en: 'She wore a dress with diagonal stripes.', ru: 'Она была в платье с диагональными полосами.' },
      { en: 'Move the bishop in a diagonal direction.', ru: 'Переместите слона (в шахматах) в диагональном направлении.' }
    ],
    []
  ),

  createRichWord('c1_dialect', 'Dialect', '/ˈdaɪ.ə.lekt/', 'дайэлект', 'Диалект / Наречие', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Форма языка, на которой говорят в определенной местности.',
    '- Язык: "Local dialect" (Местный диалект)\n- Речь: "Speak in dialect" (Говорить на диалекте)\n- Особенность: "Strong dialect" (Сильный диалект)',
    [
      { en: 'He speaks a dialect that is hard to understand.', ru: 'Он говорит на диалекте, который трудно понять.' },
      { en: 'The Yorkshire dialect has unique words.', ru: 'Йоркширский диалект имеет уникальные слова.' },
      { en: 'Dialects often vary from village to village.', ru: 'Диалекты часто различаются от деревни к деревне.' },
      { en: 'She studied the local dialects of Italy.', ru: 'Она изучала местные диалекты Италии.' }
    ],
    []
  ),

  createRichWord('c1_diarrhoea', 'Diarrhoea', '/ˌdaɪ.əˈriː.ə/', 'дайэриэ', 'Диарея', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Расстройство желудка, при котором стул становится жидким и частым.',
    '- Здоровье: "Severe diarrhoea" (Сильная диарея)\n- Причина: "Caused by bacteria" (Вызвано бактериями)\n- Симптом: "Suffer from diarrhoea" (Страдать от диареи)',
    [
      { en: 'Travellers often suffer from diarrhoea.', ru: 'Путешественники часто страдают от диареи.' },
      { en: 'Drink plenty of water if you have diarrhoea.', ru: 'Пейте много воды, если у вас диарея.' },
      { en: 'The infection causes vomiting and diarrhoea.', ru: 'Инфекция вызывает рвоту и диарею.' },
      { en: 'Diarrhoea can lead to dehydration.', ru: 'Диарея может привести к обезвоживанию.' }
    ],
    []
  ),

  createRichWord('c1_diligent', 'Diligent', '/ˈdɪl.ɪ.dʒənt/', 'дилиджент', 'Прилежный / Усердный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Проявляющий старание и тщательность в работе.',
    '- Работа: "Diligent worker" (Усердный работник)\n- Учеба: "Diligent student" (Прилежный студент)\n- Исследование: "Diligent research" (Тщательное исследование)',
    [
      { en: 'He is a diligent student who always gets good grades.', ru: 'Он прилежный студент, который всегда получает хорошие оценки.' },
      { en: 'The lawyer conducted a diligent search for evidence.', ru: 'Адвокат провел тщательный поиск улик.' },
      { en: 'Success requires diligent effort.', ru: 'Успех требует усердных усилий.' },
      { en: 'She was diligent in her duties.', ru: 'Она была усердна в своих обязанностях.' }
    ],
    []
  ),

  createRichWord('c1_discontent', 'Discontent', '/ˌdɪs.kənˈtent/', 'дискэнтент', 'Недовольство', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Чувство неудовлетворенности ситуацией (часто среди группы людей).',
    '- Общество: "Public discontent" (Общественное недовольство)\n- Политика: "Growing discontent" (Растущее недовольство)\n- Причина: "Cause for discontent" (Причина для недовольства)',
    [
      { en: 'There is growing discontent with the government.', ru: 'Растет недовольство правительством.' },
      { en: 'Low wages are a major cause of discontent.', ru: 'Низкие зарплаты — главная причина недовольства.' },
      { en: 'The discontent spread rapidly through the workforce.', ru: 'Недовольство быстро распространилось среди рабочих.' },
      { en: 'He voiced his discontent at the meeting.', ru: 'Он выразил свое недовольство на собрании.' }
    ],
    []
  ),

  createRichWord('c1_disqualify', 'Disqualify', '/dɪsˈkwɒl.ɪ.faɪ/', 'дискволифай', 'Дисквалифицировать / Лишать права', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Лишить права участвовать в чем-то из-за нарушения правил.',
    '- Спорт: "Disqualified from the race" (Дисквалифицирован из гонки)\n- Вождение: "Disqualified from driving" (Лишен прав на вождение)\n- Причина: "Disqualified for cheating" (Дисквалифицирован за жульничество)',
    [
      { en: 'He was disqualified for a false start.', ru: 'Его дисквалифицировали за фальстарт.' },
      { en: 'A criminal record may disqualify you from certain jobs.', ru: 'Судимость может лишить вас права на определенные виды работ.' },
      { en: 'She was disqualified from driving for a year.', ru: 'Ее лишили прав на вождение на год.' },
      { en: 'Using drugs will disqualify any athlete.', ru: 'Использование допинга дисквалифицирует любого спортсмена.' }
    ],
    []
  ),

  createRichWord('c1_distrust', 'Distrust', '/dɪsˈtrʌst/', 'дистраст', 'Недоверие / Не доверять', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Чувство, что кому-то нельзя доверять (сущ.); не доверять (гл.).',
    '- Чувство: "Deep distrust" (Глубокое недоверие)\n- Отношения: "Distrust of authority" (Недоверие к власти)\n- Глагол: "Distrust strangers" (Не доверять незнакомцам)',
    [
      { en: 'He has a deep distrust of the media.', ru: 'У него глубокое недоверие к СМИ.' },
      { en: 'I naturally distrust people who talk too much.', ru: 'Я от природы не доверяю людям, которые слишком много говорят.' },
      { en: 'There is a mutual distrust between the two countries.', ru: 'Между двумя странами существует взаимное недоверие.' },
      { en: 'Her lies caused him to distrust her.', ru: 'Ее ложь заставила его перестать ей доверять.' }
    ],
    []
  ),

  createRichWord('c1_dough', 'Dough', '/dəʊ/', 'доу', 'Тесто / Деньги (сленг)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Смесь муки и жидкости для выпечки; сленговое название денег.',
    '- Кулинария: "Bread dough" (Хлебное тесто)\n- Действие: "Knead the dough" (Месить тесто)\n- Сленг: "Make some dough" (Заработать бабла)',
    [
      { en: 'Knead the dough until it is smooth.', ru: 'Месите тесто, пока оно не станет гладким.' },
      { en: 'Roll out the dough to make pizza.', ru: 'Раскатайте тесто, чтобы сделать пиццу.' },
      { en: 'Cookie dough is delicious even raw.', ru: 'Тесто для печенья вкусное даже сырым.' },
      { en: 'He needs a lot of dough to buy that car.', ru: 'Ему нужно много бабла, чтобы купить эту машину.' }
    ],
    []
  ),

  createRichWord('c1_drawback', 'Drawback', '/ˈdrɔː.bæk/', 'дроубэк', 'Недостаток / Минус', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Отрицательная черта или проблема (синоним disadvantage).',
    '- План: "Main drawback" (Главный недостаток)\n- Сравнение: "One drawback is..." (Один минус в том, что...)\n- Система: "Serious drawback" (Серьезный изъян)',
    [
      { en: 'The main drawback of the plan is the cost.', ru: 'Главный недостаток плана — это стоимость.' },
      { en: 'One drawback of living here is the traffic.', ru: 'Один из минусов жизни здесь — это пробки.' },
      { en: 'Every system has its drawbacks.', ru: 'У каждой системы есть свои недостатки.' },
      { en: 'Despite the drawbacks, I like this job.', ru: 'Несмотря на недостатки, мне нравится эта работа.' }
    ],
    []
  ),

  createRichWord('c1_dummy', 'Dummy', '/ˈdʌm.i/', 'дами', 'Манекен / Соска / Фиктивный', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Кукла в человеческий рост; детская соска (брит.); подделка (прил.).',
    '- Магазин: "Shop dummy" (Манекен)\n- Ребенок: "Give a dummy" (Дать соску - UK)\n- Тест: "Dummy run" (Пробный прогон)',
    [
      { en: 'The clothes were displayed on a dummy.', ru: 'Одежда была выставлена на манекене.' },
      { en: 'The baby stopped crying when he got his dummy.', ru: 'Ребенок перестал плакать, когда получил соску.' },
      { en: 'This isn\'t a real phone, it\'s a dummy.', ru: 'Это не настоящий телефон, это муляж.' },
      { en: 'We did a dummy run before the real event.', ru: 'Мы сделали пробный прогон перед реальным событием.' }
    ],
    [
      { meaning: "Stupid person (slang)", translation: "Болван", example: { en: "Don't be such a dummy.", ru: "Не будь таким болваном." } }
    ]
  ),

  createRichWord('c1_dune', 'Dune', '/djuːn/', 'дьюн', 'Дюна', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Холм из песка, нанесенный ветром (в пустыне или на пляже).',
    '- Местность: "Sand dune" (Песчаная дюна)\n- Пляж: "Coastal dunes" (Прибрежные дюны)\n- Действие: "Climb a dune" (Взобраться на дюну)',
    [
      { en: 'We climbed the sand dunes to see the ocean.', ru: 'Мы взобрались на песчаные дюны, чтобы увидеть океан.' },
      { en: 'The desert is full of shifting dunes.', ru: 'Пустыня полна движущихся дюн.' },
      { en: 'Dunes protect the coast from the sea.', ru: 'Дюны защищают побережье от моря.' },
      { en: 'It is hard to walk on soft dunes.', ru: 'Трудно ходить по мягким дюнам.' }
    ],
    []
  ),

  createRichWord('c1_dynasty', 'Dynasty', '/ˈdɪn.ə.sti/', 'динэсти', 'Династия', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Серия правителей из одной семьи; влиятельная семья в бизнесе.',
    '- История: "Ming Dynasty" (Династия Мин)\n- Власть: "Ruling dynasty" (Правящая династия)\n- Семья: "Political dynasty" (Политическая династия)',
    [
      { en: 'The Ming Dynasty ruled China for centuries.', ru: 'Династия Мин правила Китаем столетиями.' },
      { en: 'They are a powerful banking dynasty.', ru: 'Они — могущественная банковская династия.' },
      { en: 'The dynasty collapsed after the war.', ru: 'Династия рухнула после войны.' },
      { en: 'He wanted to establish a family dynasty.', ru: 'Он хотел основать семейную династию.' }
    ],
    []
  ),

  createRichWord('c1_ecosystem', 'Ecosystem', '/ˈiː.kəʊˌsɪs.təm/', 'икоусистэм', 'Экосистема', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Все живые существа в определенной зоне и их взаимодействие с окружающей средой.',
    '- Природа: "Marine ecosystem" (Морская экосистема)\n- Баланс: "Fragile ecosystem" (Хрупкая экосистема)\n- Защита: "Damage the ecosystem" (Навредить экосистеме)',
    [
      { en: 'Pollution harms the delicate ecosystem.', ru: 'Загрязнение вредит хрупкой экосистеме.' },
      { en: 'The rainforest contains a complex ecosystem.', ru: 'Тропический лес содержит сложную экосистему.' },
      { en: 'Introducing new species can upset the ecosystem.', ru: 'Внедрение новых видов может нарушить экосистему.' },
      { en: 'We study how animals survive in this ecosystem.', ru: 'Мы изучаем, как животные выживают в этой экосистеме.' }
    ],
    []
  ),

  createRichWord('c1_elegance', 'Elegance', '/ˈel.ɪ.ɡəns/', 'элигэнс', 'Элегантность / Изящество', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Качество быть изящным и стильным.',
    '- Стиль: "Simple elegance" (Простая элегантность)\n- Одежда: "Dress with elegance" (Одеваться с элегантностью)\n- Манеры: "Elegance of movement" (Изящество движений)',
    [
      { en: 'She dresses with great elegance.', ru: 'Она одевается с большой элегантностью.' },
      { en: 'The room was decorated with simple elegance.', ru: 'Комната была украшена с простой элегантностью.' },
      { en: 'I admire the elegance of her writing style.', ru: 'Я восхищаюсь изяществом ее стиля письма.' },
      { en: 'The hotel combines comfort and elegance.', ru: 'Отель сочетает в себе комфорт и элегантность.' }
    ],
    []
  ),

  createRichWord('c1_empathy', 'Empathy', '/ˈem.pə.θi/', 'емпэси', 'Эмпатия / Сопереживание', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Способность понимать и разделять чувства другого человека.',
    '- Чувство: "Feel empathy" (Чувствовать эмпатию)\n- Недостаток: "Lack of empathy" (Отсутствие эмпатии)\n- Отношение: "Show empathy" (Проявлять сочувствие)',
    [
      { en: 'She has great empathy for poor people.', ru: 'Она испытывает сильное сочувствие к бедным людям.' },
      { en: 'Empathy is important for a counselor.', ru: 'Эмпатия важна для консультанта.' },
      { en: 'He lacks empathy and cannot understand my pain.', ru: 'Ему не хватает эмпатии, и он не может понять мою боль.' },
      { en: 'Try to show some empathy towards her.', ru: 'Постарайся проявить к ней немного сочувствия.' }
    ],
    []
  ),
  createRichWord('c1_entice', 'Entice', '/ɪnˈtaɪs/', 'интайс', 'Соблазнять / Заманивать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Убеждать кого-то сделать что-то, предлагая что-то приятное.',
    '- Маркетинг: "Entice customers" (Заманивать клиентов)\n- Предложение: "Entice with an offer" (Соблазнить предложением)\n- Ловушка: "Entice into a trap" (Заманить в ловушку)',
    [
      { en: 'The shop uses sales to entice customers.', ru: 'Магазин использует распродажи, чтобы заманивать клиентов.' },
      { en: 'Nothing could entice him to leave his home.', ru: 'Ничто не могло соблазнить его покинуть дом.' },
      { en: 'She was enticed by the promise of higher pay.', ru: 'Ее соблазнило обещание более высокой зарплаты.' },
      { en: 'The smell of coffee enticed me into the cafe.', ru: 'Запах кофе заманил меня в кафе.' }
    ],
    []
  ),

  createRichWord('c1_equate', 'Equate', '/ɪˈkweɪt/', 'иквейт', 'Приравнивать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Считать одну вещь такой же, как другая.',
    '- Сравнение: "Equate money with happiness" (Приравнивать деньги к счастью)\n- Отношение: "Cannot be equated" (Нельзя приравнивать)\n- Логика: "Equate X to Y" (Приравнять X к Y)',
    [
      { en: 'You cannot equate wealth with happiness.', ru: 'Нельзя приравнивать богатство к счастью.' },
      { en: 'Some people equate silence with agreement.', ru: 'Некоторые люди приравнивают молчание к согласию.' },
      { en: 'High price does not always equate to high quality.', ru: 'Высокая цена не всегда означает высокое качество.' },
      { en: 'Don\'t equate criticism with rejection.', ru: 'Не приравнивай критику к отвержению.' }
    ],
    []
  ),

  createRichWord('c1_eradicate', 'Eradicate', '/ɪˈræd.ɪ.keɪt/', 'ирэдикейт', 'Искоренять / Уничтожать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Полностью избавляться от чего-то плохого (болезни, проблемы).',
    '- Болезнь: "Eradicate a virus" (Искоренить вирус)\n- Проблема: "Eradicate poverty" (Искоренить бедность)\n- Метод: "Efforts to eradicate" (Усилия по искоренению)',
    [
      { en: 'We aim to eradicate poverty in the region.', ru: 'Мы стремимся искоренить бедность в регионе.' },
      { en: 'Smallpox has been eradicated worldwide.', ru: 'Оспа была искоренена во всем мире.' },
      { en: 'It is difficult to eradicate corruption completely.', ru: 'Трудно полностью искоренить коррупцию.' },
      { en: 'They tried to eradicate the pests from the farm.', ru: 'Они пытались истребить вредителей на ферме.' }
    ],
    []
  ),

  createRichWord('c1_erotic', 'Erotic', '/ɪˈrɒt.ɪk/', 'иротик', 'Эротический', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Связанный с сексуальным желанием или возбуждением.',
    '- Искусство: "Erotic art" (Эротическое искусство)\n- Литература: "Erotic novel" (Эротический роман)\n- Чувства: "Erotic fantasy" (Эротическая фантазия)',
    [
      { en: 'The film contains some erotic scenes.', ru: 'Фильм содержит несколько эротических сцен.' },
      { en: 'Erotic literature has a long history.', ru: 'Эротическая литература имеет долгую историю.' },
      { en: 'The dance was considered too erotic for TV.', ru: 'Танец сочли слишком эротичным для телевидения.' },
      { en: 'She writes erotic poetry.', ru: 'Она пишет эротические стихи.' }
    ],
    []
  ),

  createRichWord('c1_esteem', 'Esteem', '/ɪˈstiːm/', 'истим', 'Уважение / Почитать', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Глубокое уважение и восхищение (сущ.); уважать (гл.).',
    '- Уважение: "Held in high esteem" (Пользоваться большим уважением)\n- Самооценка: "Self-esteem" (Самооценка)\n- Глагол: "Highly esteemed" (Глубоко уважаемый)',
    [
      { en: 'He is held in high esteem by his colleagues.', ru: 'Он пользуется большим уважением среди коллег.' },
      { en: 'Low self-esteem can lead to depression.', ru: 'Низкая самооценка может привести к депрессии.' },
      { en: 'I esteem her for her honesty.', ru: 'Я уважаю ее за честность.' },
      { en: 'It is a token of our esteem.', ru: 'Это знак нашего уважения.' }
    ],
    []
  ),

  createRichWord('c1_ethanol', 'Ethanol', '/ˈeθ.ə.nɒl/', 'эсэнол', 'Этанол', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Химическое вещество (спирт), используемое в топливе и напитках.',
    '- Топливо: "Ethanol fuel" (Этаноловое топливо)\n- Производство: "Produced from corn" (Производится из кукурузы)\n- Химия: "Pure ethanol" (Чистый этанол)',
    [
      { en: 'Ethanol is used as a renewable fuel source.', ru: 'Этанол используется как возобновляемый источник топлива.' },
      { en: 'This car can run on ethanol.', ru: 'Эта машина может работать на этаноле.' },
      { en: 'Ethanol is the alcohol found in drinks.', ru: 'Этанол — это спирт, содержащийся в напитках.' },
      { en: 'The production of ethanol from plants is increasing.', ru: 'Производство этанола из растений растет.' }
    ],
    []
  ),

  createRichWord('c1_evade', 'Evade', '/ɪˈveɪd/', 'ивейд', 'Уклоняться / Избегать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Избегать встречи с кем-то или выполнения обязанности (хитростью).',
    '- Закон: "Evade taxes" (Уклоняться от налогов)\n- Вопрос: "Evade the question" (Уйти от ответа)\n- Погоня: "Evade capture" (Избежать поимки)',
    [
      { en: 'He managed to evade the police for a week.', ru: 'Ему удавалось скрываться от полиции неделю.' },
      { en: 'Stop trying to evade my question.', ru: 'Перестань пытаться уйти от моего вопроса.' },
      { en: 'It is illegal to evade paying taxes.', ru: 'Уклонение от уплаты налогов незаконно.' },
      { en: 'She evaded his gaze nervously.', ru: 'Она нервно избегала его взгляда.' }
    ],
    []
  ),

  createRichWord('c1_evict', 'Evict', '/ɪˈvɪkt/', 'ивикт', 'Выселять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Принудительно заставить кого-то покинуть дом (обычно по закону).',
    '- Жилье: "Evict tenants" (Выселять жильцов)\n- Причина: "Evicted for non-payment" (Выселен за неуплату)\n- Процесс: "Eviction notice" (Уведомление о выселении)',
    [
      { en: 'They were evicted because they didn\'t pay rent.', ru: 'Их выселили, потому что они не платили аренду.' },
      { en: 'The landlord threatened to evict us.', ru: 'Арендодатель угрожал выселить нас.' },
      { en: 'Police arrived to evict the squatters.', ru: 'Полиция прибыла, чтобы выселить сквоттеров.' },
      { en: 'He received an eviction notice yesterday.', ru: 'Он получил уведомление о выселении вчера.' }
    ],
    []
  ),

  createRichWord('c1_excel', 'Excel', '/ɪkˈsel/', 'иксел', 'Превосходить / Отличаться', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Быть очень хорошим в чем-то; делать что-то лучше других.',
    '- Навык: "Excel in math" (Преуспевать в математике)\n- Спорт: "Excel at sports" (Отличаться в спорте)\n- Сравнение: "Excel oneself" (Превзойти самого себя)',
    [
      { en: 'She excels in foreign languages.', ru: 'Она преуспевает в иностранных языках.' },
      { en: 'He has always excelled at cricket.', ru: 'Он всегда отличался в крикете.' },
      { en: 'The team excelled themselves this season.', ru: 'Команда превзошла саму себя в этом сезоне.' },
      { en: 'They excel at providing customer service.', ru: 'Они превосходно обеспечивают обслуживание клиентов.' }
    ],
    []
  ),

  createRichWord('c1_excursion', 'Excursion', '/ɪkˈskɜː.ʃən/', 'икскёршн', 'Экскурсия / Поездка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Короткое организованное путешествие для удовольствия.',
    '- Туризм: "Go on an excursion" (Поехать на экскурсию)\n- Школа: "School excursion" (Школьная поездка)\n- Длительность: "Day excursion" (Однодневная экскурсия)',
    [
      { en: 'We went on an excursion to the mountains.', ru: 'Мы отправились на экскурсию в горы.' },
      { en: 'The price includes a day excursion to Rome.', ru: 'Цена включает однодневную экскурсию в Рим.' },
      { en: 'School excursions are educational and fun.', ru: 'Школьные поездки познавательны и веселы.' },
      { en: 'Our weekend excursion was ruined by rain.', ru: 'Наша поездка на выходные была испорчена дождем.' }
    ],
    []
  ),

  createRichWord('c1_exemplify', 'Exemplify', '/ɪɡˈzem.plɪ.faɪ/', 'игземплифай', 'Служить примером', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Быть типичным примером чего-либо.',
    '- Пример: "Exemplify the trend" (Иллюстрировать тенденцию)\n- Качество: "Exemplify courage" (Олицетворять мужество)\n- Стиль: "Style is exemplified by..." (Стиль демонстрируется...)',
    [
      { en: 'His life exemplifies the American Dream.', ru: 'Его жизнь олицетворяет Американскую мечту.' },
      { en: 'This painting exemplifies his early style.', ru: 'Эта картина служит примером его раннего стиля.' },
      { en: 'The building exemplifies modern architecture.', ru: 'Здание является образцом современной архитектуры.' },
      { en: 'Loyalty is exemplified by dogs.', ru: 'Верность олицетворяется собаками.' }
    ],
    []
  ),

  createRichWord('c1_exhilarate', 'Exhilarate', '/ɪɡˈzɪl.ə.reɪt/', 'игзилэрейт', 'Воодушевлять / Веселить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставлять кого-то чувствовать себя очень счастливым и энергичным.',
    '- Чувство: "Feel exhilarated" (Чувствовать воодушевление)\n- Опыт: "Exhilarating ride" (Захватывающая поездка)\n- Спорт: "Exhilarating experience" (Воодушевляющий опыт)',
    [
      { en: 'The speed of the ride exhilarated him.', ru: 'Скорость поездки воодушевила его.' },
      { en: 'We felt exhilarated by the fresh air.', ru: 'Мы чувствовали прилив бодрости от свежего воздуха.' },
      { en: 'Skiing is an exhilarating sport.', ru: 'Лыжи — это захватывающий вид спорта.' },
      { en: 'The news exhilarated the whole team.', ru: 'Новости воодушевили всю команду.' }
    ],
    []
  ),

  createRichWord('c1_extravagant', 'Extravagant', '/ɪkˈstræv.ə.ɡənt/', 'экстрэвэгэнт', 'Расточительный / Экстравагантный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Тратящий слишком много денег; или чрезмерно сложный/дорогой.',
    '- Деньги: "Extravagant lifestyle" (Расточительный образ жизни)\n- Подарок: "Extravagant gift" (Шикарный подарок)\n- Идеи: "Extravagant claims" (Преувеличенные заявления)',
    [
      { en: 'He leads an extravagant lifestyle.', ru: 'Он ведет расточительный образ жизни.' },
      { en: 'It was very extravagant to buy such a car.', ru: 'Было очень расточительно покупать такую машину.' },
      { en: 'She makes extravagant demands.', ru: 'Она выдвигает непомерные требования.' },
      { en: 'The party was an extravagant affair.', ru: 'Вечеринка была шикарным мероприятием.' }
    ],
    []
  ),

  createRichWord('c1_fabricate', 'Fabricate', '/ˈfæb.rɪ.keɪt/', 'фэбрикейт', 'Фабриковать / Изготовлять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Выдумывать ложную информацию (ложь); или производить что-то (промышленно).',
    '- Ложь: "Fabricate a story" (Сфабриковать историю)\n- Доказательства: "Fabricate evidence" (Подделать улики)\n- Производство: "Fabricate steel" (Изготовлять сталь)',
    [
      { en: 'He fabricated an excuse to miss work.', ru: 'Он выдумал оправдание, чтобы пропустить работу.' },
      { en: 'The evidence was completely fabricated.', ru: 'Улики были полностью сфабрикованы.' },
      { en: 'They fabricate car parts in this factory.', ru: 'На этом заводе изготовляют автозапчасти.' },
      { en: 'Don\'t fabricate lies to protect yourself.', ru: 'Не выдумывай ложь, чтобы защитить себя.' }
    ],
    []
  ),

  createRichWord('c1_facet', 'Facet', '/ˈfæs.ɪt/', 'фэсит', 'Грань / Аспект', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Одна сторона чего-то многогранного (проблемы, характера, драгоценного камня).',
    '- Аспект: "Every facet of life" (Каждая грань жизни)\n- Камень: "Facets of a diamond" (Грани бриллианта)\n- Проблема: "Many facets" (Много аспектов)',
    [
      { en: 'We need to examine every facet of the problem.', ru: 'Нам нужно изучить каждую грань проблемы.' },
      { en: 'She revealed a new facet of her personality.', ru: 'Она раскрыла новую грань своей личности.' },
      { en: 'The diamond\'s facets sparkled in the light.', ru: 'Грани бриллианта сверкали на свету.' },
      { en: 'This issue has many interesting facets.', ru: 'У этого вопроса много интересных аспектов.' }
    ],
    []
  ),

  createRichWord('c1_falcon', 'Falcon', '/ˈfɒl.kən/', 'фолкэн', 'Сокол', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Хищная птица, которую можно обучить охоте.',
    '- Птица: "Peregrine falcon" (Сапсан)\n- Охота: "Falconry" (Соколиная охота)\n- Скорость: "Fast as a falcon" (Быстрый как сокол)',
    [
      { en: 'The falcon dived to catch its prey.', ru: 'Сокол пикировал, чтобы поймать добычу.' },
      { en: 'He trains falcons for hunting.', ru: 'Он тренирует соколов для охоты.' },
      { en: 'Falcons are known for their speed.', ru: 'Соколы известны своей скоростью.' },
      { en: 'We watched the falcon soar in the sky.', ru: 'Мы наблюдали, как сокол парит в небе.' }
    ],
    []
  ),

  createRichWord('c1_famine', 'Famine', '/ˈfæm.ɪn/', 'фэмин', 'Голод (бедствие)', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Ситуация, когда большому количеству людей нечего есть в течение долгого времени.',
    '- Бедствие: "Widespread famine" (Массовый голод)\n- Причина: "Caused by drought" (Вызванный засухой)\n- Помощь: "Famine relief" (Помощь голодающим)',
    [
      { en: 'The drought led to a severe famine.', ru: 'Засуха привела к сильному голоду.' },
      { en: 'Millions died during the famine.', ru: 'Миллионы умерли во время голода.' },
      { en: 'Aid agencies are sending food to famine areas.', ru: 'Агентства помощи отправляют еду в зоны голода.' },
      { en: 'Famine is a humanitarian crisis.', ru: 'Голод — это гуманитарный кризис.' }
    ],
    []
  ),

  createRichWord('c1_fascist', 'Fascist', '/ˈfæʃ.ɪst/', 'фэшист', 'Фашист / Фашистский', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Сторонник крайне правой авторитарной системы правления.',
    '- Политика: "Fascist regime" (Фашистский режим)\n- История: "Fight against fascists" (Борьба с фашистами)\n- Оскорбление: "You act like a fascist" (Ты ведешь себя как фашист)',
    [
      { en: 'The country was ruled by a fascist dictator.', ru: 'Страной правил фашистский диктатор.' },
      { en: 'They fought against the fascist movement.', ru: 'Они боролись против фашистского движения.' },
      { en: 'Fascist ideology promotes extreme nationalism.', ru: 'Фашистская идеология продвигает крайний национализм.' },
      { en: 'The term is sometimes used as an insult.', ru: 'Этот термин иногда используется как оскорбление.' }
    ],
    []
  ),

  createRichWord('c1_feat', 'Feat', '/fiːt/', 'фит', 'Подвиг / Достижение', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Действие, требующее большого мастерства, силы или смелости.',
    '- Успех: "Remarkable feat" (Замечательное достижение)\n- Сила: "Feat of strength" (Проявление силы)\n- Инженерия: "Engineering feat" (Инженерный подвиг)',
    [
      { en: 'Climbing the mountain was a remarkable feat.', ru: 'Восхождение на гору было выдающимся подвигом.' },
      { en: 'The bridge is an engineering feat.', ru: 'Мост — это инженерное достижение.' },
      { en: 'It is no mean feat to perform that song.', ru: 'Исполнить эту песню — нелегкая задача (подвиг).' },
      { en: 'They celebrated the feat with a party.', ru: 'Они отпраздновали достижение вечеринкой.' }
    ],
    []
  ),

  createRichWord('c1_feeble', 'Feeble', '/ˈfiː.bəl/', 'фибл', 'Слабый / Немощный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Очень слабый (физически); или неубедительный (об аргументе/оправдании).',
    '- Здоровье: "Feeble old man" (Немощный старик)\n- Аргумент: "Feeble excuse" (Жалкое оправдание)\n- Свет: "Feeble light" (Тусклый свет)',
    [
      { en: 'He was too feeble to walk alone.', ru: 'Он был слишком слаб, чтобы ходить одному.' },
      { en: 'That is a feeble excuse for being late.', ru: 'Это жалкое оправдание для опоздания.' },
      { en: 'She spoke in a feeble voice.', ru: 'Она говорила слабым голосом.' },
      { en: 'The sun gave a feeble light.', ru: 'Солнце давало тусклый свет.' }
    ],
    []
  ),

  createRichWord('c1_fern', 'Fern', '/fɜːn/', 'фён', 'Папоротник', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Зеленое растение с длинными стеблями и листьями, похожее на перья, без цветов.',
    '- Растение: "Green fern" (Зеленый папоротник)\n- Лес: "Ferns grow in shade" (Папоротники растут в тени)\n- Сад: "Pot of ferns" (Горшок с папоротниками)',
    [
      { en: 'Ferns grow well in damp, shady places.', ru: 'Папоротники хорошо растут в сырых, тенистых местах.' },
      { en: 'The forest floor was covered in ferns.', ru: 'Лесная подстилка была покрыта папоротниками.' },
      { en: 'I bought a fern for my bathroom.', ru: 'Я купил папоротник для ванной.' },
      { en: 'Ferns are ancient plants.', ru: 'Папоротники — древние растения.' }
    ],
    []
  ),

  createRichWord('c1_fiery', 'Fiery', '/ˈfaɪə.ri/', 'файэри', 'Огненный / Пылкий', ProficiencyLevel.C1, 'adj', 'Low', 'Literary',
    'Горящий или похожий на огонь; вспыльчивый (о характере).',
    '- Цвет: "Fiery red" (Огненно-красный)\n- Характер: "Fiery temper" (Вспыльчивый характер)\n- Речь: "Fiery speech" (Пламенная речь)',
    [
      { en: 'He has a fiery temper.', ru: 'У него вспыльчивый характер.' },
      { en: 'The sun set in a fiery ball.', ru: 'Солнце село огненным шаром.' },
      { en: 'She gave a fiery speech against the war.', ru: 'Она произнесла пламенную речь против войны.' },
      { en: 'His eyes had a fiery look.', ru: 'В его глазах был огненный блеск.' }
    ],
    []
  ),

  createRichWord('c1_finite', 'Finite', '/ˈfaɪ.naɪt/', 'файнайт', 'Конечный / Ограниченный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Имеющий предел или конец (антоним: infinite).',
    '- Ресурсы: "Finite resources" (Ограниченные ресурсы)\n- Число: "Finite number" (Конечное число)\n- Время: "Life is finite" (Жизнь конечна)',
    [
      { en: 'Oil is a finite resource.', ru: 'Нефть — это исчерпаемый (конечный) ресурс.' },
      { en: 'We have a finite amount of time.', ru: 'У нас ограниченное количество времени.' },
      { en: 'The universe may not be finite.', ru: 'Вселенная может не быть конечной.' },
      { en: 'There is a finite number of solutions.', ru: 'Существует конечное число решений.' }
    ],
    []
  ),

  createRichWord('c1_firearm', 'Firearm', '/ˈfaɪər.ɑːm/', 'файэрам', 'Огнестрельное оружие', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Пистолет или винтовка (официальный термин).',
    '- Закон: "Possession of firearms" (Владение оружием)\n- Полиция: "Use a firearm" (Использовать оружие)\n- Тип: "Illegal firearm" (Нелегальное оружие)',
    [
      { en: 'It is illegal to carry a firearm without a license.', ru: 'Незаконно носить огнестрельное оружие без лицензии.' },
      { en: 'Police officers are trained to use firearms.', ru: 'Полицейские обучены использованию огнестрельного оружия.' },
      { en: 'He was arrested for firearm offences.', ru: 'Его арестовали за преступления, связанные с оружием.' },
      { en: 'The museum has a collection of old firearms.', ru: 'В музее есть коллекция старинного оружия.' }
    ],
    []
  ),

  createRichWord('c1_flex', 'Flex', '/fleks/', 'флекс', 'Сгибать / Напрягать / Хвастаться (сленг)', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Сгибать мышцы или части тела; сленг: хвастаться (flexing).',
    '- Тело: "Flex muscles" (Играть мускулами)\n- Сленг: "Weird flex but okay" (Странный понт, ну да ладно)\n- Предмет: "Flexible" (Гибкий - прил)',
    [
      { en: 'He flexed his muscles to show his strength.', ru: 'Он напряг мышцы, чтобы показать свою силу.' },
      { en: 'The gymnast flexed her back.', ru: 'Гимнастка прогнула спину.' },
      { en: 'Stop flexing your expensive watch.', ru: 'Перестань хвастаться своими дорогими часами (сленг).' },
      { en: 'Flex your knees before lifting.', ru: 'Согните колени перед поднятием тяжести.' }
    ],
    [
      { meaning: "Electric cable (UK)", translation: "Шнур / Провод", example: { en: "The lamp needs a new flex.", ru: "Лампе нужен новый шнур." } }
    ]
  ),

  createRichWord('c1_fluorescent', 'Fluorescent', '/flɔːˈres.ənt/', 'флоресэнт', 'Флуоресцентный / Светящийся', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Очень яркий (о цвете) или светящийся (о лампе).',
    '- Свет: "Fluorescent light" (Лампа дневного света)\n- Цвет: "Fluorescent green" (Ядовито-зеленый)\n- Одежда: "Fluorescent jacket" (Светоотражающий жилет)',
    [
      { en: 'The office has harsh fluorescent lighting.', ru: 'В офисе резкое люминесцентное освещение.' },
      { en: 'Cyclists wear fluorescent jackets for safety.', ru: 'Велосипедисты носят светоотражающие жилеты для безопасности.' },
      { en: 'She used a fluorescent marker pen.', ru: 'Она использовала флуоресцентный маркер.' },
      { en: 'Some fish are fluorescent in the dark.', ru: 'Некоторые рыбы светятся в темноте.' }
    ],
    []
  ),

  createRichWord('c1_focal', 'Focal', '/ˈfəʊ.kəl/', 'фоукэл', 'Фокальный / Центральный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к центру внимания или фокусу.',
    '- Центр: "Focal point" (Центральный элемент / Фокус)\n- Оптика: "Focal length" (Фокусное расстояние)\n- Важность: "Focal issue" (Ключевая проблема)',
    [
      { en: 'The fireplace is the focal point of the room.', ru: 'Камин — центральный элемент комнаты.' },
      { en: 'This became the focal issue of the campaign.', ru: 'Это стало ключевым вопросом кампании.' },
      { en: 'Adjust the focal length of the camera.', ru: 'Отрегулируйте фокусное расстояние камеры.' },
      { en: 'She played a focal role in the project.', ru: 'Она сыграла центральную роль в проекте.' }
    ],
    []
  ),

  createRichWord('c1_footing', 'Footing', '/ˈfʊt.ɪŋ/', 'футинг', 'Опора / Положение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Устойчивое положение ног; или основа отношений (равная, прочная).',
    '- Баланс: "Lose footing" (Потерять равновесие)\n- Отношения: "Equal footing" (На равных)\n- Статус: "Financial footing" (Финансовое положение)',
    [
      { en: 'He lost his footing and fell down the stairs.', ru: 'Он оступился (потерял опору) и упал с лестницы.' },
      { en: 'We need to put the company on a sound financial footing.', ru: 'Нам нужно поставить компанию на прочную финансовую основу.' },
      { en: 'Men and women should compete on an equal footing.', ru: 'Мужчины и женщины должны соревноваться на равных.' },
      { en: 'It was hard to keep my footing on the ice.', ru: 'Было трудно удержаться на ногах на льду.' }
    ],
    []
  ),

  createRichWord('c1_forensic', 'Forensic', '/fəˈren.zɪk/', 'фэрензик', 'Судебный / Криминалистический', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к использованию научных методов для раскрытия преступлений.',
    '- Наука: "Forensic science" (Криминалистика)\n- Улики: "Forensic evidence" (Судебные доказательства)\n- Эксперт: "Forensic expert" (Судмедэксперт)',
    [
      { en: 'Forensic evidence proved his guilt.', ru: 'Криминалистические улики доказали его вину.' },
      { en: 'She is a forensic psychologist.', ru: 'Она судебный психолог.' },
      { en: 'The police are waiting for the forensic report.', ru: 'Полиция ждет отчет судмедэкспертизы.' },
      { en: 'A forensic examination of the scene was conducted.', ru: 'Был проведен криминалистический осмотр места происшествия.' }
    ],
    []
  ),
  createRichWord('c1_dispel', 'Dispel', '/dɪˈspel/', 'диспел', 'Развеять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставить исчезнуть (сомнения, страхи, мифы).',
    '- Сомнения: "Dispel doubts" (Развеять сомнения)\n- Мифы: "Dispel a myth" (Развеять миф)\n- Слухи: "Dispel rumours" (Развеять слухи)',
    [
      { en: 'He gave a speech to dispel the rumours.', ru: 'Он произнес речь, чтобы развеять слухи.' },
      { en: 'We want to dispel the myth that math is boring.', ru: 'Мы хотим развеять миф о том, что математика — это скучно.' },
      { en: 'The sun emerged to dispel the morning mist.', ru: 'Солнце вышло, чтобы рассеять утренний туман.' },
      { en: 'Her calm voice dispelled my fears.', ru: 'Ее спокойный голос развеял мои страхи.' }
    ],
    []
  ),

  createRichWord('c1_dissect', 'Dissect', '/daɪˈsekt/', 'дайсект', 'Анатомировать / Детально разбирать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Разрезать тело или растение для изучения; подробно анализировать текст или идею.',
    '- Биология: "Dissect a frog" (Анатомировать лягушку)\n- Анализ: "Dissect a poem" (Детально разобрать стихотворение)\n- Проблема: "Dissect the issue" (Разобрать проблему)',
    [
      { en: 'In biology class, we had to dissect a frog.', ru: 'На уроке биологии нам пришлось препарировать лягушку.' },
      { en: 'Critics dissected the movie in their reviews.', ru: 'Критики детально разобрали фильм в своих рецензиях.' },
      { en: 'We need to dissect the problem to find a solution.', ru: 'Нам нужно детально разобрать проблему, чтобы найти решение.' },
      { en: 'He dissected the argument point by point.', ru: 'Он разобрал аргумент пункт за пунктом.' }
    ],
    []
  ),

  createRichWord('c1_dissertation', 'Dissertation', '/ˌdɪs.əˈteɪ.ʃən/', 'дисэтейшн', 'Диссертация', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Длинная исследовательская работа, написанная для получения ученой степени.',
    '- Учеба: "Write a dissertation" (Писать диссертацию)\n- Степень: "PhD dissertation" (Докторская диссертация)\n- Тема: "Submit a dissertation" (Сдать диссертацию)',
    [
      { en: 'She is writing her dissertation on modern art.', ru: 'Она пишет диссертацию по современному искусству.' },
      { en: 'He submitted his dissertation last week.', ru: 'Он сдал свою диссертацию на прошлой неделе.' },
      { en: 'The dissertation requires extensive research.', ru: 'Диссертация требует обширного исследования.' },
      { en: 'Completing a dissertation takes a lot of time.', ru: 'Написание диссертации занимает много времени.' }
    ],
    []
  ),

  createRichWord('c1_dope', 'Dope', '/dəʊp/', 'доуп', 'Наркотик / Круто (сленг)', ProficiencyLevel.C1, 'noun', 'Medium', 'Slang',
    'Сленговое название наркотиков (особенно марихуаны) или допинга; как прилагательное — «крутой».',
    '- Спорт: "Anti-doping test" (Тест на допинг)\n- Сленг: "That song is dope" (Эта песня крутая)\n- Вещества: "Smoking dope" (Курение травки)',
    [
      { en: 'The athlete failed the dope test.', ru: 'Спортсмен провалил допинг-тест.' },
      { en: 'That new car is really dope.', ru: 'Та новая машина реально крутая.' },
      { en: 'He got in trouble for selling dope.', ru: 'У него были неприятности из-за продажи наркотиков.' },
      { en: 'She thinks he is a bit of a dope (idiot).', ru: 'Она думает, что он немного туповат (сленг).' }
    ],
    []
  ),

  createRichWord('c1_doze', 'Doze', '/dəʊz/', 'доуз', 'Дремать', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Спать неглубоко в течение короткого времени, часто днем.',
    '- Сон: "Doze off" (Задремать / Отключиться)\n- Место: "Doze in the chair" (Дремать в кресле)\n- Время: "Doze for an hour" (Подремать час)',
    [
      { en: 'I dozed off while watching TV.', ru: 'Я задремал во время просмотра телевизора.' },
      { en: 'My grandfather likes to doze in his armchair.', ru: 'Мой дедушка любит подремать в своем кресле.' },
      { en: 'The cat was dozing in the sun.', ru: 'Кошка дремала на солнце.' },
      { en: 'Sorry, I must have dozed off for a moment.', ru: 'Извини, я, должно быть, отключился на минутку.' }
    ],
    []
  ),

  createRichWord('c1_dysfunction', 'Dysfunction', '/dɪsˈfʌŋk.ʃən/', 'дисфанкшн', 'Дисфункция / Нарушение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Нарушение нормальной работы органа или социальной группы.',
    '- Медицина: "Kidney dysfunction" (Дисфункция почек)\n- Общество: "Family dysfunction" (Семейное неблагополучие)\n- Секс: "Erectile dysfunction" (Эректильная дисфункция)',
    [
      { en: 'The doctor diagnosed a liver dysfunction.', ru: 'Врач диагностировал дисфункцию печени.' },
      { en: 'There is a lot of dysfunction in that department.', ru: 'В том отделе много нарушений в работе (бардака).' },
      { en: 'Family dysfunction can affect children.', ru: 'Семейное неблагополучие может повлиять на детей.' },
      { en: 'Stress can cause temporary dysfunction.', ru: 'Стресс может вызвать временное нарушение функций.' }
    ],
    []
  ),

  createRichWord('c1_electrode', 'Electrode', '/iˈlek.trəʊd/', 'илектроуд', 'Электрод', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Проводник, через который электрический ток входит или выходит из среды.',
    '- Наука: "Attach electrodes" (Прикрепить электроды)\n- Батарея: "Positive electrode" (Положительный электрод)\n- Медицина: "ECG electrodes" (Электроды ЭКГ)',
    [
      { en: 'Electrodes were attached to his chest.', ru: 'К его груди были прикреплены электроды.' },
      { en: 'The battery has a positive and a negative electrode.', ru: 'У батареи есть положительный и отрицательный электрод.' },
      { en: 'Doctors use electrodes to monitor heart rate.', ru: 'Врачи используют электроды для мониторинга сердечного ритма.' },
      { en: 'Current flows between the electrodes.', ru: 'Ток течет между электродами.' }
    ],
    []
  ),

  createRichWord('c1_electromagnetic', 'Electromagnetic', '/iˌlek.trəʊ.mæɡˈnet.ɪk/', 'илектромагнетик', 'Электромагнитный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к взаимодействию электрических токов и магнитных полей.',
    '- Физика: "Electromagnetic field" (Электромагнитное поле)\n- Волна: "Electromagnetic waves" (Электромагнитные волны)\n- Излучение: "Electromagnetic radiation" (Электромагнитное излучение)',
    [
      { en: 'Light is a form of electromagnetic radiation.', ru: 'Свет — это форма электромагнитного излучения.' },
      { en: 'They measured the electromagnetic field.', ru: 'Они измерили электромагнитное поле.' },
      { en: 'An electromagnetic pulse can damage electronics.', ru: 'Электромагнитный импульс может повредить электронику.' },
      { en: 'Radio waves are electromagnetic waves.', ru: 'Радиоволны — это электромагнитные волны.' }
    ],
    []
  ),

  createRichWord('c1_emblem', 'Emblem', '/ˈem.bləm/', 'эмблем', 'Эмблема / Символ', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Картинка или объект, используемый как символ организации или идеи.',
    '- Символ: "National emblem" (Национальная эмблема)\n- Организация: "School emblem" (Школьная эмблема)\n- Идея: "Emblem of peace" (Символ мира)',
    [
      { en: 'The eagle is the emblem of the United States.', ru: 'Орел — эмблема Соединенных Штатов.' },
      { en: 'They wore the club emblem on their jackets.', ru: 'Они носили эмблему клуба на куртках.' },
      { en: 'The dove is an emblem of peace.', ru: 'Голубь — символ мира.' },
      { en: 'The car features the famous emblem on the bonnet.', ru: 'На капоте машины красуется знаменитая эмблема.' }
    ],
    []
  ),

  createRichWord('c1_engulf', 'Engulf', '/ɪnˈɡʌlf/', 'ингалф', 'Поглощать / Охватывать', ProficiencyLevel.C1, 'verb', 'Low', 'Literary',
    'Полностью окружать или накрывать (огнем, водой, эмоциями).',
    '- Стихия: "Engulfed in flames" (Охваченный пламенем)\n- Эмоции: "Engulfed by fear" (Охваченный страхом)\n- Вода: "Waves engulfed the boat" (Волны поглотили лодку)',
    [
      { en: 'The building was completely engulfed in flames.', ru: 'Здание было полностью охвачено пламенем.' },
      { en: 'Panic engulfed the crowd.', ru: 'Толпу охватила паника.' },
      { en: 'Darkness engulfed the room.', ru: 'Темнота поглотила комнату.' },
      { en: 'She was engulfed by a wave of sadness.', ru: 'Ее захлестнула волна грусти.' }
    ],
    []
  ),

  createRichWord('c1_envoy', 'Envoy', '/ˈen.vɔɪ/', 'энвой', 'Посланник / Дипломат', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, отправленный от одного правительства к другому с сообщением или миссией.',
    '- Дипломатия: "Special envoy" (Специальный посланник)\n- ООН: "UN envoy" (Посланник ООН)\n- Миссия: "Peace envoy" (Мирный посланник)',
    [
      { en: 'The President sent a special envoy to the region.', ru: 'Президент направил в регион специального посланника.' },
      { en: 'He served as a peace envoy during the war.', ru: 'Он служил мирным посланником во время войны.' },
      { en: 'The envoy met with foreign leaders.', ru: 'Посланник встретился с иностранными лидерами.' },
      { en: 'An envoy was dispatched to negotiate.', ru: 'Для переговоров был отправлен посланник.' }
    ],
    []
  ),

  createRichWord('c1_errand', 'Errand', '/ˈer.ənd/', 'эрэнд', 'Поручение', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Короткая поездка для выполнения дела (покупка, доставка).',
    '- Дело: "Run errands" (Выполнять поручения/бегать по делам)\n- Задание: "Go on an errand" (Пойти по делу)\n- Тип: "Fool\'s errand" (Бессмысленное задание)',
    [
      { en: 'I have to run some errands this afternoon.', ru: 'Мне нужно сбегать по делам сегодня днем.' },
      { en: 'He sent me on an errand to the post office.', ru: 'Он отправил меня с поручением на почту.' },
      { en: 'Trying to convince him is a fool\'s errand.', ru: 'Пытаться убедить его — бесполезное занятие.' },
      { en: 'She finished her errands and went home.', ru: 'Она закончила свои дела и пошла домой.' }
    ],
    []
  ),
  createRichWord('c1_excerpt', 'Excerpt', '/ˈek.sɜːpt/', 'эксёпт', 'Отрывок / Выдержка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Короткая часть, взятая из книги, фильма, музыкального произведения или речи.',
    '- Текст: "Read an excerpt" (Прочитать отрывок)\n- Книга: "Excerpt from a novel" (Отрывок из романа)\n- Аудио: "Audio excerpt" (Аудиофрагмент)',
    [
      { en: 'He read a short excerpt from his new book.', ru: 'Он прочитал короткий отрывок из своей новой книги.' },
      { en: 'The magazine published an excerpt of the interview.', ru: 'Журнал опубликовал выдержку из интервью.' },
      { en: 'We listened to an excerpt from the symphony.', ru: 'Мы прослушали отрывок из симфонии.' },
      { en: 'This excerpt perfectly captures the author\'s style.', ru: 'Этот отрывок идеально передает стиль автора.' }
    ],
    [
      { meaning: "To take an extract (verb)", translation: "Делать выписки / Цитировать", example: { en: "The passage was excerpted from the article.", ru: "Отрывок был взят (процитирован) из статьи." } }
    ]
  ),

  createRichWord('c1_expend', 'Expend', '/ɪkˈspend/', 'икспенд', 'Тратить / Расходовать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Использовать или тратить время, деньги или энергию (формальный синоним spend).',
    '- Энергия: "Expend energy" (Тратить энергию)\n- Усилия: "Expend effort" (Прилагать усилия)\n- Деньги: "Expend funds" (Расходовать средства)',
    [
      { en: 'You should not expend too much energy on this task.', ru: 'Тебе не следует тратить слишком много энергии на эту задачу.' },
      { en: 'The government expended huge sums on defense.', ru: 'Правительство потратило огромные суммы на оборону.' },
      { en: 'He expended all his efforts to win the race.', ru: 'Он приложил (потратил) все свои усилия, чтобы выиграть гонку.' },
      { en: 'Why expend time on something so trivial?', ru: 'Зачем тратить время на что-то столь тривиальное?' }
    ],
    []
  ),

  createRichWord('c1_expulsion', 'Expulsion', '/ɪkˈspʌl.ʃən/', 'икспалшн', 'Исключение / Высылка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Принудительное выдворение кого-либо из места, организации или страны.',
    '- Школа: "Face expulsion" (Грозит исключение)\n- Страна: "Expulsion of diplomats" (Высылка дипломатов)\n- Клуб: "Expulsion from the club" (Исключение из клуба)',
    [
      { en: 'The student faced expulsion for fighting.', ru: 'Студенту грозило исключение за драку.' },
      { en: 'The expulsion of the diplomats caused a crisis.', ru: 'Высылка дипломатов вызвала кризис.' },
      { en: 'His behaviour led to his expulsion from the party.', ru: 'Его поведение привело к его исключению из партии.' },
      { en: 'They ordered the expulsion of illegal immigrants.', ru: 'Они приказали выслать нелегальных иммигрантов.' }
    ],
    []
  ),

  createRichWord('c1_extinguish', 'Extinguish', '/ɪkˈstɪŋ.ɡwɪʃ/', 'икстингвиш', 'Тушить / Гасить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставить огонь или свет перестать гореть; уничтожить чувство или идею.',
    '- Огонь: "Extinguish a fire" (Потушить пожар)\n- Свет: "Extinguish the lights" (Погасить свет)\n- Надежда: "Extinguish hope" (Погасить надежду)',
    [
      { en: 'Firefighters managed to extinguish the flames.', ru: 'Пожарным удалось потушить пламя.' },
      { en: 'Please extinguish all cigarettes immediately.', ru: 'Пожалуйста, немедленно потушите все сигареты.' },
      { en: 'Nothing could extinguish his passion for music.', ru: 'Ничто не могло погасить его страсть к музыке.' },
      { en: 'The heavy rain extinguished the campfire.', ru: 'Сильный дождь потушил костер.' }
    ],
    [
      { meaning: "To pay off a debt (Legal)", translation: "Погашать (долг)", example: { en: "The debt was extinguished.", ru: "Долг был погашен." } }
    ]
  ),

  createRichWord('c1_extravagance', 'Extravagance', '/ɪkˈstræv.ə.ɡəns/', 'экстрэвэгэнс', 'Расточительность / Излишество', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Трата большего количества денег, чем необходимо; или что-то очень дорогое и ненужное.',
    '- Деньги: "Wild extravagance" (Дикая расточительность)\n- Покупка: "Unnecessary extravagance" (Ненужное излишество)\n- Жизнь: "Life of extravagance" (Жизнь в роскоши)',
    [
      { en: 'Buying that car was a pure extravagance.', ru: 'Покупка этой машины была чистым расточительством.' },
      { en: 'His extravagance led him into debt.', ru: 'Его расточительность привела его к долгам.' },
      { en: 'We cannot afford such extravagance.', ru: 'Мы не можем позволить себе такие излишества.' },
      { en: 'The wedding was criticized for its extravagance.', ru: 'Свадьбу критиковали за ее чрезмерную роскошь.' }
    ],
    []
  ),

  createRichWord('c1_fable', 'Fable', '/ˈfeɪ.bəl/', 'фейбл', 'Басня / Небылица', ProficiencyLevel.C1, 'noun', 'Low', 'Literary',
    'Короткая история, обычно с животными, которая учит морали; ложь или миф.',
    '- Литература: "Aesop\'s Fables" (Басни Эзопа)\n- Мораль: "Moral of the fable" (Мораль басни)\n- Ложь: "Fact or fable?" (Факт или выдумка?)',
    [
      { en: 'The tortoise and the hare is a famous fable.', ru: 'Черепаха и заяц — известная басня.' },
      { en: 'Every fable has a moral lesson.', ru: 'В каждой басне есть моральный урок.' },
      { en: 'The story of their wealth is a pure fable.', ru: 'История их богатства — чистая выдумка.' },
      { en: 'Ancient fables often feature talking animals.', ru: 'В древних баснях часто фигурируют говорящие животные.' }
    ],
    []
  ),

  createRichWord('c1_facade', 'Facade', '/fəˈsɑːd/', 'фэсад', 'Фасад / Видимость', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Передняя часть здания; ложная внешность, скрывающая истинные чувства.',
    '- Здание: "Front facade" (Передний фасад)\n- Поведение: "Behind the facade" (За внешним фасадом/видимостью)\n- Обман: "Maintain a facade" (Сохранять видимость)',
    [
      { en: 'The hotel has an impressive stone facade.', ru: 'У отеля впечатляющий каменный фасад.' },
      { en: 'Behind his cheerful facade, he was very sad.', ru: 'За его веселой внешностью скрывалась глубокая печаль.' },
      { en: 'She managed to keep up the facade of success.', ru: 'Ей удавалось поддерживать видимость успеха.' },
      { en: 'The cracks in the facade appeared quickly.', ru: 'Трещины на фасаде появились быстро.' }
    ],
    []
  ),

  createRichWord('c1_fauna', 'Fauna', '/ˈfɔː.nə/', 'фона', 'Фауна / Животный мир', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Все животные, обитающие в определенной местности или в определенный период.',
    '- Природа: "Flora and fauna" (Флора и фауна)\n- Регион: "Australian fauna" (Фауна Австралии)\n- Защита: "Protect local fauna" (Защищать местную фауну)',
    [
      { en: 'The island has a rich and diverse fauna.', ru: 'Остров обладает богатой и разнообразной фауной.' },
      { en: 'We studied the flora and fauna of the forest.', ru: 'Мы изучали флору и фауну леса.' },
      { en: 'Climate change threatens the local fauna.', ru: 'Изменение климата угрожает местному животному миру.' },
      { en: 'Marine fauna includes fish and coral.', ru: 'Морская фауна включает в себя рыб и кораллы.' }
    ],
    []
  ),

  createRichWord('c1_ferocious', 'Ferocious', '/fəˈrəʊ.ʃəs/', 'фэроушэс', 'Свирепый / Жестокий', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Пугающий и жестокий; очень сильный (о шторме/битве).',
    '- Животное: "Ferocious beast" (Свирепый зверь)\n- Атака: "Ferocious attack" (Жестокая атака)\n- Скорость: "Ferocious speed" (Бешеная скорость)',
    [
      { en: 'The lion gave a ferocious roar.', ru: 'Лев издал свирепый рык.' },
      { en: 'A ferocious storm hit the coast.', ru: 'Свирепый шторм обрушился на побережье.' },
      { en: 'The competition was ferocious.', ru: 'Конкуренция была жесточайшей.' },
      { en: 'He has a ferocious appetite.', ru: 'У него зверский аппетит.' }
    ],
    []
  ),

  createRichWord('c1_finale', 'Finale', '/fɪˈnɑː.li/', 'финали', 'Финал / Заключительная часть', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Последняя часть музыкального произведения, представления или события (часто самая впечатляющая).',
    '- Шоу: "Grand finale" (Грандиозный финал)\n- Сезон: "Season finale" (Финал сезона сериала)\n- Музыка: "Exciting finale" (Захватывающий финал)',
    [
      { en: 'The fireworks provided a spectacular finale.', ru: 'Фейерверк стал впечатляющим финалом.' },
      { en: 'We watched the season finale last night.', ru: 'Вчера вечером мы смотрели финал сезона.' },
      { en: 'The symphony ended with a dramatic finale.', ru: 'Симфония закончилась драматическим финалом.' },
      { en: 'The finale of the show was disappointing.', ru: 'Финал шоу разочаровал.' }
    ],
    []
  ),

  createRichWord('c1_flea', 'Flea', '/fliː/', 'фли', 'Блоха', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Очень маленькое прыгающее насекомое, которое кусает животных и людей.',
    '- Животные: "Dog has fleas" (У собаки блохи)\n- Рынок: "Flea market" (Блошиный рынок)\n- Укус: "Flea bite" (Укус блохи)',
    [
      { en: 'My cat has fleas and needs treatment.', ru: 'У моей кошки блохи, и ей нужно лечение.' },
      { en: 'We bought this lamp at a flea market.', ru: 'Мы купили эту лампу на блошином рынке.' },
      { en: 'Flea bites can be very itchy.', ru: 'Укусы блох могут сильно чесаться.' },
      { en: 'A flea can jump very high for its size.', ru: 'Блоха может прыгать очень высоко для своего размера.' }
    ],
    []
  ),

  createRichWord('c1_fraudulent', 'Fraudulent', '/ˈfrɔː.dʒə.lənt/', 'фродьюлэнт', 'Мошеннический / Обманный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Предназначенный для обмана людей, часто с целью получения денег незаконным путем.',
    '- Действие: "Fraudulent activity" (Мошенническая деятельность)\n- Документ: "Fraudulent claim" (Ложное заявление/иск)\n- Деньги: "Fraudulent use" (Незаконное использование)',
    [
      { en: 'He was charged with fraudulent trading.', ru: 'Его обвинили в мошеннической торговле.' },
      { en: 'They made fraudulent claims for insurance.', ru: 'Они подали ложные заявления на страховку.' },
      { en: 'Beware of fraudulent emails asking for money.', ru: 'Остерегайтесь мошеннических писем с просьбой денег.' },
      { en: 'The signature on the cheque was fraudulent.', ru: 'Подпись на чеке была поддельной.' }
    ],
    []
  ),

  createRichWord('c1_fruitful', 'Fruitful', '/ˈfruːt.fəl/', 'фрутфул', 'Плодотворный / Успешный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Приносящий хорошие результаты; полезный.',
    '- Работа: "Fruitful cooperation" (Плодотворное сотрудничество)\n- Разговор: "Fruitful discussion" (Продуктивная дискуссия)\n- Результат: "Proved fruitful" (Оказался плодотворным)',
    [
      { en: 'We had a very fruitful meeting.', ru: 'У нас была очень плодотворная встреча.' },
      { en: 'Their collaboration was fruitful for both sides.', ru: 'Их сотрудничество было успешным для обеих сторон.' },
      { en: 'The research proved to be fruitful.', ru: 'Исследование оказалось результативным.' },
      { en: 'I hope our partnership will be fruitful.', ru: 'Я надеюсь, что наше партнерство будет плодотворным.' }
    ],
    []
  ),

  createRichWord('c1_fugitive', 'Fugitive', '/ˈfjuː.dʒə.tɪv/', 'фьюджетив', 'Беглец', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, скрывающийся от полиции или опасности.',
    '- Закон: "Wanted fugitive" (Разыскиваемый беглец)\n- Действие: "Fugitive from justice" (Скрывающийся от правосудия)\n- Статус: "On the run" (В бегах)',
    [
      { en: 'The fugitive was caught near the border.', ru: 'Беглец был пойман у границы.' },
      { en: 'He lived as a fugitive for ten years.', ru: 'Он жил как беглец десять лет.' },
      { en: 'Police are hunting for the escaped fugitive.', ru: 'Полиция охотится за сбежавшим преступником.' },
      { en: 'The movie is about a fugitive trying to prove his innocence.', ru: 'Фильм о беглеце, пытающемся доказать свою невиновность.' }
    ],
    [
      { meaning: "Short-lived (Literary adj)", translation: "Мимолетный", example: { en: "A fugitive thought.", ru: "Мимолетная мысль." } }
    ]
  ),

  createRichWord('c1_funk', 'Funk', '/fʌŋk/', 'фанк', 'Фанк (музыка) / Хаднра (разг.)', ProficiencyLevel.C1, 'noun', 'Low', 'Informal',
    'Стиль танцевальной музыки; или состояние депрессии/страха (разг.).',
    '- Музыка: "Funk music" (Музыка фанк)\n- Настроение: "In a funk" (В депрессии / В хандре)\n- Цвет: "Blue funk" (Дикий страх/уныние)',
    [
      { en: 'We danced to some old school funk.', ru: 'Мы танцевали под олдскульный фанк.' },
      { en: 'He has been in a funk all week.', ru: 'Он всю неделю в хандре.' },
      { en: 'Snap out of your funk and let\'s go.', ru: 'Выходи из своей депрессии и пошли.' },
      { en: 'The band plays a mix of jazz and funk.', ru: 'Группа играет смесь джаза и фанка.' }
    ],
    []
  ),

  createRichWord('c1_funnel', 'Funnel', '/ˈfʌn.əl/', 'фанэл', 'Воронка / Направлять', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Трубка с широким верхом для переливания жидкости; направлять что-то через узкий проход (гл.).',
    '- Предмет: "Plastic funnel" (Пластиковая воронка)\n- Деньги: "Funnel money" (Перекачивать деньги - гл.)\n- Движение: "Funnel crowd" (Направлять толпу)',
    [
      { en: 'Use a funnel to pour the oil into the bottle.', ru: 'Используй воронку, чтобы налить масло в бутылку.' },
      { en: 'The wind was funneled through the valley.', ru: 'Ветер задувал (направлялся) через долину.' },
      { en: 'They funneled funds into secret accounts.', ru: 'Они перекачивали средства на секретные счета.' },
      { en: 'The crowd funneled into the narrow exit.', ru: 'Толпа устремилась в узкий выход.' }
    ],
    []
  ),

  createRichWord('c1_furnace', 'Furnace', '/ˈfɜː.nɪs/', 'фёнис', 'Печь / Топка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Контейнер, который нагревается до очень высокой температуры для плавки металла или отопления.',
    '- Дом: "Gas furnace" (Газовая печь отопления)\n- Производство: "Blast furnace" (Доменная печь)\n- Жара: "It\'s a furnace in here" (Здесь жарко как в печке)',
    [
      { en: 'The furnace heats the whole house.', ru: 'Печь отапливает весь дом.' },
      { en: 'Steel is melted in a huge furnace.', ru: 'Сталь плавится в огромной печи.' },
      { en: 'Open a window, it\'s like a furnace in here!', ru: 'Открой окно, здесь как в печке!' },
      { en: 'The workers stoked the coal furnace.', ru: 'Рабочие топили угольную печь.' }
    ],
    []
  ),

  createRichWord('c1_fuzz', 'Fuzz', '/fʌz/', 'фаз', 'Пушок / Полиция (сленг)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Мягкие тонкие волосы или волокна; сленговое название полиции ("копы").',
    '- Текстура: "Peach fuzz" (Пушок на персике)\n- Растение: "Covered in fuzz" (Покрытый пушком)\n- Сленг: "The fuzz" (Полиция)',
    [
      { en: 'The baby has a little fuzz on his head.', ru: 'У ребенка небольшой пушок на голове.' },
      { en: 'Peaches are covered in soft fuzz.', ru: 'Персики покрыты мягким пушком.' },
      { en: 'Watch out, the fuzz are coming!', ru: 'Берегись, копы едут!' },
      { en: 'The picture is a bit out of focus, it\'s all fuzz.', ru: 'Картинка немного не в фокусе, сплошная муть.' }
    ],
    []
  ),

  createRichWord('c1_genital', 'Genital', '/ˈdʒen.ɪ.təl/', 'дженитэл', 'Генитальный / Половой', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к половым органам человека или животного.',
    '- Анатомия: "Genital area" (Область гениталий)\n- Здоровье: "Genital infection" (Половая инфекция)\n- Сущ.: "Genitals" (Гениталии)',
    [
      { en: 'The disease affects the genital area.', ru: 'Болезнь поражает область гениталий.' },
      { en: 'Doctors examined the patient\'s genitals.', ru: 'Врачи осмотрели гениталии пациента.' },
      { en: 'Genital herpes is a common virus.', ru: 'Генитальный герпес — распространенный вирус.' },
      { en: 'Hygiene of the genital organs is important.', ru: 'Гигиена половых органов важна.' }
    ],
    []
  ),

  createRichWord('c1_genocide', 'Genocide', '/ˈdʒen.ə.saɪd/', 'дженосайд', 'Геноцид', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Намеренное уничтожение целой группы людей, особенно определенной расы или нации.',
    '- Преступление: "Commit genocide" (Совершить геноцид)\n- История: "Victims of genocide" (Жертвы геноцида)\n- Обвинение: "Accused of genocide" (Обвинен в геноциде)',
    [
      { en: 'The dictator was charged with genocide.', ru: 'Диктатору предъявили обвинение в геноциде.' },
      { en: 'We must prevent genocide from happening again.', ru: 'Мы должны предотвратить повторение геноцида.' },
      { en: 'The memorial honors the victims of genocide.', ru: 'Мемориал чтит память жертв геноцида.' },
      { en: 'Reports of genocide shocked the world.', ru: 'Сообщения о геноциде потрясли мир.' }
    ],
    []
  ),

  createRichWord('c1_foyer', 'Foyer', '/ˈfɔɪ.eɪ/', 'фойей', 'Фойе / Вестибюль', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Большая открытая зона у входа в театр, отель или общественное здание.',
    '- Отель: "Hotel foyer" (Вестибюль отеля)\n- Театр: "Meet in the foyer" (Встретиться в фойе)\n- Дом: "Entrance foyer" (Прихожая/холл)',
    [
      { en: 'I will meet you in the hotel foyer.', ru: 'Я встречу тебя в вестибюле отеля.' },
      { en: 'The theatre foyer was crowded during the interval.', ru: 'Фойе театра было переполнено во время антракта.' },
      { en: 'Guests waited in the grand foyer.', ru: 'Гости ждали в большом вестибюле.' },
      { en: 'Leave your coats in the foyer.', ru: 'Оставьте пальто в фойе.' }
    ],
    []
  ),
  createRichWord('c1_detest', 'Detest', '/dɪˈtest/', 'дитест', 'Ненавидеть / Питать отвращение', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Испытывать очень сильную неприязнь к кому-то или чему-то (сильнее, чем hate).',
    '- Еда: "Detest vegetables" (Терпеть не могу овощи)\n- Люди: "Detest hypocrisy" (Ненавидеть лицемерие)\n- Чувство: "Absolutely detest" (Совершенно не выносить)',
    [
      { en: 'I absolutely detest waking up early.', ru: 'Я совершенно терпеть не могу вставать рано.' },
      { en: 'She detests people who lie.', ru: 'Она ненавидит людей, которые лгут.' },
      { en: 'They detested each other on sight.', ru: 'Они возненавидели друг друга с первого взгляда.' },
      { en: 'He detests being interrupted while working.', ru: 'Он терпеть не может, когда его прерывают во время работы.' }
    ],
    []
  ),

  createRichWord('c1_detour', 'Detour', '/ˈdiː.tʊər/', 'дитуэ', 'Объезд / Обходной путь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Более длинный путь, используемый, когда основная дорога закрыта; отклонение от прямого курса.',
    '- Дорога: "Make a detour" (Сделать крюк/поехать в объезд)\n- Знак: "Detour sign" (Знак объезда)\n- Путешествие: "Long detour" (Длинный объезд)',
    [
      { en: 'We had to take a detour because of roadworks.', ru: 'Нам пришлось поехать в объезд из-за дорожных работ.' },
      { en: 'The detour added an hour to our journey.', ru: 'Объезд добавил час к нашему путешествию.' },
      { en: 'We made a slight detour to visit the castle.', ru: 'Мы сделали небольшой крюк, чтобы посетить замок.' },
      { en: 'Don\'t take a detour, go straight home.', ru: 'Не ходи окольными путями, иди прямо домой.' }
    ],
    []
  ),

  createRichWord('c1_disengage', 'Disengage', '/ˌdɪs.ɪnˈɡeɪdʒ/', 'дисиндейдж', 'Отсоединять / Высвобождать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Отделять что-то от того, к чему оно прикреплено; прекращать участие в чем-то.',
    '- Техника: "Disengage the clutch" (Отпустить сцепление)\n- Война: "Disengage from combat" (Выйти из боя)\n- Отношения: "Emotionally disengage" (Эмоционально отстраниться)',
    [
      { en: 'The autopilot disengaged automatically.', ru: 'Автопилот отключился автоматически.' },
      { en: 'He tried to disengage his hand from hers.', ru: 'Он попытался высвободить свою руку из её руки.' },
      { en: 'We should disengage from this fruitless debate.', ru: 'Нам следует прекратить эти бесплодные дебаты.' },
      { en: 'Soldiers were ordered to disengage.', ru: 'Солдатам приказали выйти из боя.' }
    ],
    []
  ),

  createRichWord('c1_dissociate', 'Dissociate', '/dɪˈsəʊ.ʃi.eɪt/', 'дисоушиейт', 'Отмежеваться / Рассоединять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заявить о своей непричастности; рассматривать вещи как не связанные между собой.',
    '- Связь: "Dissociate oneself from" (Отмежеваться от)\n- Психология: "Dissociate from reality" (Отрешиться от реальности)\n- Мнение: "Dissociate the two ideas" (Разделять две идеи)',
    [
      { en: 'I wish to dissociate myself from his comments.', ru: 'Я хочу отмежеваться от его комментариев.' },
      { en: 'It is hard to dissociate the man from his work.', ru: 'Трудно отделить человека от его работы.' },
      { en: 'The party tried to dissociate itself from the scandal.', ru: 'Партия пыталась дистанцироваться от скандала.' },
      { en: 'Under stress, the mind may dissociate.', ru: 'При стрессе разум может отключаться (диссоциировать).' }
    ],
    []
  ),

  createRichWord('c1_doctorate', 'Doctorate', '/ˈdɒk.tər.ət/', 'доктэрет', 'Докторская степень', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Высшая ученая степень, присуждаемая университетом (PhD).',
    '- Образование: "Study for a doctorate" (Учиться на докторскую)\n- Титул: "Honorary doctorate" (Почетная докторская степень)\n- Наука: "Receive a doctorate" (Получить докторскую степень)',
    [
      { en: 'She holds a doctorate in physics.', ru: 'У нее докторская степень по физике.' },
      { en: 'He is working on his doctorate thesis.', ru: 'Он работает над своей докторской диссертацией.' },
      { en: 'The university awarded him an honorary doctorate.', ru: 'Университет присудил ему почетную докторскую степень.' },
      { en: 'Completing a doctorate takes several years.', ru: 'Получение докторской степени занимает несколько лет.' }
    ],
    []
  ),

  createRichWord('c1_domesticate', 'Domesticate', '/dəˈmes.tɪ.keɪt/', 'доместикейт', 'Одомашнивать / Приручать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Приучать дикое животное жить с людьми; выращивать растения для использования людьми.',
    '- Животные: "Domesticate dogs" (Одомашнивать собак)\n- История: "First domesticated" (Впервые одомашнен)\n- Растения: "Domesticate crops" (Окультуривать растения)',
    [
      { en: 'Dogs were domesticated thousands of years ago.', ru: 'Собаки были одомашнены тысячи лет назад.' },
      { en: 'It is difficult to domesticate a wild cat.', ru: 'Трудно приручить дикую кошку.' },
      { en: 'Humans learned to domesticate plants for food.', ru: 'Люди научились окультуривать растения для еды.' },
      { en: 'Domesticated animals depend on humans.', ru: 'Домашние животные зависят от людей.' }
    ],
    []
  ),

  createRichWord('c1_drench', 'Drench', '/drentʃ/', 'дренч', 'Промочить насквозь', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Сделать кого-то или что-то очень мокрым.',
    '- Погода: "Drenched by rain" (Промокший под дождем)\n- Жидкость: "Drenched in sweat" (Весь в поту)\n- Действие: "Get drenched" (Промокнуть до нитки)',
    [
      { en: 'We were drenched by the sudden storm.', ru: 'Внезапный шторм промочил нас до нитки.' },
      { en: 'He woke up drenched in sweat.', ru: 'Он проснулся весь в поту.' },
      { en: 'The players drenched the coach with water.', ru: 'Игроки облили тренера водой.' },
      { en: 'Her clothes were drenched.', ru: 'Ее одежда была насквозь мокрой.' }
    ],
    []
  ),

  createRichWord('c1_duel', 'Duel', '/ˈdjuː.əl/', 'дъюэл', 'Дуэль / Поединок', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Формальный бой между двумя людьми с оружием; или борьба двух людей/групп.',
    '- История: "Fight a duel" (Драться на дуэли)\n- Оружие: "Pistol duel" (Дуэль на пистолетах)\n- Метафора: "Verbal duel" (Словесная перепалка)',
    [
      { en: 'Pushkin died after a duel.', ru: 'Пушкин погиб после дуэли.' },
      { en: 'The two candidates engaged in a TV duel.', ru: 'Два кандидата вступили в теледебаты (поединок).' },
      { en: 'He challenged him to a duel.', ru: 'Он вызвал его на дуэль.' },
      { en: 'It was a duel of wits.', ru: 'Это была битва умов.' }
    ],
    []
  ),

  createRichWord('c1_edgy', 'Edgy', '/ˈedʒ.i/', 'эджи', 'Раздражительный / Острый (модный)', ProficiencyLevel.C1, 'adj', 'Low', 'Informal',
    'Нервный и тревожный; или (о стиле) современный, провокационный и нестандартный.',
    '- Настроение: "Feel edgy" (Быть на взводе/нервничать)\n- Стиль: "Edgy fashion" (Дерзкая мода)\n- Атмосфера: "Edgy atmosphere" (Напряженная атмосфера)',
    [
      { en: 'He has been edgy all day waiting for the news.', ru: 'Он весь день был на взводе, ожидая новостей.' },
      { en: 'The band has a new, edgy sound.', ru: 'У группы новое, дерзкое звучание.' },
      { en: 'Don\'t be so edgy, relax.', ru: 'Не будь таким нервным, расслабься.' },
      { en: 'The movie is dark and edgy.', ru: 'Фильм мрачный и провокационный.' }
    ],
    []
  ),

  createRichWord('c1_edible', 'Edible', '/ˈed.ɪ.bəl/', 'едибл', 'Съедобный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Пригодный для еды; безопасный для употребления в пищу.',
    '- Еда: "Edible mushrooms" (Съедобные грибы)\n- Качество: "Barely edible" (Едва съедобный)\n- Растения: "Edible flowers" (Съедобные цветы)',
    [
      { en: 'Are these berries edible?', ru: 'Эти ягоды съедобны?' },
      { en: 'The food was cold and barely edible.', ru: 'Еда была холодной и едва съедобной.' },
      { en: 'They decorated the cake with edible gold.', ru: 'Они украсили торт съедобным золотом.' },
      { en: 'Make sure the oil is edible.', ru: 'Убедитесь, что масло пищевое.' }
    ],
    []
  ),

  createRichWord('c1_eel', 'Eel', '/iːl/', 'ил', 'Угорь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Длинная рыба, похожая на змею.',
    '- Рыба: "Electric eel" (Электрический угорь)\n- Еда: "Smoked eel" (Копченый угорь)\n- Сравнение: "Slippery as an eel" (Скользкий как угорь)',
    [
      { en: 'He caught a large eel in the river.', ru: 'Он поймал большого угря в реке.' },
      { en: 'Japanese cuisine often features grilled eel.', ru: 'В японской кухне часто используется жареный угорь.' },
      { en: 'An electric eel can produce a strong shock.', ru: 'Электрический угорь может производить сильный разряд.' },
      { en: 'The eel moved like a snake in the water.', ru: 'Угорь двигался в воде как змея.' }
    ],
    []
  ),

  createRichWord('c1_electrify', 'Electrify', '/iˈlek.trɪ.faɪ/', 'илектрифай', 'Электрифицировать / Наэлектризовать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Провести электричество; или сильно возбудить/взволновать толпу.',
    '- Техника: "Electrify the railway" (Электрифицировать железную дорогу)\n- Эмоции: "Electrify the audience" (Взбудоражить аудиторию)\n- Атмосфера: "Electrifying atmosphere" (Наэлектризованная атмосфера)',
    [
      { en: 'The railway line was electrified last year.', ru: 'Железнодорожная линия была электрифицирована в прошлом году.' },
      { en: 'His speech electrified the crowd.', ru: 'Его речь взбудоражила толпу.' },
      { en: 'The atmosphere in the stadium was electrifying.', ru: 'Атмосфера на стадионе была наэлектризованной.' },
      { en: 'She gave an electrifying performance.', ru: 'Она дала потрясающее (наэлектризованное) представление.' }
    ],
    []
  ),

  createRichWord('c1_empress', 'Empress', '/ˈem.pres/', 'эмпрес', 'Императрица', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Женщина-правитель империи или жена императора.',
    '- Титул: "Empress Catherine" (Императрица Екатерина)\n- Власть: "Ruling empress" (Правящая императрица)\n- История: "Empress of India" (Императрица Индии)',
    [
      { en: 'Catherine the Great was a famous Russian Empress.', ru: 'Екатерина Великая была известной российской императрицей.' },
      { en: 'The Empress waved to the crowd.', ru: 'Императрица помахала толпе.' },
      { en: 'She was crowned Empress at a young age.', ru: 'Она была коронована императрицей в юном возрасте.' },
      { en: 'The Empress had absolute power.', ru: 'Императрица обладала абсолютной властью.' }
    ],
    []
  ),

  createRichWord('c1_entirety', 'Entirety', '/ɪnˈtaɪə.rə.ti/', 'интайрэти', 'Целостность / Полнота', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Состояние быть полным; вся сумма или объем чего-либо (часто "in its entirety").',
    '- Объем: "Read in its entirety" (Прочитать целиком)\n- Владение: "Own in entirety" (Владеть полностью)\n- Вид: "View the entirety" (Видеть целиком)',
    [
      { en: 'I watched the film in its entirety.', ru: 'Я посмотрел фильм целиком.' },
      { en: 'We must consider the problem in its entirety.', ru: 'Мы должны рассмотреть проблему во всей ее полноте.' },
      { en: 'The agreement was published in its entirety.', ru: 'Соглашение было опубликовано полностью.' },
      { en: 'He accepted responsibility in its entirety.', ru: 'Он принял ответственность в полном объеме.' }
    ],
    []
  ),

  createRichWord('c1_envisage', 'Envisage', '/ɪnˈvɪz.ɪdʒ/', 'инвизидж', 'Предвидеть / Представлять себе', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Представлять что-то в будущем как возможное; планировать.',
    '- Будущее: "Envisage changes" (Предвидеть изменения)\n- План: "Envisage a plan" (Наметить план)\n- Мысль: "Hard to envisage" (Трудно представить)',
    [
      { en: 'I envisage a future where robots do all the work.', ru: 'Я представляю себе будущее, где роботы делают всю работу.' },
      { en: 'It is hard to envisage how it will end.', ru: 'Трудно предвидеть, чем это закончится.' },
      { en: 'The changes envisaged by the council are extensive.', ru: 'Изменения, предусмотренные советом, обширны.' },
      { en: 'Do you envisage any problems with this?', ru: 'Вы предвидите какие-либо проблемы с этим?' }
    ],
    []
  ),
  createRichWord('c1_epoch', 'Epoch', '/ˈiː.pɒk/', 'ипок', 'Эпоха', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Длительный период времени в истории, отмеченный важными событиями.',
    '- История: "Victorian epoch" (Викторианская эпоха)\n- Перемены: "End of an epoch" (Конец эпохи)\n- Геология: "Geological epoch" (Геологическая эпоха)',
    [
      { en: 'The invention of the internet marked a new epoch.', ru: 'Изобретение интернета ознаменовало новую эпоху.' },
      { en: 'We are living in an epoch of rapid change.', ru: 'Мы живем в эпоху стремительных перемен.' },
      { en: 'The death of the king ended an epoch.', ru: 'Смерть короля положила конец целой эпохе.' },
      { en: 'This epoch is characterized by technological growth.', ru: 'Эта эпоха характеризуется технологическим ростом.' }
    ],
    []
  ),

  createRichWord('c1_espionage', 'Espionage', '/ˈes.pi.ə.nɑːʒ/', 'эспиэнаж', 'Шпионаж', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Деятельность по шпионажу, особенно между странами или компаниями.',
    '- Деятельность: "Industrial espionage" (Промышленный шпионаж)\n- Обвинение: "Accused of espionage" (Обвинен в шпионаже)\n- Сфера: "Act of espionage" (Акт шпионажа)',
    [
      { en: 'He was arrested for espionage.', ru: 'Его арестовали за шпионаж.' },
      { en: 'Industrial espionage costs companies millions.', ru: 'Промышленный шпионаж обходится компаниям в миллионы.' },
      { en: 'The novel is a classic tale of Cold War espionage.', ru: 'Этот роман — классическая история шпионажа времен Холодной войны.' },
      { en: 'They denied involvement in espionage activities.', ru: 'Они отрицали причастность к шпионской деятельности.' }
    ],
    []
  ),

  createRichWord('c1_etiquette', 'Etiquette', '/ˈet.ɪ.ket/', 'этикет', 'Этикет', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Набор правил вежливого поведения в обществе.',
    '- Поведение: "Table etiquette" (Столовый этикет)\n- Правила: "Rules of etiquette" (Правила этикета)\n- Бизнес: "Business etiquette" (Деловой этикет)',
    [
      { en: 'It is bad etiquette to speak with your mouth full.', ru: 'Говорить с набитым ртом — это дурной тон (нарушение этикета).' },
      { en: 'She studied the etiquette of the royal court.', ru: 'Она изучала этикет королевского двора.' },
      { en: 'Social etiquette varies from country to country.', ru: 'Социальный этикет различается в разных странах.' },
      { en: 'Follow the proper etiquette when dining out.', ru: 'Соблюдайте надлежащий этикет, обедая вне дома.' }
    ],
    []
  ),

  createRichWord('c1_evangelist', 'Evangelist', '/ɪˈvæn.dʒə.lɪst/', 'ивэнджэлист', 'Проповедник / Евангелист', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, который с энтузиазмом проповедует христианство; или сторонник какой-либо идеи (техно-евангелист).',
    '- Религия: "TV evangelist" (Телепроповедник)\n- Технологии: "Tech evangelist" (Популяризатор технологий)\n- Действие: "Preach like an evangelist" (Проповедовать как евангелист)',
    [
      { en: 'The evangelist preached to a large crowd.', ru: 'Проповедник читал проповедь большой толпе.' },
      { en: 'He is a well-known television evangelist.', ru: 'Он известный телевизионный проповедник.' },
      { en: 'She works as a technology evangelist for a software firm.', ru: 'Она работает популяризатором технологий в софтверной фирме.' },
      { en: 'Evangelists travel to spread their message.', ru: 'Евангелисты путешествуют, чтобы распространять свое послание.' }
    ],
    []
  ),

  createRichWord('c1_evasion', 'Evasion', '/ɪˈveɪ.ʒən/', 'ивейжн', 'Уклонение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Акт избегания чего-либо (налогов, вопросов, ответственности).',
    '- Налоги: "Tax evasion" (Уклонение от налогов)\n- Ответственность: "Evasion of duty" (Уклонение от обязанностей)\n- Разговор: "Answer without evasion" (Отвечать без уверток)',
    [
      { en: 'He was charged with tax evasion.', ru: 'Ему предъявили обвинение в уклонении от уплаты налогов.' },
      { en: 'Her answer was full of evasion.', ru: 'Ее ответ был полон уверток.' },
      { en: 'Evasion of the rules will not be tolerated.', ru: 'Уклонение от соблюдения правил не будет допускаться.' },
      { en: 'It was a clear evasion of responsibility.', ru: 'Это было явное уклонение от ответственности.' }
    ],
    []
  ),

  createRichWord('c1_exhale', 'Exhale', '/eksˈheɪl/', 'эксхейл', 'Выдыхать', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Выпускать воздух из легких (антоним: inhale).',
    '- Дыхание: "Inhale and exhale" (Вдохнуть и выдохнуть)\n- Дым: "Exhale smoke" (Выдыхать дым)\n- Расслабление: "Exhale slowly" (Медленно выдыхать)',
    [
      { en: 'Take a deep breath and exhale slowly.', ru: 'Сделайте глубокий вдох и медленно выдохните.' },
      { en: 'He exhaled a cloud of smoke.', ru: 'Он выдохнул облако дыма.' },
      { en: 'She exhaled with relief when she heard the news.', ru: 'Она с облегчением выдохнула, услышав новости.' },
      { en: 'Hold your breath, then exhale.', ru: 'Задержите дыхание, затем выдохните.' }
    ],
    []
  ),

  createRichWord('c1_expatriate', 'Expatriate', '/eksˈpæt.ri.ət/', 'экспэтриэт', 'Экспатриант / Экспат', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, живущий не в своей родной стране.',
    '- Жизнь: "Expatriate community" (Сообщество экспатов)\n- Работа: "American expatriate" (Американский экспат)\n- Сокращение: "Expat" (Экспат - разг.)',
    [
      { en: 'He is a British expatriate living in Spain.', ru: 'Он британский экспатриант, живущий в Испании.' },
      { en: 'The expatriate community helps new arrivals.', ru: 'Сообщество экспатов помогает новоприбывшим.' },
      { en: 'Many expatriates work in the oil industry.', ru: 'Многие экспаты работают в нефтяной промышленности.' },
      { en: 'She enjoys the expatriate lifestyle.', ru: 'Ей нравится образ жизни экспата.' }
    ],
    []
  ),

  createRichWord('c1_fad', 'Fad', '/fæd/', 'фэд', 'Прихоть / Модное увлечение', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Что-то очень популярное в течение короткого времени, а затем забываемое.',
    '- Мода: "Passing fad" (Минутное увлечение)\n- Еда: "Diet fad" (Модная диета)\n- Популярность: "Latest fad" (Последний писк моды)',
    [
      { en: 'This hairstyle is just a passing fad.', ru: 'Эта прическа — всего лишь минутное увлечение.' },
      { en: 'Diet fads come and go.', ru: 'Модные диеты приходят и уходят.' },
      { en: 'He refuses to follow the latest fads.', ru: 'Он отказывается следовать последним модным веяниям.' },
      { en: 'Is this a trend or just a fad?', ru: 'Это тренд или просто временное увлечение?' }
    ],
    []
  ),

  createRichWord('c1_fang', 'Fang', '/fæŋ/', 'фэнг', 'Клык', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Длинный острый зуб животного (змеи, волка, вампира).',
    '- Животное: "Wolf\'s fangs" (Волчьи клыки)\n- Змея: "Poisonous fangs" (Ядовитые клыки)\n- Вампир: "Vampire fangs" (Клыки вампира)',
    [
      { en: 'The dog bared its fangs.', ru: 'Собака оскалила клыки.' },
      { en: 'Snakes inject poison through their fangs.', ru: 'Змеи впрыскивают яд через клыки.' },
      { en: 'The vampire costume included fake fangs.', ru: 'Костюм вампира включал накладные клыки.' },
      { en: 'The tiger sank its fangs into the meat.', ru: 'Тигр вонзил клыки в мясо.' }
    ],
    []
  ),

  createRichWord('c1_fasts', 'Fasts', '/fɑːsts/', 'фастс', 'Посты (голодание)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Периоды воздержания от еды (входное слово Fast приведено к Lemma, но примеры даны для множественного числа или глагола).',
    '- Религия: "Religious fasts" (Религиозные посты)\n- Здоровье: "Intermittent fasting" (Интервальное голодание)\n- Глагол: "To fast" (Поститься)',
    [
      { en: 'Muslims observe fasts during Ramadan.', ru: 'Мусульмане соблюдают посты во время Рамадана.' },
      { en: 'He fasts twice a week for health reasons.', ru: 'Он постится дважды в неделю по соображениям здоровья.' },
      { en: 'Long fasts can be dangerous.', ru: 'Длительные голодания могут быть опасны.' },
      { en: 'Break the fast with a light meal.', ru: 'Прервите пост легкой едой.' }
    ],
    []
  ),

  createRichWord('c1_fetus', 'Fetus', '/ˈfiː.təs/', 'фитэс', 'Плод (эмбрион)', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Развивающийся ребенок в утробе матери (обычно после 8-й недели).',
    '- Медицина: "Human fetus" (Человеческий плод)\n- Развитие: "Development of the fetus" (Развитие плода)\n- Здоровье: "Fetal heart rate" (Сердцебиение плода)',
    [
      { en: 'The fetus is developing normally.', ru: 'Плод развивается нормально.' },
      { en: 'Ultrasound allows us to see the fetus.', ru: 'Ультразвук позволяет нам увидеть плод.' },
      { en: 'Smoking can harm the developing fetus.', ru: 'Курение может навредить развивающемуся плоду.' },
      { en: 'At this stage, the embryo becomes a fetus.', ru: 'На этой стадии эмбрион становится плодом.' }
    ],
    []
  ),

  createRichWord('c1_fiasco', 'Fiasco', '/fiˈæs.kəʊ/', 'фиаско', 'Фиаско / Полный провал', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Событие, которое заканчивается полным и постыдным провалом.',
    '- Провал: "Total fiasco" (Полное фиаско)\n- Событие: "Ended in a fiasco" (Закончилось фиаско)\n- Описание: "Political fiasco" (Политическое фиаско)',
    [
      { en: 'The party was a complete fiasco.', ru: 'Вечеринка была полным фиаско.' },
      { en: 'The project ended in a fiasco due to poor planning.', ru: 'Проект закончился провалом из-за плохого планирования.' },
      { en: 'We want to avoid another fiasco.', ru: 'Мы хотим избежать очередного фиаско.' },
      { en: 'The meeting was a fiasco from start to finish.', ru: 'Встреча была провалом от начала до конца.' }
    ],
    []
  ),

  createRichWord('c1_fidget', 'Fidget', '/ˈfɪdʒ.ɪt/', 'фиджит', 'Ерзать / Нервничать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Делать мелкие движения руками или ногами из-за нервозности или скуки.',
    '- Движение: "Fidget in chair" (Ерзать на стуле)\n- Руки: "Fidget with a pen" (Вертеть ручку в руках)\n- Состояние: "Stop fidgeting" (Перестань ерзать)',
    [
      { en: 'Stop fidgeting and sit still!', ru: 'Перестань ерзать и сиди смирно!' },
      { en: 'He fidgeted nervously in his chair.', ru: 'Он нервно ерзал на стуле.' },
      { en: 'Children often fidget when they are bored.', ru: 'Дети часто ерзают, когда им скучно.' },
      { en: 'She fidgeted with her necklace while speaking.', ru: 'Она теребила ожерелье, пока говорила.' }
    ],
    []
  ),

  createRichWord('c1_figurative', 'Figurative', '/ˈfɪɡ.ər.ə.tɪv/', 'фигэрэтив', 'Фигуральный / Переносный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Используемый в переносном, а не прямом смысле (о значении слов).',
    '- Смысл: "Figurative meaning" (Переносное значение)\n- Искусство: "Figurative art" (Изобразительное искусство - с фигурами)\n- Речь: "Figuratively speaking" (Фигурально выражаясь)',
    [
      { en: 'The word is used in a figurative sense here.', ru: 'Слово здесь используется в переносном смысле.' },
      { en: 'Figuratively speaking, he exploded with anger.', ru: 'Фигурально выражаясь, он взорвался от гнева.' },
      { en: 'Her paintings are figurative, not abstract.', ru: 'Ее картины фигуративны, а не абстрактны.' },
      { en: 'Understand the figurative language of poetry.', ru: 'Понимайте образный язык поэзии.' }
    ],
    []
  ),

  createRichWord('c1_fillet', 'Fillet', '/ˈfɪl.ɪt/', 'филит', 'Филе', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Кусок мяса или рыбы без костей.',
    '- Еда: "Fish fillet" (Рыбное филе)\n- Мясо: "Fillet steak" (Стейк из филе)\n- Глагол: "To fillet a fish" (Разделать рыбу на филе)',
    [
      { en: 'I ordered a cod fillet with chips.', ru: 'Я заказал филе трески с картошкой фри.' },
      { en: 'Fillet steak is very tender.', ru: 'Стейк из филе очень нежный.' },
      { en: 'He showed me how to fillet a fish.', ru: 'Он показал мне, как разделать рыбу на филе.' },
      { en: 'Bake the chicken fillets in the oven.', ru: 'Запеките куриное филе в духовке.' }
    ],
    []
  ),

  createRichWord('c1_fir', 'Fir', '/fɜːr/', 'фё', 'Ель / Пихта', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Вечнозеленое дерево с иголками (часто используется как рождественская елка).',
    '- Дерево: "Fir tree" (Ель/Пихта)\n- Шишки: "Fir cones" (Еловые шишки)\n- Лес: "Douglas fir" (Пихта Дугласа)',
    [
      { en: 'We planted a fir tree in the garden.', ru: 'Мы посадили ель в саду.' },
      { en: 'The forest is full of pine and fir trees.', ru: 'Лес полон сосен и елей.' },
      { en: 'Fir trees stay green all year round.', ru: 'Ели остаются зелеными круглый год.' },
      { en: 'The smell of fir reminds me of Christmas.', ru: 'Запах ели напоминает мне о Рождестве.' }
    ],
    []
  ),

  createRichWord('c1_fiver', 'Fiver', '/ˈfaɪ.vər/', 'файвэ', 'Пятерка (банкнота)', ProficiencyLevel.C1, 'noun', 'Low', 'Informal',
    'Банкнота достоинством в пять фунтов или пять долларов (разг.).',
    '- Деньги: "Lend me a fiver" (Одолжи мне пятерку)\n- Стоимость: "Costs a fiver" (Стоит пятерку)\n- Сдача: "Here is a fiver" (Вот пятерка)',
    [
      { en: 'Can you lend me a fiver until tomorrow?', ru: 'Можешь одолжить мне пятерку до завтра?' },
      { en: 'I found a fiver on the street.', ru: 'Я нашел пятерку на улице.' },
      { en: 'It only costs a fiver.', ru: 'Это стоит всего пятерку.' },
      { en: 'He slipped the doorman a fiver.', ru: 'Он сунул швейцару пятерку.' }
    ],
    []
  ),

  createRichWord('c1_flannel', 'Flannel', '/ˈflæn.əl/', 'флэнэл', 'Фланель / Мочалка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Мягкая ткань (для рубашек/пижам); или маленькое полотенце для лица (брит.).',
    '- Ткань: "Flannel shirt" (Фланелевая рубашка)\n- Одежда: "Grey flannels" (Серые фланелевые брюки)\n- Гигиена: "Face flannel" (Мочалка для лица)',
    [
      { en: 'He wore a checked flannel shirt.', ru: 'На нем была клетчатая фланелевая рубашка.' },
      { en: 'Use a wet flannel to wash your face.', ru: 'Используй мокрую мочалку, чтобы умыть лицо.' },
      { en: 'Flannel sheets are warm in winter.', ru: 'Фланелевые простыни теплые зимой.' },
      { en: 'She wiped the baby\'s face with a flannel.', ru: 'Она вытерла лицо ребенка мочалкой.' }
    ],
    []
  ),

  createRichWord('c1_flask', 'Flask', '/flɑːsk/', 'фласк', 'Фляга / Колба / Термос', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Плоская бутылка для алкоголя; лабораторная посуда; или термос (Vacuum flask).',
    '- Алкоголь: "Hip flask" (Карманная фляга)\n- Наука: "Laboratory flask" (Лабораторная колба)\n- Тепло: "Thermos flask" (Термос)',
    [
      { en: 'He took a swig from his hip flask.', ru: 'Он сделал глоток из своей карманной фляги.' },
      { en: 'We brought a flask of hot coffee.', ru: 'Мы принесли термос с горячим кофе.' },
      { en: 'The scientist heated the liquid in a flask.', ru: 'Ученый нагрел жидкость в колбе.' },
      { en: 'Pour the tea from the flask.', ru: 'Налей чай из термоса.' }
    ],
    []
  ),

  createRichWord('c1_fleece', 'Fleece', '/fliːs/', 'флис', 'Флис / Шерсть / Обирать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Шерстяной покров овцы; синтетическая теплая ткань (флис); или обмануть на деньги (гл., разг.).',
    '- Ткань: "Fleece jacket" (Флисовая куртка)\n- Животные: "Sheep\'s fleece" (Овечья шерсть)\n- Миф: "Golden Fleece" (Золотое руно)',
    [
      { en: 'He wore a warm fleece jacket.', ru: 'На нем была теплая флисовая куртка.' },
      { en: 'The farmer sheared the fleece from the sheep.', ru: 'Фермер состриг шерсть с овцы.' },
      { en: 'I felt like I had been fleeced by that taxi driver.', ru: 'Я чувствовал, что таксист меня обобрал.' },
      { en: 'Fleece is a soft and warm material.', ru: 'Флис — мягкий и теплый материал.' }
    ],
    []
  ),

  createRichWord('c1_folklore', 'Folklore', '/ˈfəʊk.lɔːr/', 'фоукло', 'Фольклор', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Традиционные истории, верования и обычаи народа.',
    '- Культура: "Local folklore" (Местный фольклор)\n- Истории: "Irish folklore" (Ирландский фольклор)\n- Миф: "Part of folklore" (Часть фольклора)',
    [
      { en: 'In Irish folklore, there are many stories about fairies.', ru: 'В ирландском фольклоре много историй о феях.' },
      { en: 'Folklore is passed down through generations.', ru: 'Фольклор передается из поколения в поколение.' },
      { en: 'The vampire is a creature of folklore.', ru: 'Вампир — это существо из фольклора.' },
      { en: 'He studies the folklore of ancient tribes.', ru: 'Он изучает фольклор древних племен.' }
    ],
    []
  ),

  createRichWord('c1_froth', 'Froth', '/frɒθ/', 'фрос', 'Пена', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Масса мелких пузырьков на поверхности жидкости (на пиве, кофе, у рта).',
    '- Напитки: "Beer froth" (Пена на пиве)\n- Кофе: "Froth on cappuccino" (Пена на капучино)\n- Глагол: "Froth at the mouth" (Идти пеной изо рта / Беситься)',
    [
      { en: 'He blew the froth off his beer.', ru: 'Он сдул пену со своего пива.' },
      { en: 'The waves churned into white froth.', ru: 'Волны взбивались в белую пену.' },
      { en: 'I like a lot of froth on my coffee.', ru: 'Я люблю много пены в моем кофе.' },
      { en: 'The dog was frothing at the mouth.', ru: 'У собаки шла пена изо рта.' }
    ],
    []
  ),

  createRichWord('c1_gale', 'Gale', '/ɡeɪl/', 'гейл', 'Шторм / Буря', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Очень сильный ветер.',
    '- Погода: "Gale-force winds" (Штормовые ветра)\n- Звук: "Gales of laughter" (Взрывы хохота)\n- Шторм: "Blow a gale" (Дуть штормовым ветром)',
    [
      { en: 'The tree was blown down in a gale.', ru: 'Дерево было повалено штормом.' },
      { en: 'Gales of laughter came from the room.', ru: 'Из комнаты доносились взрывы хохота.' },
      { en: 'It is blowing a gale outside.', ru: 'На улице бушует штормовой ветер.' },
      { en: 'The ship struggled against the gale.', ru: 'Корабль боролся со штормом.' }
    ],
    []
  ),

  createRichWord('c1_genealogy', 'Genealogy', '/ˌdʒiː.niˈæl.ə.dʒi/', 'джиниэлэджи', 'Генеалогия / Родословная', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'История семьи и предков; изучение родословных.',
    '- Семья: "Trace genealogy" (Прослеживать родословную)\n- Дерево: "Genealogy tree" (Генеалогическое древо)\n- Исследование: "Interested in genealogy" (Интересоваться генеалогией)',
    [
      { en: 'She is researching her family genealogy.', ru: 'Она исследует свою семейную генеалогию.' },
      { en: 'Genealogy has become a popular hobby.', ru: 'Генеалогия стала популярным хобби.' },
      { en: 'He traced his genealogy back to 1700.', ru: 'Он проследил свою родословную до 1700 года.' },
      { en: 'The library has a genealogy section.', ru: 'В библиотеке есть отдел генеалогии.' }
    ],
    []
  ),

  createRichWord('c1_gimmick', 'Gimmick', '/ˈɡɪm.ɪk/', 'гимик', 'Уловка / Трюк', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Что-то, используемое для привлечения внимания или рекламы, часто бесполезное.',
    '- Маркетинг: "Marketing gimmick" (Маркетинговая уловка)\n- Продажи: "Sales gimmick" (Трюк для продаж)\n- Оценка: "Just a gimmick" (Просто уловка)',
    [
      { en: 'The contest is just a marketing gimmick.', ru: 'Конкурс — это просто маркетинговая уловка.' },
      { en: 'They use gimmicks to sell cheap products.', ru: 'Они используют трюки, чтобы продавать дешевые товары.' },
      { en: 'Unlike other phones, this feature is not a gimmick.', ru: 'В отличие от других телефонов, эта функция — не просто трюк.' },
      { en: 'He dismissed the plan as a political gimmick.', ru: 'Он отверг план как политическую уловку.' }
    ],
    []
  ),
  createRichWord('c1_directorate', 'Directorate', '/daɪˈrek.tər.ət/', 'дайрэктэрет', 'Директорат / Управление', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Совет директоров компании; или отдел государственной организации высокого уровня.',
    '- Организация: "CIA Directorate" (Управление ЦРУ)\n- Бизнес: "Board directorate" (Директорат совета)\n- Власть: "Under the directorate" (Под управлением)',
    [
      { en: 'He works for the Directorate of Operations.', ru: 'Он работает в Оперативном управлении.' },
      { en: 'The decision was made by the entire directorate.', ru: 'Решение было принято всем директоратом.' },
      { en: 'A new technical directorate was established.', ru: 'Был создан новый технический директорат.' },
      { en: 'The directorate is responsible for strategic planning.', ru: 'Директорат отвечает за стратегическое планирование.' }
    ],
    []
  ),

  createRichWord('c1_disbelieve', 'Disbelieve', '/ˌdɪs.bɪˈliːv/', 'дисбилив', 'Не верить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Отказываться верить чему-либо; считать ложью.',
    '- Реакция: "Disbelieve a story" (Не поверить истории)\n- Отношение: "Wholly disbelieve" (Полностью не верить)\n- Взгляд: "Stare in disbelief" (Смотреть с недоверием)',
    [
      { en: 'I have no reason to disbelieve him.', ru: 'У меня нет причин ему не верить.' },
      { en: 'The jury seemed to disbelieve the witness.', ru: 'Казалось, присяжные не поверили свидетелю.' },
      { en: 'It is hard to disbelieve such convincing evidence.', ru: 'Трудно не поверить таким убедительным доказательствам.' },
      { en: 'She tends to disbelieve everything she reads online.', ru: 'Она склонна не верить всему, что читает в интернете.' }
    ],
    []
  ),

  createRichWord('c1_disclaim', 'Disclaim', '/dɪsˈkleɪm/', ' дисклейм', 'Отрицать / Снимать ответственность', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заявлять о непричастности или отсутствии ответственности за что-либо.',
    '- Ответственность: "Disclaim responsibility" (Снять с себя ответственность)\n- Знание: "Disclaim knowledge" (Отрицать знание)\n- Юридически: "Disclaimer" (Отказ от ответственности - сущ.)',
    [
      { en: 'The company disclaimed all responsibility for the accident.', ru: 'Компания сняла с себя всякую ответственность за аварию.' },
      { en: 'He disclaimed any knowledge of the plot.', ru: 'Он отрицал, что знал что-либо о заговоре.' },
      { en: 'They disclaim ownership of the copyright.', ru: 'Они отказываются от прав на авторство.' },
      { en: 'Read the notice disclaiming liability.', ru: 'Прочтите уведомление об отказе от ответственности.' }
    ],
    []
  ),

  createRichWord('c1_discolour', 'Discolour', '/dɪsˈkʌl.ər/', 'дискалэ', 'Обесцвечивать / Менять цвет', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Изменить цвет в худшую сторону (стать тусклым, покрыться пятнами).',
    '- Ткань: "Sun discoloured the curtains" (Солнце обесцветило шторы)\n- Зубы: "Discoloured teeth" (Потемневшие зубы)\n- Кожа: "Skin discolouration" (Изменение цвета кожи)',
    [
      { en: 'The strong sunlight has discoloured the sofa.', ru: 'Яркий солнечный свет обесцветил диван.' },
      { en: 'Smoking can discolour your teeth.', ru: 'Курение может вызвать потемнение зубов.' },
      { en: 'The leaves began to discolour and fall.', ru: 'Листья начали менять цвет и опадать.' },
      { en: 'The damp walls were discoloured with mould.', ru: 'Сырые стены поменяли цвет из-за плесени.' }
    ],
    []
  ),

  createRichWord('c1_disfigure', 'Disfigure', '/dɪsˈfɪɡ.ər/', 'дисфигэ', 'Обезображивать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Испортить внешний вид человека или вещи.',
    '- Лицо: "Disfigured by scars" (Обезображенный шрамами)\n- Здание: "Disfigure the landscape" (Обезображивать пейзаж)\n- Вандализм: "Disfigure a statue" (Испортить статую)',
    [
      { en: 'His face was disfigured in the fire.', ru: 'Его лицо было обезображено в пожаре.' },
      { en: 'Graffiti disfigured the historic building.', ru: 'Граффити испортили историческое здание.' },
      { en: 'They feared the disease would disfigure them.', ru: 'Они боялись, что болезнь обезобразит их.' },
      { en: 'A huge scar disfigured his cheek.', ru: 'Огромный шрам уродовал его щеку.' }
    ],
    []
  ),

  createRichWord('c1_dismount', 'Dismount', '/dɪsˈmaʊnt/', 'дисмаунт', 'Спешиваться / Слезать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Слезать с лошади, велосипеда или мотоцикла.',
    '- Лошадь: "Dismount from a horse" (Спешиться с лошади)\n- Велосипед: "Cyclists must dismount" (Велосипедисты должны спешиться)\n- Гимнастика: "Dismount" (Соскок - сущ.)',
    [
      { en: 'The knight dismounted from his horse.', ru: 'Рыцарь спешился со своего коня.' },
      { en: 'Please dismount and walk your bike across the bridge.', ru: 'Пожалуйста, слезьте с велосипеда и перейдите мост пешком.' },
      { en: 'She dismounted gracefully.', ru: 'Она грациозно спешилась.' },
      { en: 'The gymnast performed a perfect dismount.', ru: 'Гимнаст выполнил идеальный соскок.' }
    ],
    []
  ),

  createRichWord('c1_disprove', 'Disprove', '/dɪsˈpruːv/', 'диспрув', 'Опровергать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Доказать, что что-то является ложным или неправильным.',
    '- Теория: "Disprove a theory" (Опровергнуть теорию)\n- Обвинение: "Disprove allegations" (Опровергнуть обвинения)\n- Миф: "Disprove a myth" (Развенчать миф)',
    [
      { en: 'Science has disproved that theory long ago.', ru: 'Наука опровергла эту теорию давным-давно.' },
      { en: 'He tried to disprove the allegations against him.', ru: 'Он пытался опровергнуть обвинения против него.' },
      { en: 'The evidence completely disproves his claim.', ru: 'Улики полностью опровергают его заявление.' },
      { en: 'It is hard to disprove a negative.', ru: 'Трудно доказать отсутствие чего-либо (опровергнуть отрицание).' }
    ],
    []
  ),

  createRichWord('c1_dissuade', 'Dissuade', '/dɪˈsweɪd/', 'дисвейд', 'Отговаривать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Убедить кого-то не делать что-то (антоним: persuade).',
    '- Действие: "Dissuade from doing" (Отговорить от делания)\n- Попытка: "Try to dissuade" (Пытаться отговорить)\n- Решение: "Dissuade someone" (Разубедить кого-то)',
    [
      { en: 'I tried to dissuade him from leaving his job.', ru: 'Я пытался отговорить его увольняться с работы.' },
      { en: 'Nothing could dissuade her.', ru: 'Ничто не могло ее разубедить.' },
      { en: 'They successfully dissuaded the attackers.', ru: 'Им удалось отговорить нападавших.' },
      { en: 'Bad weather did not dissuade the hikers.', ru: 'Плохая погода не остановила (не отговорила) туристов.' }
    ],
    []
  ),

  createRichWord('c1_disuse', 'Disuse', '/dɪsˈjuːs/', 'дис-юс', 'Неиспользование / Запустение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Состояние, когда чем-то больше не пользуются.',
    '- Состояние: "Fall into disuse" (Выйти из употребления / Прийти в запустение)\n- Слова: "Words in disuse" (Устаревшие слова)\n- Здание: "State of disuse" (Состояние заброшенности)',
    [
      { en: 'The canal fell into disuse years ago.', ru: 'Канал вышел из употребления (пришел в запустение) много лет назад.' },
      { en: 'Many old customs have fallen into disuse.', ru: 'Многие старые обычаи вышли из употребления.' },
      { en: 'The machine grew rusty from disuse.', ru: 'Машина заржавела от неиспользования.' },
      { en: 'Reviving a law that has fallen into disuse.', ru: 'Возрождение закона, который перестал применяться.' }
    ],
    []
  ),

  createRichWord('c1_doctoral', 'Doctoral', '/ˈdɒk.tər.əl/', 'доктэрэл', 'Докторский', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к высшей ученой степени (PhD).',
    '- Степень: "Doctoral degree" (Докторская степень)\n- Работа: "Doctoral thesis" (Докторская диссертация)\n- Студент: "Doctoral student" (Докторант)',
    [
      { en: 'He is working on his doctoral thesis.', ru: 'Он работает над своей докторской диссертацией.' },
      { en: 'She received a doctoral grant.', ru: 'Она получила грант на докторские исследования.' },
      { en: 'Doctoral students often teach undergraduates.', ru: 'Докторанты часто преподают студентам бакалавриата.' },
      { en: 'Post-doctoral research is very competitive.', ru: 'Постдокторские исследования очень конкурентны.' }
    ],
    []
  ),

  createRichWord('c1_draught', 'Draught', '/drɑːft/', 'драфт', 'Сквозняк / Глоток / Разливное (пиво)', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Поток холодного воздуха (сквозняк); глоток жидкости; разливное пиво (UK spelling).',
    '- Воздух: "Feel a draught" (Чувствовать сквозняк)\n- Пиво: "Draught beer" (Разливное пиво)\n- Игры: "Draughts" (Шашки)',
    [
      { en: 'There is a terrible draught coming from the window.', ru: 'От окна дует ужасный сквозняк.' },
      { en: 'He drank the beer in one long draught.', ru: 'Он выпил пиво одним долгим глотком.' },
      { en: 'Do you prefer bottled or draught beer?', ru: 'Вы предпочитаете бутылочное или разливное пиво?' },
      { en: 'Let\'s play a game of draughts.', ru: 'Давай сыграем партию в шашки.' }
    ],
    [
      { meaning: "Draft (US Spelling)", translation: "Черновик", example: { en: "First draught of the book.", ru: "Первый черновик книги." } }
    ]
  ),

  createRichWord('c1_drowsy', 'Drowsy', '/ˈdraʊ.zi/', 'драузи', 'Сонный / Вялый', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Чувствующий сонливость, полусонный.',
    '- Состояние: "Feel drowsy" (Чувствовать сонливость)\n- Лекарство: "Makes you drowsy" (Вызывает сонливость)\n- Погода: "Drowsy afternoon" (Сонный полдень)',
    [
      { en: 'The medicine made me feel very drowsy.', ru: 'Лекарство вызвало у меня сильную сонливость.' },
      { en: 'It was a warm, drowsy afternoon.', ru: 'Был теплый, сонный полдень.' },
      { en: 'He became drowsy after a heavy meal.', ru: 'Он стал сонным после плотной еды.' },
      { en: 'Do not drive if you feel drowsy.', ru: 'Не садитесь за руль, если чувствуете сонливость.' }
    ],
    []
  ),

  createRichWord('c1_dung', 'Dung', '/dʌŋ/', 'данг', 'Навоз / Помет', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Экскременты животных (обычно крупных).',
    '- Ферма: "Cow dung" (Коровий навоз)\n- Жук: "Dung beetle" (Жук-навозник)\n- Удобрение: "Use as dung" (Использовать как удобрение)',
    [
      { en: 'Farmers use dung to fertilize the fields.', ru: 'Фермеры используют навоз для удобрения полей.' },
      { en: 'We stepped in some cow dung.', ru: 'Мы наступили в коровий навоз.' },
      { en: 'Dried dung is used as fuel in some countries.', ru: 'Высушенный навоз используется как топливо в некоторых странах.' },
      { en: 'The smell of dung was strong.', ru: 'Запах навоза был сильным.' }
    ],
    []
  ),

  createRichWord('c1_dyslexia', 'Dyslexia', '/dɪsˈlek.si.ə/', 'дислексиэ', 'Дислексия', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Нарушение способности к чтению и письму при нормальном интеллекте.',
    '- Диагноз: "Diagnosed with dyslexia" (Диагностирована дислексия)\n- Школа: "Support for dyslexia" (Поддержка при дислексии)\n- Прил: "Dyslexic" (Страдающий дислексией)',
    [
      { en: 'Dyslexia makes reading difficult for him.', ru: 'Дислексия затрудняет для него чтение.' },
      { en: 'Many creative people have dyslexia.', ru: 'У многих творческих людей есть дислексия.' },
      { en: 'Schools now provide help for children with dyslexia.', ru: 'Школы теперь предоставляют помощь детям с дислексией.' },
      { en: 'He overcame his dyslexia to become a writer.', ru: 'Он преодолел свою дислексию и стал писателем.' }
    ],
    []
  ),

  createRichWord('c1_ebony', 'Ebony', '/ˈeb.ən.i/', 'эбэни', 'Эбеновое дерево / Черный цвет', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Очень твердое черное дерево; или поэтическое название глубокого черного цвета.',
    '- Дерево: "Ebony wood" (Эбеновое дерево)\n- Цвет: "Ebony skin" (Иссиня-черная кожа)\n- Предмет: "Ebony keys" (Черные клавиши пианино)',
    [
      { en: 'The chest was made of solid ebony.', ru: 'Сундук был сделан из цельного эбенового дерева.' },
      { en: 'She had long, ebony hair.', ru: 'У нее были длинные волосы цвета воронова крыла.' },
      { en: 'Piano keys were traditionally made of ivory and ebony.', ru: 'Клавиши пианино традиционно делались из слоновой кости и эбенового дерева.' },
      { en: 'Carved ebony statues are expensive.', ru: 'Резные статуэтки из эбенового дерева стоят дорого.' }
    ],
    []
  ),

  createRichWord('c1_elemental', 'Elemental', '/ˌel.ɪˈmen.təl/', 'элиментл', 'Стихийный / Базовый', ProficiencyLevel.C1, 'adj', 'Low', 'Literary',
    'Относящийся к силам природы; или простой, фундаментальный.',
    '- Природа: "Elemental forces" (Стихийные силы)\n- Основа: "Elemental truth" (Простая истина)\n- Эмоции: "Elemental fury" (Стихийная ярость)',
    [
      { en: 'They faced the elemental fury of the storm.', ru: 'Они столкнулись со стихийной яростью шторма.' },
      { en: 'It is an elemental truth of life.', ru: 'Это фундаментальная истина жизни.' },
      { en: 'The music has a raw, elemental power.', ru: 'Музыка обладает сырой, стихийной силой.' },
      { en: 'Fire and water are elemental forces.', ru: 'Огонь и вода — это стихийные силы.' }
    ],
    []
  ),

  createRichWord('c1_emir', 'Emir', '/eˈmɪər/', 'эмиэ', 'Эмир', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Титул правителя в некоторых мусульманских странах.',
    '- Титул: "The Emir of Kuwait" (Эмир Кувейта)\n- Страна: "United Arab Emirates" (ОАЭ)\n- Власть: "Ruling Emir" (Правящий эмир)',
    [
      { en: 'The Emir issued a new decree.', ru: 'Эмир издал новый указ.' },
      { en: 'Dubai is ruled by an Emir.', ru: 'Дубаем правит эмир.' },
      { en: 'We visited the palace of the Emir.', ru: 'Мы посетили дворец эмира.' },
      { en: 'The seven Emirs met in Abu Dhabi.', ru: 'Семь эмиров встретились в Абу-Даби.' }
    ],
    []
  ),

  createRichWord('c1_encore', 'Encore', '/ˈɒŋ.kɔːr/', 'онко', 'Бис / Выход на бис', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Повторное выступление или дополнительный номер в конце концерта по просьбе публики.',
    '- Концерт: "Play an encore" (Сыграть на бис)\n- Крик: "Shout for an encore" (Кричать "Бис!")\n- Номер: "Encore performance" (Выступление на бис)',
    [
      { en: 'The audience shouted for an encore.', ru: 'Зрители кричали "Бис!".' },
      { en: 'They played three encores.', ru: 'Они сыграли три выхода на бис.' },
      { en: 'It was a brilliant encore to a great show.', ru: 'Это был блестящий финальный аккорд отличного шоу.' },
      { en: 'The band refused to do an encore.', ru: 'Группа отказалась выходить на бис.' }
    ],
    []
  ),

  createRichWord('c1_engross', 'Engross', '/ɪnˈɡrəʊs/', 'ингроус', 'Поглощать (внимание)', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Полностью завладеть чьим-то вниманием (обычно в пассиве: engrossed).',
    '- Внимание: "Engrossed in a book" (Поглощенный книгой)\n- Работа: "Engrossed in work" (Ушедший с головой в работу)\n- Разговор: "Engrossing conversation" (Захватывающий разговор)',
    [
      { en: 'She was so engrossed in her book that she missed her stop.', ru: 'Она была так поглощена книгой, что пропустила свою остановку.' },
      { en: 'The puzzle engrossed him for hours.', ru: 'Головоломка увлекла его на несколько часов.' },
      { en: 'It is an engrossing story.', ru: 'Это захватывающая история.' },
      { en: 'They were engrossed in conversation.', ru: 'Они были поглощены разговором.' }
    ],
    []
  ),

  createRichWord('c1_enigma', 'Enigma', '/ɪˈnɪɡ.mə/', 'инигма', 'Загадка / Тайна', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Что-то или кто-то, кого трудно понять или объяснить.',
    '- Человек: "She is an enigma" (Она — загадка)\n- Ситуация: "Remain an enigma" (Оставаться тайной)\n- Прил: "Enigmatic" (Загадочный)',
    [
      { en: 'The origin of the painting remains an enigma.', ru: 'Происхождение картины остается загадкой.' },
      { en: 'He is a bit of an enigma to his friends.', ru: 'Он своего рода загадка для своих друзей.' },
      { en: 'The disappearance of the ship is an enigma.', ru: 'Исчезновение корабля — это тайна.' },
      { en: 'Russia is a riddle wrapped in a mystery inside an enigma.', ru: 'Россия — это головоломка, завернутая в тайну, внутри загадки.' }
    ],
    []
  ),

  createRichWord('c1_enslave', 'Enslave', '/ɪnˈsleɪv/', 'инслейв', 'Порабощать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сделать кого-то рабом; поставить в зависимость.',
    '- История: "Enslaved people" (Порабощенные люди)\n- Зависимость: "Enslaved by debt" (Порабощенный долгами)\n- Метафора: "Enslaved to fashion" (Раб моды)',
    [
      { en: 'Millions of Africans were enslaved and taken to America.', ru: 'Миллионы африканцев были порабощены и вывезены в Америку.' },
      { en: 'We must not be enslaved by our technology.', ru: 'Мы не должны быть рабами наших технологий.' },
      { en: 'He was enslaved to his addiction.', ru: 'Он был рабом своей зависимости.' },
      { en: 'The conquerors enslaved the local population.', ru: 'Завоеватели поработили местное население.' }
    ],
    []
  ),

  createRichWord('c1_enterprising', 'Enterprising', '/ˈen.tə.praɪ.zɪŋ/', 'энтэпрайзин', 'Предприимчивый', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Умеющий находить новые способы делать вещи или зарабатывать деньги.',
    '- Человек: "Enterprising student" (Предприимчивый студент)\n- Идея: "Enterprising idea" (Смелая идея)\n- Бизнес: "Enterprising spirit" (Дух предпринимательства)',
    [
      { en: 'An enterprising young man started selling water to tourists.', ru: 'Предприимчивый молодой человек начал продавать воду туристам.' },
      { en: 'We need more enterprising people in this company.', ru: 'Нам нужно больше предприимчивых людей в этой компании.' },
      { en: 'It was an enterprising move to open a shop there.', ru: 'Это был смелый шаг — открыть там магазин.' },
      { en: 'She showed an enterprising spirit from a young age.', ru: 'Она проявляла дух предпринимательства с юных лет.' }
    ],
    []
  ),

  createRichWord('c1_enthuse', 'Enthuse', '/ɪnˈθjuːz/', 'инсьюз', 'Восторгаться / Выражать энтузиазм', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Говорить с большим энтузиазмом; вдохновлять кого-то.',
    '- Речь: "Enthuse about a project" (Восторгаться проектом)\n- Вдохновение: "Enthuse the team" (Вдохновить команду)\n- Чувство: "Hard to enthuse" (Трудно вызвать энтузиазм)',
    [
      { en: 'She enthused about her new job.', ru: 'Она с восторгом говорила о своей новой работе.' },
      { en: 'It is hard to enthuse students about grammar.', ru: 'Трудно увлечь студентов грамматикой.' },
      { en: '"The food was amazing!" he enthused.', ru: '"Еда была потрясающей!" — восторгался он.' },
      { en: 'He fails to enthuse his voters.', ru: 'Ему не удается воодушевить своих избирателей.' }
    ],
    []
  ),

  createRichWord('c1_envision', 'Envision', '/ɪnˈvɪʒ.ən/', 'инвижн', 'Представлять себе / Воображать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Представлять что-то в будущем как вероятное или желаемое (синоним envisage).',
    '- Будущее: "Envision a future" (Представлять будущее)\n- План: "Envision success" (Представлять успех)\n- Мысль: "Hard to envision" (Трудно вообразить)',
    [
      { en: 'I envision a world without poverty.', ru: 'Я представляю себе мир без бедности.' },
      { en: 'How do you envision the finished building?', ru: 'Каким вы видите готовое здание?' },
      { en: 'He envisioned a career in politics.', ru: 'Он представлял себе карьеру в политике.' },
      { en: 'It is difficult to envision the consequences.', ru: 'Трудно представить последствия.' }
    ],
    []
  ),

  createRichWord('c1_equivalence', 'Equivalence', '/ɪˈkwɪv.əl.əns/', 'иквивэлэнс', 'Эквивалентность / Равноценность', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Состояние равенства по ценности, функции или значению.',
    '- Значение: "Moral equivalence" (Моральная равнозначность)\n- Сравнение: "Equivalence between" (Эквивалентность между)\n- Диплом: "Equivalence of qualifications" (Признание равноценности квалификаций)',
    [
      { en: 'There is no moral equivalence between the two acts.', ru: 'Между этими двумя поступками нет моральной равнозначности.' },
      { en: 'We need to establish the equivalence of the degrees.', ru: 'Нам нужно установить эквивалентность дипломов.' },
      { en: 'Is there an equivalence between price and quality?', ru: 'Существует ли равнозначность между ценой и качеством?' },
      { en: 'The equivalence of mass and energy.', ru: 'Эквивалентность массы и энергии.' }
    ],
    []
  ),

  createRichWord('c1_euthanasia', 'Euthanasia', '/ˌjuː.θəˈneɪ.zi.ə/', 'юсэнейзиэ', 'Эвтаназия', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Акт безболезненного умерщвления человека или животного, страдающего неизлечимой болезнью.',
    '- Закон: "Legalise euthanasia" (Легализовать эвтаназию)\n- Животные: "Euthanasia of pets" (Усыпление питомцев)\n- Этика: "Voluntary euthanasia" (Добровольная эвтаназия)',
    [
      { en: 'The debate over euthanasia continues.', ru: 'Споры об эвтаназии продолжаются.' },
      { en: 'Some countries allow voluntary euthanasia.', ru: 'Некоторые страны разрешают добровольную эвтаназию.' },
      { en: 'The vet recommended euthanasia for the sick dog.', ru: 'Ветеринар порекомендовал усыпить (эвтаназию) больную собаку.' },
      { en: 'Euthanasia is often called mercy killing.', ru: 'Эвтаназию часто называют убийством из милосердия.' }
    ],
    []
  ),

  createRichWord('c1_evasive', 'Evasive', '/ɪˈveɪ.sɪv/', 'ивейсив', 'Уклончивый', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Старающийся избежать прямого ответа или встречи.',
    '- Ответ: "Evasive answer" (Уклончивый ответ)\n- Действие: "Take evasive action" (Предпринять маневр уклонения)\n- Поведение: "Being evasive" (Быть уклончивым)',
    [
      { en: 'He gave an evasive answer to my question.', ru: 'Он дал уклончивый ответ на мой вопрос.' },
      { en: 'The pilot took evasive action to avoid a crash.', ru: 'Пилот предпринял маневр уклонения, чтобы избежать столкновения.' },
      { en: 'Stop being so evasive and tell me the truth.', ru: 'Перестань увиливать и скажи мне правду.' },
      { en: 'Her eyes were evasive.', ru: 'У нее был бегающий (уклончивый) взгляд.' }
    ],
    []
  ),
  createRichWord('c1_exponential', 'Exponential', '/ˌek.spəˈnen.ʃəl/', 'экспоненшл', 'Экспоненциальный / Стремительный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Становящийся все быстрее и быстрее (о росте или увеличении).',
    '- Рост: "Exponential growth" (Экспоненциальный рост)\n- Увеличение: "Exponential increase" (Стремительное увеличение)\n- Математика: "Exponential curve" (Экспоненциальная кривая)',
    [
      { en: 'We have seen an exponential growth in sales.', ru: 'Мы наблюдаем экспоненциальный рост продаж.' },
      { en: 'Technology is advancing at an exponential rate.', ru: 'Технологии развиваются стремительными темпами.' },
      { en: 'The population increase was exponential.', ru: 'Прирост населения был экспоненциальным.' },
      { en: 'This graph shows an exponential curve.', ru: 'Этот график показывает экспоненциальную кривую.' }
    ],
    []
  ),

  createRichWord('c1_extrovert', 'Extrovert', '/ˈek.strə.vɜːt/', 'экстравёрт', 'Экстраверт', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Энергичный и общительный человек, который любит находиться в компании других.',
    '- Личность: "Natural extrovert" (Прирожденный экстраверт)\n- Поведение: "Be an extrovert" (Быть экстравертом)\n- Противоположность: "Introvert and extrovert" (Интроверт и экстраверт)',
    [
      { en: 'He is an extrovert who loves parties.', ru: 'Он экстраверт, который обожает вечеринки.' },
      { en: 'Unlike her sister, she is a complete extrovert.', ru: 'В отличие от сестры, она полная экстравертка.' },
      { en: 'Sales jobs often suit extroverts.', ru: 'Работа в продажах часто подходит экстравертам.' },
      { en: 'Are you an introvert or an extrovert?', ru: 'Ты интроверт или экстраверт?' }
    ],
    []
  ),

  createRichWord('c1_fictitious', 'Fictitious', '/fɪkˈtɪʃ.əs/', 'фиктишэс', 'Вымышленный / Фиктивный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Изобретенный и не существующий на самом деле.',
    '- Имя: "Fictitious name" (Вымышленное имя)\n- Персонаж: "Fictitious character" (Вымышленный персонаж)\n- История: "Fictitious account" (Выдуманный рассказ)',
    [
      { en: 'The characters in this book are entirely fictitious.', ru: 'Персонажи в этой книге полностью вымышлены.' },
      { en: 'He used a fictitious address to register.', ru: 'Он использовал фиктивный адрес для регистрации.' },
      { en: 'The company created fictitious sales records.', ru: 'Компания создала фиктивные отчеты о продажах.' },
      { en: 'It was a fictitious story designed to mislead us.', ru: 'Это была выдуманная история, призванная ввести нас в заблуждение.' }
    ],
    []
  ),

  createRichWord('c1_florist', 'Florist', '/ˈflɒr.ɪst/', 'флорист', 'Флорист / Цветочный магазин', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, который продает и составляет букеты из цветов, или магазин цветов.',
    '- Магазин: "At the florist" (В цветочном магазине)\n- Профессия: "Work as a florist" (Работать флористом)\n- Заказ: "Order from a florist" (Заказать у флориста)',
    [
      { en: 'I ordered a bouquet from the florist.', ru: 'Я заказал букет у флориста.' },
      { en: 'The florist arranged the roses beautifully.', ru: 'Флорист красиво уложил розы.' },
      { en: 'She wants to open her own florist shop.', ru: 'Она хочет открыть свой собственный цветочный магазин.' },
      { en: 'We stopped at the florist to buy some lilies.', ru: 'Мы остановились у цветочного магазина, чтобы купить лилии.' }
    ],
    []
  ),

  createRichWord('c1_forefinger', 'Forefinger', '/ˈfɔːˌfɪŋ.ɡər/', 'фофингэ', 'Указательный палец', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Палец рядом с большим пальцем.',
    '- Жест: "Point with forefinger" (Указывать указательным пальцем)\n- Прикосновение: "Touch with forefinger" (Коснуться указательным пальцем)\n- Рука: "Thumb and forefinger" (Большой и указательный палец)',
    [
      { en: 'He pointed at the map with his forefinger.', ru: 'Он указал на карту указательным пальцем.' },
      { en: 'She tapped her chin with her forefinger.', ru: 'Она постучала по подбородку указательным пальцем.' },
      { en: 'Hold the pen between your thumb and forefinger.', ru: 'Держите ручку между большим и указательным пальцами.' },
      { en: 'He raised his forefinger to silence us.', ru: 'Он поднял указательный палец, призывая нас к тишине.' }
    ],
    []
  ),
 createRichWord('c1_disallow', 'Disallow', '/ˌdɪs.əˈlaʊ/', 'дисэлау', 'Запрещать / Отвергать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Официально отказать в разрешении или не признать что-либо (например, гол в спорте).',
    '- Спорт: "Goal disallowed" (Гол не засчитан)\n- Закон: "Claim disallowed" (Иск отклонен)\n- Правила: "Disallow expenses" (Не принять расходы)',
    [
      { en: 'The referee disallowed the goal for offside.', ru: 'Судья не засчитал гол из-за офсайда.' },
      { en: 'The court disallowed the evidence.', ru: 'Суд отверг эти доказательства.' },
      { en: 'My application for a grant was disallowed.', ru: 'Моя заявка на грант была отклонена.' },
      { en: 'Tax authorities may disallow certain deductions.', ru: 'Налоговые органы могут не принять определенные вычеты.' }
    ],
    []
  ),

  createRichWord('c1_disembark', 'Disembark', '/ˌdɪs.ɪmˈbɑːk/', 'дисимбак', 'Высаживаться', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сходить с корабля, самолета или поезда (антоним: embark).',
    '- Транспорт: "Disembark from the plane" (Выйти из самолета)\n- Путешествие: "Passengers disembark" (Пассажиры высаживаются)\n- Команда: "Prepare to disembark" (Приготовиться к высадке)',
    [
      { en: 'Passengers should wait until the plane stops to disembark.', ru: 'Пассажирам следует ждать полной остановки самолета для высадки.' },
      { en: 'We disembarked at Southampton.', ru: 'Мы высадились в Саутгемптоне.' },
      { en: 'Please have your passports ready when you disembark.', ru: 'Пожалуйста, приготовьте паспорта при высадке.' },
      { en: 'The troops disembarked under cover of darkness.', ru: 'Войска высадились под покровом темноты.' }
    ],
    []
  ),

  createRichWord('c1_dishonour', 'Dishonour', '/dɪsˈɒn.ər/', 'дисонэ', 'Бесчестие / Позорить', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Потеря уважения или репутации; действие, вызывающее стыд (сущ. и гл.).',
    '- Репутация: "Bring dishonour" (Навлечь позор)\n- Семья: "Dishonour the family" (Опозорить семью)\n- Чувство: "Deep dishonour" (Глубокое бесчестие)',
    [
      { en: 'He brought dishonour upon his regiment.', ru: 'Он навлек позор на свой полк.' },
      { en: 'It is a dishonour to break a promise.', ru: 'Нарушить обещание — это бесчестие.' },
      { en: 'They accused him of dishonouring the agreement.', ru: 'Они обвинили его в нарушении (осквернении) соглашения.' },
      { en: 'She felt the sting of public dishonour.', ru: 'Она почувствовала укол публичного позора.' }
    ],
    []
  ),

  createRichWord('c1_displease', 'Displease', '/dɪsˈpliːz/', 'дисплиз', 'Вызывать недовольство', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Раздражать или расстраивать кого-то; быть неприятным кому-то.',
    '- Реакция: "Greatly displeased" (Сильно недоволен)\n- Власть: "Displease the king" (Вызвать недовольство короля)\n- Чувство: "Does it displease you?" (Это вас не устраивает?)',
    [
      { en: 'The news displeased him greatly.', ru: 'Новости его сильно расстроили (вызвали недовольство).' },
      { en: 'I do not wish to displease my parents.', ru: 'Я не хочу огорчать своих родителей.' },
      { en: 'Her attitude displeased the teacher.', ru: 'Ее отношение вызвало недовольство учителя.' },
      { en: 'Nothing I do seems to displease him.', ru: 'Кажется, ничто из того, что я делаю, не вызывает у него недовольства (он всем доволен).' }
    ],
    []
  ),

  createRichWord('c1_dragonfly', 'Dragonfly', '/ˈdræɡ.ən.flaɪ/', 'дрэгэнфлай', 'Стрекоза', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Насекомое с длинным телом и двумя парами больших прозрачных крыльев.',
    '- Природа: "Blue dragonfly" (Голубая стрекоза)\n- Полет: "Dragonfly hovers" (Стрекоза парит)\n- Вода: "Pond dragonfly" (Прудовая стрекоза)',
    [
      { en: 'A dragonfly landed on the lily pad.', ru: 'Стрекоза села на лист кувшинки.' },
      { en: 'Dragonflies are fast fliers.', ru: 'Стрекозы быстро летают.' },
      { en: 'The wings of a dragonfly are transparent.', ru: 'Крылья стрекозы прозрачные.' },
      { en: 'We watched a dragonfly buzzing over the water.', ru: 'Мы наблюдали, как стрекоза жужжит над водой.' }
    ],
    []
  ),

  createRichWord('c1_drool', 'Drool', '/druːl/', 'друл', 'Пускать слюни', ProficiencyLevel.C1, 'verb', 'Low', 'Informal',
    'Выделять слюну изо рта (обычно у младенцев или животных); сильно хотеть чего-то (перен.).',
    '- Физиология: "Baby drools" (Младенец пускает слюни)\n- Желание: "Drool over a car" (Пускать слюни на машину)\n- Сон: "Drool on the pillow" (Напускать слюней на подушку)',
    [
      { en: 'The dog drooled when he saw the steak.', ru: 'Собака пустила слюни, когда увидела стейк.' },
      { en: 'Babies often drool when they are teething.', ru: 'Младенцы часто пускают слюни, когда у них режутся зубы.' },
      { en: 'He was drooling over the new sports car.', ru: 'Он пускал слюни на новую спортивную машину.' },
      { en: 'I woke up to find I had drooled on my sleeve.', ru: 'Я проснулся и обнаружил, что напускал слюней на рукав.' }
    ],
    []
  ),

  createRichWord('c1_dumpling', 'Dumpling', '/ˈdʌm.plɪŋ/', 'дамплин', 'Клецка / Пельмень', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Кусочек теста, сваренный в супе, или тесто с начинкой (пельмень, вареник).',
    '- Еда: "Chicken and dumplings" (Курица с клецками)\n- Азия: "Steamed dumplings" (Пельмени на пару)\n- Суп: "Soup with dumplings" (Суп с клецками)',
    [
      { en: 'We ordered pork dumplings for starters.', ru: 'Мы заказали пельмени со свининой на закуску.' },
      { en: 'My grandmother makes the best apple dumplings.', ru: 'Моя бабушка делает лучшие яблоки в тесте (клецки).' },
      { en: 'Serve the stew with fluffy dumplings.', ru: 'Подавайте рагу с пышными клецками.' },
      { en: 'Chinese dumplings are delicious.', ru: 'Китайские пельмени очень вкусные.' }
    ],
    []
  ),

  createRichWord('c1_dungeon', 'Dungeon', '/ˈdʌn.dʒən/', 'данджэн', 'Темница / Подземелье', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Темная подземная тюрьма в замке.',
    '- Замок: "Castle dungeon" (Тюрьма в замке)\n- Плен: "Thrown in a dungeon" (Брошенный в темницу)\n- Игры: "Dungeons and Dragons" (Подземелья и драконы)',
    [
      { en: 'The prisoner was kept in a dark dungeon.', ru: 'Заключенного держали в темной темнице.' },
      { en: 'We visited the castle\'s old dungeons.', ru: 'Мы посетили старые подземелья замка.' },
      { en: 'It was cold and damp in the dungeon.', ru: 'В темнице было холодно и сыро.' },
      { en: 'Tales of torture in the dungeon scared us.', ru: 'Рассказы о пытках в подземелье напугали нас.' }
    ],
    []
  ),

  createRichWord('c1_elk', 'Elk', '/elk/', 'элк', 'Лось', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Крупный олень с большими рогами (в Европе и Азии; в Северной Америке это wapiti, а moose — лось).',
    '- Животное: "Wild elk" (Дикий лось)\n- Охота: "Hunt elk" (Охотиться на лося)\n- Рога: "Elk antlers" (Рога лося)',
    [
      { en: 'An elk stood silently in the forest clearing.', ru: 'Лось тихо стоял на лесной поляне.' },
      { en: 'Elk are common in Scandinavia.', ru: 'Лоси распространены в Скандинавии.' },
      { en: 'We saw a herd of elk crossing the road.', ru: 'Мы видели стадо лосей, переходящих дорогу.' },
      { en: 'The hunter tracked the elk for miles.', ru: 'Охотник выслеживал лося много миль.' }
    ],
    []
  ),

  createRichWord('c1_emu', 'Emu', '/ˈiː.mjuː/', 'имью', 'Эму', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Крупная австралийская птица, которая быстро бегает, но не летает.',
    '- Птица: "Australian emu" (Австралийский эму)\n- Ферма: "Emu farm" (Ферма эму)\n- Яйцо: "Emu egg" (Яйцо эму)',
    [
      { en: 'The emu is the second largest bird in the world.', ru: 'Эму — вторая по величине птица в мире.' },
      { en: 'Emus cannot fly but run very fast.', ru: 'Эму не умеют летать, но бегают очень быстро.' },
      { en: 'I visited an emu farm in Australia.', ru: 'Я посетил ферму эму в Австралии.' },
      { en: 'An emu egg is dark green.', ru: 'Яйцо эму темно-зеленое.' }
    ],
    []
  ),

  createRichWord('c1_encrypt', 'Encrypt', '/ɪnˈkrɪpt/', 'инкрипт', 'Шифровать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Кодировать информацию так, чтобы ее нельзя было прочитать без ключа.',
    '- IT: "Encrypt data" (Шифровать данные)\n- Сообщение: "Encrypted message" (Зашифрованное сообщение)\n- Безопасность: "Fully encrypted" (Полностью зашифровано)',
    [
      { en: 'All sensitive data should be encrypted.', ru: 'Все конфиденциальные данные должны быть зашифрованы.' },
      { en: 'The software encrypts your emails.', ru: 'Программное обеспечение шифрует ваши электронные письма.' },
      { en: 'The file is encrypted with a password.', ru: 'Файл зашифрован паролем.' },
      { en: 'Hackers could not read the encrypted files.', ru: 'Хакеры не смогли прочитать зашифрованные файлы.' }
    ],
    []
  ),
  createRichWord('c1_epilepsy', 'Epilepsy', '/ˈep.ɪ.lep.si/', 'эпилепси', 'Эпилепсия', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Заболевание нервной системы, вызывающее припадки (судороги) и потерю сознания.',
    '- Здоровье: "Suffer from epilepsy" (Страдать эпилепсией)\n- Симптом: "Epileptic seizure" (Эпилептический припадок)\n- Лечение: "Treat epilepsy" (Лечить эпилепсию)',
    [
      { en: 'He has lived with epilepsy since childhood.', ru: 'Он живет с эпилепсией с детства.' },
      { en: 'Flashing lights can trigger epilepsy in some people.', ru: 'Мигающий свет может спровоцировать эпилепсию у некоторых людей.' },
      { en: 'Modern medicine helps control epilepsy effectively.', ru: 'Современная медицина помогает эффективно контролировать эпилепсию.' },
      { en: 'She wears a bracelet indicating she has epilepsy.', ru: 'Она носит браслет, указывающий, что у нее эпилепсия.' }
    ],
    []
  ),

  createRichWord('c1_equestrian', 'Equestrian', '/ɪˈkwes.tri.ən/', 'иквестриэн', 'Конный / Всадник', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Связанный с верховой ездой и лошадьми.',
    '- Спорт: "Equestrian sports" (Конный спорт)\n- Памятник: "Equestrian statue" (Конная статуя)\n- Навыки: "Equestrian skills" (Навыки верховой езды)',
    [
      { en: 'She is training for the equestrian events at the Olympics.', ru: 'Она тренируется к конным соревнованиям на Олимпиаде.' },
      { en: 'There is a large equestrian statue in the square.', ru: 'На площади стоит большая конная статуя.' },
      { en: 'He has a strong interest in equestrian activities.', ru: 'У него сильный интерес к занятиям верховой ездой.' },
      { en: 'The equestrian center offers riding lessons.', ru: 'Конный центр предлагает уроки верховой езды.' }
    ],
    []
  ),

  createRichWord('c1_ergonomics', 'Ergonomics', '/ˌɜː.ɡəˈnɒm.ɪks/', 'ёгономикс', 'Эргономика', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Наука о проектировании оборудования так, чтобы людям было удобно и эффективно с ним работать.',
    '- Офис: "Office ergonomics" (Офисная эргономика)\n- Дизайн: "Good ergonomics" (Хорошая эргономика)\n- Здоровье: "Improve ergonomics" (Улучшить эргономику)',
    [
      { en: 'The chair was designed with ergonomics in mind.', ru: 'Стул был спроектирован с учетом эргономики.' },
      { en: 'Poor ergonomics can lead to back pain.', ru: 'Плохая эргономика может привести к боли в спине.' },
      { en: 'They hired an expert in ergonomics to redesign the workspace.', ru: 'Они наняли эксперта по эргономике для перепланировки рабочего пространства.' },
      { en: 'The keyboard features excellent ergonomics.', ru: 'Клавиатура отличается отличной эргономикой.' }
    ],
    []
  ),

  createRichWord('c1_evacuee', 'Evacuee', '/ɪˌvæk.juˈiː/', 'ивэкьюи', 'Эвакуированный', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, которого эвакуировали из опасного места.',
    '- Война: "War evacuees" (Эвакуированные во время войны)\n- Дети: "Child evacuees" (Эвакуированные дети)\n- Помощь: "House evacuees" (Размещать эвакуированных)',
    [
      { en: 'The evacuees were taken to a safe location.', ru: 'Эвакуированных доставили в безопасное место.' },
      { en: 'Many child evacuees were sent to the countryside.', ru: 'Многих эвакуированных детей отправили в сельскую местность.' },
      { en: 'Local families opened their homes to evacuees.', ru: 'Местные семьи открыли свои дома для эвакуированных.' },
      { en: 'He was an evacuee during the Second World War.', ru: 'Он был эвакуированным во время Второй мировой войны.' }
    ],
    []
  ),

  createRichWord('c1_exorbitant', 'Exorbitant', '/ɪɡˈzɔː.bɪ.tənt/', 'игзобитент', 'Чрезмерный / Грабительский (о цене)', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Намного выше, чем разумно или доступно (обычно о ценах).',
    '- Цена: "Exorbitant price" (Заоблачная цена)\n- Аренда: "Exorbitant rent" (Грабительская арендная плата)\n- Расходы: "Exorbitant cost" (Чрезмерная стоимость)',
    [
      { en: 'They charge exorbitant rates for phone calls.', ru: 'Они берут грабительские тарифы за телефонные звонки.' },
      { en: 'The hotel prices are exorbitant in summer.', ru: 'Цены в отеле летом заоблачные.' },
      { en: 'I refuse to pay such exorbitant fees.', ru: 'Я отказываюсь платить такие чрезмерные сборы.' },
      { en: 'It is an exorbitant amount of money for a shirt.', ru: 'Это чрезмерная сумма денег за рубашку.' }
    ],
    []
  ),

  createRichWord('c1_expedite', 'Expedite', '/ˈek.spə.daɪt/', 'экспэдайт', 'Ускорять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сделать так, чтобы процесс происходил быстрее.',
    '- Процесс: "Expedite the process" (Ускорить процесс)\n- Доставка: "Expedite delivery" (Ускорить доставку)\n- Заказ: "Expedite an order" (Ускорить выполнение заказа)',
    [
      { en: 'We are trying to expedite the shipping process.', ru: 'Мы пытаемся ускорить процесс доставки.' },
      { en: 'Please do what you can to expedite my application.', ru: 'Пожалуйста, сделайте все возможное, чтобы ускорить рассмотрение моей заявки.' },
      { en: 'Technology helps expedite data processing.', ru: 'Технологии помогают ускорить обработку данных.' },
      { en: 'The manager promised to expedite the repairs.', ru: 'Менеджер пообещал ускорить ремонт.' }
    ],
    []
  ),

  createRichWord('c1_expo', 'Expo', '/ˈek.spəʊ/', 'экспо', 'Экспо / Выставка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Крупная международная выставка (сокращение от exposition).',
    '- Событие: "World Expo" (Всемирная выставка)\n- Тема: "Technology expo" (Технологическая выставка)\n- Место: "At the expo" (На выставке)',
    [
      { en: 'The World Expo will be held in Osaka.', ru: 'Всемирная выставка пройдет в Осаке.' },
      { en: 'We visited a computer expo last week.', ru: 'Мы посетили компьютерную выставку на прошлой неделе.' },
      { en: 'Companies showcase new products at the expo.', ru: 'Компании демонстрируют новые продукты на выставке.' },
      { en: 'Are you going to the job expo?', ru: 'Ты идешь на ярмарку вакансий?' }
    ],
    []
  ),

  createRichWord('c1_feline', 'Feline', '/ˈfiː.laɪn/', 'филайн', 'Кошачий', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к кошкам или похожий на кошку (грациозный, скрытный).',
    '- Животное: "Feline species" (Виды кошачьих)\n- Движение: "Feline grace" (Кошачья грация)\n- Внешность: "Feline features" (Кошачьи черты)',
    [
      { en: 'The lion is a member of the feline family.', ru: 'Лев — член семейства кошачьих.' },
      { en: 'She moved with feline grace.', ru: 'Она двигалась с кошачьей грацией.' },
      { en: 'The virus affects the feline population.', ru: 'Вирус поражает популяцию кошек.' },
      { en: 'He has almost feline agility.', ru: 'У него почти кошачья ловкость.' }
    ],
    [
      { meaning: "A cat (noun, formal)", translation: "Представитель кошачьих", example: { en: "The zoo has many large felines.", ru: "В зоопарке много крупных кошачьих." } }
    ]
  ),

  createRichWord('c1_fennel', 'Fennel', '/ˈfen.əl/', 'фенэл', 'Фенхель', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Растение с запахом аниса, используемое в кулинарии.',
    '- Еда: "Fennel seeds" (Семена фенхеля)\n- Овощ: "Fennel bulb" (Луковица фенхеля)\n- Чай: "Fennel tea" (Чай с фенхелем)',
    [
      { en: 'I added some fennel to the salad.', ru: 'Я добавил немного фенхеля в салат.' },
      { en: 'Fennel seeds are used as a spice.', ru: 'Семена фенхеля используются как специя.' },
      { en: 'The soup has a distinct fennel flavour.', ru: 'У супа отчетливый вкус фенхеля.' },
      { en: 'Roast pork goes well with fennel.', ru: 'Жареная свинина хорошо сочетается с фенхелем.' }
    ],
    []
  ),

  createRichWord('c1_fete', 'Fete', '/feɪt/', 'фейт', 'Праздник / Чествовать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Праздник на открытом воздухе (ярмарка) с играми (сущ.); или публично чествовать кого-то (гл.).',
    '- Событие: "Summer fete" (Летний праздник)\n- Школа: "School fete" (Школьная ярмарка)\n- Глагол: "Feted as a hero" (Чествуемый как герой)',
    [
      { en: 'We are organizing a village fete.', ru: 'Мы организуем деревенский праздник.' },
      { en: 'The band was feted all over Europe.', ru: 'Группу чествовали по всей Европе.' },
      { en: 'I won a cake at the school fete.', ru: 'Я выиграл торт на школьной ярмарке.' },
      { en: 'The winning team was feted by the town.', ru: 'Город чествовал победившую команду.' }
    ],
    []
  ),

  createRichWord('c1_figurine', 'Figurine', '/ˌfɪɡ.əˈriːn/', 'фигэрин', 'Статуэтка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Маленькая декоративная статуя человека или животного.',
    '- Материал: "Porcelain figurine" (Фарфоровая статуэтка)\n- Коллекция: "Collect figurines" (Коллекционировать статуэтки)\n- Декор: "Glass figurine" (Стеклянная фигурка)',
    [
      { en: 'She collects porcelain figurines.', ru: 'Она коллекционирует фарфоровые статуэтки.' },
      { en: 'A small figurine stood on the mantelpiece.', ru: 'На каминной полке стояла маленькая статуэтка.' },
      { en: 'The figurine depicts a dancing girl.', ru: 'Статуэтка изображает танцующую девушку.' },
      { en: 'Be careful, that glass figurine is fragile.', ru: 'Осторожно, эта стеклянная фигурка хрупкая.' }
    ],
    []
  ),

  createRichWord('c1_flammable', 'Flammable', '/ˈflæm.ə.bəl/', 'флэмабл', 'Легковоспламеняющийся', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Легко загорающийся (синоним inflammable).',
    '- Безопасность: "Highly flammable" (Легковоспламеняющийся)\n- Материал: "Flammable liquid" (Горячая жидкость)\n- Знак: "Caution: Flammable" (Осторожно: огнеопасно)',
    [
      { en: 'Keep flammable materials away from fire.', ru: 'Держите легковоспламеняющиеся материалы подальше от огня.' },
      { en: 'This fabric is highly flammable.', ru: 'Эта ткань легко воспламеняется.' },
      { en: 'Petrol is a flammable liquid.', ru: 'Бензин — это горючая жидкость.' },
      { en: 'Do not smoke near flammable gas.', ru: 'Не курите рядом с горючим газом.' }
    ],
    []
  ),

  createRichWord('c1_fluoride', 'Fluoride', '/ˈflʊə.raɪd/', 'флуэрайд', 'Фтор (фторид)', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Химическое вещество, добавляемое в зубную пасту или воду для защиты зубов.',
    '- Зубы: "Fluoride toothpaste" (Зубная паста с фтором)\n- Вода: "Fluoride in water" (Фтор в воде)\n- Здоровье: "Fluoride treatment" (Обработка фтором)',
    [
      { en: 'Most toothpaste contains fluoride.', ru: 'Большинство зубных паст содержат фтор.' },
      { en: 'Fluoride helps prevent tooth decay.', ru: 'Фтор помогает предотвратить кариес.' },
      { en: 'Some cities add fluoride to drinking water.', ru: 'Некоторые города добавляют фтор в питьевую воду.' },
      { en: 'The dentist applied a fluoride varnish.', ru: 'Стоматолог нанес фторлак.' }
    ],
    []
  ),

  createRichWord('c1_fowl', 'Fowl', '/faʊl/', 'фаул', 'Птица (домашняя или дикая)', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Птицы, которых едят или разводят (курицы, утки); дичь.',
    '- Ферма: "Keep fowl" (Держать птицу)\n- Еда: "Fish and fowl" (Рыба и птица)\n- Охота: "Wild fowl" (Дичь)',
    [
      { en: 'They keep chickens and other fowl on the farm.', ru: 'Они держат кур и другую птицу на ферме.' },
      { en: 'The menu includes fish, flesh, and fowl.', ru: 'Меню включает рыбу, мясо и птицу.' },
      { en: 'Guinea fowl is delicious roasted.', ru: 'Цесарка вкусна в жареном виде.' },
      { en: 'Diseases can spread among wild fowl.', ru: 'Болезни могут распространяться среди диких птиц.' }
    ],
    []
  ),

  createRichWord('c1_fraternal', 'Fraternal', '/frəˈtɜː.nəl/', 'фрэтёнэл', 'Братский', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к братьям или братству; дружеский.',
    '- Отношения: "Fraternal love" (Братская любовь)\n- Организация: "Fraternal organization" (Братство)\n- Близнецы: "Fraternal twins" (Разнояйцевые близнецы)',
    [
      { en: 'They greeted each other with a fraternal hug.', ru: 'Они приветствовали друг друга братским объятием.' },
      { en: 'He belongs to a fraternal society.', ru: 'Он принадлежит к братскому обществу.' },
      { en: 'Fraternal twins do not look identical.', ru: 'Разнояйцевые близнецы не выглядят одинаково.' },
      { en: 'There was a spirit of fraternal cooperation.', ru: 'Царил дух братского сотрудничества.' }
    ],
    []
  ),

];

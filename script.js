// --- Translations ---
const translations = {
    'ru': {
        pageTitle: 'ComUnity - Дорожная карта',
        appName: 'ComUnity',
        navAbout: 'О проекте',
        navRoadmap: 'Дорожная карта',
        navTechStack: 'Стек',
        navContact: 'Контакты',
        toggleTheme: 'Сменить тему',
        heroTitle: 'ComUnity: Объединяя Мир Голосом',
        heroSubtitle: 'Революционное приложение, стирающее языковые барьеры и упрощающее коммуникацию. Перевод в реальном времени вашим голосом, агрегация аккаунтов и многое другое.',
        heroButton: 'Узнать больше',
        aboutTitle: 'О Проекте и Его Возможностях',
        aboutKeyFeaturesTitle: 'Ключевые Функции и Преимущества',
        aboutFeature1Title: 'Мгновенный перевод и озвучивание голосом пользователя',
        aboutFeature1IdeaTitle: 'Идея:',
        aboutFeature1Idea: 'Фантастическая. Возможность общаться с любым человеком на земле не парясь о знании языка! Мало того ИИ переведённый текст может моментально озвучивать - а значит задержка в переводе будет минимальная и будет сокращаться с развитием устройств и самого ИИ! А это значит что язык не станет помехой! Общаясь с человеком находящимся на другом конце земли и разговаривающем на совсем другом языке (японский например) - будет происходить как будто по телефону разговаривают два японца или два русскоговорящих (если я это слышу)!',
        aboutFeature1TechTitle: 'Техническая реализация:',
        aboutFeature1Tech: 'Это самая сложная часть. Современные ИИ для перевода (как Google Translate, DeepL) и синтеза речи (как ElevenLabs, Resemble AI) уже очень продвинуты. Однако, достижение *мгновенной* задержки и *идеального* клонирования тембра в реальном времени для двустороннего разговора – это серьезный вызов. Потребуются огромные вычислительные мощности (либо на устройстве, либо в облаке с минимальной задержкой) и очень продвинутые алгоритмы.',
        aboutFeature1AdvantagesTitle: 'Преимущества:',
        aboutFeature1Advantages: 'Устранение языковых барьеров, естественность общения, повышение комфорта.',
        aboutFeature2Title: 'Агрегация нескольких номеров/аккаунтов в один профиль',
        aboutFeature2IdeaTitle: 'Идея:',
        aboutFeature2Idea: 'Очень практично. Многие люди используют несколько SIM-карт или аккаунтов для разных целей (например, личный и рабочий номер). Объединение их под одним идентификатором с возможностью настройки приоритетов – отличное решение. Все эти номера соединяются в этом приложении в один аккаунт и высвечивается при звонке как один человек.',
        aboutFeature2ColorCodingTitle: 'Цветовая кодировка важности звонка:',
        aboutFeature2ColorCoding: 'Интуитивно понятный и полезный UX-элемент. Например, если звонить с определённого номера - по важности главного (срочного) - при звонке вы будете видеть например отображение имени(клички) звонящего - красным цветом(alert) - или когда обычный звонок - будет отображаться зелёным! А номера, которые настроены как не важные(не обязательные, не срочные) - будут идти на экран телефона синим (холодным) цветом! Это позволяет быстро оценить срочность звонка, не беря трубку.',
        aboutFeature2AdvantagesTitle: 'Преимущества:',
        aboutFeature2Advantages: 'Удобство управления контактами и звонками, повышение продуктивности, ясное понимание контекста звонка. Пользователи будут заводить себе несколько номеров.',
        aboutFeature2QuestionsTitle: 'Вопросы реализации:',
        aboutFeature2Questions: 'Как будет реализована привязка нескольких физических номеров? Будет ли это работать через VoIP-составляющую приложения или оно будет как-то перехватывать и агрегировать информацию о звонках на уровне ОС (что может быть сложно из-за ограничений платформ)?',
        aboutFeature3Title: 'Кнопка "Подружить" (моментальное добавление контакта)',
        aboutFeature3IdeaTitle: 'Идея:',
        aboutFeature3Idea: 'Отличный способ быстро обменяться контактами, особенно в незнакомой среде или при языковом барьере. Например, если вы приехали в другую страну и хотите что-то спросить у прохожего, а вы не знаете языка - с помощью мобильного устройства и нашего приложения - вы сможете моментально задать любой вопрос. Аналогия с NFC для платежей или QR-кодами для обмена данными.',
        aboutFeature3ProcessTitle: 'Процесс:',
        aboutFeature3Process: 'После нажатия кнопки "подружить" - если у человека уже установлено наше приложение - синхронизация происходит моментально. Если у пользователя нет приложения, к нему сразу придёт сообщение о предложении установить его – стандартная и правильная практика для роста пользовательской базы.',
        aboutFeature3AdvantagesTitle: 'Преимущества:',
        aboutFeature3Advantages: 'Упрощение нетворкинга, удобство для путешественников, быстрое начало общения на одном языке (каждый слышит собеседника на своем).',
        aboutFeature4Title: 'Идентификация по слепку голоса для незнакомых номеров',
        aboutFeature4IdeaTitle: 'Идея:',
        aboutFeature4Idea: 'Инновационно. Если Вам кто-то звонит с незнакомого номера - при поднятии трубки в базу заносится сразу новый слепок голоса, а если этот слепок уже был в базе - например если вы уже общались с этим человеком (существующий контакт) и его уже подписали - то новый (не знакомый) номер автоматически исправляется на подпись в момент когда произносятся звук голоса (идентифицируется слепок голоса с аккаунтом).',
        aboutFeature4TechTitle: 'Техническая реализация:',
        aboutFeature4Tech: 'Требует создания и поддержки базы голосовых слепков. Необходимо продумать вопросы приватности и точности распознавания (голос может меняться из-за болезни, шума и т.д.).',
        aboutFeature4AdvantagesTitle: 'Преимущества:',
        aboutFeature4Advantages: 'Улучшенная идентификация звонящего, даже если номер новый или скрыт (если это технически возможно обойти для скрытых номеров).',
        aboutFeature4EthicsTitle: 'Этические моменты и приватность:',
        aboutFeature4Ethics: 'Сбор и хранение голосовых слепков – очень чувствительная тема. Необходимо будет четко прописать политику конфиденциальности и получить согласие пользователей. Как быть со звонками от людей, которые не давали согласия на создание их голосового слепка?',
        aboutAdditionalConsiderationsTitle: 'Дополнительные Соображения',
        aboutConsideration1Title: 'Мобильные гарнитуры:',
        aboutConsideration1Desc: 'Действительно, использование гарнитур сделает такое приложение еще более удобным, освобождая руки и позволяя вести естественный диалог.',
        aboutConsideration2Title: 'Дизайн логотипа и бренда:',
        aboutConsideration2Desc: 'Идея использовать три цвета (синий, красный, зеленый) для логотипа, отражающие состояния/приоритеты – хорошая и логичная.',
        aboutConsideration3Title: 'Потенциал стать монополистом:',
        aboutConsideration3Desc: 'Да, если такое приложение будет реализовано на высоком уровне, оно действительно может изменить правила игры на рынке коммуникационных приложений. Оно объединяет в себе функции переводчика, мессенджера, умной телефонной книги и системы управления контактами.',
        aboutConsideration3RiskTitle: 'Опасность монополизма:',
        aboutConsideration3RiskDesc: 'С одной стороны, это может привести к улучшению стандартов, с другой – к отсутствию конкуренции, повышению цен (если будет платная модель) и потенциальным злоупотреблениям данными. Такое приложение может стать опасным, потому что вытеснит всё остальное.',
        aboutChallengesTitle: 'Потенциальные Вызовы и Риски',
        challenge1Title: 'Техническая сложность:',
        challenge1Desc: 'Особенно в части мгновенного перевода с клонированием голоса в реальном времени.',
        challenge2Title: 'Затраты на разработку и поддержку:',
        challenge2Desc: 'ИИ-технологии, облачная инфраструктура, постоянные обновления – все это требует значительных инвестиций.',
        challenge3Title: 'Приватность и безопасность данных:',
        challenge3Desc: 'Сбор голосовых слепков, агрегация номеров – все это требует высочайшего уровня защиты данных и прозрачной политики конфиденциальности. GDPR и другие регуляции будут предъявлять строгие требования.',
        challenge4Title: 'Зависимость от качества интернет-соединения:',
        challenge4Desc: 'Для облачных вычислений (перевод, синтез речи) потребуется стабильный и быстрый интернет.',
        challenge5Title: 'Батарея устройства:',
        challenge5Desc: 'Активное использование микрофона, динамика, ИИ-обработки и сетевого соединения может быстро разряжать батарею мобильного устройства.',
        challenge6Title: 'Принятие пользователями:',
        challenge6Desc: 'Несмотря на все преимущества, пользователей нужно будет убедить установить еще одно коммуникационное приложение и доверить ему свои данные. "Кнопка подружить" может помочь с вирусным распространением.',
        challenge7Title: 'Интеграция с ОС:',
        challenge7Desc: 'Глубокая интеграция с телефонными функциями (перехват звонков, управление номерами) может быть ограничена операционными системами iOS и Android.',
        aboutSummaryNextStepsTitle: 'Итог и Дальнейшие Шаги',
        aboutSummaryTitle: 'Итог',
        aboutSummaryText: 'Ваша идея обладает огромным потенциалом и затрагивает реальные потребности пользователей в глобализированном мире. Ключевые фишки – перевод с сохранением тембра и умная агрегация аккаунтов – очень привлекательны.',
        aboutNextStepsTitle: 'Что дальше?',
        aboutNextStep1Title: 'Исследование рынка:',
        aboutNextStep1Desc: 'Более детально изучить существующие решения, их сильные и слабые стороны.',
        aboutNextStep2Title: 'Технико-экономическое обоснование:',
        aboutNextStep2Desc: 'Оценить сложность и стоимость разработки ключевых функций.',
        aboutNextStep3Title: 'MVP (Минимально жизнеспособный продукт):',
        aboutNextStep3Desc: 'Определить, какие функции являются абсолютно необходимыми для первой версии, чтобы проверить гипотезу и собрать обратную связь. Возможно, начать с одной ключевой функции (например, перевод с клонированием голоса для аудиосообщений, а не звонков в реальном времени) и постепенно добавлять остальные.',
        aboutNextStep4Title: 'Вопросы приватности:',
        aboutNextStep4Desc: 'С самого начала продумать архитектуру с учетом максимальной защиты данных.',
        roadmapTitle: 'Дорожная Карта Проекта',
        roadmapStage1Title: 'Этап 1: Концепция и Планирование',
        roadmapStage1Date: 'Q3 2025 - Q4 2025',
        roadmapStage1Item1: 'Детальная проработка концепции и пользовательских сценариев.',
        roadmapStage1Item2: 'Анализ рынка, конкурентов и целевой аудитории.',
        roadmapStage1Item3: 'Формирование технических требований и спецификаций.',
        roadmapStage1Item4: 'Подбор команды и определение методологии разработки (Agile).',
        roadmapStage1Item5: 'Планирование архитектуры с учетом безопасности и масштабируемости.',
        roadmapStage2Title: 'Этап 2: Дизайн UI/UX и Прототипирование',
        roadmapStage2Date: 'Q1 2026 - Q2 2026',
        roadmapStage2Item1: 'Разработка дизайна пользовательского интерфейса (UI).',
        roadmapStage2Item2: 'Проектирование пользовательского опыта (UX).',
        roadmapStage2Item3: 'Создание интерактивных прототипов для мобильных и десктопных платформ.',
        roadmapStage2Item4: 'Сбор обратной связи по прототипам от фокус-групп.',
        roadmapStage3Title: 'Этап 3: Разработка MVP (Минимально Жизнеспособного Продукта)',
        roadmapStage3Date: 'Q2 2026 - Q4 2026',
        roadmapStage3Item1: 'Разработка бэкенда: API, базы данных, ИИ-модули (перевод, голос).',
        roadmapStage3Item2: 'Разработка мобильных приложений (iOS, Android).',
        roadmapStage3Item3: 'Разработка десктопного приложения.',
        roadmapStage3Item4: 'Интеграция ключевых функций: перевод, клонирование голоса (базовое), агрегация аккаунтов.',
        roadmapStage3Item5: 'Настройка инфраструктуры (серверы, облачные сервисы).',
        roadmapStage4Title: 'Этап 4: Тестирование и Итерации',
        roadmapStage4Date: 'Q1 2027',
        roadmapStage4Item1: 'Альфа-тестирование (внутреннее).',
        roadmapStage4Item2: 'Бета-тестирование (ограниченная группа пользователей).',
        roadmapStage4Item3: 'Сбор обратной связи, исправление ошибок, оптимизация производительности.',
        roadmapStage4Item4: 'Тестирование безопасности.',
        roadmapStage5Title: 'Этап 5: Запуск',
        roadmapStage5Date: 'Q2 2027',
        roadmapStage5Item1: 'Публичный запуск мобильных и десктопного приложений.',
        roadmapStage5Item2: 'Маркетинговая кампания и PR.',
        roadmapStage5Item3: 'Настройка системы поддержки пользователей.',
        roadmapStage6Title: 'Этап 6: Пост-релизное Развитие и Рост',
        roadmapStage6Date: 'Постоянно',
        roadmapStage6Item1: 'Сбор аналитики и обратной связи от пользователей.',
        roadmapStage6Item2: 'Разработка новых функций (например, улучшенное клонирование голоса, групповые звонки с переводом, интеграции).',
        roadmapStage6Item3: 'Расширение на новые рынки и языки.',
        roadmapStage6Item4: 'Регулярные обновления и улучшения производительности/безопасности.',
        techStackTitle: 'Предлагаемый Технологический Стек',
        techStackFrontendTitle: 'Frontend (Клиентская часть)',
        techStackFrontendItem1: '<strong>Мобильные приложения:</strong> Swift/Objective-C (iOS), Kotlin/Java (Android), или кросс-платформенные фреймворки как React Native / Flutter.',
        techStackFrontendItem2: '<strong>Десктопное приложение:</strong> Electron, Tauri, или нативные технологии (Swift/Objective-C для macOS, C#/.NET для Windows).',
        techStackFrontendItem3: '<strong>Веб-технологии (для сайта/веб-версии):</strong> React, Vue.js, или Angular.',
        techStackBackendTitle: 'Backend (Серверная часть)',
        techStackBackendItem1: '<strong>Языки программирования:</strong> Python (Django/Flask), Node.js (Express), Go, Java (Spring).',
        techStackBackendItem2: '<strong>Базы данных:</strong> PostgreSQL, MongoDB, Cassandra (для масштабируемости).',
        techStackBackendItem3: '<strong>Кэширование:</strong> Redis, Memcached.',
        techStackBackendItem4: '<strong>Очереди сообщений:</strong> RabbitMQ, Kafka (для асинхронных задач).',
        techStackAiMlTitle: 'ИИ и Машинное обучение',
        techStackAiMlItem1: '<strong>Перевод:</strong> Google Cloud Translation API, DeepL API, OpenNMT, или собственные модели.',
        techStackAiMlItem2: '<strong>Синтез и клонирование речи:</strong> Google Text-to-Speech, ElevenLabs API, Resemble AI, Lyrebird (ныне Descript), или разработка собственных моделей на базе Tacotron, WaveNet.',
        techStackAiMlItem3: '<strong>Распознавание речи:</strong> Google Speech-to-Text, Wit.ai, CMU Sphinx.',
        techStackAiMlItem4: '<strong>Фреймворки:</strong> TensorFlow, PyTorch.',
        techStackInfraTitle: 'Инфраструктура и DevOps',
        techStackInfraItem1: '<strong>Облачные платформы:</strong> AWS, Google Cloud Platform, Microsoft Azure.',
        techStackInfraItem2: '<strong>Контейнеризация:</strong> Docker, Kubernetes.',
        techStackInfraItem3: '<strong>CI/CD:</strong> Jenkins, GitLab CI, GitHub Actions.',
        techStackInfraItem4: '<strong>Мониторинг:</strong> Prometheus, Grafana, ELK Stack.',
        techStackRealtimeTitle: 'Коммуникации в реальном времени',
        techStackRealtimeItem1: '<strong>Протоколы:</strong> WebRTC (для аудио/видео звонков), SIP.',
        techStackRealtimeItem2: '<strong>Сигнализация:</strong> WebSocket.',
        techStackSecurityTitle: 'Безопасность',
        techStackSecurityItem1: '<strong>Шифрование:</strong> End-to-end encryption (E2EE) для сообщений и звонков.',
        techStackSecurityItem2: '<strong>Аутентификация:</strong> OAuth 2.0, OpenID Connect.',
        techStackSecurityItem3: '<strong>Защита данных:</strong> Соответствие GDPR, CCPA и другим регуляциям.',
        contactTitle: 'Заинтересовались ComUnity?',
        contactSubtitle: 'Мы усердно работаем над созданием будущего коммуникаций. Подпишитесь, чтобы получать обновления о нашем прогрессе и дате запуска!',
        contactEmailPlaceholder: 'Ваш email',
        contactButton: 'Подписаться',
        contactPrivacy: 'Мы уважаем вашу конфиденциальность. Никакого спама.',
        appNameFooter: 'ComUnity',
        footerRights: 'Все права защищены.',
        footerSlogan: 'Создаем будущее без языковых барьеров.'
    },
    'en': { 
        pageTitle: 'ComUnity - Roadmap',
        appName: 'ComUnity',
        navAbout: 'About',
        navRoadmap: 'Roadmap',
        navTechStack: 'Tech Stack',
        navContact: 'Contact',
        toggleTheme: 'Toggle Theme',
        heroTitle: 'ComUnity: Uniting the World with Voice',
        heroSubtitle: 'A revolutionary application erasing language barriers and simplifying communication. Real-time translation in your voice, account aggregation, and much more.',
        heroButton: 'Learn more',
        aboutTitle: 'About the Project and Its Capabilities',
        aboutKeyFeaturesTitle: 'Key Features and Advantages',
        aboutFeature1Title: 'Instant translation and user voice cloning',
        aboutFeature1IdeaTitle: 'Idea:',
        aboutFeature1Idea: 'Fantastic. The ability to communicate with anyone on Earth without worrying about language proficiency! Moreover, AI can instantly voice the translated text, meaning translation delays will be minimal and will decrease with device and AI development! This means language will no longer be a barrier! Communicating with someone on the other side of the world speaking a completely different language (like Japanese) will feel like two Japanese speakers or two Russian speakers talking on the phone (if I hear it)!',
        aboutFeature1TechTitle: 'Technical Implementation:',
        aboutFeature1Tech: 'This is the most challenging part. Modern AI for translation (like Google Translate, DeepL) and speech synthesis (like ElevenLabs, Resemble AI) are already very advanced. However, achieving *instant* latency and *perfect* real-time timbre cloning for a two-way conversation is a serious challenge. It will require enormous computational power (either on-device or in the cloud with minimal latency) and very advanced algorithms.',
        aboutFeature1AdvantagesTitle: 'Advantages:',
        aboutFeature1Advantages: 'Elimination of language barriers, natural communication, increased comfort.',
        aboutFeature2Title: 'Aggregation of multiple numbers/accounts into one profile',
        aboutFeature2IdeaTitle: 'Idea:',
        aboutFeature2Idea: 'Highly practical. Many people use multiple SIM cards or accounts for different purposes (e.g., personal and work numbers). Combining them under one identifier with priority settings is an excellent solution. All these numbers are combined in this application into one account and are displayed as one person during a call.',
        aboutFeature2ColorCodingTitle: 'Call Importance Color Coding:',
        aboutFeature2ColorCoding: 'An intuitive and useful UX element. For example, if a call comes from a number designated as high priority (urgent), the caller\'s name/nickname might be displayed in red (alert). A regular call could be green. Numbers set as unimportant (non-essential, non-urgent) would appear in blue (cool color) on the phone screen! This allows for a quick assessment of the call\'s urgency without picking up.',
        aboutFeature2AdvantagesTitle: 'Advantages:',
        aboutFeature2Advantages: 'Convenient contact and call management, increased productivity, clear understanding of call context. Users will be encouraged to have multiple numbers.',
        aboutFeature2QuestionsTitle: 'Implementation Questions:',
        aboutFeature2Questions: 'How will the linking of multiple physical numbers be implemented? Will it work through the application\'s VoIP component, or will it somehow intercept and aggregate call information at the OS level (which can be challenging due to platform restrictions)?',
        aboutFeature3Title: '"Befriend" Button (Instant Contact Addition)',
        aboutFeature3IdeaTitle: 'Idea:',
        aboutFeature3Idea: 'An excellent way to quickly exchange contacts, especially in an unfamiliar environment or with a language barrier. For instance, if you arrive in another country and want to ask a passerby something but don\'t know the language, you can instantly ask any question using our app on your mobile device. Analogous to NFC for payments or QR codes for data exchange.',
        aboutFeature3ProcessTitle: 'Process:',
        aboutFeature3Process: 'After pressing the "befriend" button, if the person already has our application installed, synchronization occurs instantly. If the user doesn\'t have the app, they will immediately receive a message suggesting they install it – a standard and effective practice for user base growth.',
        aboutFeature3AdvantagesTitle: 'Advantages:',
        aboutFeature3Advantages: 'Simplified networking, convenience for travelers, quick start to communication in one language (each person hears the other in their own language).',
        aboutFeature4Title: 'Voiceprint Identification for Unknown Numbers',
        aboutFeature4IdeaTitle: 'Idea:',
        aboutFeature4Idea: 'Innovative. If someone calls you from an unknown number, a new voiceprint is immediately added to the database when the call is answered. If this voiceprint was already in the database (e.g., you\'ve communicated with this person before and saved them as a contact), the new (unknown) number is automatically updated with the saved name moment the voice is heard (the voiceprint is identified with the account).',
        aboutFeature4TechTitle: 'Technical Implementation:',
        aboutFeature4Tech: 'Requires the creation and maintenance of a voiceprint database. Privacy and recognition accuracy (voice can change due to illness, noise, etc.) must be considered.',
        aboutFeature4AdvantagesTitle: 'Advantages:',
        aboutFeature4Advantages: 'Improved caller identification, even if the number is new or hidden (if technically possible to bypass for hidden numbers).',
        aboutFeature4EthicsTitle: 'Ethical Aspects and Privacy:',
        aboutFeature4Ethics: 'The collection and storage of voiceprints is a very sensitive topic. A clear privacy policy and user consent will be essential. How to handle calls from people who have not consented to the creation of their voiceprint?',
        aboutAdditionalConsiderationsTitle: 'Additional Considerations',
        aboutConsideration1Title: 'Mobile Headsets:',
        aboutConsideration1Desc: 'Indeed, using headsets will make such an application even more convenient, freeing up hands and allowing for a natural dialogue.',
        aboutConsideration2Title: 'Logo and Brand Design:',
        aboutConsideration2Desc: 'The idea of using three colors (blue, red, green) for the logo, reflecting states/priorities, is good and logical.',
        aboutConsideration3Title: 'Potential to Become a Monopolist:',
        aboutConsideration3Desc: 'Yes, if such an application is implemented to a high standard, it could genuinely change the game in the communication app market. It combines the functions of a translator, messenger, smart phonebook, and contact management system.',
        aboutConsideration3RiskTitle: 'Danger of Monopoly:',
        aboutConsideration3RiskDesc: 'On one hand, it could lead to improved standards; on the other, to a lack of competition, price increases (if there\'s a paid model), and potential data misuse. Such an application could become dangerous because it might push out everything else.',
        aboutChallengesTitle: 'Potential Challenges and Risks',
        challenge1Title: 'Technical Complexity:',
        challenge1Desc: 'Especially regarding instant translation with real-time voice cloning.',
        challenge2Title: 'Development and Maintenance Costs:',
        challenge2Desc: 'AI technologies, cloud infrastructure, constant updates – all require significant investment.',
        challenge3Title: 'Data Privacy and Security:',
        challenge3Desc: 'Collecting voiceprints, aggregating numbers – all demand the highest level of data protection and a transparent privacy policy. GDPR and other regulations will impose strict requirements.',
        challenge4Title: 'Dependence on Internet Connection Quality:',
        challenge4Desc: 'Cloud computations (translation, speech synthesis) will require a stable and fast internet connection.',
        challenge5Title: 'Device Battery:',
        challenge5Desc: 'Active use of the microphone, speaker, AI processing, and network connection can quickly drain a mobile device\'s battery.',
        challenge6Title: 'User Adoption:',
        challenge6Desc: 'Despite all advantages, users will need to be convinced to install another communication app and entrust it with their data. The "Befriend" button can help with viral spread.',
        challenge7Title: 'OS Integration:',
        challenge7Desc: 'Deep integration with phone functions (call interception, number management) may be restricted by iOS and Android operating systems.',
        aboutSummaryNextStepsTitle: 'Summary and Next Steps',
        aboutSummaryTitle: 'Summary',
        aboutSummaryText: 'Your idea has enormous potential and addresses real user needs in a globalized world. Key features – timbre-preserving translation and smart account aggregation – are very attractive.',
        aboutNextStepsTitle: 'What\'s Next?',
        aboutNextStep1Title: 'Market Research:',
        aboutNextStep1Desc: 'Conduct a more detailed study of existing solutions, their strengths, and weaknesses.',
        aboutNextStep2Title: 'Technical and Economic Feasibility Study:',
        aboutNextStep2Desc: 'Assess the complexity and cost of developing key features.',
        aboutNextStep3Title: 'MVP (Minimum Viable Product):',
        aboutNextStep3Desc: 'Determine which functions are absolutely necessary for the first version to test the hypothesis and gather feedback. Perhaps start with one key function (e.g., voice-cloned translation for audio messages rather than real-time calls) and gradually add others.',
        aboutNextStep4Title: 'Privacy Issues:',
        aboutNextStep4Desc: 'Design the architecture with maximum data protection in mind from the very beginning.',
        roadmapTitle: 'Project Roadmap',
        roadmapStage1Title: 'Stage 1: Concept & Planning',
        roadmapStage1Date: 'Q3 2025 - Q4 2025',
        roadmapStage1Item1: 'Detailed elaboration of the concept and user scenarios.',
        roadmapStage1Item2: 'Market, competitor, and target audience analysis.',
        roadmapStage1Item3: 'Formation of technical requirements and specifications.',
        roadmapStage1Item4: 'Team recruitment and definition of development methodology (Agile).',
        roadmapStage1Item5: 'Architecture planning considering security and scalability.',
        roadmapStage2Title: 'Stage 2: UI/UX Design & Prototyping',
        roadmapStage2Date: 'Q1 2026 - Q2 2026',
        roadmapStage2Item1: 'User Interface (UI) design development.',
        roadmapStage2Item2: 'User Experience (UX) design.',
        roadmapStage2Item3: 'Creation of interactive prototypes for mobile and desktop platforms.',
        roadmapStage2Item4: 'Collecting feedback on prototypes from focus groups.',
        roadmapStage3Title: 'Stage 3: MVP (Minimum Viable Product) Development',
        roadmapStage3Date: 'Q2 2026 - Q4 2026',
        roadmapStage3Item1: 'Backend development: API, databases, AI modules (translation, voice).',
        roadmapStage3Item2: 'Mobile application development (iOS, Android).',
        roadmapStage3Item3: 'Desktop application development.',
        roadmapStage3Item4: 'Integration of key features: translation, voice cloning (basic), account aggregation.',
        roadmapStage3Item5: 'Infrastructure setup (servers, cloud services).',
        roadmapStage4Title: 'Stage 4: Testing & Iterations',
        roadmapStage4Date: 'Q1 2027',
        roadmapStage4Item1: 'Alpha testing (internal).',
        roadmapStage4Item2: 'Beta testing (limited user group).',
        roadmapStage4Item3: 'Collecting feedback, bug fixing, performance optimization.',
        roadmapStage4Item4: 'Security testing.',
        roadmapStage5Title: 'Stage 5: Launch',
        roadmapStage5Date: 'Q2 2027',
        roadmapStage5Item1: 'Public launch of mobile and desktop applications.',
        roadmapStage5Item2: 'Marketing campaign and PR.',
        roadmapStage5Item3: 'User support system setup.',
        roadmapStage6Title: 'Stage 6: Post-launch Development & Growth',
        roadmapStage6Date: 'Ongoing',
        roadmapStage6Item1: 'Collecting analytics and user feedback.',
        roadmapStage6Item2: 'Development of new features (e.g., improved voice cloning, group calls with translation, integrations).',
        roadmapStage6Item3: 'Expansion to new markets and languages.',
        roadmapStage6Item4: 'Regular updates and performance/security improvements.',
        techStackTitle: 'Proposed Tech Stack',
        techStackFrontendTitle: 'Frontend',
        techStackFrontendItem1: '<strong>Mobile Apps:</strong> Swift/Objective-C (iOS), Kotlin/Java (Android), or cross-platform frameworks like React Native / Flutter.',
        techStackFrontendItem2: '<strong>Desktop App:</strong> Electron, Tauri, or native technologies (Swift/Objective-C for macOS, C#/.NET for Windows).',
        techStackFrontendItem3: '<strong>Web Technologies (for website/web version):</strong> React, Vue.js, or Angular.',
        techStackBackendTitle: 'Backend',
        techStackBackendItem1: '<strong>Programming Languages:</strong> Python (Django/Flask), Node.js (Express), Go, Java (Spring).',
        techStackBackendItem2: '<strong>Databases:</strong> PostgreSQL, MongoDB, Cassandra (for scalability).',
        techStackBackendItem3: '<strong>Caching:</strong> Redis, Memcached.',
        techStackBackendItem4: '<strong>Message Queues:</strong> RabbitMQ, Kafka (for asynchronous tasks).',
        techStackAiMlTitle: 'AI & Machine Learning',
        techStackAiMlItem1: '<strong>Translation:</strong> Google Cloud Translation API, DeepL API, OpenNMT, or custom models.',
        techStackAiMlItem2: '<strong>Speech Synthesis & Cloning:</strong> Google Text-to-Speech, ElevenLabs API, Resemble AI, Lyrebird (now Descript), or custom models based on Tacotron, WaveNet.',
        techStackAiMlItem3: '<strong>Speech Recognition:</strong> Google Speech-to-Text, Wit.ai, CMU Sphinx.',
        techStackAiMlItem4: '<strong>Frameworks:</strong> TensorFlow, PyTorch.',
        techStackInfraTitle: 'Infrastructure & DevOps',
        techStackInfraItem1: '<strong>Cloud Platforms:</strong> AWS, Google Cloud Platform, Microsoft Azure.',
        techStackInfraItem2: '<strong>Containerization:</strong> Docker, Kubernetes.',
        techStackInfraItem3: '<strong>CI/CD:</strong> Jenkins, GitLab CI, GitHub Actions.',
        techStackInfraItem4: '<strong>Monitoring:</strong> Prometheus, Grafana, ELK Stack.',
        techStackRealtimeTitle: 'Real-time Communications',
        techStackRealtimeItem1: '<strong>Protocols:</strong> WebRTC (for audio/video calls), SIP.',
        techStackRealtimeItem2: '<strong>Signaling:</strong> WebSocket.',
        techStackSecurityTitle: 'Security',
        techStackSecurityItem1: '<strong>Encryption:</strong> End-to-end encryption (E2EE) for messages and calls.',
        techStackSecurityItem2: '<strong>Authentication:</strong> OAuth 2.0, OpenID Connect.',
        techStackSecurityItem3: '<strong>Data Protection:</strong> Compliance with GDPR, CCPA, and other regulations.',
        contactTitle: 'Interested in ComUnity?',
        contactSubtitle: 'We are working hard to create the future of communication. Subscribe to receive updates on our progress and launch date!',
        contactEmailPlaceholder: 'Your email',
        contactButton: 'Subscribe',
        contactPrivacy: 'We respect your privacy. No spam.',
        appNameFooter: 'ComUnity',
        footerRights: 'All rights reserved.',
        footerSlogan: 'Creating a future without language barriers.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher ---
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const themeIcons = document.querySelectorAll('.theme-toggle-btn i'); // Select all theme icons
    let currentTheme = localStorage.getItem('theme') || 'light';

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeIcons.forEach(icon => {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            });
        } else {
            document.documentElement.classList.remove('dark');
            themeIcons.forEach(icon => {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            });
        }
        // Update mobile theme button text
        const mobileThemeButtonSpan = themeToggleMobile ? themeToggleMobile.querySelector('span') : null;
        if (mobileThemeButtonSpan) {
            mobileThemeButtonSpan.textContent = translations[currentLang] ? translations[currentLang].toggleTheme : 'Toggle Theme';
        }
    }
    

    function toggleThemeOnClick() {
        currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    }

    if (themeToggleDesktop) themeToggleDesktop.addEventListener('click', toggleThemeOnClick);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleThemeOnClick);
    

    // --- Language Switcher ---
    const langRuButtonDesktop = document.getElementById('lang-ru-desktop');
    const langEnButtonDesktop = document.getElementById('lang-en-desktop');
    const langRuButtonMobile = document.getElementById('lang-ru-mobile');
    const langEnButtonMobile = document.getElementById('lang-en-mobile');
    let currentLang = localStorage.getItem('lang') || 'ru';

    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                const iconElement = element.querySelector('i.fas:first-child'); 
                let iconHTML = '';
                
                if (iconElement && 
                    (element.tagName === 'LI' || 
                     element.tagName === 'H4' ||
                     (element.tagName === 'DIV' && element.classList.contains('details-card') && element.querySelector('strong[data-lang$="Title"]')) || 
                     (element.tagName === 'STRONG' && (key.endsWith('Title') || key.endsWith('Desc'))) 
                    )
                   ) {
                    iconHTML = `<i class="${iconElement.className}"></i> `; 
                }

                if (element.tagName === 'P' && element.querySelector('strong[data-lang$="Title"]')) {
                    const strongTag = element.querySelector('strong[data-lang$="Title"]');
                    const spanTag = element.querySelector('span[data-lang]');
                    const strongKey = strongTag.getAttribute('data-lang');
                    const spanKey = spanTag.getAttribute('data-lang');

                    if (translations[lang][strongKey]) {
                        strongTag.textContent = translations[lang][strongKey];
                    }
                    if (spanTag && translations[lang][spanKey]) { // Check if spanTag exists
                        spanTag.textContent = translations[lang][spanKey];
                    } else if (spanTag === null && strongTag.nextSibling && strongTag.nextSibling.nodeType === Node.TEXT_NODE) { 
                        // If span is missing but there's text after strong, update it (less robust)
                        // This part is a bit of a hack if span[data-lang] is missing
                        // It assumes the text to translate is directly after the strong tag.
                        // A more robust solution would be to ensure all translatable parts have data-lang attributes.
                        // For now, this will try to update the text content of the parent if the key matches the main element's key.
                        if (translations[lang][key] && element.getAttribute('data-lang') === key) {
                             // This logic might be too broad. Let's refine.
                             // The goal is to update the text part of <p><strong data-lang="X">Text1</strong><span data-lang="Y">Text2</span></p>
                             // If span is missing, we only update the strong tag.
                        }
                    }
                } 
                else if (element.tagName === 'LI' && (element.querySelector('strong[data-lang$="Title"]') || element.querySelector('span[data-lang$="Desc"]'))) {
                    const strongTag = element.querySelector('strong[data-lang$="Title"]');
                    const spanTag = element.querySelector('span[data-lang$="Desc"]');
                    
                    let newHTML = iconHTML;
                    if (strongTag) {
                        const strongKey = strongTag.getAttribute('data-lang');
                        if (translations[lang][strongKey]) {
                            newHTML += `<strong>${translations[lang][strongKey]}</strong> `;
                        }
                    }
                    if (spanTag) {
                        const spanKey = spanTag.getAttribute('data-lang');
                        if (translations[lang][spanKey]) {
                            newHTML += translations[lang][spanKey];
                        }
                    }
                    element.innerHTML = newHTML;
                }
                else {
                    if (key.startsWith('aboutNextStep') || (key.startsWith('techStack') && key.includes('Item')) || (key.startsWith('roadmapStage') && key.includes('Item'))) {
                         element.innerHTML = iconHTML + translations[lang][key];
                    } else {
                         // For title elements like H1, H2, H3, H4, or simple spans, set textContent
                         if (['H1', 'H2', 'H3', 'H4', 'SPAN', 'A', 'BUTTON', 'TITLE'].includes(element.tagName) || (element.tagName === 'P' && !element.querySelector('strong'))) {
                            // If it's the theme toggle button text, handle it specifically
                            if(key === 'toggleTheme' && element.tagName === 'SPAN'){
                                element.textContent = translations[lang][key];
                            } else if (iconElement && element.tagName !== 'TITLE') { // Don't add icon to <title>
                                element.innerHTML = iconHTML + translations[lang][key];
                            } else {
                                element.textContent = translations[lang][key];
                            }
                         } else if (iconHTML && !element.querySelector('i.fas')) {
                            element.textContent = translations[lang][key]; 
                            element.insertAdjacentHTML('afterbegin', iconHTML); 
                         } else {
                            element.textContent = translations[lang][key];
                         }
                    }
                }
            }
        });
        document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
             if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Update active state for language buttons
        [langRuButtonDesktop, langRuButtonMobile].forEach(btn => btn?.classList.toggle('active', lang === 'ru'));
        [langEnButtonDesktop, langEnButtonMobile].forEach(btn => btn?.classList.toggle('active', lang === 'en'));
        
        const heroButton = document.querySelector('[data-lang="heroButton"]');
        if (heroButton && translations[lang] && translations[lang]['heroButton']) {
             heroButton.innerHTML = `${translations[lang]['heroButton']} <i class="fas fa-arrow-down ml-2"></i>`;
        }
        // Update mobile theme button text after language change
        const mobileThemeButtonSpan = themeToggleMobile ? themeToggleMobile.querySelector('span') : null;
        if (mobileThemeButtonSpan) {
             mobileThemeButtonSpan.textContent = translations[currentLang] ? translations[currentLang].toggleTheme : 'Toggle Theme';
        }
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
    }

    if(langRuButtonDesktop) langRuButtonDesktop.addEventListener('click', () => setLanguage('ru'));
    if(langEnButtonDesktop) langEnButtonDesktop.addEventListener('click', () => setLanguage('en'));
    if(langRuButtonMobile) langRuButtonMobile.addEventListener('click', () => { setLanguage('ru'); closeMobileMenu(); });
    if(langEnButtonMobile) langEnButtonMobile.addEventListener('click', () => { setLanguage('en'); closeMobileMenu(); });
    
    // Initial calls
    applyTheme(currentTheme); // Apply theme first
    applyLanguage(currentLang); // Then apply language

    // --- Burger Menu ---
    const burgerButton = document.getElementById('burger-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerIcon = burgerButton ? burgerButton.querySelector('i') : null;

    function openMobileMenu() {
        if (mobileMenu) mobileMenu.classList.remove('hidden');
        // Timeout to allow display:block to take effect before transition
        setTimeout(() => {
            if (mobileMenu) mobileMenu.classList.add('open');
            if (burgerIcon) {
                burgerIcon.classList.remove('fa-bars');
                burgerIcon.classList.add('fa-times');
            }
        }, 10);
    }

    function closeMobileMenu() {
        if (mobileMenu) mobileMenu.classList.remove('open');
        if (burgerIcon) {
            burgerIcon.classList.remove('fa-times');
            burgerIcon.classList.add('fa-bars');
        }
        // Wait for transition to finish before hiding
        setTimeout(() => {
            if (mobileMenu && !mobileMenu.classList.contains('open')) { // Check again in case it was reopened quickly
                 mobileMenu.classList.add('hidden');
            }
        }, 500); // Matches CSS transition duration
    }

    if (burgerButton) {
        burgerButton.addEventListener('click', () => {
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Close mobile menu when a link is clicked
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
    }


    // --- Other JS ---
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Intersection Observer for Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1 
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers: just make elements visible
        animatedElements.forEach(el => {
            el.classList.add('is-visible');
        });
    }
});

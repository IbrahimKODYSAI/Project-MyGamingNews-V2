// == Initial State
const initialState = {
  articles: {
    newsOfTheWeek: [
      {
        id: '8',
        videoId: 'bxFoRCvEjUA',
        image: 'https://a.allegroimg.com/s512/031565/5e9f46d24abc988b39eb94d0af3f/Mortal-Kombat-11-Steam-PC-KLUCZ',
        title: 'Mortal Kombat 11: release date has been leaked',
        resume: 'Kombat 11 et les leaks, c\'est une longue histoire d\'amour. Après le roster du jeu qui a été divulgué en avance...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '9',
        videoId: 'ndl1W4ltcmg',
        image: 'https://hb.imgix.net/4d85628c9dbe4f21bfd3299b3a10b1aa62a21894.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6c61117f1a1b1d56da6c5118618bc2f6',
        title: 'Final Fantasy XIV : "l\'Éveil d\'Eden" arrive aujourd\'hui',
        resume: 'Tout juste deux semaines après la sortie de Final Fantasy XIV : Shadowbringers, Square Enix déploie la première...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '10',
        videoId: 'ndl1W4ltcmg',
        image: 'http://image.jeuxvideo.com/medias-md/156382/1563818741-4350-card.jpg',
        title: 'Wolfenstein  toujours aussi nerveux - E3 2019',
        resume: 'Attendu pour le moi prochain, Wolfenstein Youngblood a dévoilé un nouveau trailer, afin de rappeler l\'ambition...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
      },
      {
        id: '12',
        videoId: 'ndl1W4ltcmg',
        image: 'assets/netflix.jpg',
        title: 'The Witcher: la série Netflix tant attendue se dévoile dans un trailer.',
        resume: 'The Witcher porté par Henry Cavill dans le rôle de Geralt de Riv, l\'adaptation de la série littéraire éponyme...',
        text: 'Portée par Henry Cavill dans le rôle de Geralt de Riv, l\'adaptation de la série littéraire éponyme sera diffusée fin 2019 sur la plateforme de streaming. Comme tous les ans, le Comic-Con de San Diego apporte son lot de trailers de films et séries attendus de pied ferme. Parmi les plus grosses annonces de la 50e édition de cette grand-messe de la pop culture, qui s\'est tenue du 18 au 22 juillet, on trouve la bande-annonce de The Witcher, qui figure parmi les séries les plus attendues de cette fin d\'année. Créée par le géant du streaming Netflix, ce feuilleton est adapté de l\'intrigue de la série littéraire à succès Le Sorcelleur, de l\'auteur polonais Andrzej Sapkowski. Il ne se basera donc pas sur celle des célèbres jeux vidéos développés par le studio CD Projekt depuis 2007, bien que des éléments communs aux deux supports devraient être présents dans la série.. The Witcher se déroule dans un univers fantastico-médiéval dans lequel vivent humains, elfes, sorciers, et autres monstres et créatures en tous genres. L\'acteur britannique Henry Cavill (Man of Steel, Mission Impossible: Fallout) y incarne le héros Geralt de Riv, un chasseur de monstres, ou "sorcelleur", doté de pouvoirs magiques.',
      },
    ],
    news: [
      {
        id: '1',
        videoId: 'TcZyiYOzsSw',
        image: 'assets/img/wow.jpg',
        title: 'World Of Warcraft : Classic',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
        caracQuestions: [
          'Editeur(s) Développeur(s)',
          'Sortie France',
          'Genre(s)',
          'Thème(s)',
          'Classicfication',
        ],
        caracReponses: [
          'Electronic Arts, Resapwn Entertainement',
          '15 novembre 2019',
          'Aventure',
          'Science-Fiction',
          '+16 ans',
        ],
      },
      {
        id: '2',
        videoId: '0GLbwkfhYZk',
        image: 'assets/img/jedi.jpg',
        jacket: 'assets/img/starwars-jacket.jpg',
        title: 'Star Wars : Jedi Fallen Order',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
        caracQuestions: [
          'Editeur(s) Développeur(s)',
          'Sortie France',
          'Genre(s)',
          'Thème(s)',
          'Classicfication',
        ],
        caracReponses: [
          'Electronic Arts, Resapwn Entertainement',
          '15 novembre 2019',
          'Aventure',
          'Science-Fiction',
          '+16 ans',
        ],

      },
      {
        id: '3',
        videoId: 'qIcTM8WXFjk',
        image: 'assets/img/cyber.jpg',
        title: 'Cyberpunk 2077',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
        caracQuestions: [
          'Editeur(s) Développeur(s)',
          'Sortie France',
          'Genre(s)',
          'Thème(s)',
          'Classicfication',
        ],
        caracReponses: [
          'Electronic Arts, Resapwn Entertainement',
          '15 novembre 2019',
          'Aventure',
          'Science-Fiction',
          '+16 ans',
        ],
      },
      {
        id: '4',
        videoId: 'qPNiIeKMHyg',
        image: 'assets/img/last.jpg',
        title: 'The Last of Us Part II',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
        caracQuestions: [
          'Editeur(s) Développeur(s)',
          'Sortie France',
          'Genre(s)',
          'Thème(s)',
          'Classicfication',
        ],
        caracReponses: [
          'Electronic Arts, Resapwn Entertainement',
          '15 novembre 2019',
          'Aventure',
          'Science-Fiction',
          '+16 ans',
        ],
      },
      {
        id: '5',
        videoId: 'Zi8k4KGyW6o',
        image: 'assets/img/watchdog.jpg',
        title: 'Watch Dogs 3 : Legion',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
        caracQuestions: [
          'Editeur(s) Développeur(s)',
          'Sortie France',
          'Genre(s)',
          'Thème(s)',
          'Classicfication',
        ],
        caracReponses: [
          'Electronic Arts, Resapwn Entertainement',
          '15 novembre 2019',
          'Aventure',
          'Science-Fiction',
          '+16 ans',
        ],
      },
      {
        id: '6',
        videoId: 'ENjwexZnLPI',
        image: 'assets/img/death.jpg',
        title: 'Death Stranding',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
        caracQuestions: [
          'Editeur(s) Développeur(s)',
          'Sortie France',
          'Genre(s)',
          'Thème(s)',
          'Classicfication',
        ],
        caracReponses: [
          'Electronic Arts, Resapwn Entertainement',
          '15 novembre 2019',
          'Aventure',
          'Science-Fiction',
          '+16 ans',
        ],
      },
      {
        id: '7',
        image: 'https://static.fnac-static.com/multimedia/Images/FD/Comete/111882/CCP_IMG_ORIGINAL/1447719.jpg',
        title: 'Kingdom Hearts 3 est le jeu le plus vendu de la licence',
        resume: 'Selon NPD, Kingdom Hearts III est devenu le jeu le plus vendu de la licence tous épisodes confondus en l\'espace de quelques mois seulement',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
        caracQuestions: [
          'Editeur(s) Développeur(s)',
          'Sortie France',
          'Genre(s)',
          'Thème(s)',
          'Classicfication',
        ],
        caracReponses: [
          'Electronic Arts, Resapwn Entertainement',
          '15 novembre 2019',
          'Aventure',
          'Science-Fiction',
          '+16 ans',
        ],
      },
      {
        id: '8',
        videoId: 'bxFoRCvEjUA',
        image: 'https://a.allegroimg.com/s512/031565/5e9f46d24abc988b39eb94d0af3f/Mortal-Kombat-11-Steam-PC-KLUCZ',
        title: 'Mortal Kombat 11: release date has been leaked',
        resume: 'Kombat 11 et les leaks, c\'est une longue histoire d\'amour. Après le roster du jeu qui a été divulgué en avance...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
        caracQuestions: [
          'Editeur(s) Développeur(s)',
          'Sortie France',
          'Genre(s)',
          'Thème(s)',
          'Classicfication',
        ],
        caracReponses: [
          'Electronic Arts, Resapwn Entertainement',
          '15 novembre 2019',
          'Aventure',
          'Science-Fiction',
          '+16 ans',
        ],
      },
      {
        id: '9',
        videoId: 'ndl1W4ltcmg',
        image: 'https://hb.imgix.net/4d85628c9dbe4f21bfd3299b3a10b1aa62a21894.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6c61117f1a1b1d56da6c5118618bc2f6',
        title: 'Final Fantasy XIV : "l\'Éveil d\'Eden" arrive aujourd\'hui',
        resume: 'Tout juste deux semaines après la sortie de Final Fantasy XIV : Shadowbringers, Square Enix déploie la première...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
        caracQuestions: [
          'Editeur(s) Développeur(s)',
          'Sortie France',
          'Genre(s)',
          'Thème(s)',
          'Classicfication',
        ],
        caracReponses: [
          'Electronic Arts, Resapwn Entertainement',
          '15 novembre 2019',
          'Aventure',
          'Science-Fiction',
          '+16 ans',
        ],
      },
      {
        id: '10',
        videoId: 'ndl1W4ltcmg',
        image: 'http://image.jeuxvideo.com/medias-md/156382/1563818741-4350-card.jpg',
        title: 'Wolfenstein  toujours aussi nerveux - E3 2019',
        resume: 'Attendu pour le moi prochain, Wolfenstein Youngblood a dévoilé un nouveau trailer, afin de rappeler l\'ambition...',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.',
        caracQuestions: [
          'Editeur(s) Développeur(s)',
          'Sortie France',
          'Genre(s)',
          'Thème(s)',
          'Classicfication',
        ],
        caracReponses: [
          'Electronic Arts, Resapwn Entertainement',
          '15 novembre 2019',
          'Aventure',
          'Science-Fiction',
          '+16 ans',
        ],
      },
    ],
  },
  categories: [
    {
      id: '1',
      name: 'PLAYSTATION',
      image: 'src/images/playstation.png',

    },
    {
      id: '2',
      name: 'XBOX',
      image: 'src/images/xboxone.png',

    },
    {
      id: '3',
      name: 'NINTENDO',


    },
  ],
  genres: [
    { id: 1, name: 'RPG' },
    { id: 2, name: 'SURVIVAL HORROR' },
    { id: 3, name: 'MMORPG' },
    { id: 4, name: 'MOBA' },
    { id: 5, name: 'ARCADE' },
  ],
  activeItem: 'home',
  navitems: [
    { id: 1, name: 'LIVE STREAM' },
    { id: 2, name: 'GALERIE' },
    { id: 3, name: 'CONTACT' },

  ],
};

// == Types
export const GET_PLATEFORM = 'GET_PLATEFORM';
export const GET_GENRE = 'GET_GENRE';

const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';


// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.name,
      };

    default:
      return state;
  }
};

// == Action Creators
export const setActiveItem = name => ({
  type: SET_ACTIVE_ITEM,
  name,
});
export const getPlateform = () => ({
  type: GET_PLATEFORM,
});
export const getGenres = () => ({
  type: GET_GENRE,
});

// == Export
export default reducer;

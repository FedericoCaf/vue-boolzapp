const app = new Vue({

el: '#app',

data: {

  users: [

    {
      name: 'Michele',
      img: 'img/avatar_1.jpg',
      lastMessage: 'Tutto fatto...',
      lastDate: '',
      isActive: true
    },
    {
      name: 'Fabio',
      img: 'img/avatar_2.jpg',
      lastMessage: 'Mi piacerebbe ma devo andare...',
      lastDate: '',
      isActive: false

    },
    {
      name: 'Samuele',
      img: 'img/avatar_3.jpg',
      lastMessage: 'Ah scusa!',
      lastDate: '',
      isActive: false

    },
    {
      name: 'Luisa',
      img: 'img/avatar_6.jpg',
      lastMessage: 'Si, ma preferireri andare al ci...',
      lastDate: '',
      isActive: false
    },

  ],


 stringCerca: '',


}


});


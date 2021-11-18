
// dayjs.extend(window.dayjs_plugin_customParseFormat)

const app = new Vue({

el: '#app',

data: {

  users: [
    {
        name: 'Michele',
        img: 'img/avatar_1.jpg',
        visible: true,
        messages: [{

                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
        },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Luca',
        img: 'img/avatar_7.jpg',
        visible: true,
        messages: [{

                date: '10/01/2020 15:30:55',
                message: 'Come va il lavoro?',
                status: 'sent'
        },
            {
                date: '10/01/2020 15:50:00',
                message: 'Procede tutto bene?',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Alla grande!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Abramo',
        img: 'img/avatar_4.jpg',
        visible: true,
        messages: [{

                date: '10/01/2020 15:30:55',
                message: 'Sei andato a suonare?',
                status: 'sent'
        },
            {
                date: '10/01/2020 15:50:00',
                message: 'Con la band intendo',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Si, mi sono divertito!',
                status: 'received'
            }
        ],
    },

    {
        name: 'Fabio',
        img: 'img/avatar_2.jpg',
        visible: true,
        messages: [{

                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
        },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
     },

     {
        name: 'Samuele',
        img: 'img/avatar_3.jpg',
        visible: true,
        messages: [{

                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
        },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
     },

     {
        name: 'Luisa',
        img: 'img/avatar_6.jpg',
        visible: true,
        messages: [{

                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
        },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
     },
  ],
 
  stringCerca: '',
  stringChat: '',
  activeUser: 0,
  isTyping: false,
  activeMessage: 0,
  isClicked: false

 },

 methods: {
   //eliminazione del messaggio selezionato
  deleteMessage(){
    console.log('ciao');
    this.users[this.activeUser].messages.splice(this.activeMessage, 1);
    console.log(this.users[this.activeMessage].messages);
    console.log(this.activeMessage);
  },

  filterUsers(){
  //ciclo per rendere visibili o meno gli users a seconda dei caratteri inseriti nell'input
    for (let i = 0; i < this.users.length; i++) {
  
      if(this.users[i].name.toUpperCase().includes(this.stringCerca.toUpperCase())){
        console.log('visibile');
        this.users[i].visible = true;
      }else{
        console.log('non visibile');
        this.users[i].visible = false;
      }
    }
    
    console.log(this.users[0].visible);
  },

  showChat(index) {
    this.activeUser = index;
  },

  //questo mi serve per chiudere il menu as tendina cliccando su un altro user
  closeDropMenu(){
   if(this.isClicked){
     this.isClicked=false;
   }
  },

  showMenuDrop(index) {
  //toggle del menu a tendina, se è chiuso si apre e viceversa
    this.activeMessage = index;
    this.isClicked = !this.isClicked
      
    console.log(this.isClicked);
   
  },

  botReply(){
    //piccolo bot con alcune risposte pronte in base al messaggio
    if((this.stringChat.toLowerCase()).includes('?')) {
      return 'Non saprei'
     } else if(this.stringChat.toLowerCase()=='ciao'
       || this.stringChat.toLowerCase()=='buongiorno'
       || this.stringChat.toLowerCase()=='buonasera' 
       || this.stringChat.toLowerCase()=='salve'){
        return 'salve'
    }else{
      return 'ok'
    }

  },

  insertMessage(index){

    if(this.stringChat.length > 0){

      setTimeout(() =>{
        this.isTyping = true;
      },1000);
    
      let newMessage = {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        message: this.stringChat,
        status: 'sent'
      }
      console.log(newMessage.message);
      this.users[index].messages.push(newMessage);     
      console.log(this.users[0].messages);
      let autoReply = this.botReply();
      this.stringChat = '';

      setTimeout(() =>{
        let newReply = {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            message: autoReply,
            status: 'received'
          }

        this.users[index].messages.push(newReply);
        console.log('string chat', this.stringChat);
        this.isTyping = false;

      },3500);
    }

   },
   
  //controlla se ci sono piu di 30 caratteri tronca il messaggio
   checkString(index){
       let lastMessage = this.users[index].messages[this.users[index].messages.length - 1].message;
       if(lastMessage.length > 30){
           lastMessage = lastMessage.substr(0, 30)+'...'
       }
       return lastMessage;
   }

 },

  
});


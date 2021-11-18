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
  isTyping: false

 },

 methods: {


  filterUsers(){

    for (let i = 0; i < this.users.length; i++) {
  
      if(this.users[i].name.toUpperCase().includes(this.stringCerca.toUpperCase())){
        // this.users[i].visible = false;
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
    //console.log('Mostro statistiche del giocatore ad indice', index);
    this.activeUser = index;
   
  },

  isQuestion(){
    if((this.stringChat).includes('?')) {
      return 'Non saprei'
     } else{
        return 'Ok'
    }
 },

  insertMessage(index){

    if(this.stringChat.length > 0){

      setTimeout(() =>{
        this.isTyping = true;
      },1000);
    
 
    let d = new Date;
    msgDate = d.getDay()+'/'+d.getMonth()+'/'+d.getYear()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    
      let newMessage = {
        date: msgDate,
        message: this.stringChat,
        status: 'sent'
      }

      console.log(newMessage.message);
    //   this.stringChat = '';
      this.users[index].messages.push(newMessage);
      
      console.log(this.users[0].messages);

      let autoReply = this.isQuestion();
      this.stringChat = '';


      setTimeout(() =>{
        let newReply = {
            date: msgDate,
            message: autoReply,
            status: 'received'
          }

        this.users[index].messages.push(newReply);
        console.log('string chat', this.stringChat);
        this.isTyping = false;

      },3500);
    }


   },
   
   checkString(index){
       let lastMessage = this.users[index].messages[this.users[index].messages.length - 1].message;
       if(lastMessage.length > 30){
           lastMessage = lastMessage.substr(0, 30)+'...'
       }
       return lastMessage;
   }

 },

  
 

});


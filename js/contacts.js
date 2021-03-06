Vue.config.devtools = true;

const app = new Vue(
    {
        el: "#root",
        data: {
            nome: "Roberto",
            cognome: "Martino",
            contatore: 0,
            messageUserEnter: "",
            staScrivendo: "",
            searchChat: "",
            windowSettings: "content-settings",
            windowSettingActive: ["window-active"],
            contacts: [
                //Oggetto 1
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
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
                //Oggetto 2
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
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
                            status: 'received'
                        }
                    ],
                },
                //Oggetto 3
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
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
                //Oggetto 4
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
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
                }
            ],

        },
        methods: {
            userChat(index) {
                this.contatore = index;
            },
            pushMessageEnter(){
                let newContatore = this.contatore
                if(this.messageUserEnter != ""){
                   let messageSent = this.contacts[this.contatore].messages;
                   messageSent.push({message: this.messageUserEnter, status: 'sent', date: dayjs().format("DD/MM/YY hh:mm:ss") })
                   this.messageUserEnter = "" ;
                   this.staScrivendo = "sta scrivendo";
                   setTimeout(() =>{
                        let messageSent = this.contacts[newContatore].messages;
                        messageSent.push({message: "ok", status: 'received', date: dayjs().format("DD/MM/YY hh:mm:ss") })
                        this.staScrivendo = "";
                    }, 3000)
                }
            },
            cercaPersone(){
                this.contacts.forEach((element) => {
                    if(element.name.toLowerCase().includes(this.searchChat.toLowerCase())) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            },
            changeStatusWindowSettings(){
                this.windowSettings = "window-active"
            }
        }        
    }
)







var app = new Vue({

    el: '#root',

    data: {
        user: {
            name: 'Angela',
            avatar: '_io'
        },

        userNewMessage: '',

        contactAnswer: null,

        activeContact: 0,

        contactSearch: '',

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messagePreview: null,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        activeMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        activeMenu: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        activeMenu: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messagePreview: null,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        activeMenu: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        activeMenu: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        activeMenu: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messagePreview: null,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        activeMenu: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        activeMenu: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        activeMenu: false
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messagePreview: null,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        activeMenu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        activeMenu: false
                    }
                ],
            },
        ]       
    },

    methods: {
        sendMessage() {
            if(this.userNewMessage.length > 0) {
                const newMessage = {
                    date: '20/03/2020 16:30:00',
                    text: this.userNewMessage,
                    status: 'sent'
                };

                this.contacts[this.activeContact].messages.push(newMessage);

                this.userNewMessage = '';
            }
        },

        generateAnswer() {
            const newMessage = {
                date: '20/03/2020 16:30:00',
                text: 'ok',
                status: 'received',
                activeMenu: false
            }; 

            this.contacts[this.activeContact].messages.push(newMessage);
        },

        sendAnswer() {
            this.contactAnswer = this.generateAnswer;

            setTimeout(this.contactAnswer, 1000); 
        },

        setActiveContact(a) {
            this.activeContact = a;
        },

        filterContacts() {

            const normalizedUserInput = this.contactSearch.toLowerCase();

            this.contacts.forEach((contact) => {
                const normalizedContactName = contact.name.toLowerCase();
                if(!normalizedContactName.includes(normalizedUserInput)) {
                    contact.visible = false;
                } else if(normalizedUserInput.length === 0) {
                    contact.visible = true;
                };
            })
        },

        popMenu(index) {

            this.contacts[this.activeContact].messages[index].activeMenu = !this.contacts[this.activeContact].messages[index].activeMenu;

        },

        deleteMessage(index) {

            this.contacts[this.activeContact].messages.splice(index, 1);

        },

        setPreview() {
            const previews = [];

            this.contacts.forEach((contact) => {
                const index = contact.messages.length -1;
                
                const preview = contact.messages[index].text;

                previews.push(preview);   
            })

            for(let i = 0; i < this.contacts.length; i++) {
                this.contacts[i].messagePreview = previews[i];
            };
        }
    },

    mounted () {
        this.setPreview();
    }
})
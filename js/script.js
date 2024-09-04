const { createApp } = Vue

createApp({
  data() {
    return {
        //elenco immagini
      imageList:[
        {
            image: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
            image: 'img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
            image: 'img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        },
        {
            image: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        },
      ],

      //indice corrente
      currentIndex: 0,
    
    }
},
  methods: {
    // freccia a destra
    nextImg(){
        if(this.currentIndex >= this.imageList.length -1)
            this.currentIndex = 0;
        else this.currentIndex++;
    },

    //freccia a sinistra
    prevImg(){
        if(this.currentIndex <= 0)
            this.currentIndex = this.imageList.length -1;
        else this.currentIndex--;
    },
    
    //cambio immagine al click della thumbnail
    setCurrentImg(index){
       this.currentIndex = index;
    },

  },

    //faccio partire un timer ogni 3 secondi per cambiare immagine
  created (){
    const timer = setInterval(() => {
    this.nextImg()
    },3000);

  },

  
}).mount('#app')
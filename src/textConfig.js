const textConfig = {
  landing: {
    title: "Hey Kritika! 💕",
    subtitle: "Congratulation on surviving a month with 'I'll sleep in 1 minute'",
    lastLine: "Here's to many more 'listen... nothing' ✨",
    button: "Let's Begin",
    footer: "Made with love💕",
  },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A Love Letter 💌",
    headerSubtitle: "From my heart to yours",
    letterHeaderTitle: "My Love",
    letterMessage: `K,

The last month has truly been unbelievable. Apart from being my girlfriend, thank you for being a lovely friend. I wish our friendship grows and grows and grows. 


`,
    letterSignature: "Calacatta Bronzo 💕`",
    envelopeClickHint: "Click to open the envelope",
    specialDeliveryText: "Special Delivery 💌",
    continueButton: "Continue To See More ✨"
  },

  chillZone: {
    heading: "A Dedicated Playlist For You",
    subheading: "I Hope You'll Like It",
    chooseTrackHint: "Choose a track to start vibing ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "A song that perfectly describes us", caption: "" },
      { id: 2, title: "Aashiq vibes, cause got to stay true to character 🤍", caption: "" },
      { id: 3, title: "You when mad", caption: "" }
    ]
  },

  cards: {
    heading: "Some Special Cards For You",
    subheading: "Click each card to reveal a special message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n, total) => `${n} of ${total} messages discovered! Keep exploring 💕`,
      complete: "Amazing! You've discovered all the messages! 🎉"
    },
    popup: {
      title: "All Messages Unlocked!",
      message: "Each message is a piece of my heart that belongs to you forever. ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay here a bit longer"
    },
    cardMessages: [
      "You're my favorite notification 💖",
      "Your laughter means the world to me (even when its loud) 👀",
      "Please stay the way you are (except for when you're angry)🌸"
    ]
  },

  finalLetter: {
    title: "Final Love Letter",
    sealingText: "Sealing your letter...",
    sealButton: "Seal this Letter 💌",
    restartButton: "Restart",
    sealedTitle: "Letter Sealed with Love",
    sealedSubtitle: "I Love You Always",
    typedDefault: "Always Yours 💕",
    experienceAgain: "Experience Again ✨",
    sendKissButton: "Send a Virtual Kiss 💋",
    dateLocale: "en-US",
    // Letter content
    letterGreeting: "Babycakes,",
    letterParagraphs: [
      "I hate to end my day without listening to yours.",
      "Words aren't invented yet to explain how i feel about you",
      "I'll keep making memories, big and small, always with you.",
      "Happy 1 month!"
    ],
    sealingNote: "Sealing will finish the experience."
  },

  common: {
    continue: "Continue to Next ✨",
    close: "Close",
    ok: "OK"
  }
};

export default textConfig;
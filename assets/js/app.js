




/*------- */
tsParticles.load("tsparticles", {
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },

      onDiv: {
        elementId: "repulse-div",
        enable: false,
        mode: "repulse"
      },
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 1,
        size: 40,
        speed: 3
      },



      connect: {
        distance: 80,
        lineLinked: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 150,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    lineLinked: {
      blink: false,
      color: "#000",
      consent: false,
      distance: 150,
      enable: false,
      opacity: 0,
      width: 0
    },
    rotate: {
      value: 0,
      random: true,
      direction: "clockwise",
      animation: {
        enable: true,
        speed: 2,
        sync: false
      }
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 400
      },
      limit: 0,
      value: 11
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 1,
        sync: false
      },
      random: false,
      value: 0.8
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: [
        {
          src: "./assets/images/0-01.svg",
          width: 500,
          height: 500
        },
        {
          src: "./assets/images/0-02.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-03.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-04.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-05.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-06.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-07.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-08.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-09.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-10.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-11.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-12.svg",
          width: 32,
          height: 32
        },
        {
          src: "./assets/images/0-13.svg",
          width: 32,
          height: 32
        },



        
      ],
      polygon: {
        nb_sides: 5
      },
      stroke: {
        color: "#000000",
        width: 0
      },
      type: "image"
    },
    size: {
      animation: {
        enable: true,
        minimumValue: 60,
        speed: 2,
        size_min: 10,
        sync: false
      },
      random: true,
      value: 50
    }
  },
  polygon: {
    draw: {
      enable: false,
      lineColor: "#ffffff",
      lineWidth: 0.5
    },
    move: {
      radius: 120
    },
    scale: 1,
    type: "none",
    url: ""
  }
});

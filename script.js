gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

if (!ScrollTrigger.isTouch) {
  ScrollSmoother.create({
    smooth: 1.5,
    effects: true
  });
}

function animarPagina() {
  gsap.from(".hero", {
    opacity: 0,
    duration: 1
  });

  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1
  });

  gsap.from("picture:nth-child(2)", {
    y: -60,
    duration: 1
  });

  gsap.from(".card", {
    opacity: 0,
    duration: 1,
    y: 20,
    filter: "blur(10px)",
    stagger: .3,
    scrollTrigger: {
      trigger: ".cards",
      start: "0% 75%",
      end: "100% 70%",
      scrub: true
    }
  });

  gsap.from(".secaoAgradecimento ul li", {
    opacity: 0,
    x: 40,
    stagger: .3,
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: ".secaoAgradecimento ul",
      start: "0% 90%",
      end: "100% 55%",
      scrub: true
    }
  });

  gsap.from(".secaoDepoimentos p, .depo, .logo", {
    opacity: 0,
    x: 40,
    stagger: .3,
    filter: "blur(20px)",
    scrollTrigger: {
      trigger: ".depoimento",
      start: "0% 90%",
      end: "100% 70%",
      scrub: true
    }
  });

  let split = SplitText.create("h1, h2, h3, .hero p", {
    type: "chars, words"
  });

  gsap.from(split.chars, {
    y: 50,
    autoAlpha: 0,
    stagger: 0.01
  });

  gsap.from("footer", {
    opacity: 0,
    y: -100,
    immediateRender: false,
    filter: "filter(10px)",
    scrollTrigger: {
      trigger: "footer",
      start: "0 90%",
      end: "100% 70%",
      scrub: true,
      invalidateOnRefresh: true
    }
  });
}

const mensagem = 'Oi! Esse foi o meu primeiro projeto com JAVA, codando 100%. Gostou?';

document.addEventListener("click", (e) => {
  const el = e.target.closest("*");
  if (!el) return;

  const cursor = getComputedStyle(el).cursor;

  if (cursor === "pointer") {
    alert(mensagem);
  }
});

const tl = gsap.timeline({
  onComplete() {
    animarPagina();
    gsap.to("#preLoader", {
      opacity: 0,
      display: "none",
      duration: 0.3
    });
  }
});

tl.to("#preLoader path", {
  duration: 1.5,
  strokeDashoffset: 0
});

tl.to("#preLoader path", {
  fill: "rgb(168, 19, 19)",
  duration: .8,
  strokeDashoffset: 0
});

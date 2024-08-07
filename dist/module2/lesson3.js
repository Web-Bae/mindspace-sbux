"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/module2/lesson3.js
  var hiddenSections = document.querySelectorAll(`[rpa3="hidden"]`);
  var rpa3Images = document.querySelectorAll(`[rpa3="image"]`);
  var targets = document.querySelectorAll(`[rpa3="image-target"]`);
  var messagePlate = document.querySelector(`[rpa3="message-plate"]`);
  var correctAnswers = 0;
  var disabledPlateIndices = [2, 3];
  ScrollTrigger.create({
    trigger: `[rpa3="plate-section"]`,
    start: "top top+=1px",
    onEnter: createPlatesAnimation,
    once: true,
    markers: true
  });
  function createPlatesAnimation() {
    toggleScroll();
    const state = Flip.getState(rpa3Images);
    rpa3Images.forEach((image, index) => {
      targets[index].prepend(image);
    });
    return Flip.from(state, {
      ease: "power2.inOut",
      stagger: 0.05,
      onComplete: () => {
        const tl = gsap.timeline();
        tl.fromTo(
          `[rpa3="plate-content"]`,
          {
            opacity: 0,
            yPercent: 50
          },
          {
            opacity: 1,
            yPercent: 0,
            stagger: 0.1
          }
        ).to(
          targets,
          {
            border: "1px dashed #f2f0eb",
            stagger: 0.1
          },
          "<"
        ).to(
          `[rpa3-plate-active="false"]`,
          {
            opacity: 0.3
          },
          "<"
        ).fromTo(
          `[rpa3="plate-stack"]`,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1
          }
        );
        createDraggables();
      }
    });
  }
  function createDraggables() {
    const plates = Array.from(document.querySelectorAll(`[rpa3="plate"]`));
    const overlapThreshold = "50%";
    Draggable.create(plates, {
      bounds: window,
      onDrag: function() {
        let i = targets.length;
        while (--i > -1) {
          if (this.hitTest(targets[i], overlapThreshold)) {
            if (disabledPlateIndices.includes(i)) {
              gsap.to(targets[i], {
                border: "1px solid #f2f0eb",
                filter: `brightness(0)`,
                duration: 0.5
              });
            } else {
              gsap.to(targets[i], {
                border: "1px solid #f2f0eb",
                filter: `brightness(1.5)`,
                duration: 0.5
              });
            }
          } else {
            gsap.to(targets[i], {
              border: "1px dashed #f2f0eb",
              filter: `brightness(1)`,
              duration: 0.5
            });
          }
        }
      },
      onDragEnd: function() {
        let i = targets.length;
        let plateMoved = false;
        while (--i > -1) {
          if (this.hitTest(targets[i], overlapThreshold)) {
            const answer = this.target.getAttribute("rpa3-answer");
            const targetAnswer = targets[i].getAttribute("rpa3-answer");
            if (answer === targetAnswer) {
              correctAnswers++;
              const activePlate = this.target;
              const targetRect = targets[i].getBoundingClientRect();
              const plateRect = activePlate.getBoundingClientRect();
              const deltaX = targetRect.left - plateRect.left;
              const deltaY = targetRect.top - plateRect.top;
              const tl = gsap.timeline();
              tl.to(activePlate, {
                x: `+=${deltaX}`,
                y: `+=${deltaY}`,
                scale: 0,
                duration: 0.5,
                ease: "power2.inOut"
              }).to(
                targets[i],
                {
                  border: "1px dashed #f2f0eb",
                  filter: `brightness(1)`,
                  duration: 0.5
                },
                "<"
              );
              plateMoved = true;
              if (correctAnswers === plates.length) {
                messagePlate.querySelector(`[rpa3="message"]`).textContent = "Good job!";
                const tl2 = gsap.timeline();
                tl2.set(messagePlate, {
                  pointerEvents: "auto"
                }).to(messagePlate, {
                  opacity: 1
                });
                hiddenSections.forEach((section) => {
                  section.removeAttribute("rpa3");
                });
                toggleScroll();
              }
              break;
            } else {
              const tl = gsap.timeline();
              tl.set(messagePlate, {
                pointerEvents: "auto"
              }).to(messagePlate, {
                opacity: 1
              }).to(messagePlate, {
                opacity: 0,
                onComplete: () => {
                  gsap.set(messagePlate, {
                    pointerEvents: "none"
                  });
                },
                delay: 1
              });
              gsap.to(this.target, {
                x: 0,
                y: 0,
                duration: 0.5
              });
            }
          }
        }
        if (!plateMoved) {
          gsap.to(this.target, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5
          });
          gsap.to(targets, {
            border: "1px dashed #f2f0eb",
            filter: `brightness(1)`,
            duration: 0.5
          });
        }
      }
    });
  }
  function toggleScroll() {
    const body = document.querySelector("body");
    const { overflow } = body.style;
    gsap.set(body, {
      overflow: overflow === "hidden" ? "auto" : "hidden"
    });
  }
})();
//# sourceMappingURL=lesson3.js.map
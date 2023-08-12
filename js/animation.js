const container01 = document.querySelector(".mask01");
const container02 = document.querySelector(".mask02");

    document.body.addEventListener("mousemove", e => {
        const x = e.clientX;
        // const y = e.clientY - 195;
        const y = e.clientY - 320;
      /*   gsap.to(container01, {
            x: x
        }) */
        gsap.to(container01, {
            y: y, opacity:.7, scale: 1.2
        });
        gsap.to(".mask01 img", {
            y: -y
        });
    });

    document.body.addEventListener("mousemove", e => {
        const x = e.clientX;
        // const y = e.clientY - 195;
        const y = e.clientY - 300;
        gsap.to(container02, {
            x: -450
        })
        gsap.to(container02, {
            y: y, opacity:.7, scale: 1.2
        });
        gsap.to(".mask02 img", {
            y: y
        });
    });
"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Loading from "@/components/index/loading";
import Wrap from "@/components/index/wrap";
import Header from "@/components/common/header";
import Title from "@/components/index/title";
import Topimg from "@/components/index/topimg";
import About from "@/components/about/about";
import Activity from "@/components/activity/activity";
import Access from "@/components/access/access";
import Footer from "@/components/common/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
      window.scrollTo(0, 0);
  
      (function () {
        const titles = document.querySelectorAll(".title h1");
        titles.forEach((title) => {
          let newText = "";
          const text = title.textContent;
          if (text) { // textがnullでないことを確認
            const result = text.split("");
            for (let i = 0; i < result.length; i++) {
              newText += `<span>${result[i]}</span>`;
            }
            title.innerHTML = newText;
          }
        });
      })();
  

    gsap.set(".header", {
      opacity: 0,
      y: -30,
    });
    gsap.set(".title span", {
      opacity: 0,
      y: -50,
    });
    gsap.set(".about", {
      autoAlpha: 0,
      y: 50,
    });
    gsap.set(".activity", {
      autoAlpha: 0,
      x: 100,
    });
    gsap.set(".activity_mb", {
      autoAlpha: 0,
      y: 50,
    });

    const TL = gsap.timeline();
    TL.to(".loading", {
      y: "-100%",
      delay: 1.5,
    })
      .to(".wrap", {
        y: "-100%",
        delay: 0.7,
      }, "-=1")
      .to(".title span", {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 1,
          from: "start",
          ease: "sine.in",
        },
      }, "-=0.1")
      .to(".header", {
        opacity: 1,
        y: 0,
      });

    const TL2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "bottom top",
      },
    });

    TL2.to(".about", {
      duration: 0.8, // アニメーションの速度を遅くするためにdurationを長く設定
      autoAlpha: 1,
      y: 0,
      stagger: 0.2, // スムーズにアニメーションを実行するためにstaggerの値を調整
    });

    const TL3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".activity",
        start: "top center",
        end: "bottom top",
      },
    });

    TL3.to(".activity", {
      duration: 0.8, // アニメーションの速度を遅くするためにdurationを長く設定
      autoAlpha: 1,
      x: 0,
      stagger: 0.2, // スムーズにアニメーションを実行するためにstaggerの値を調整
    });

    const TL4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".activity_mb",
        start: "top center",
        end: "bottom top",
      },
    });

    TL4.to(".activity_mb", {
      duration: 0.8, // アニメーションの速度を遅くするためにdurationを長く設定
      autoAlpha: 1,
      y: 0,
      stagger: 0.2, // スムーズにアニメーションを実行するためにstaggerの値を調整
    });
  }, []);

  return (
    <main>
      <Loading />
      <Wrap />
      <Header />
      <Title />
      <Topimg />
      <About />
      <Activity />
      <Access />
      <Footer />
    </main>
  );
}
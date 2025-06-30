"use client"
import Image from "next/image";
import React from "react";

const RightSection = () => {
  return (
    <div className="text-center p-5" style={{ minHeight: '100vh' }}>
      <Image
        src="/profile.jpg"
        alt="Amrit Singh Rathore"
        width={200}
        height={200}
        className="rounded-circle shadow mb-4"
      />
      <h1 className="fw-bold">AMRIT SINGH RATHORE</h1>
      <p>
        Hey, I'm Amrit Singh Rathore.<br/>
        Right now, I’m in full exploration mode.<br/>
        I want to try it all — from frontend to backend, from hardware to AI, from clean UI to raw terminal magic.<br/>
        Outside of code, I’m into vibing on playlist with 1294 songs, Formula 1 and sometimes mess around with art just to reset my brain.<br/>
        I'm focused on learning as much as I can, building stuff that works, and figuring out where I want to take this.
      </p>
    </div>
  );
};

export default RightSection;

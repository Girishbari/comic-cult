"use client"
import { useRouter } from 'next/navigation';

function intro() {

  const router = useRouter();
  
  return (
    <>
      <div className="flex justify-start gap-5 hero-content text-center text-neutral-content">
        <div className="min-w-xl">
          <h1
            className="mb-5 text-8xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
        text-white tracking-wider"
          >
            Comic-cult
          </h1>
          <p className="mb-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white tracking-wide text-2xl">
            "redbull gives you wings we give a comic" <br />
            provide us your story we'll generate amazing art just like you
            see any comics <br />
            <span>See Examples from Navigation bar</span>
          </p>
          <button className="btn btn-accent text-2xl tracking-wide" onClick={() => router.push
            ('/dashboard')} >Get Started</button>
        </div>
      </div>
    </>
  );
}

export default intro;

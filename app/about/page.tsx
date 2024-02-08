import Button from "@/components/Common/Button";
import MainLayout from "@/components/Common/template/MainLayout";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <MainLayout className="flex flex-col w-full gap-4 mb-14 sm:mb-20 justify-start items-center">
      <h1 className="md:text-5xl text-3xl px-4 w-full text-center font-bold my-24 sm:my-36">About Stay In Touch</h1>
      <div className="flex flex-col sm:gap-24 gap-16">
        <div className="flex lg:flex-row flex-col w-full justify-center lg:items-start gap-12">
          <div className="flex justify-center items-center basis-1/2">
            <Image src="/static/logo/Stay In Touch Logo.png" width={500} height={500} alt="Stay In Touch Logo" />
          </div>
          <div className="flex flex-col justify-center items-start gap-6 basis-1/2 border-2 border-quaternary rounded-xl md:p-8 p-6 mx-8 xl:mx-0">
            <p className="text-justify md:text-lg text-base">
              Step into a sanctuary where voices find their echo and hearts resonate — <b>Welcome</b> to Stay In Touch.
            </p>
            <p className="text-justify md:text-lg text-base">
              Here, it's <b>not just</b> about connecting; it's about fostering genuine connections, nurturing a haven where thoughts take
              flight, emotions find <b>release</b>, and ideas flourish. This space transcends the ordinary, offering a canvas for the{" "}
              <b>unspoken</b> and the heartfelt. Stay In Touch isn't merely a glimpse into the world outside, it's a <b>journey</b> into the
              world within. It's where stories of rekindled friendships, heartfelt confessions, and cherished memories weave into a{" "}
              <b>tapestry</b> of shared experiences.
            </p>
            <p className="text-justify md:text-lg text-base">
              Every emotion, every sentiment, finds a <b>home</b> here. Join us in embracing the beauty of connection and the power of every{" "}
              <b>voice</b>. Welcome to a place where connections are nurtured, and expressions find solace.
            </p>
            <p className="md:text-lg text-base w-full text-right">Again, welcome.</p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col w-full justify-center sm:items-start gap-12 bg-primary sm:p-8 p-6 py-8">
          <div className="flex flex-col justify-center items-start gap-6 basis-1/2">
            <h3 className="text-2xl font-bold">Feelings Shared</h3>
            <p className="text-justify md:text-lg text-base">
              At <b>Stay In Touch</b>,
            </p>
            <p className="text-justify md:text-lg text-base">
              Feelings shared embodies our platform's essence. It's more than just words; it's a safe haven where individuals can <b>express</b>{" "}
              their <b>deepest</b> emotions without fear or judgment.
            </p>
            <p className="text-justify md:text-lg text-base">
              It's the liberating sensation when one opens up, <b>sharing</b> the hidden whispers of their heart, be it <b>love,</b> joy, sorrow,
              or gratitude. It's about finding solace in confiding, unburdening the weight of <b>untold feelings</b>, and embracing the power of
              vulnerability.
            </p>
            <p className="text-justify md:text-lg text-base">
              Here, feelings shared isn't merely an act; it's a bridge that <b>connects</b> hearts, forging understanding, <b>empathy</b>, and
              genuine connections among our users.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-6 basis-1/2">
            <h3 className="text-2xl font-bold">Connection Stay</h3>
            <p className="text-justify md:text-lg text-base">
              In a world where connections often flicker, connections stay defines our <b>commitment</b> at Stay In Touch.
            </p>
            <p className="text-justify md:text-lg text-base">
              It's not just about <b>momentary</b> interactions but fostering enduring bonds that withstand time and distance. It's the assurance
              that the connections formed here, rooted in <b>honesty</b> and sincerity, linger and thrive.
            </p>
            <p className="text-justify md:text-lg text-base">
              Beyond fleeting conversations, connections stay embodies the permanence of <b>friendships</b>, the warmth of shared <b>memories</b>
              , and the resilience of genuine connections.
            </p>
            <p className="text-justify md:text-lg text-base">
              It's about creating a <b>space</b> where relationships grow, memories endure, and the essence of staying in touch transcends
              fleeting moments, leaving an indelible <b>mark</b> on the lives touched by this platform.
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col w-full justify-center sm:items-start gap-12">
          <div className="flex flex-col justify-center items-center gap-6 p-6 md:p-0">
            <h3 className="text-2xl font-bold w-full md:text-center">Ready to Tell Your Story?</h3>
            <p className="text-center md:text-lg text-base md:w-2/3">
              Let your words express what's been on your mind and become part of a community built on shared stories and heartfelt expressions.
              Share a story, a secret, or an emotion waiting to be voiced. This is your canvas.
            </p>
            <Link href="/confession/create" className="w-full flex justify-center">
              <Button color="secondary" className="w-full text-base h-8 md:w-1/3 md:text-lg md:min-h-[3rem]">
                Start now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;

import React from "react";

const Article = () => {
  return (
    <div className="article bg-zinc-900 sm:px-24">
      <article className="text-neutral-500 ">
        <h1 className="text-4xl text-white font-base">A co-founder at one of the world's largest communities.</h1>
        <p className="mt-3">
          The combined experience I have working at the top fortune 500
          companies has allowed me to develop a skillset that helps me in not
          just development, but in every aspect of any business
        </p>

        <p className="mt-4">
          I'm proud to announce that I am now working at one of the world's
          largest communities teaching young minds about how to sell yourself as
          a developer and open them to a whole new world opportunities.{" "}
        </p>
      </article>
      <article className="text-neutral-500 ">
        <p>
          As a developer, you have everything available to you and all that's
          holding you back is yourself.
        </p>

        <p className="mt-4">A quote I live by perfectly illustrate what I mean</p>

        <p className="mt-4">
            "How big would you dream, if you <b>knew</b> you wouldn't fail?"
          You have already gone through the hardest parts being a developer,
          it's time to elevate your skill and become a leader in something
          you're passionate about.
        </p>

        <p className="mt-4">
          I'm happy to chat over coffee some time about how I can help your
          company.
        </p>
      </article>
    </div>
  );
};

export default Article;

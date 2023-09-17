<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dontrellthedeveloper/smartpal-nextjs-sql">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Smart Pal - AI Chat Application</h3>

  <p align="center">
    This AI Chat Application was built using Next.js, React.js, MySQL, Typescript, Tailwind CSS, Stripe, OpenAI, Prisma, Planetscale, Cloudinary, Clerk, ShadCN, Zustand, Pinecone, Upstash, Redis & Replicate.
    <br />
    <a href="https://github.com/dontrellthedeveloper/smartpal-nextjs-sql"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://smartpal.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/dontrellthedeveloper/smartpal-nextjs-sql">Report Bug</a>
    ·
    <a href="https://github.com/dontrellthedeveloper/smartpal-nextjs-sql">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <!-- <li>
      <a href="#about-the-project">About The Project</a> -->
      <!-- <ul> -->
        <li><a href="#built-with">Built With</a></li>
      <!-- </ul> -->
    <!-- </li> -->
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#clone">Clone project</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
<!-- ## About The Project -->



<!--
Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`
-->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Typescript][Typescript]][Typescript-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
* [![MySQL][MySQL]][MySQL-url]
* [![PlanetScale][PlanetScale]][PlanetScale-url]
* [![OpenAI][OpenAI]][OpenAI-url]
* [![Pinecone][Pinecone]][Pinecone-url]
* [![Prisma][Prisma]][Prisma-url]
* [![Upstash][Upstash]][Upstash-url]
* [![Redis][Redis]][Redis-url]
* [![Stripe][Stripe]][Stripe-url]
* [![Cloudinary][Cloudinary]][Cloudinary-url]
* [![ShadCN][ShadCN]][ShadCN-url]
* [![Clerk][Clerk]][Clerk-url]
* [![Zustand][Zustand]][Zustand-url]
* [![Replicate][Replicate]][Replicate-url]





&nbsp;
&nbsp;
&nbsp;
&nbsp;


### Deployment Tools:

This application was deployed using Vercel and Route53.

&nbsp;
&nbsp;
&nbsp;
&nbsp;

* [![Vercel][Vercel]][Vercel-url]
* [![AWSRoute53][AWSRoute53]][AWSRoute53-url]





<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This is an AI Chat application that works like ChatGPT. Simply choose an AI character from the list to start a chat conversation with. Each person will talk to you as they would in real life. This is an amazing example of how you can use AI to build a modern application.

[![Product Name Screen Shot][product-screenshot]](https://smartpal.vercel.app/)

[![Product Name Screen Shot][product-screenshot2]](https://smartpal.vercel.app/)

[![Product Name Screen Shot][product-screenshot3]](https://smartpal.vercel.app/)


_For more examples, please take a look at the [application](https://smartpal.vercel.app/)_



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->


## Clone Project


To get a local copy up and running follow the steps below.


<!--
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install --legacy-peer-deps
  ```

-->

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dontrellthedeveloper/smartpal-nextjs-sql
   ```

2. Install NPM packages
   ```sh
   npm install 
   ```
3. Enter values in `.env` file
   ```js
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={clerk publishable key}
    NEXT_PUBLIC_CLERK_SIGN_IN_URL={clerk signIn url}
    NEXT_PUBLIC_CLERK_SIGN_UP_URL={clerk signUp url}
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL={clerk after signIn url}
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL={clerk after signUp url}

    DATABASE_URL="{mysql connection string}"

    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="{cloudinary cloud}"

    PINECONE_INDEX="{pinecone index}"
    PINECONE_ENVIRONMENT="{pinecone environment}"
    PINECONE_API_KEY="{pinecone api  key}"

    UPSTASH_REDIS_REST_URL="{upstash redis rest url}"
    UPSTASH_REDIS_REST_TOKEN="{upstash redis rest token}"

    OPENAI_API_KEY={open api key}

    REPLICATE_API_TOKEN={replicate api token}

    STRIPE_API_KEY={stripe api key}
    STRIPE_WEBHOOK_SECRET={stripe webhook secret}

    NEXT_PUBLIC_APP_URL={app url}
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dontrellthedeveloper/instagram-nextjs-sanity.svg?style=for-the-badge
[contributors-url]: https://github.com/dontrellthedeveloper/instagram-nextjs-sanity/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dontrellthedeveloper/instagram-nextjs-sanity.svg?style=for-the-badge
[forks-url]: https://github.com/dontrellthedeveloper/instagram-nextjs-sanity/network/members
[stars-shield]: https://img.shields.io/github/stars/dontrellthedeveloper/instagram-nextjs-sanity.svg?style=for-the-badge
[stars-url]: https://github.com/dontrellthedeveloper/instagram-nextjs-sanity/stargazers
[issues-shield]: https://img.shields.io/github/issues/dontrellthedeveloper/instagram-nextjs-sanity.svg?style=for-the-badge
[issues-url]: https://github.com/dontrellthedeveloper/instagram-nextjs-sanity/issues
[license-shield]: https://img.shields.io/github/license/dontrellthedeveloper/instagram-nextjs-sanity.svg?style=for-the-badge
[license-url]: https://github.com/dontrellthedeveloper/instagram-nextjs-sanity/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/smart1.png
[product-screenshot2]: images/smart2.png
[product-screenshot3]: images/smart3.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/



[Netlify]: https://img.shields.io/badge/Netlify-111111?style=for-the-badge&logo=netlify&logoColor=00C7B7
[Netlify-url]: https://www.netlify.com/


[Zustand]: https://img.shields.io/badge/zustand-602c3c?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAA8FBMVEVHcExXQzpKQDlFV16lpqyGh4tPPTdWT0weHRU7LRZGQzmxYjlaTkZsbmywVyxtXDSFhISXm6WWpcaytb6bm56gprY0LiiXmp2prLamsMa0XS42MSxkTUVDSkuyYzGihXdDV2GprbmedVxaRD1kTUWUdGFGOCN4a2OfpbI0SFFAMSddTkbCc0dWQiGFRypXQyJUQCBcTTWviDVXQyJcUDjlqCWxjkG+hBTiohtURD6lr8lORTtDVVZmPyxwSipaRSJDOzaWpsyYqMyYqM2dq8tPOjBERTs6QUKTcCeKaCJvViZdSDK4iSngoiDvqx7KkRuGEi1hAAAAOXRSTlMApZ78cB8hCAMQO/j/FOH4KlT1wFfJTjaY6SxtVexFn3Tn2sN6d671mVuJ+/PPN9CT6TfpS4C9jJaVLRihAAAAi0lEQVQIHXXBxRKCUAAF0Es/QMDubsVuGrv1///GBQ4bx3PwgwC8gFCRohs8QrQV0ZtKOZ9JcgBmU8MwqFa9kjNTUWB58f2jPOjU9juTBTbPq+vIar972MZjwPr1uDvqCFw2wQpQVm/t7Oo9gAgAFtrtZNtMFQFp7nkWU5IQECfjYbuQFvBFRJHgjw9L0A80UmaGpAAAAABJRU5ErkJggg==
[Zustand-url]: https://zustand-demo.pmnd.rs/


[GoogleLogin]: https://img.shields.io/badge/google%20login-4285F4?style=for-the-badge&logo=google&logoColor=white
[GoogleLogin-url]: https://console.cloud.google.com


[Sanity.io]: https://img.shields.io/badge/sanity.io-333333?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAgVBMVEVHcEzzc2jwSTrpVEfucWbpXVHyc2jcXVTjYVfoal/scWbsSDrzc2jyc2jsXFDucWfua2DvcmfwcmfvcWfvUELxcmfqSDrxcmfwcGXvSTrtcWbtSDruSTrqSDnsSDnycmjxcmfuY1fuSTrvcmftSTrxYFPqSDruSTrwY1fzc2jwSTop6xAnAAAAKXRSTlMA9PAiaxfRBAoSKl377kVNnnKTXP2wMKV+2DWKpk545LvvvId45TrLweyEbdoAAAB8SURBVAgdBcGFgcQgAACwVIHKufu9w/4DfgKElAKAuN33/XEZgHCa8lzlqgWa7+o0XI75OYDF7i/StW0DDnV9Gw8JIFxLKfXvtQHE8XauS/noAEL383UuI1h8rhNWuwdYTnlzGdr5fQdhM+VqznkVgbjd9/1rnQCE1EXwDwjuB6lOQQFHAAAAAElFTkSuQmCC
[Sanity-url]: https://www.sanity.io/


[TailwindCSS]: https://img.shields.io/badge/tailwind%20css-06B6D4?style=for-the-badge&logo=tailwind%20css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
























[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=fff
[Prisma-url]: https://www.prisma.io/

[Upstash]: https://img.shields.io/badge/Upstash-111?style=for-the-badge&logo=upstash&logoColor=00E9A3
[Upstash-url]: https://upstash.com/

[OpenAI]: https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=fff
[OpenAI-url]: https://openai.com/

[MySQL]: https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=fff
[MySQL-url]: https://mysql.com/

[Redis]: https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=fff
[Redis-url]: https://redis.io/

[Typescript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff
[Typescript-url]: https://www.typescriptlang.org/


[AWSAmplify]: https://img.shields.io/badge/aws%20amplify-DF3037?style=for-the-badge&logo=aws%20amplify&logoColor=fff
[AWSAmplify-url]: https://aws.amazon.com/amplify/

[Github]: https://img.shields.io/badge/visit%20Github-181717?style=for-the-badge&logo=github&logoColor=fff
[Github-url]: https://github.com/dontrellthedeveloper/smartpal

[Stripe]: https://img.shields.io/badge/stripe-333333?style=for-the-badge&logo=stripe&logoColor=008CDD
[Stripe-url]: https://stripe.com/

[website]: https://img.shields.io/badge/visit%20website-4285F4?style=for-the-badge&logo=google%20chrome&logoColor=fff
[website-url]: https://smartpal.vercel.app/


[stars-shield]: https://img.shields.io/github/stars/dontrellthedeveloper/instagram-nextjs-sanity.svg?style=for-the-badge
[stars-url]: https://github.com/dontrellthedeveloper/instagram-nextjs-sanity/stargazers
[issues-shield]: https://img.shields.io/github/issues/dontrellthedeveloper/instagram-nextjs-sanity.svg?style=for-the-badge
[issues-url]: https://github.com/dontrellthedeveloper/instagram-nextjs-sanity/issues
[license-shield]: https://img.shields.io/github/license/dontrellthedeveloper/instagram-nextjs-sanity.svg?style=for-the-badge
[license-url]: https://github.com/dontrellthedeveloper/instagram-nextjs-sanity/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot2.png
[product-screenshot2]: images/screenshot3.png
[product-screenshot3]: images/screenshot4.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/


[Vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=fff
[Vercel-url]: https://vercel.com/


[Clerk]: https://img.shields.io/badge/Clerk-e0e0e0?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA1VBMVEVHcEwfAlYfAlYfAlYaAU2KPf9oXP8fAlYZAUYeAVQdvf0fAlYlrf0eAVQfAlYfAlYsnv0xkv0fAVVkOfo8ev49e/6HPP9/Ovt7Of9mNP8cwv0fAlYfAlYevP0itP0htv0fAlYppP0nqv0fAlYrn/0umf0fAlaXQf+UQP8fAlZCbP5NVf8wlf0fAlZHYf41iv43hf5SSf9dNf9VR/91N/9Cbv5oNP9YPP9NVP5bqv8fAlZbOP8mqv2NPv83hf48ef6CO/92OP9SSf9NVf9HYf5Cbf5qNP/9OvJaAAAAOXRSTlMAtNyJChsLHxBkES0tSPfx/PpUG4wcvibgtgjFvmTGvT1G76SzPZOJd3UlOKPD0XTcyXcq3NDA4604fqyMAAAAkElEQVQY02NgwA5EVRV5uBBcLREDQQElOVkpKF9bz9XeTlDARh6qRtjQ2cVURF9HhQeqwMjayUIUSLNB+Wxm1ubGHMyMQjATWU3cJBk4rayY2GECEo6oAmxiDhLiyFoYNGzFhFmANAvcEHVxTl1mTWVGbrgaXn4rEJDhgAmwqzHx8fFLc7IgfMOuwMvNgd3fAKaEDRL2806tAAAAAElFTkSuQmCC
[Clerk-url]: https://clerk.com/

[PlanetScale]: https://img.shields.io/badge/PlanetScale-FAF9F6?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAOVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRC/sJAAAAEnRSTlOBSAvw4xaSBvoAqPSxM2wmnlhswlzWAAAAdUlEQVQY01WPWxYDIQhDUUGI82jr/hdbcZwpzRc3RzAhAJoam3FLOoAAqaVPlSpuyN4f7QLS2oOqUirR4INaZKNM/McKsjUzT74No9fbWc9rxXc3Z+J59MfW/NvAJY1ggT0Y5CMPe/RRMPF6f5UD8pGBc9X/AhamCh98F+zAAAAAAElFTkSuQmCC
[PlanetScale-url]: https://planetscale.com/

[ShadCN]: https://img.shields.io/badge/ShadCN-111?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAMAAADH72RtAAAAKlBMVEVHcEzs7Ozy8vLg4OD29vby8vL4+Pj4+Pj29vb39/f4+Pjz8/P4+Pj29vbMXLLeAAAADnRSTlMADCAEXhiclVF2hkSKcQUv4swAAAA8SURBVBjTlc47DgAgCATRZcG/3v+6lhoSY5jyVQPEUg82PJT0g+yg5gQ13kBo6/IGFkLXPAARgE1+v8E2f3oA5SdR7YsAAAAASUVORK5CYII=
[ShadCN-url]: https://ui.shadcn.com/

[Pinecone]: https://img.shields.io/badge/Pinecone-FAF9F6?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAASFBMVEVHcEwtKismJCUmIyQrKCknJCUuKywtKisqJygvLC0sKionJCUwLS4qJygmIyQrKCkmIyRBPj8pJicoJSYoJSYuLC0mIyQoJSbKxt46AAAAGHRSTlMARKa1ToYaLD0lFp4ONG9djAVkXXAel3r3ccRfAAAAW0lEQVQI142O2Q6AIAwEKbS0BZHD6///1BhBH3XfJpvZrDE/EmZ5gREdTQ/uNrAeo/eYWmFL3YtYWxSFXlo0rEZKt8GLo5qdv3GOmpGB+5QQwzaWruiqS/o+ewL2ZQJwndr9wQAAAABJRU5ErkJggg==
[Pinecone-url]: https://www.pinecone.io/

[Replicate]: https://img.shields.io/badge/Replicate-e0e0e0?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAclBMVEVHcEwODg4NDQ0WFhYaGhoBAQEHBwcBAQEAAABHR0cdHR0SEhIaGhpjY2MICAgAAAAmJiYTExMODg4xMTEPDw8AAAAMDAwQEBACAgIXFxcAAAApKSkAAAAaGhoAAABXV1cVFRUaGhogICALCwsSEhIMDAzpBS0JAAAAJnRSTlMAxs8DMOIKPTtBawWIDJnmU7bFNyQwyLSzkTgodkOxMZ+xPru43C1SDXAAAABtSURBVBjTjc7HDoAgFERRFHkoWBCx9/b/v6gQgsaVd3kyi0HoR9BRW4kNdJnv6aSXgoGQbHOkK3psIViIr7MLSoJj1YPXIm+F3Jtp4A5idoqRKvQCmbgfN9Qxqx6g2QfKRrVMpNwBBgycA/rbBUAFBdvt0cQoAAAAAElFTkSuQmCC
[Replicate-url]: https://replicate.com/


[AWSRoute53]: https://img.shields.io/badge/AWS%20Route%2053-7848D5?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAPFBMVEVHcEzz8Pvu6fnx7vvz8Pvo4vf08Pvy7vv08fvy7vrz8Pvy7vrx7vrv6vnu6fnx7vrt6Pny7vry7/vx7vstIv5QAAAAFHRSTlMAZhdIYQZuUmlNeFs0LCFVDUR+Pbyt+bYAAACDSURBVAgdBcGHAcMgEACxA77ScfbfNRLUPvWGXZ1fBRWXME+L4nGRc8Q9wl2GB+Lm7e39MnsGN/wBwO9YhZJZz1pjNw9llzF/tvdX5yiLaHZrK7U0tWZ0f+yRUya/0/lOwkUvtNGxHMWX6vKQ7NQimWImmRIVdHmR9yTOVADQ1ftUgD90xAWzTgyFTQAAAABJRU5ErkJggg==
[AWSRoute53-url]: https://aws.amazon.com/route53/


[MongoDB]: https://img.shields.io/badge/MongoDB-D9F1E3?style=for-the-badge&logo=mongodb&logoColor=47A248
[MongoDB-url]: https://www.mongodb.com/




[Netlify]: https://img.shields.io/badge/Netlify-111111?style=for-the-badge&logo=netlify&logoColor=00C7B7
[Netlify-url]: https://www.netlify.com/


[Zustand]: https://img.shields.io/badge/zustand-602c3c?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAA8FBMVEVHcExXQzpKQDlFV16lpqyGh4tPPTdWT0weHRU7LRZGQzmxYjlaTkZsbmywVyxtXDSFhISXm6WWpcaytb6bm56gprY0LiiXmp2prLamsMa0XS42MSxkTUVDSkuyYzGihXdDV2GprbmedVxaRD1kTUWUdGFGOCN4a2OfpbI0SFFAMSddTkbCc0dWQiGFRypXQyJUQCBcTTWviDVXQyJcUDjlqCWxjkG+hBTiohtURD6lr8lORTtDVVZmPyxwSipaRSJDOzaWpsyYqMyYqM2dq8tPOjBERTs6QUKTcCeKaCJvViZdSDK4iSngoiDvqx7KkRuGEi1hAAAAOXRSTlMApZ78cB8hCAMQO/j/FOH4KlT1wFfJTjaY6SxtVexFn3Tn2sN6d671mVuJ+/PPN9CT6TfpS4C9jJaVLRihAAAAi0lEQVQIHXXBxRKCUAAF0Es/QMDubsVuGrv1///GBQ4bx3PwgwC8gFCRohs8QrQV0ZtKOZ9JcgBmU8MwqFa9kjNTUWB58f2jPOjU9juTBTbPq+vIar972MZjwPr1uDvqCFw2wQpQVm/t7Oo9gAgAFtrtZNtMFQFp7nkWU5IQECfjYbuQFvBFRJHgjw9L0A80UmaGpAAAAABJRU5ErkJggg==
[Zustand-url]: https://zustand-demo.pmnd.rs/


[GoogleLogin]: https://img.shields.io/badge/google%20login-4285F4?style=for-the-badge&logo=google&logoColor=white
[GoogleLogin-url]: https://console.cloud.google.com


[Sanity.io]: https://img.shields.io/badge/sanity.io-333333?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAgVBMVEVHcEzzc2jwSTrpVEfucWbpXVHyc2jcXVTjYVfoal/scWbsSDrzc2jyc2jsXFDucWfua2DvcmfwcmfvcWfvUELxcmfqSDrxcmfwcGXvSTrtcWbtSDruSTrqSDnsSDnycmjxcmfuY1fuSTrvcmftSTrxYFPqSDruSTrwY1fzc2jwSTop6xAnAAAAKXRSTlMA9PAiaxfRBAoSKl377kVNnnKTXP2wMKV+2DWKpk545LvvvId45TrLweyEbdoAAAB8SURBVAgdBcGFgcQgAACwVIHKufu9w/4DfgKElAKAuN33/XEZgHCa8lzlqgWa7+o0XI75OYDF7i/StW0DDnV9Gw8JIFxLKfXvtQHE8XauS/noAEL383UuI1h8rhNWuwdYTnlzGdr5fQdhM+VqznkVgbjd9/1rnQCE1EXwDwjuB6lOQQFHAAAAAElFTkSuQmCC
[Sanity-url]: https://www.sanity.io/


[TailwindCSS]: https://img.shields.io/badge/tailwind%20css-06B6D4?style=for-the-badge&logo=tailwind%20css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 


[Cloudinary]: https://img.shields.io/badge/Cloudinary-a1a0a1.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA21BMVEVHcEz0tS8OL1oOL1oAcboOL1oAcboKL2QJRYIOL1r0shsAcboOL1oGKVoAcboAcboEcbgAcbsHUYwKLFsBcroMLVrbgSbbgibzsyIAcbsAcboAcbwOL1oOL1oAcLwEcbj2rhsOL1oOL1rolCHy2GYAcboAcbsAcboAcboILFsAcLrggiPcgiYKLVvzsyDrnCD64GXqrBzy2WXysSL832X0shsAcbqffU4AcboAcbr9hQ/uph70shvagify2GXbgib0shvy2GXy2GXy2Wfy2WcUebPyAAHbgiby2GXUbCP0AAAARnRSTlMABHRvxwW/Cwdp/TFlGSR7X1IBEkQlvrddb40XQV4RWQ+GfiSroJU70jBjb81SZxYZLNVWJOOtHrFNDEW8n27ut7bux4Rvn2ei3QAAAO1JREFUeNpiIBkAGp0GNAdiKJyMHbcds7bW9v0vVPPjxnnvl+e3AhxelShWmj660fhlkSicAmD0FPsE81CH7J+oSQ/FttIit/uP1wnau5d+58P+oA+zbCOAAyXdFm0tfKj9Dh6f3qZwAsC9Fu6KCaz/1kaWNfqavcBE25olWrotNiyrMft7h7bi7fPgfXH++VdxDe09efr8Wp8vl43qo/ruGduSqgMwLsusnI4niwXcwYzYiYWr66w73Fwuc5muAiG5cmEWw1zKC8mUcjk2GdAdxzEdU5ZN2YxMWYoieaepqvp2GoZq6IbaFeD/Yw281BWp+nFYjQAAAABJRU5ErkJggg==
[Cloudinary-url]: https://cloudinary.com/

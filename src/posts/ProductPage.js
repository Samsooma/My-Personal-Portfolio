import { Grid } from '@mui/material';
import React, { Component } from 'react';
import {useEffect, useState} from 'react';
import './ProductPage.css';

function ProductPage()   {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div>
          <h2>
            Why Youtube is one of my favorite products!
          </h2>
          <div className="productPageContent">
          <Grid container sx={{justifyContent:'center'}} xs={9} md={5} lg={5}>
            <p>
            <b> Note: </b>This article is intended for those interested in Product Managmemt and was used to apply for those roles, so keep that context in mind while reading this!
            </p>
            <p>
            I’ve been an active user of Youtube since 2009. I remember when video responses still existed and parodies, covers and skits as well as Minecraft tutorials were popular on the platform. It started out as a video-sharing platform and has blossomed into much more with now 2 billion active users and over 500 hours of videos uploaded every minute.
            <br/>
            <br/>
              For the first time in a decade, Pepsi will not be sponsoring the Super Bowl halftime show. This is because it intends to move towards digital platforms. YouTube is one of the biggest digital platforms that exist today. YouTube was introduced in 2005 with “Me at the Zoo” and over the past decade has taken the world by storm with users now watching 6 billion hours of videos every month. Some of the most popular references to the internet cat videos, double rainbow, jazz hands, and the infamous rickrolling as well as popular musicians have had their start on Youtube.
              <br/>
              <br/>
              As the digital advertising market grows, advertisers are more aware that cable televison usage has declined from 76% in 2015 to 56% in 2021. The relationship between Youtube and televison views over the past few years have developed interesting patterns. Content that was traditionally on televison made its way to Youtube and that substantially increased Youtube views on popular content from televison. Popular content from televison shows on Youtube also translated to traditional television views.
              <br/>
              <br/>
              Now Youtube serves as an educational and entertainment-filled platform with the ability to give any person with a laptop, a voice, and a chance to share their vision with the world. An interesting part of Youtube as a platform is the content creator and content consumer relationships with Youtube. This might be one of my favorite aspects of Youtube. Depending on what lens you view Youtube from you will get an interesting perspective. As a content creator, you can publish content, view analytics, collect advertising revenue and interact with the audience. As a content consumer, you can view and share content as well as join many online communities.
            </p>
            <h3>
            Reason 1: Youtube is global community
            </h3>
            <p>
              I’ve always loved learning about people and have found that to be one of my biggest joys when moving to a new place. Growing up in Dubai, I found Youtube to be my connection to so many other different cultures. This connection was a raw and minimally edited version of the clean and sometimes unrealistic version on TV. Youtube was a way for people to connect globally and learn things that weren’t possible for them to see before. Anyone with a camera around the world could now create content. Whether it be on their phone or a professional camera.
              <br/>
              <br/>
              Youtube’s comment section is one of the most rewarding and perhaps educational features for users. The comment section serves as a medium for people to share their thoughts on the video and connect. Users would get a lot of likes on their comments and feel validated that many others on the platform share the same sentiment. The comment section however did also host negative or “troll” comments which sometimes prompt creators to turn off their comments altogether. Youtube’s community became so strong that conventions like Vidcon and Playlist Live were born. This was important for the content creators and the content consumers as the online connection became an in-person connection.
              <br/>
              <br/>
              Youtube Rewind was a fan favorite for many years. Users would wait every December to see what defined Youtube that year.
            </p>
            <h3>
            Reason 2: Youtube is a platform for creators
            </h3>
            <p>
              Youtube became one of the first platforms to establish a creator fund for the content creators on their platform through the YouTube Partner Program. This became a novel model for independent creators that allowed them to produce content and send it out to billions of users while consistently earning an income with the click of a button. This model was established in the form of advertising revenue through monetized video views, collaborations and sponsors, and subscriptions. In addition to creating an income for many creators on the platform, Youtube became an alternate way of gaining a following outside of TV and Cinema. It was very unique from the alternatives because the content creator initially took on the role of a producer, an actor, an editor, and a marketing team.
              <br/>
              <br/>
              Youtube Analytics is an important part of each Youtube creator’s platform. It allows them to monitor channel growth and content interest among their audience. They can see their audience demographic, how many viewers are subscribed, and the amount of returning or new viewers and much more. An important aspect of monitoring content success is monitoring where views are coming from or the Traffic source. This can help inform the creator whether users are searching for their video, if its on the home page or users are accessing it through a link. This information is integral to each creator on the platform as it allows them to create the content that helps grow their channel and overall supports their content strategy.
              <br/>
              <br/>
              These features created a unique business model where creators can ship content directly to consumers.
            </p>
            <h3>
            Reason 3: Youtube is a tool of learning for everyone
            </h3>
            <p>
              Youtube Search
              Many people look to Youtube videos whether they need a biology crash course or to learn how to put a piece of furniture from Ikea together. With almost 800 million videos and 37 million channels on Youtube, Youtube Search shows users the most relevant information. Search results are tailored to each user based on their watch history. If a user consistently watches videos on Python, the coding language, a quick search on Python will render results related to the programming language. A quick search for a user that has been consistently watching videos about the animal will receive search results with the animal.
              <br/>
              <br/>
              Youtube Search has grown to be huge part of the global community and everyone around the world uses it differently. My family in Egypt loved looking up clips from their favorite movie or TV show when they were all primarily hosted on Youtube. My mother uses Youtube to search for different ways to lead a healthier lifestyle. My professor broke her window and thought it would be more cost effective to search for a Youtube video to walk her through instructions on how to fix it than pay someone to come fix it. I personally have also used Youtube Search to help me in almost all of my college classes. Youtube has become a product where anyone can go to learn about almost anything. It has become a hub of knowledge that is accessible and available to anyone with access to the internet.
            </p>
            <h3>
              Future outlook
            </h3>
            <p>
              A popular phrase that has been popular when referring to spending hours watching videos on Youtube is falling down the “Youtube rabbit hole.” A typical viewer might search for a video, watch that video and potentially watch one or a few of the suggested Youtube videos. These are videos suggested to the viewer by Youtube that they think this particular viewer will enjoy.
              <br/>
              <br/>
              How are videos suggested on Youtube? Youtube suggested videos are curated from each user’s previous activity on the platform. Youtube uses previously watched videos, overall watch history, and related topics to inform what videos are suggested next to the video currently being watched.
              <br/>
              <br/>
              While related topics and previously watched videos are a good predictor of what a user would be interested in watching next, the discovery of new content that the user has not been exposed to will help introduce the viewer to new videos they didn’t think to search for or watch before. A user may be interested in watching something about the newest Stranger Things season and then see a video of the best new tech solution and grow interested in clicking that genre and discovering more through there. This introduces the user to new content and increases overall watch time. Adding recommendations that may be outside a user’s typical interactions will keep the user on the platform as they explore other interests and fall down the “Youtube Rabbit Hole.”
              <br/>
              <br/>
              Another improvement to Youtube would be removing the dislike button. Youtube has recently set the number of dislikes to private to prevent dislike-attacking behavior. Typically users choose to like videos they would like to find again later on or to show their support for content. While the dislike button may show creators more metrics on how their video is performing, what is the number of dislikes actually reflecting? You can see how well your video is doing by the number of likes and subscribers (similar to popular platforms like Instagram and TikTok). If the user is able to monitor the success of their content based on the likes and subscribers, dislikes don’t offer much information to the creator. While I could see dislikes serving as form of feedback, comments are a lot more informative to creator to help them improve their content.
            </p>
            <h3>
            Competitors
            </h3>
            <p>
              While Youtube may not have many direct competitors, TikTok is one of Youtube’s biggest competitors today in terms of overall engagement rates. Engagement rates are measured by how a user actively interacts and stays on a given application. TikTok has been ranked the most downloaded application in the US since 2020. I would argue that TikTok’s rapid growth is creating competition for the number of hours spent on Youtube. Content creators can make shorter content to capture a new audience and content consumers can view more content that is tailored to their liking.
              <br/>
              <br/>
              While TikTok may be competing with Youtube in engagement rates, TikTok does not provide users with the same affordances that the Youtube platform does. Youtube affords its content creators the ability to create longer-form content and long-term stability on a platform. In addition to Youtube’s creator features, Youtube now also grants the creators on their platform to create shorter form content through Youtube Shorts.
            </p>
          </Grid>
          </div>
        </div>
    );
}

export default ProductPage;

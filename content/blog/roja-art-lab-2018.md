---
title: "Roja Art Lab 2018"
date: 2018-07-23T12:02:36+03:00
draft: false
---

Roja Art Lab is an annual gathering of international artists in Roja, Latvia. For two weeks they are exploring the context and creating artistic reflections. In this article I will try to summarize my experience at the Roja Art Lab 2018 as I am on the list of 10 participants this time.

<!--more-->

The Roja Art Lab residency seemed as a nice turn after the 6 month long Fab Academy course in Barcelona. I arrvied in Riga two days before, on July 20. The next day I went to Estonia to explore the results of two international art residencies there. [MAAJAAM](https://www.maajaam.ee/) is a new media oriented residency space that includes a barn-like makerlab. [MoKS](https://moks.ee/) is a residency where artists are encouraged to work with the context of the landscape and features of the local environment.

I arrived in Roja on Sunday, July 22. First thing was to visit the Roja Art Lab venue and meet with the host Māris Grosbahs. After receiving instructions and checking in the hotel, I went to the seaside which is exceptionaly beautiful and calming.

I met a part of other artists that came here for the residency. After a brief small talk it was clear that there may be many options for possible collaboration. After a longer conversation during the opening barbecue, I realized that the plan for most of the participants is to do research during the first week and practical work for the rest of the time.

I was among the majority and was also planning to do research first and decide on what and where to do during the second part of the first week. 

On Monday we met at 12:30 to visit the mayor of Roja–Eva Kārkliņa. We introduced ourselves and could explore the available rooms in the building of the Roja district council office. After lunch we traveled to see the seaside at Melnsils  and the White Dune in Ģipka, all North-West from Roja. Meanwhile Māris showed us the artworks done by participants of previous Roja Art Lab activities.

After helping to set up the internet connection at Roja Art Lab main venue, I decided to do research. Is there data about Roja available on the internet? What can it tell and what meaning can it convey? 

I found out that there is a [Open Data Portal](https://data.gov.lv/eng) in Latvia and they even have [developer plugins on GitHub](https://github.com/dpp-dev). I was looking for data that would include Roja and I found a few. The ones containing the most consistent data set were the income and expenses of Roja County. The relation between collected income tax and its relation to expenses towards education and religion seemed the most interesting for me. 

In the meantime I was looking for a place and possible spatial context for the show. Since the digitally fabricated triangular screens it seemed that it would be best to use wilderness as the background for the data-based visuals to stand out. The white geometric surfaces would provide enough reflection to create a feeling of mystery. Anthony, Andy and Darren were planning to place their pieces near to each other and it seemed like a good idea to create a cluster of artworks around the same area. Still I was expecting to keep the feeling of randomness and surprise regarding the location.

An interesting turn in terms of planning and organising work was the announcement that there is going to be a pop-up exhibition on the beach on Friday (27 July) and a longer one starting from Saturday (28 July) at the Roja Info Center. I was planning to leave for a hacker camp in the Lithuanian forests that time. I offered to teach to set up my piece, which would involve projection mapping, and was happy that most of the participants were willing to collaborate.

From the artist talks on Tuesday evening, where both of the Karlas (Karla Kracht and Karla Brunet) were presenting their work, I realized where the enthusiasm comes from. Both of the artists have been using projection mapping in their projects in one way or another. They were all excited that Raspberry Pi minicomputer could be used in their artistic practice.

Wednesday was a very warm day and it was hard to find a place for doing computer related work. I decided to take one of my triangle surfaces and walk around to make photos with the surface in different places. Below you can see a shot with the triangle sitting in the sand of the Roja beach and resting against the surrounding vegetation with the Baltic Sea in the background. 

![Triangle in front of the beach](../media/roja-art-lab-2018/triangle-a.jpg)

Later I decided to make a field test and found a 10x10cm thick wooden beam that I cut 45deg at the end with a handsaw. I attached one of the triangles to the 45deg cut by using wood screws and dug the other end of the beam into the ground approximately 50cm deep.

![Triangle attached to the beam in ground](../media/roja-art-lab-2018/triangle-beam-test.jpg)

That worked fine and looked more or less as expected. I realised that single triangle has not enough visual mass and it would be much better if I used all three in the next iteration. 

To close the first development cycle I had to add the projection layer and map it to the surface. I sarted out with an application that I build as an example for my last projection mapping workshop at Fab14. It features 10 rectangles that bounce off the sides of the screen at random speeds. I added a guide drawing feature to lay out the mapping elements virtually first. I used a 500x500px texture with the precise layout of the surface to use for texture mapping. The generated textures are and will be drawn on a 500x500px canvas as well.

<video width="800" height="450" loop controls>
  <source src="../media/roja-art-lab-2018/first-mapping-layout.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

Next step would be transfer the code to a Raspberry Pi and map it on to a real surface. It is planned today that we go to the Roja Information Center to set up our pop-up exhibition. Since I am leaving for two days on Thursday to run a workshop at the [No Trolls Allowed](https://notrollsallowed.com) hacker camp in Lithuania, I will have to show the other participants how to adjust the mapping if it goes wrong.




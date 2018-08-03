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

I was back on Sunday evening with a bag full of inspiration. Additionally to running a minimal version of the projection mapping with the Raspberry Pi workshop I joined lectures and learned basics of GLSL shader language as well as did functional programming experiments with C++.

On Monday we worked on the plan for the final show on August 4 in the morning. Then we went for a walk to do another review on the possible locations. This is when my conceptual part of the brain started to spin. I remembered about my past ideas of organising a workshop week to build objects from space. They would appear at random locations in certain areas, such as Roja. I would do a series of fictional interviews with the locals about what happened.

During the meeting we also decided to make an on-line event page. Everybody was invited to share teasers on their work. I got an idea to make a short video to introduce the idea of the alien object. Rumours have to be represented first. There has to be dynamic music in the background. A voice-over telling the story. Will see if I get that far as there is not so much time left.

## Battery Test

On Tuesday I went to Talsi (closest city with an electronics store) to look for a motorbike battery. I went to several stores and ended up buying a 12V children car battery with 19AH capacity. I designed a simple bash script to test how long the system runs. 

```
@reboot echo "BOOT $(date)" >> "/home/pi/boot.log"
* * * * * echo "ISON $(date)" >> "/home/pi/boot.log"
```

On boot the time along with the key `BOOT` would be recorded to the `boot.log`. Every minute current time would be added to the same file with the key `ISON`. 

```
BOOT Tue 31 Jul 14:43:21 UTC 2018
ISON Tue 31 Jul 14:44:08 UTC 2018
ISON Tue 31 Jul 14:45:01 UTC 2018
ISON Tue 31 Jul 14:46:01 UTC 2018
...
```

After I came back from a walk the projector was off. After reading the log file, I found out that the system was on until 16:00. The last boot time before that was 14:43 which means the system was on for **1 hour and 17 minutes**.

The problem here was that I did not know if the battery is full. I got a car battery charger to charge it during the night in order to try out one more time the next day.

## Data

While working on the animation I noticed an interesting fact about the data. When numbers are normalized (translated into values between 0 and 1 using the maximum value in the data set as a reference) things contrary to your assumptions reveal themselves. I realized that expenses towards education almost match and in some years even surpass income generated by the income tax. See below.

```
Year    Income      Education   Religion
---     ---         ---         ---
2008    0.989083    0.727913    0.408389
2009    0.640882    0.834081    0.386507
2010    0.785822    1.000000    0.228368
2011    0.569786    0.615419    0.12754
2012    0.621657    0.587346    0.176361
2013    0.725099    0.634199    0.176572
2014    0.791658    0.632954    0.147899
2015    0.796871    0.670498    0.149679
2016    0.798377    0.662914    0.161404
2017    0.836357    0.763318    0.443935
```

in the data extract above you can see that in years 2009, 2010 and 2011 expenses towards education surpass income. 

[EN]

## Roadside Object

Someone else have visited Roja to leave it. It is not known whether there was a reason for the visitation, but if examined closely, one can notice patterns that reveal data structures about the amount of collected income tax from the inhabitants of Roja and how it relates to expenses towards education and religion by the local government.

Since recently citizens of Latvia have access to open data related to their own country. Data sets cover areas such as health, energy, culture, science and more. It can be accessible through the internet via the address data.gov.lv. This installation is an artistic data exploration with the intention to motivate to review personal methods of forming an opinion and an invitation to take a look at ourselves from far above.

The author, Krisjanis Rijnieks, is a new media artist who explores the possibilities of the modern day media and fabrication technology to create potentially thought-provoking artefacts to penetrate mindsets prone to hatred rooted in grim perception of subjectively-declared absolute truth. 

[LV]

## Objekts ceļmalā

Kāds cits apmeklēja Roju, lai to šeit atstātu. Nav zināms vai vizītei bija iemesls, bet veicot detalizētāku izpēti, var redzēt pazīmes, kas atklāj datu struktūras par no Rojas iedzīvotājiem iekasēto ienākuma nodokļa apjomu un kā tas mijiedarbojas ar vietējās pašvaldības tēriņiem izglītībai un reliģijai.

Jau kādu laiku Latvijas iedzīvotājiem ir pieejami atvērtie dati par savu valsti. Datu kopas aptver tādas jomas kā veselība, enerģija, kultūra, zinātne un citas. Šiem datiem var piekļūt izmantojot internetu un adresi data.gov.lv. Šī instalacija ir mākslinieciska atrasto datu izpēte. Tās mērķis ir motivēt veikt personīgo viedokļa veidošanas metožu revīziju kā arī aicinājums paskatīties uz mums pašiem no tālas augšas.

Autors, Krišjānis Rijnieks, ir jauno mediju mākslinieks, kurš pēta mūsdienu mediju un ražošanas iespējas, lai radītu potenciāli domas provocējošus artefaktus pārāk nopientas pašpasludinātas patiesības ietekmēta un naidā marinēta domāšanas veida caururbšanai.

## Resources

http://profizgl.lu.lv/mod/book/tool/print/index.php?id=16790#ch3364


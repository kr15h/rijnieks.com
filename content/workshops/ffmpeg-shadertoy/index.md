+++
title = "Using Shaders as Video Filters with Shadertoy and FFmpeg"
date = "2022-04-24T12:00:00+03:00"
type = "workshop"

[license]
name = "CC BY-NC-SA 4.0"
link = "https://creativecommons.org/licenses/by-nc-sa/4.0/"
+++

{{<video src="media/ffmpeg-shadertoy_1080.mp4" poster="media/ffmpeg-shadertoy_1080.jpg">}}

In this workshop, participants will learn how to use the open-source multimedia processing software [FFmpeg](https://ffmpeg.org/) to enhance videos with unique filters using the GLSL shader repository [Shadertoy](https://www.shadertoy.com/).

FFmpeg is a powerful multimedia processing tool that can convert a video to any format. It can crop, scale, and apply filters, and it can do it really fast. It is free, open-source, and used by many commercial and free software products. It is a core part of the famous video player [VLC](https://www.videolan.org/vlc/), and YouTube, among many others, is using it to process videos.

Shadertoy is a community-driven shader playground that one can use to learn the [GLSL](https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)) shading language and share the source code. Shaders are used mainly in 3D graphics production (games, virtual, and web experiences); however, they can add value to video production.

We will cover setting up an enhanced version of FFmpeg during the workshop and use shaders from Shadertoy as filters to render enhanced video clips. At the end of the workshop, we will gather the best examples and use them to set up a show.

##  Prerequisites

Participants are expected to bring their own laptop and should be able to install new software on their systems (administrator privilege). Please free up some disk space for the workshop. 50 GB is a good start.

Linux (Ubuntu or Debian) operating system is required for this workshop. Dual-boot might work, but virtual machines are not going to work this time. Old laptops are cheap these days and Linux works well on them. Good brands are Lenovo, Dell and HP. In case you have no clue where to find them, check the list below.

- [Refurbished laptops in Latvia (Elektronika 24)](https://www.elektroonika24.lv/produktu-kategorija/lietoti-portativie-datori/?orderby=price)
- [Refurbished laptops in Latvia (AiO)](https://aio.lv/lv/portativie-un-personalie-datori/mazlietota-tehnika/lietoti-portativie-datori?price=100,300&category-id=197)
- [Cheap laptops in Latvia (Baltic Data)](https://www.balticdata.lv/lv/portativie-datori)
- [More refurbished laptops in Latvia (Datamarket)](https://ladetaji.lv/en/)
- [Refurbished laptops in Berlin](https://www.notebookshop-berlin.de/)
- [Refurbished laptops in Helsinki](https://cimos.fi/)

Follow the [Install Ubuntu Desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop) guide to prepare your old new computer for the workshop.

Participants are expected to have basic understanding of producing their own video files. Videos made with a phone are fine, the same goes for 3D renders and generated videos. If you are new to Linux, try [Kdenlive](https://kdenlive.org/en/) for video editing and [Blender](https://www.blender.org/) for creating 3D graphics.

Basic knowledge of shell scripting is recommended as we will mostly explore ways of manipulating videos using the commandline.

## Workshop

It is a 3 day workshop. There is a clear goal for every day of it.

### Day 1

We are going to set up our Linux systems with a custom version of FFmpeg that accepts Shadertoy GLSL code input. Go to the [ffmpeg_shadertoy_filter](https://gitlab.com/kriwkrow/ffmpeg_shadertoy_filter) GitLab repository and follow the instructions.

### Day 2

Fins all the good shaders you can on [Shadertoy](https://www.shadertoy.com/results?query=&sort=hot&filter=webcam). Apply them to short video clips of yours using your custom-compiled version of FFmpeg.

### Day 3

Setting up the show. We will make several video loops, media players and projectors.

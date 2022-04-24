+++
title = "Using Shaders as Video Filters with Shadertoy and FFmpeg"
date = "2022-04-24T12:00:00+03:00"
+++

{{<video src="media/ffmpeg-shadertoy_1080.mp4" poster="media/ffmpeg-shadertoy_1080.jpg">}}

In this workshop, participants will learn how to use the open-source multimedia processing software [FFmpeg](https://ffmpeg.org/) to enhance videos with unique filters using the GLSL shader repository [Shadertoy](https://www.shadertoy.com/).

FFmpeg is a powerful multimedia processing tool that can convert a video to any format. It can crop, scale, and apply filters, and it can do it really fast. It is free, open-source, and used by many commercial and free software products. It is a core part of the famous video player [VLC](https://www.videolan.org/vlc/), and YouTube, among many others, is using it to process videos.

Shadertoy is a community-driven shader playground that one can use to learn the [GLSL](https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)) shading language and share the source code. Shaders are used mainly in 3D graphics production (games, virtual, and web experiences); however, they can add value to video production.

We will cover setting up an enhanced version of FFmpeg during the workshop and use shaders from Shadertoy as filters to render enhanced video clips. At the end of the workshop, we will gather the best examples and use them to set up a show.

##  Prerequisites

Participants are expected to bring their own laptop and should be able to install new software on their systems (administrator privilege).

Linux (Ubuntu or Debian) operating system is recommended for this workshop. [Ubuntu Linux](https://ubuntu.com/) can be run [as a virtual machine](https://ubuntu.com/tutorials/how-to-run-ubuntu-desktop-on-a-virtual-machine-using-virtualbox) on a Windows or MacOS system.  

Participants are expected to have basic understanding of producing their own video files. Basic knowledge of shell scripting is recommended.

## Workshop

Detailed workshop description to be published here soon.

{{<code lang="bash">}}cat /etc/workshop
touch inline.txt
ffmpeg -i video.mov video.mp4{{</code>}}

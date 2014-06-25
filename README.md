![Moments logo][1]

# Moments

## [Winner][2] of the 2014 Editors Lab Hackdays Final at GENSummit2014

Original Team:

+ [Josh Boswell](https://twitter.com/JoshTBoswell) (presentation; development)
+ [Ændrew Rininsland](https://twitter.com/aendrew) (development; documentation)
+ [Eoin Tunstead](https://twitter.com/eointunstead) (design)

### Moments is a Polymer component and light backend

#### Polymer component

![Polymer][3]

See the [`moments-video` component page](http://times.github.io/moments-video) for more information.

##### Getting Started With the Polymer Element

Check out the [Polymer reusable elements page][5] to help get you rolling.

#### [Light backend][4]

Load an article and a video into [cms.html][4]. Choose the in and out points for
the video, then select some body copy. Click "Add moment" to insert a `moment-video`
element. Click "Publish to CMS" to save to the CMS (currently it just dumps the
html into a localStorage store; you'll need knowledge on how to extend your CMS if
you want to use it with that. WordPress plugin coming soon!). Visit [article.html][5]
for an example preview (this just reads the contents of the aforementioned localStorage store).

### Installation

+ `$ bower install` to grab the `moments-video` Polymer component.
+ `demo/cms.html` is intended to demonstrate a possible interface.
+ But basically, you need to insert `<moments-video>` tags in your content.
+ See the [`moments-video` component page](http://times.github.io/moments-video) for more information.

## HELP WANTED

We're wanting to port this to WordPress ASAP. Please see [this issue][6] if you wish
to help with that or other CMSes!

[1]: ./momentslogo.png
[2]: http://www.globaleditorsnetwork.org/programmes/editors-lab/season-2013-2014/editors-lab-hackdays-final/
[3]: http://www.polymer-project.org/images/logos/lockup.svg
[4]: http://times.github.io/moments/demo/cms.html
[5]: http://www.polymer-project.org/docs/start/reusableelements.html
[6]: https://github.com/times/moments/issues/2

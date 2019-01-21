This plot on the school safety page shows a Gallup historical trend dataset on school safety. The original data is here: https://news.gallup.com/poll/1612/education.aspx (the question on whether the parent fears for oldest child's safety at school)
The visualization I modified is here: https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0.
I also took pieces from here: http://bl.ocks.org/d3noob/38744a17f9c0141bcd04 (adding dots).

Obtaining the data consisted simply of typing the original Gallup data into two csvs, gun_feel_safe.csv (listing the percentage who respond that they feel their child is safe (the percent who feel safe is labeled as "no_safe", which was a poor decision--the answer to the question was no, they don't fear for the child's safety, but the label is misleading. I didn't bother changing it because the site visitor doesn't see it)) and gun_feel_unsafe.csv (listing the percentage who respond they fear for the child's safety). I typed the date in the format the d3 I was adapting used by default. I omitted one Gallup data point from 1977 so as not to throw off the graph's scale, and made a note under the graphic on the page.

Because this d3 uses d3 version 4 and others on the page use version 3, I couldn't get it to run directly on the page, so the image their is a .png. The js is actually running on the embed_practice.html dummy page, where I took a screenshot of it to make the .png.

The javascript file is gun_opinion_chart.js. I made a number of changes to the d3 code, which are marked in the .js file. The most important are adding a second line and adding points on the data points. I also did some superficial stuff, like changing the colors.

The .css is gun_opinion_chart.css. The major changes I made there are to add different classes for the two different lines and to add classes for the bullet points on the data points.
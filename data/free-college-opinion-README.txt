This plot breaks down opinions about free college between men and women and between age groups. It's really two d3s; they're scripts/loan_poll_1 and scripts/loan_poll_2. The data for these d3s is, as in the block from which they're modified (http://bl.ocks.org/mstanaland/6100713) directly in the .js files.

The data come from the question about free college in this gallup poll https://news.gallup.com/poll/191255/americans-buy-free-pre-split-tuition-free-college.aspx. Putting them in their current forms in the .js files consisted just of manually typing them in.

There is no corresponding css. I cut that out and discovered I liked how it looked when the existing css's were applied (enough to not deal with style conflicts, anyway).

The changes we made to this visualizations are included in the .js files as comments. Briefly, we altered the number of columns, altered the colors, altered the type of x input (from years to categories), altered the widths, altered the margins, altered some labels, and wrapped it all in a function so it wouldn't mix its variables up with those from other scripts.
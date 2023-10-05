## Project Title: An Analysis of the Top 250 Movies on IMDB
### Team number: Group 3
### Team Members: Lydia Zuo, Aadhithya Prakash, Daryl Pinto, Supreet Ahuja
### Task Distribution
Supreet & Aadhithya - Cleaning CSV file on Pandas, Creating the Python Flask API to execute MongoDB queries and output JSON file.  

Daryl & Lydia  - Creating index.html and style.css files for the Dashboard

All Members - Writing JavaScript code to generate the Charts using JSON file from Flask 

### Technologies Used: 
*Python
*MongoDB
*MongoCompass
*Javascript
*Chart.js
*HTML/CSS
*Flask
*Github Pages 


This project focuses on analyzing the top 250 IMDb movies of all time. The goal of this project was to conduct a thorough and multifaceted analysis of the top 250 movies. This analysis aims to uncover valuable insights and patterns within the dataset, which includes various attributes such as box office revenue, budget, directorship, and ratings. These were the questions we were looking to answer: 

1) How has the average box office revenue of the top 250 movies evolved over the years?
2) Is there a correlation between the average budget of movies and their corresponding box office revenue on an annual basis?
3) Do movies with higher ratings tend to generate higher box office revenue?
4) Who are the top 10 directors in terms of box office earnings, and what are their average movie ratings?

The dataset was downloaded from Kaggle, and various data analysis techniques were applied, including Python's Pandas library, Python Flask API, and MongoDB aggregation pipeline in order to extract the required information from the CSV file. Once obtained, we created endpoints to help export the data into various Flask Endpoints. We then linked the Flask endpoints to our Javascript file, and extracted the data to create our charts through Chart.js.  

### The Process: 
![image1](https://github.com/AADHIP09/Project_Group_3/assets/135389893/645d8aa3-c5ad-4b1e-bb0d-7641c21ac02f)

### The Results: 

1) How has the average box office revenue of the top 250 movies evolved over the years?

To find the answer, we created a line chart showing the Average Box Office Revenues for each year, starting 1921. 

![image2](https://github.com/AADHIP09/Project_Group_3/assets/135389893/799569d0-a962-4f2e-9ed8-a82e97d9a3fe) 

Inference: From the data, we were able to identify the overall boom period for Hollywood started from the 1990s. The most obvious spike in the Revenues can be noticed in the 1990s, and we were able to attribute this to the Box Office success of movies such as Jurassic Park, The Lion King, Forest Gump, Gladiator, all of which grossed over $500 Million in the Box Office. The early 2000s saw another rise in the average Box office collections, due to the influx of franchise movies such as Lord of the Rings Trilogy, The Batman Series, and a lot of animated movies including but not limited to Toy Story, Wall-E, Finding Nemo, Up, The Incredibles, Ratatouille and more. In the last decade, the Box Office revenues grew even more, powered by multiple comic book-based Superhero movies such as Avengers: Endgame, Avengers: Infinity War, Spiderman: No Way Home, Logan, and more animated movies such as Coco, Interstellar and more. 

2) Is there a correlation between the average budget of movies and their corresponding box office revenue on an annual basis?

To find the answer to this question, we used stacked bar charts showing the Average Box Office Revenues, and the Average Budget for each year, starting 1921. 

![image3](https://github.com/AADHIP09/Project_Group_3/assets/135389893/35a726fd-0379-4451-b1e3-f8722b95538f)

Inference: When observing the overall trend in the industry, it would appear that the Average Box Office revenues for a majority of the years were higher than the Average Budget for the year. However, there were some deviations from the trend. Most notably, in the year 1997, Princess of Mononoke, directed by Hayao Miyazaki, which cost over $2.4 Billion to make, flopped severely in the Box Office, grossing in only $171 Million despite being marketed by Disney. Another interesting observation from the chart is the year 2020, where both the Budget and the Box Office were significantly lower. This can be explained by the fact that movie theaters all over the world were closed for lengthy periods (sometimes months) due to the Covid Pandemic. With revenues uncertain, it would appear that movie studios tightened their purse strings, due to which a significant fall can be observed from the highs of almost $1 Billion in 2019. 

In conclusion, the general trend for the industry has seen Box Office revenues justify the growing Budget. However, the 1997 example of Mononoke serves as a precaution to those contemplating investing billions into making a movie. 

3) Do movies with higher ratings tend to generate higher box office revenue?

   To answer this question, we generated a scatter plot to show the relationship between Box Office Revenues and Ratings for all years, starting 1921. 

![image4](https://github.com/AADHIP09/Project_Group_3/assets/135389893/534821ae-7792-425a-b68c-886f0dc8255c)

Conclusion: A movie can receive very different ratings from critics and audiences. Some films may be critically acclaimed but not make an impression or resonate with the general audience, or vice versa. Secondly, effective marketing and promotional campaigns can significantly impact a movie's box office performance. A well-executed marketing strategy can create buzz and anticipation, leading to higher ticket sales, even for movies with mixed or poor ratings. Importantly, we conducted further analysis to find that the avg Box Office collection for the movies with lower Rating scores (8.0 to 8.3) was $230 million, while the average Box Office collection for the higher-rated movies (8.8 to 9.0) stood at $225 million. Thus, we were able to confirm our previous assumptions, and conclude that a movie's ratings do not significantly affect its Box Office earning potential.  

4) Who are the top 10 directors in terms of box office earnings, and what are their average movie ratings?

![image5](https://github.com/AADHIP09/Project_Group_3/assets/135389893/ac653afa-6a05-4bed-bdec-2d28a583a795)

Inference: We generated a Bubble Chart to help us answer this question. The x-axis denotes the Average Box Office Revenues for each of the Top 10 highest-earning Directors, while the Y-axis denotes the budget. The radius of the Bubbles is denoted by the count of movies per director.  


We have hosted our Dashboard via Github Pages: https://aadhip09.github.io/Project_Group_3/code/ 
![image](https://github.com/AADHIP09/Project_Group_3/assets/135389893/d5b6b5af-ca40-44b6-8dc2-7de173867b15)


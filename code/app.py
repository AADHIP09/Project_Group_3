from flask import Flask, jsonify, request, Response
from pymongo import MongoClient
from bson.json_util import ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
#app.json_encoder = MyEncoder

# Replace with MongoDB connection details
mongo_client = MongoClient('mongodb://localhost:27017/')
db = mongo_client['movies_db']
collection = db['movie_info']

@app.route('/')
def index():
    return 'Type: "/results" + #graph'

@app.route('/movies', methods=['GET'])
def get_movies():
    movies = list(collection.find({},{'_id':0}))
    print(movies)
    return jsonify(movies)

@app.route('/results2', methods=['GET'])
def results2():
    group_query = {'$group': {'_id': "$year",  'Box_office':{'$sum':"$box_office"}}}
                          
    sort_values = {'$sort': {'_id': 1}}

    pipeline = [group_query, sort_values]
    results2 = list(collection.aggregate(pipeline))
    return jsonify(results2)

@app.route('/results3', methods=['GET'])
def results3():
    group_query = {'$group': {'_id': "$year",  'Budget':{'$sum':"$budget"}}}
                          
    sort_values = {'$sort': {'_id': 1}}

    pipeline = [group_query, sort_values]

    results3 = list(collection.aggregate(pipeline))
    return jsonify(results3)

@app.route('/results4', methods=['GET'])
def results4():
    group_query = {'$group': {'_id': "$Director",  'Box_Office':{'$sum':"$box_office"}}}

    sort_values = {'$sort': {'Box_Office': -1}}

    pipeline = [group_query,sort_values]

    results4 = list(collection.aggregate(pipeline))
    return jsonify(results4)


@app.route('/results5', methods=['GET'])
def results5():
    group_query = {'$group': {'_id': "$Director",  'Avg_Box_Office':{'$avg':"$box_office"}}}
                    
    sort_values = {'$sort': {'Avg_Box_Office': -1}}

    pipeline = [group_query,sort_values]

    results5 = list(collection.aggregate(pipeline))
    return jsonify(results5[0:10])

@app.route('/results6', methods=['GET'])
def results6():
    group_query = {'$group': {'_id': "$year",'AvgBudget':{'$avg':"$budget"},'count': { '$sum': 1 }, 'AvgBO': {'$avg':'$box_office'}}}

    sort_values = {'$sort':{'_id': 1}}

    pipeline = [group_query,sort_values]

    results6 = list(collection.aggregate(pipeline))
    return jsonify(results6)

@app.route('/results7', methods=['GET'])
def results7():
    group_query = {'$group': {'_id': "$year",  'Box_Office':{'$avg':"$box_office"}}}
                    
    sort_values = {'$sort': {'_id': 1}}

    pipeline = [group_query,sort_values]

    results7 = list(collection.aggregate(pipeline))
    return jsonify(results7)

@app.route('/results8', methods=['GET'])
def results8():
    group_query = {'$group': {'_id': "$Director",  'Avg_Rating':{'$avg':"$rating"}}}
                    
    sort_values = {'$sort': {'Avg_Rating': -1}}

    pipeline = [group_query,sort_values]

    results8 = list(collection.aggregate(pipeline))
    return jsonify(results8)

@app.route('/results9', methods=['GET'])
def results9():
    group_query = {'$group': {'_id': '$Director','count': { '$sum': 1 },'avgRating': { '$avg': '$rating' }}}

    sort_values = {'$sort': {'count': -1, 'avgRating':-1}}

    pipeline = [group_query,sort_values]

    results9 = list(collection.aggregate(pipeline))
    return jsonify(results9[0:10])

@app.route('/results10', methods=['GET'])
def results10():
    results10 = collection.find({}, {'box_office':1, 'rating':1, '_id':0})
    mylist=[]
    for r in results10:
        mylist.append(r)
    return jsonify(mylist)

@app.route('/results11', methods=['GET'])
def results11():
   results11 = collection.find({}, {'name':1, 'rank':1, '_id':0}).limit(10)
   movieName_list=[]
   for r in results11:
       movieName_list.append(r)
   return jsonify(movieName_list)

@app.route('/results12', methods=['GET'])
def results12():
    group_query = {'$group': {'_id': "$Director",'AvgBudget':{'$avg':"$budget"},'count': { '$sum': 1 }, 'AvgBO': {'$avg':'$box_office'}}}

    sort_values = {'$sort':{'AvgBO': -1}}

    pipeline = [group_query,sort_values]

    results12 = list(collection.aggregate(pipeline))
    return jsonify(results12[0:10])
        
    

if __name__ == '__main__':
    app.run(debug=True)
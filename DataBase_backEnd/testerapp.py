from flask import Flask, jsonify, request, Response
from pymongo import MongoClient
from bson.json_util import ObjectId


app = Flask(__name__)
#app.json_encoder = MyEncoder

# Replace with MongoDB connection details
mongo_client = MongoClient('mongodb://localhost:27017/')
db = mongo_client['movies_db']
collection = db['movie_info']

@app.route('/')
def index():
    return 'Welcome to my Project!'

@app.route('/movies', methods=['GET'])
def get_movies():
    movies = list(collection.find({},{'_id':0}))
    print(movies)
    return jsonify(movies)

@app.route('/results2', methods=['GET'])
def result2():
    group_query = {'$group': {'_id': "$year",  'Box_office':{'$sum':"$box_office"}}}
                          
    sort_values = {'$sort': {'_id': 1}}

    pipeline = [group_query, sort_values]
    results2 = list(collection.aggregate(pipeline))
    return jsonify(results2)

if __name__ == '__main__':
    app.run(debug=True)
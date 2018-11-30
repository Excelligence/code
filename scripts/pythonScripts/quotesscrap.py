import requests
from sendMail import sendMail
from bs4 import BeautifulSoup
from pymongo import MongoClient
client = MongoClient('mongodb://excel:3xcell@ds161446.mlab.com:61446/quotesapi')
db=client.quotesapi
quotes=db.quotes

post_data = {
    'author': 'Mahatma Gandhi',
    'quote': 'Be yourself'
}
#result = quotes.insert_one(post_data)
#print('One: {0}'.format(result.inserted_id))

author=input('Enter author name')
site=requests.get(f'https://www.brainyquote.com/authors/{author}')
soup=BeautifulSoup(site.content,'html.parser')

images=soup.find_all('img')
#print(images)
quotess=[]
for image in images:
    dict={}
    dict['author']='Mahatma Gandhi'
    dict['quote']=image.get('alt')
    #print(dict)
    quotes.insert_one(dict)
    #dict="{'author':'Mahatma Gandhi','quote':"+(image.get('alt'))+"}"
    #quotess.append(dict)
 #  quotes+= (image.get('alt'))
#sendMail('excelligence@mail.com','DGj4bA2_yC4ig8u',quotes)
#for quote in quotess:
 #   quotes.insert_one(quote)
print('succes')    

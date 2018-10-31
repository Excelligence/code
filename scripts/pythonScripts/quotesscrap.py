import requests
from sendMail import sendMail
from bs4 import BeautifulSoup
author=input('Enter author name')
site=requests.get(f'https://www.brainyquote.com/authors/{author}')
soup=BeautifulSoup(site.content,'html.parser')
images=soup.find_all('img')
quotes=""
for image in images:
   quotes+= (image.get('alt'))
sendMail('excelligence@mail.com','DGj4bA2_yC4ig8u',quotes)
print(quotes)

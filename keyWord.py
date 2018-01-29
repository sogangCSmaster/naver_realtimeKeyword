import re
import requests

result = re.findall('<span class="ah_k">(.*?)</span>', requests.get('http://naver.com').text)[:20]
print(result)

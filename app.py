import requests

api_key="2e548b34b1f9dc7dd5a972d0c507ac4b"
user_input= input("your city")
weather_data= requests.get(f"http://api.openweathermap.org/data/2.5/weather?q={user_input}&appid={api_key}")

print (weather_data.json())

if "cod"==weather_data:
    print("city not found")
else:
    weather = weather_data.json()["weather"][0]["main"]
    temp =weather_data.json()["main"]["temp"]
    print(user_input, "city is", weather, temp)
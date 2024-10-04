# Scroll issue in iOS

## Steps to reproduce the bug

1. `npm install`
2. `npm start`
3. Open an iOS simulator with iPhone 16, iOS 18.0 on your mac
4. In the simulator, open Safari and navigate to `localhost:3000`
5. Click on the first select and see that you can scroll on the list
6. Click on the second select and see that you **cannot** scroll on the list

## Additionnal information

- The second select is placed in an iFrame
- If you change the number of people to a bigger number (100 instead of 60 for instance), then the list if bigger than than the iFrame height and you can scroll a bit (but not the all list)
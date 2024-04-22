## Steps to start:

1. Yarn install in npm package
2. Add npm package to Host App by using commands below
   yarn add file:../react-native-syngenta-loyalty (if NPM package and host app are in the same folder)
   (or)
   yarn add git+https://github.com/syngenta-digital/react-native-syngenta-loyalty#BRANCH_NAME (by using Repo url & Branch name)

## Initialize NPM package:

To pass token, fontFamily from HostApp to npm package follow the below steps.

1. Import { intiLoyalty } from ‘react-native-syngenta-loyalty’ in App.js file.
2. Pass the names of the FontFamily as an object to ‘intiLoyalty function
3. And call intiLoaylty function from componentdidmount method

example:-
intiLoyalty (toke, { bold: 'NotoSans-Bold, regular: 'NotoSans', italic: 'NotoSans-Italic' })

## Loyalty Dashboard:

1. Add Import {LoyaltyTab} from ‘react-native-syngenta-loyalty’.
2. Add LoyaltyTab Component to the RootStack Navigation to open the Loyalty Dashboard screen.
   <RootStack.Screen
   name={DASHBOARD_SCREEN}
   component={LoyaltyTab}
   options={{ headerShown: false }}
   />

## Loyalty Component:

To display the Loyalty Component in particular screen follow the following steps

1. Import LoyaltyComponent from npm package as import { LoyaltyComponent } from 'react-native-syngenta-loyalty'.
2. Declare the LoyaltyComponent in render function as <LoyaltyComponent onViewMore={()=>{}} useName:””/>.
3. onViewMore prop was mandatory and if we need to pass data to npm package initially can pass them as props.
4. When the ViewMore button is clicked the function passed through onViewMore prop will be called.
5. In the function which we are passing through onViewMore prop write the logic to open the LoyaltyTab component.

## Adding GeoLocation in HostApp:

1. Add following package in HostApp "react-native-geolocation-service": "^5.3.0-beta.4",
2. Add following permission in Android Manifest file <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
3. Add following line in Android project-level build.gradle -> buildscript -> ext googlePlayServicesVersion = "17.0.0"
4. Add following lines in ‘ios/podfile’
   pod 'Permission-LocationAccuracy', :path => "#{permissions_path}/LocationAccuracy"
   pod 'Permission-LocationAlways', :path => "#{permissions_path}/LocationAlways"
   pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse"

5. Add following lines in ‘info.plist’
   <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
   <string>Location access</string>
   <key>NSLocationWhenInUseUsageDescription</key>
   <string>Locaion access</string>
   <key>NSLocationAlwaysUsageDescription</key>
   <string>Location access</string>

## Adding Scanner in Host App:

1. Add following packages in HostApp "react-native-camera": "^3.40.0","react-native-permissions": "^3.0.4",
2. Add following line in android/app/build.gradle in defaultConfig -> missingDimensionStrategy 'react-native-camera', ‘mlkit’
3. Add following lines in ‘ios/podfile’
   permissions_path = '../node_modules/react-native-permissions/ios'
   pod 'Permission-Camera', :path => "#{permissions_path}/Camera"

4. Add following lines in ‘info.plist’
   <key>NSCameraUsageDescription</key>
   <string>To scan the DataMatrix code and take pictures to report to product security team</string>

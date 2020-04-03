import Beacons from '@nois/react-native-beacons-manager';

const region = {
  identifier: 'identifier',
  uuid: 'uuid',
  // For limit the range of beacons that you can listen
  //   major: number,
  //   minor: number,
};

const Start = () => {
  Beacons.requestWhenInUseAuthorization();
  Beacons.startMonitoringForRegion(region);
  Beacons.startRangingBeaconsInRegion(region);
  Beacons.startUpdatingLocation();
};

export default Start;

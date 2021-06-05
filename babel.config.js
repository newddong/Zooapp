module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [[
		'module-resolver',{
			'root':["."],
			'alias':{
				"Root":"./src",
				"Screens":"./src/screens",
				"Asset":"./asset",
			}
		}
	], 'react-native-reanimated/plugin'],
};

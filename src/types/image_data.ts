// not react compatible? tried various things like adding types with npm and editing package.json - does not seem to work
// import { readFileSync } from 'fs';


// export const imageReadFile = (filename: string):ImageData[] => {

//     const output: ImageData[] = imageData
// 	    .map(row => row.split('|'))
// 	    .map(row => {
// 			return {
// 				image: require(row[0]), 
// 				alt: row[1], 
// 				license: row[2], 
// 				licenseURL: row[3],
// 				attributionName:row[4],
// 				attributionURL:row[5]
// 			}
// 		} ); 
// 		console.log(output);
// 		return output
// 	}

export interface ImageData {
    image: string;
	alt: string;
    license: string;
    licenseURL:string;
    attributionName?:string;
    attributionURL?:string;
}

// fake it for now
export const imageReadFile = (filename: string) : ImageData[] => [
	{
		image: require("../assets/images/texasstateprayer.jpg"),
		alt: "Chuck Norris after the Texas State Prayer Breakfast in Austin, Texas, Monday. Norris was the guest speaker for the day’s event. 05.04.2019",
		license: "public domain",
		licenseURL:"https://www.dvidshub.net/about/copyright",
		attributionName:undefined,
		attributionURL:undefined
	}, 
	{
		image: require("../assets/images/TheDeltaForce1986.jfif"),
		alt: "Chuck in Delta Force, 1986",
		license: "public domain",
		licenseURL:"https://creativecommons.org/licenses/by-sa/3.0",
		attributionName:"Yoni S.Hamenahem",
		attributionURL:"https://commons.wikimedia.org/wiki/File:Chuck_Norris,_The_Delta_Force_1986.jpg"
	}, 	{
		image: require("../assets/images/Norrishuckabee.jfif"),
		alt: "Chuck with republican predsidential nominee Mich Huckabee in 2008",
		license: "Wikimedia Commons",
		licenseURL:"https://creativecommons.org/licenses/by-sa/3.0",
		attributionName:"Craig Michaud",
		attributionURL:"https://en.wikipedia.org/wiki/User:Craig_Michaud"
	}, 	{
		image: require("../assets/images/The_Cutter_with_Chuck_Norris_in_2005._Elliott_killed_by_the_Martial_Arts_Legend_Chuck_Norris_in_a_action_packed_opening_shootout.jpg"),
		alt: "Chuck on the set of 'The Cutter', 2005",
		license: "Wikimedia Commons",
		licenseURL:"https://creativecommons.org/licenses/by-sa/4.0",
		attributionName:"Iamjimbacha",
		attributionURL:"https://commons.wikimedia.org/w/index.php?title=User:Iamjimbacha"
	}
];

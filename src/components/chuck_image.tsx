export interface ChuckImageProps {
	image: string;
    alt: string;
    license: string;
    licenseURL:string;
    attributionName?:string;
    attributionURL?:string;
}

export const ChuckImage: React.FC<ChuckImageProps> = ( {image, alt,license, licenseURL, attributionName, attributionURL }) => {
    return ( <>
    {console.log(image, alt,license, licenseURL, attributionName, attributionURL)}  
        <img src={image} alt={alt} height="300px"/>
        <p><small>Image License: <a href={licenseURL}>{license}</a>{attributionName && (<>, Attribution: <a href={attributionURL}>{attributionName}</a> </>)} </small></p>
    </> )
}
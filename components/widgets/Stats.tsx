export default function StatsComp(){
   return (
    <div>
        <h1 className="font-bold text-3xl collabo-txt-theme">Statistics</h1>
            <div className="flex items-center py-3 justify-around">
              <div className="flex items-center">
                <div className="bg-green-600 h-8 w-8"></div>
                <p className="ml-2">Good</p>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-600 h-8 w-8"></div>
                <p className="ml-2">Moderate</p>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-600 h-8 w-8"></div>
                <p className="ml-2">Unhealthy For the sensitive </p>
              </div>
              <div className="flex items-center">
                <div className="bg-red-600 h-8 w-8"></div>
                <p className="ml-2">Unhealthy</p>
              </div>
            </div>
            <div style={{height:"500px"}}>
            <iframe src="/html/index.html" style={{height:"100vh"}} width={"100%"}></iframe>
            <p className="text-center py-2">Statistics about Air Quality/Level Of Air Pollution </p>
            </div>
    </div>
   )
}
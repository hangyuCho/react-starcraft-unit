import React, {useState} from "react"
import ProtossUnitProps from "../../ProtossUnitProps"

const ProtossProbe = ({
  armor=10, 
  mineralPrice=50,
  gasPrice=0,
  height=1,
  width=1,
}: ProtossUnitProps) => {
  const [isShowDesc, setIsShowDesc] = useState(false)
  return (
    <div className="flex relative">
      <div className="border px-2 py-1 rounded-md" onMouseEnter={() => setIsShowDesc(true)} onMouseLeave={() => setIsShowDesc(false)}>
        Probe
      </div>
      {isShowDesc ? (
        <div className="text-indigo-300 absolute top-4 left-14">
          armor: {armor} <br/>
          mineralPrice: {mineralPrice} <br/>
          gasPrice: {gasPrice} <br/>
          height: {height} <br/>
          width: {width} <br/>
        </div>
      ) : null}
    </div>
  )
}

export default ProtossProbe

import { iconData } from "../Features/featuresdata";

const DynamicIconComponent = () => {
    return (
      <div>
        {iconData.map((item) => (
          <div key={item.id} style={{ margin: '10px' }}>
            <item.name size={item.size} color={item.color} />
          </div>
        ))}
      </div>
    );
  };
  
  export default DynamicIconComponent;
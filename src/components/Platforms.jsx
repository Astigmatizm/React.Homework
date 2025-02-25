import vsc from '../assets/VSCode.png'
import vs from '../assets/VS.png'
import pc from '../assets/pycharm.png'
import '../styles/Platforms.css'

const Platforms = () => {
    return (

        <div className="ide-container">

            <div className="ide-item">
                <img src={vsc} alt="VS Code" className="ide-icon" />
                <span className="VSC-text">Visual Studio Code</span>
            </div>

            <div className="ide-item">
                <img src={vs} alt="Visual Studio 2022" className="ide-icon" />
                <span className="VS-text">Visual Studio (2022)</span>
            </div>
            
            <div className="ide-item">
                <img src={pc} alt="PyCharm" className="ide-icon" />
                <span className="PC-text">Pycharm</span>
            </div>
        </div>
    );
  };
  
  export default Platforms;
  
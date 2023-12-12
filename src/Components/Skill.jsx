const Skill = () => {
    return(
        <div className="max-w-3xl mx-auto ">
             <p className="text-center text-3xl my-10 font-bold underline text-orange-400 "> My Skill </p>
              <div className="grid grid-cols-2 gap-10">
              <div>
                <h1>HTML <span className="text-orange-400">70%</span></h1>
              <progress className="progress progress-primary w-56" value='70' max="100"></progress>
              </div>
              <div>
                <h1>CSS <span className="text-orange-400">60%</span></h1>
              <progress className="progress progress-primary w-56" value='60' max="100"></progress>
              </div>
              <div>
                <h1>Tailwind <span className="text-orange-400">80%</span></h1>
              <progress className="progress progress-primary w-56" value='80' max="100"></progress>
              </div>
              <div>
                <h1>JS <span className="text-orange-400">50%</span></h1>
              <progress className="progress progress-primary w-56" value='50' max="100"></progress>
              </div>
              <div>
                <h1>React <span className="text-orange-400">60%</span></h1>
              <progress className="progress progress-primary w-56" value='60' max="100"></progress>
              </div>
              </div>
        </div>
    )}
export default Skill;
import React from 'react';

function AnalysisOutput( { analysisResult, lettersTotal, maxValue } ) {
	return (
		<div className='analysis-output'>
			<div className='analysis-content outputs'>
				<div className="analysis-info">
					<div className="cipher-freq">
            			<span>Calculated</span>
					</div>
					<div className="language-freq">
						<span>Expected</span>
					</div>
				</div>
				<div className='analysis-results'>
					{analysisResult.map(item => 
						<div 
							className='analysis-result'
							key={item[0]}>
							<div className='analysis-letter'>
								<span className=''>{item[0]} | {item[0].toLowerCase()}</span>
							</div>
							<div className='analysis-specs'>	
								<span className='analysis-spec'>CNT: {item[1]}</span>
							</div>
							<div className='analysis-specs'>	
								<span className='analysis-spec'>FRQ: {(item[1] / lettersTotal * 100).toFixed(1)}%</span>
							</div>
							<div>
								<div className='freq-indicator1' style={{width: `${item[1] / maxValue * 100}%`}}></div>
							</div>
						</div>)
					}
					{
						
					}
				</div>
			</div>
		</div>
	)
}

export default AnalysisOutput
//	definitions
class Config{
	constructor(_mbr_id){
		this.endpoint=process.env.DANDELION_DB_ENDPOINT
		this.rw_id=process.env.DANDELION_DB_RW
		this.rx_id=process.env.DANDELION_DB_RX
		this.members={
			id: process.env.DANDELION_DB_NAME,
			container: {
				id: process.env.DANDELION_DB_CONTAINER_NAME,
				partitionId: _mbr_id,
				coreId: _mbr_id.split('|')[1],	//	second object is core item id
			}
		}
		this.registration={
			id: process.env.DANDELION_DB_NAME,
			container: {
				id: process.env.DANDELION_REGISTRATION_DB_CONTAINER_NAME,
				partitionId: _mbr_id,
			}
		}
		this.shares={
			id: process.env.DANDELION_DB_NAME,
			container: {
				id: process.env.DANDELION_SHARES_DB_CONTAINER_NAME,
				partitionId: 'shareType',
			}
		}
		this.system={
			id: process.env.DANDELION_DB_NAME,
			container: {
				id: process.env.DANDELION_SYSTEM_DB_CONTAINER_NAME,
				partitionId: _mbr_id,
			}
		}
	}
}
//	exports
export default Config
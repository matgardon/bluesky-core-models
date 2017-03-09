namespace bluesky.core.models.customerOrder {

	/** UDRC information to handle UDRC values. */
	export interface IUdrcInfoDto extends IResourceBase {
		/** Unit name. */
		PriceableItemId: number;
		/** Unit value. */
		UdrcValue: number;
	}
}

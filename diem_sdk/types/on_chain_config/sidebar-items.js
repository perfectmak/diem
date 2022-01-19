initSidebarItems({"constant":[["DIEM_MAX_KNOWN_VERSION",""],["DIEM_VERSION_2",""],["DIEM_VERSION_3",""],["DIEM_VERSION_4",""],["ON_CHAIN_CONFIG_REGISTRY","State sync will panic if the value of any config in this registry is uninitialized"]],"enum":[["OnChainConsensusConfig","The on-chain consensus config, in order to be able to add fields, we use enum to wrap the actual struct."],["ReadWriteSetAnalysis",""]],"fn":[["config_address",""],["config_struct_tag",""],["default_access_path_for_config",""],["experimental_access_path_for_config",""],["new_epoch_event_key",""]],"struct":[["ConfigID","To register an on-chain config in Rust:"],["ConfigurationResource",""],["ConsensusConfigV1",""],["ConsensusConfigV2",""],["DiemVersion","Defines the version of Diem Validator software."],["OnChainConfigPayload",""],["ParallelExecutionConfig","Defines the operation status of parallel execution. If this `read_write_analysis_result` is not None VM will execute transactions in parallel."],["RegisteredCurrencies",""],["VMConfig","Defines all the on chain configuration data needed by VM."],["VMPublishingOption","Defines and holds the publishing policies for the VM. There are three possible configurations:"],["ValidatorSet",""]],"trait":[["ConfigStorage","Trait to be implemented by a storage type from which to read on-chain configs"],["OnChainConfig","Trait to be implemented by a Rust struct representation of an on-chain config that is stored in storage as a serialized byte array"]]});
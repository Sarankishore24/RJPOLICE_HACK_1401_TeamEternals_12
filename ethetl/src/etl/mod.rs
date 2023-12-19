// Copyright 2023 BohuTANG.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

mod batch;
mod normal;
mod pipeline;
#[allow(clippy::module_inception)]
mod stream;
mod worker;

pub use batch::Batch;
pub use normal::NormalEtl;
pub use pipeline::Pipeline;
pub use stream::StreamEtl;
pub use worker::Worker;

// The syncing status file.
pub static SYNCING_STATUS_FILE: &str = "mars_syncing_status.json";

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
struct SyncingStatus {
    start: usize,
    end: usize,
}
